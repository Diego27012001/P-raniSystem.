import {
  Alert,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageHeader from './PageHeader';
import {
  getDate,
  getTime,
  getTimeExtra,
  getStateTime
} from '../../../helpers/fecha';
import postAxios from 'src/helpers/postAxios';

const data = (user) => {
  const markedDate = getDate();
  const markedHour = getTime();
  const timeExtra = getTimeExtra('08:00 AM', getTime());
  const status_marked = getStateTime('08:00', getTime());
  console.log(user);
  const d = {
    date: markedDate,
    entry_time: markedHour,
    departure_time: '18:00',
    late_time: timeExtra,
    status_marked: status_marked,
    extraTime: '00:00',
    employeeId: user.user_id
  }
  return d;
};

const Assist = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(true);
  const [success, setSuccess] = useState(true)
  const objeto = localStorage.getItem('user');
  const user = JSON.parse(objeto);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => console.log(error)
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);

  const handle = () => {
    const centro = new google.maps.LatLng(-5.195907, -80.62701);
    const radio = 1000; // Radio en metros
    const circulo = new google.maps.Circle({
      center: centro,
      radius: radio
    });

    const punto = new google.maps.LatLng(latitude, longitude);
    const estaDentro = circulo.getBounds().contains(punto);

    if (!estaDentro) {
      const datos = data(user);
      
      const endpoint1 = 'http://localhost:3001/marked/new';

      postAxios(endpoint1, datos).then((respuesta) => {
        console.log(respuesta);
      });
      setSuccess(false);
      setTimeout(() => {
        setSuccess(true);
      }, 3000);
    } else {
      setError(estaDentro);
      setTimeout(() => {
        setError(true);
      }, 3000);
    }
  };

  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Card sx={{ maxWidth: 345, margin: 'auto' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://i.pinimg.com/564x/55/1f/ff/551fff636303fb8a696c213736ddc09e.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.nameuser} {user.lastnameuser}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tiena Pirani 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              08:00 AM - 08:00 PM
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handle}>
            Marcar mi asistencia
          </Button>
        </CardActions>

        {error ? null : (
          <Stack sx={{ width: '100%', mt: '2%' }} spacing={2}>
            <Alert severity="error">
              No se encuentra dentro del área de trabajo.
            </Alert>
          </Stack>
        )}

        {success ? null : (
          <Stack sx={{ width: '100%', mt: '2%' }} spacing={2}>
            <Alert severity="success">Su asistencia ha sido registrada.</Alert>
          </Stack>
        )}
      </Card>
    </>
  );
};

export default Assist;

/*
 
    // Una vez que la biblioteca se ha cargado correctamente, se puede utilizar la función
    // `google.maps.geometry.poly.containsLocation()` sin problemas
    console.log(latitude,longitude)
    var location = new google.maps.LatLng(latitude, longitude);
    var polygon = new google.maps.Polygon({
      paths: [
        
        new google.maps.LatLng(-5.3064342, -80.7180607)
      ]
    });
    var isInPolygon = google.maps.geometry.poly.containsLocation(
      location,
      polygon
    );
    console.log(isInPolygon); // true



*/
