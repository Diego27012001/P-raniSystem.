import { Typography,  Grid } from '@mui/material';


function PageHeader() {

  const objetoRecuperadoString = localStorage.getItem('user');
  const user = JSON.parse(objetoRecuperadoString);
  return (
    <>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Bienvenido {user.nameuser} {user.lastnameuser}
        </Typography>
      </Grid>
      
    </>   
    
  );
}

export default PageHeader;

/*

      <Grid item>
       
          <Button
          
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}

          
        >
          Agregar Tienda
        </Button>
        
      </Grid>*/
