import {RealEstatePropertyFilter} from "@real-estate-platform/common";

export interface PropertyFeaturePresentation {
  label: string;
  icon: string; // FontAwesome class name, e.g., 'fa-solid fa-car'
}

export const PROPERTY_FEATURE_ICONS: Record<keyof RealEstatePropertyFilter['features'], PropertyFeaturePresentation> = {
  hasElevator: { label: 'Elevator', icon: 'fa-solid fa-elevator' },
  hasParking: { label: 'Parking', icon: 'fa-solid fa-car' },
  hasBalcony: { label: 'Balcony', icon: 'fa-solid fa-building' },
  hasStorage: { label: 'Storage', icon: 'fa-solid fa-box' },
  hasSecurityRoom: { label: 'Mamad (Safe Room)', icon: 'fa-solid fa-shield-halved' },
  isAccessible: { label: 'Accessible', icon: 'fa-solid fa-wheelchair' },
  petsAllowed: { label: 'Pets Allowed', icon: 'fa-solid fa-dog' },
  furnished: { label: 'Furnished', icon: 'fa-solid fa-couch' },
  isNewProject: { label: 'New Project', icon: 'fa-solid fa-city' },
  hasAirConditioning: { label: 'Air Conditioning', icon: 'fa-solid fa-wind' },
  hasRenovation: { label: 'Renovated', icon: 'fa-solid fa-paint-roller' },
  hasGarden: { label: 'Garden', icon: 'fa-solid fa-seedling' },
};

