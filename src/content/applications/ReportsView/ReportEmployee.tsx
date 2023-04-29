import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';



const columns: GridColDef[] = [
  { field: 'id_marked', headerName: 'ID', width: 100 },
  {
    field: 'date',
    headerName: 'Fecha',
    width: 280,
    align: 'center',
  },
  {
    field: 'entry_time',
    headerName: 'Hora de Entrada',
    width: 280,
    align: 'center'
  },
  {
    field: 'departure_time',
    headerName: 'Hora de Salida',
    width: 200,
    align: 'center'
  },
  {
    field: 'status_marked',
    headerName: 'Asistencia',
    width: 200,
    align: 'center'
  },
  {
    field: 'late_time',
    headerName: 'Tiempo de Tardanza',
    width: 200,
    align: 'center'
  },

];



const ReportEmployee = () => {
  
  const id = 1;
  const [data, setData] = useState([]);



  useEffect(() => {
    axios.get('http://localhost:3001/marked')
      .then(response => {
      
        setData(response.data)
        console.log(data)
        const d = response.data.find( elem => elem.userId == id)
        console.log(d); 
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>

       
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        getRowId={(row) => row.id_marked}
      />
      
     
      
    </Box>
  );
}

export default ReportEmployee;