import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface NavbarProps{
    children?: React.ReactNode;
    title?:string
}

export default function Navbar({children,title}:NavbarProps) {
  return (
    <Box sx={{ flexGrow: 1,mb:2 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           {title}
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
