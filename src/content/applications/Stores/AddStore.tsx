import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from '@mui/material';
import enviarDatos from 'src/helpers/postAxios';

const TiendaFormulario = () => {
  const [success, setSuccess] = useState(true);
  const [ubicacion, setUbicacion] = useState({ lat: 0, lng: 0 });
  const [schedule, setSchedule] = useState([]);
  const handleUbicacionChange = ({ lat, lng }) => {
    setUbicacion({ lat, lng });
    setFormValues({
      ...formValues,
      'length_store': ubicacion.lat,
      'latitude_store':ubicacion.lng
    })
  };

  const [formValues, setFormValues] = useState({
    name_store: '',
    ruc: '',
    length_store:0,
    latitude_store:0,
    scheduleId: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/schedule')
      .then((response) => {
        setSchedule(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

 
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    enviarDatos('http://localhost:3001/store/new', formValues);
    setFormValues({
      name_store: '',
      ruc: '',
      length_store:0,
      latitude_store:0,
      scheduleId: ''
    })
    setSuccess(false);
      setTimeout(() => {
        setSuccess(true);
    }, 3000)
    
  };

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title="Nueva Tienda" />
        <Divider />
        <CardContent>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                fullWidth
                name="name_store"
                label="Tienda"
                style={{ width: 360 }}
                type="text"
                id="name_store"
                value={formValues.name_store}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                name="ruc"
                label="RUC"
                style={{ width: 360 }}
                type="text"
                id="ruc"
                value={formValues.ruc}
                onChange={handleInputChange}
              />

              <FormControl fullWidth sx={{ width: '60%', p: '2%' }}>
                <InputLabel id="scheduleId">Horario</InputLabel>
                <Select
                  labelId="scheduleId"
                  id="scheduleId"
                  type="text"
                  name="scheduleId"
                  label="scheduleId"
                  value={formValues.scheduleId}
                  onChange={handleInputChange}
                >
                  {schedule.map((e) => {
                    return (
                      <MenuItem value={e.id_schedule} key={e.id_schedule}>
                        {e.entry_time} - {e.departure_time}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyCYB8Oqb4bDWqT0OWh2VWwLYt98TIr2E04'
                  }}
                  defaultCenter={{ lat: -5.1957433, lng: -80.626726 }}
                  defaultZoom={20}
                  onClick={handleUbicacionChange}
                >
                  <Marker lat={ubicacion.lat} lng={ubicacion.lng} />
                </GoogleMapReact>
              </div>

              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={handleSubmit}
              >
                Registrar Nueva Tienda
              </Button>
            </div>
          </Box>
        </CardContent>
      </Card>
      {success ? null : (
          <Stack sx={{ width: '100%', mt: '2%' }} spacing={2}>
            <Alert severity="success">
              Nueva tienda registrada.
            </Alert>
          </Stack>
        )}
    </Grid>
  );
};

const Marker = ({ lat, lng }) => (
  <div style={{ color: 'red', fontSize: '20px' }}>📍</div>
);

export default TiendaFormulario;

/*
import { useState, useRef } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import GoogleMapReact from 'google-map-react';

const AddEmployee = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const handleMapClick = ({ lat, lng }) => {
    setMarkers([...markers, { lat, lng }]);
    console.log(markers);
  };

  const Marker = ({ lat, lng }) => (
    <div style={{ color: 'red', fontWeight: 'bold' }}>📍</div>
  );

  const submitStore = () => {
    
    console.log(markers);
  };

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title="Nueva Tienda" />
        <Divider />
        <CardContent>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
          >
            <div>

                <TextField
                  fullWidth
                  id="tienda"
                  name="tienda"
                  label="Tienda"
                  style={{ width: 360 }}
                />
                <TextField
                  fullWidth
                  id="ruc"
                  name="ruc"
                  label="Ruc"
                  style={{ width: 400 }}
                />
                <FormControl fullWidth sx={{ width: '60%', p: '2%' }}>
                  <InputLabel id="demo-simple-select-label">
                    Horario
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    type="text"
                    name="employeeId"
                    label="Horario"
                  >
                    <MenuItem value={1}>8am - 8pm</MenuItem>
                    <MenuItem value={2}>9am - 9pm</MenuItem>
                    <MenuItem value={3}>10am - 10pm</MenuItem>
                  </Select>
                </FormControl>
                <div style={{ height: '50vh', width: '100%', marginBottom: '10px' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: 'AIzaSyCYB8Oqb4bDWqT0OWh2VWwLYt98TIr2E04'
                    }}
                    defaultCenter={{ lat: -5.1957433, lng: -80.626726 }}
                    defaultZoom={20}
                    yesIWantToUseGoogleMapApiInternals
                    ref={mapRef}
                    onClick={handleMapClick}
                  >
                    {markers.map((marker, index) => (
                      <Marker key={index} lat={marker.lat} lng={marker.lng} />
                    ))}
                  </GoogleMapReact>
                </div>

                <Button color="primary" variant="contained" fullWidth onClick={submitStore}>
                  Registrar Nueva Tienda
                </Button>

            </div>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AddEmployee;







*/
