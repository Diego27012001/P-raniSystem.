import { Typography, Button, Grid } from '@mui/material';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader({setOpcion}) {

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Personal
        </Typography>
        <Typography variant="subtitle2">
           Personal laboral de la empresa Pirani
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={()=> setOpcion(false)}
        >
          Agregar Trabajador
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
