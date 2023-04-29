import { Typography,  Grid } from '@mui/material';


function PageHeader() {
  return (
    <>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Bienvenido Eder
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
