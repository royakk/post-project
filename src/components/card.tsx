import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
interface CardProps{
    children?: React.ReactNode;
}
export const CardComponent = ({children}: CardProps) => {
  return (
    <Card sx={{ minWidth: 275 ,height:275}}>
    <CardContent>
      {children}
    </CardContent>
    
  </Card>
  )
}
