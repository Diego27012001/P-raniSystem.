import { Typography, Button, Grid } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader({estado,setEstado}) {

  const handleClick = ()=> {
    setEstado(false);
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Tiendas
        </Typography>
        <Typography variant="subtitle2">
           Tiendas en la ciudad de Piura
        </Typography>
      </Grid>
      <Grid item>
        {
          estado?
          <Button
          
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={handleClick}
          
        >
          Agregar Tienda
        </Button>:
        null
        }
        
      </Grid>
    </Grid>
  );
}

export default PageHeader;
