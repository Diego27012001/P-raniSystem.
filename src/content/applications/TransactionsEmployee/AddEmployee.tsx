import {
  Grid,
  Card,
  CardHeader,
  Divider,
  CardContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Stack,
  Alert
} from '@mui/material';
import axios from 'axios';

import { useEffect, useState } from 'react';

const EmpleadoForm = () => {
  const [typeUser, setTypeUser] = useState([]);
  const [store, setStore] = useState([]);
  const [success, setSuccess] = useState(true);
  useEffect(() => {
    axios
      .get('http://localhost:3001/type_user')
      .then((response) => {
        setTypeUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:3001/store')
      .then((response) => {
        setStore(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [photo, setPhoto] = useState(null);
  const [formValues, setFormValues] = useState({
    nameuser: '',
    lastnameuser: '',
    phone: '',
    dni: '',
    email: '',
    typeId: '',
    storeId: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('nameuser', formValues.nameuser);
    formData.append('lastnameuser', formValues.lastnameuser);
    formData.append('phone', formValues.phone);
    formData.append('dni', formValues.dni);
    formData.append('email', formValues.email);
    formData.append('typeId', formValues.typeId);
    formData.append('storeId', formValues.storeId);
    formData.append('photo', photo);

    axios.post('http://localhost:3001/employee/new', formData)
      .then((res) => {
        setFormValues({
          nameuser: '',
          lastnameuser: '',
          phone: '',
          dni: '',
          email: '',
          typeId: '',
          storeId: ''
        });

        setSuccess(false);
        setTimeout(() => {
          setSuccess(true);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title="Registro Personal" />
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
                name="dni"
                label="DNI"
                style={{ width: 260, display: 'block' }}
                type="text"
                id="dni"
                value={formValues.dni}
                onChange={handleInputChange}
              />

              <TextField
                fullWidth
                name="nameuser"
                label="Nombre"
                style={{ width: 260 }}
                type="text"
                id="nameuser"
                value={formValues.nameuser}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                name="lastnameuser"
                label="Apellido"
                style={{ width: 260 }}
                type="text"
                id="lastnameuser"
                value={formValues.lastnameuser}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                name="phone"
                label="Celular"
                style={{ width: 260 }}
                type="text"
                id="phone"
                value={formValues.phone}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                name="email"
                label="Email"
                style={{ width: 260 }}
                type="text"
                id="email"
                value={formValues.email}
                onChange={handleInputChange}
              />

              <FormControl fullWidth sx={{ width: '40%', p: '2%' }}>
                <InputLabel id="typeId">Rol</InputLabel>
                <Select
                  labelId="typeId"
                  id="typeId"
                  type="text"
                  name="typeId"
                  label="typeId"
                  value={formValues.typeId}
                  onChange={handleInputChange}
                >
                  {typeUser.map((e) => {
                    return (
                      <MenuItem value={e.id_user_type} key={e.id_user_type}>
                        {e.worth}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ width: '40%', p: '2%' }}>
                <InputLabel id="storeId">Tienda</InputLabel>
                <Select
                  labelId="storeId"
                  id="storeId"
                  type="text"
                  name="storeId"
                  label="storeId"
                  onChange={handleInputChange}
                  value={formValues.storeId}
                >
                  {store.map((e) => {
                    return (
                      <MenuItem value={e.id_store} key={e.id_store}>
                        {e.name_store}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              <Card sx={{ margin: '10px', padding: '10px', width: '40%' }}>
                <label>Photo:</label>
                <input
                  type="file"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  required
                />
              </Card>

              <Button
                color="primary"
                variant="contained"
                fullWidth
                onClick={handleSubmit}
              >
                Registrar Nuevo Trabajador
              </Button>
            </div>
          </Box>
        </CardContent>
      </Card>
      {success ? null : (
        <Stack sx={{ width: '100%', mt: '2%' }} spacing={2}>
          <Alert severity="success">Trabajador registrado.</Alert>
        </Stack>
      )}
    </Grid>
  );
};

export default EmpleadoForm;

/*

 // Aquí puedes enviar los datos del empleado a tu servidor o base de datos}
    enviarDatos('http://localhost:3001/employee/new', formValues);
    setFormValues({
      nameuser: '',
      lastnameuser: '',
      phone: '',
      dni: '',
      email: '',
      typeId: '',
      storeId: ''
    });
    setSuccess(false);
    setTimeout(() => {
      setSuccess(true);
    }, 3000);

*/
