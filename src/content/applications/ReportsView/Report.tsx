
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';



const columns: GridColDef[] = [
  { field: 'user_id', headerName: 'ID', width: 100 },
  {
    field: 'nameuser',
    headerName: 'Trabajador',
    width: 280,
    align:'center',
  },
  {
    field: 'name_store',
    headerName: 'Tienda',
    width: 280,
    align:'center',
  },
  {
    field: 'worth',
    headerName: 'Estado del Trabajador',
    width: 200,
    align:'center',
    valueGetter: (params) => params.value ?? 'ACTIVO', 
  }
];



const Reports = () => {

  const [data, setData] = useState([]);
  let nombre ="s"
  const rows = data.map((row) => {
    return {
      user_id: row.user_id,
      name_store: row.Store ? row.Store.name_store : '',
      nameuser: row.nameuser
    };
  });


  useEffect(() => {
    axios.get('http://localhost:3001/employee')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>

      {
        nombre? 
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        getRowId={(row) => row.user_id}
        onCellClick={ (data) => nombre = data.row.user_id }
      />
      :
      <div>
        {nombre}
      </div>
      }
     
      
    </Box>
  );
}

export default Reports;