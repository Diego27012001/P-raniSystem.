import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Button
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const EmpleadoForm = () => {
  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/employee')
      .then((response) => {
        setEmployee(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleOpen = (user_id) => {
    setOpen(true);

    const valor = employee.find((e) => user_id==e.user_id)
    setValue(valor)
    console.log(valor)
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      {employee.map((e) => {
        return (
          <>
            <Card
              sx={{ margin: '50px auto', width: '200px' }}
              key={e.user_id}
              onClick={() => handleOpen(e.user_id)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  width={'10px'}
                  src={`http://localhost:3001/employee/photo/${e.user_id}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {e.namuser} {e.lastnameuser}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    DNI: {e.dni}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    TELEFONO: {e.phone}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.UserType.worth}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            
          </>
        );
      })}
    </Grid>
  );
};

export default EmpleadoForm;



/*
<Modal
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500
              }}
            >
              <Fade in={open}>
                <CardActionArea sx={{ width: '60%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    width={'10px'}
                    src={`http://localhost:3001/employee/photo/${e.user_id}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                    ></Typography>
                    <Typography variant="body2" color="text.secondary">
                      DNI: {e.dni}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      TELEFONO: {e.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {e.UserType.worth}
                    </Typography>
                  </CardContent>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, width: '20%' }}
                  >
                    Eliminar empleado
                  </Button>
                </CardActionArea>
              </Fade>
            </Modal>

*/