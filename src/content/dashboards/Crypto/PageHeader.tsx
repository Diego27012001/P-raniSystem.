import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Bienvenido
        </Typography>
        <Typography variant="subtitle2">
          Administracion tienda Pirani!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
