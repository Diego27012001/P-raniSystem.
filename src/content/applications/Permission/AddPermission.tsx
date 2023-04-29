import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { date } from 'yup/lib/locale';
import DataCalendar from './DataCalendar';
import axios from 'axios';

function App() {
  // Estado para almacenar los permisos
  const [permission, setPermission] = useState({
    day_permission: new Date(),
    reason: '',
    employeeId: ''
  });

  const [data, setData] = useState([]);
  // Función para manejar el cambio de estado de los permisos
  function handlePermissionChange(event) {
    const { name, value } = event.target;
    setPermission((prevPermission) => ({
      ...prevPermission,
      [name]: value
    }));
  }

  // Función para manejar el cambio de fecha
  function handleDateChange(date) {
    setPermission((prevPermission) => ({
      ...prevPermission,
      day_permission: date
    }));
  }

  // Función para enviar el formulario a la API
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3001/permission/new',
        permission
      );
      setPermission({
        day_permission: new Date(),
        reason: '',
        employeeId: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/employee')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Renderizado del componente
  return (
    <div>
      <h2>Solicitud de Permiso</h2>
      <form onSubmit={handleSubmit}>
        <Box sx={{ minWidth: 100, p: 2 }}>
          <DataCalendar fecha={date} setFecha={handleDateChange} />

          <TextField
            label="Motivo"
            variant="outlined"
            type="text"
            name="reason"
            value={permission.reason}
            onChange={handlePermissionChange}
            sx={{ mt: 3, width: '50%' }}
          />

          <FormControl fullWidth sx={{ width: '60%' , pt:'10px' }}>
            <InputLabel id="employeeId">Empleado</InputLabel>
            <Select
              labelId="employeeId"
              id="employeeId"
              type="text"
              name="employeeId"
              label="employeeId"
              onChange={handlePermissionChange}
              value={permission.employeeId}
            >
              {data.map((e) => {
                return (
                  <MenuItem value={e.user_id} key={e.user_id}>
                    {e.nameuser} {e.lastnameuser}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Button type="submit" sx={{ mt: { xs: 2, md: 2 } }} variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default App;
