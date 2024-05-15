import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export const Footer = () => {
    return (
      <Box sx={{ bgcolor: 'black', color: '#fff', py: 3 }}>
      <Box textAlign="center" mt={2}>
        <Typography variant="body2">
          Todos los derechos reservados © 2024
        </Typography>
      </Box>
    </Box>
    )
  }