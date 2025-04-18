'use client';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 4, p: 2, textAlign: 'center', bgcolor: 'grey.200' }}>
      <Typography variant="body2">© {new Date().getFullYear()} Nikom Real Estate</Typography>
    </Box>
  );
}
