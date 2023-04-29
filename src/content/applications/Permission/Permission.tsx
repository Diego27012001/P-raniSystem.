
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';


const columns: GridColDef[] = [
  { field: 'id_permission', headerName: 'ID', width: 100 },
  {
    field: 'lastnameuser',
    headerName: 'Trabajador',
    width: 280,
    align:'center',
    valueGetter: (params) => params.value ?? 'Danae Castro Fernandez',
  },
  {
    field: 'day_permission',
    headerName: 'Dia del Permiso',
    width: 280,
    align:'center',
  },
  {
    field: 'reason',
    headerName: 'Razón del Permiso',
    width: 280,
    align:'center',
  },
  {
    field: '',
    headerName: 'Estado del Permiso',
    width: 200,
    align:'center',
    valueGetter: (params) => params.value ?? 'ACTIVO', 
  }
];



export default function DataGridDemo() {

  const [data, setData] = useState([]);


  const rows = data.map((row) => {
    return {
      id_permission: row.id_permission,
      nameuser: row.Employee.nameuser ? row.Employee.lastnameuser : '',
      day_permission: row.day_permission,
      reason: row.reason,
      
    };
  });

  
  useEffect(() => {
    axios.get('http://localhost:3001/permission')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        getRowId={(row) => row.id_permission}
      />
    </Box>
  );
}

/*
,
  {
    field: 'age',
    headerName: 'Estado permiso',
    type: 'number',
    width: 250,
    editable: true,
    headerAlign:'center',
  },
  {
    field: 'Full name',
    headerName: 'Motivo',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    headerAlign:'center',
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  */