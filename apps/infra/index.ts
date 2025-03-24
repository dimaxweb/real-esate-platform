// apps/infra/index.ts
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as eks from "@pulumi/eks";
import * as k8s from "@pulumi/kubernetes";

// Config
const config = new pulumi.Config();
const clusterName = config.get("clusterName") || "real-estate-eks";
const region = aws.config.region || "us-east-1";

// IAM role for EKS
const eksRole = new aws.iam.Role("eksClusterRole", {
  assumeRolePolicy: aws.iam.assumeRolePolicyForPrincipal({
    Service: "eks.amazonaws.com",
  }),
});

new aws.iam.RolePolicyAttachment("eksClusterRole-AmazonEKSClusterPolicy", {
  role: eksRole.name,
  policyArn: "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy",
});

new aws.iam.RolePolicyAttachment("eksClusterRole-AmazonEKSServicePolicy", {
  role: eksRole.name,
  policyArn: "arn:aws:iam::aws:policy/AmazonEKSServicePolicy",
});

// VPC
const vpc = new aws.ec2.Vpc("eks-vpc", {
  cidrBlock: "10.0.0.0/16",
  enableDnsSupport: true,
  enableDnsHostnames: true,
});

const subnet = new aws.ec2.Subnet("eks-subnet", {
  vpcId: vpc.id,
  cidrBlock: "10.0.1.0/24",
  availabilityZone: `${region}a`,
});

// EKS Cluster
const cluster = new eks.Cluster(clusterName, {
  vpcId: vpc.id,
  subnetIds: [subnet.id],
  skipDefaultNodeGroup: false,
  nodeGroupOptions: {
    desiredCapacity: 2,
    maxSize: 3,
    minSize: 1,
  },
  providerCredentialOpts: {
    profileName: aws.config.profile,
  },
});

// Export Kubeconfig
export const kubeconfig = cluster.kubeconfig;

// Deploy Helm charts
const backendChart = new k8s.helm.v3.Chart("backend", {
  path: "./charts/backend",
  values: {
    image: {
      repository: "<your-ecr-url>/backend",
      tag: "latest"
    },
    ingress: {
      enabled: true,
      host: "backend.yourdomain.com"
    }
  },
}, { provider: cluster.provider });

const frontendChart = new k8s.helm.v3.Chart("frontend", {
  path: "./charts/frontend",
  values: {
    image: {
      repository: "<your-ecr-url>/frontend",
      tag: "latest"
    },
    ingress: {
      enabled: true,
      host: "frontend.yourdomain.com"
    }
  },
}, { provider: cluster.provider });
