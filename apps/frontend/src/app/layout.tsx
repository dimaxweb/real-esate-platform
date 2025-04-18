import Header from './Header';
import Footer from './Footer';
import { Container, CssBaseline } from '@mui/material';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body>
    <CssBaseline />
    <Header />
    <Container maxWidth="lg" sx={{ my: 4 }}>
      {children}
    </Container>
    <Footer />
    </body>
    </html>
  );
}
