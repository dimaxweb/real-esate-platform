'use client';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Real Estate Finder</Typography>
        <Box flexGrow={1} />
        {/* Add nav or buttons here */}
      </Toolbar>
    </AppBar>
  );
}
