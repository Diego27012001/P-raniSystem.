import { Card, Grid, styled, Avatar, CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Example from './Grafico/Grafico'

function AccountBalance() {
  const [employee, setEmployee] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

 
  useEffect(() => {
    axios
      .get('http://localhost:3001/employee')
      .then((response) => {
        console.log(response.data.length);
        setEmployee(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Card sx={{ width: '100%' }}>
      <Grid spacing={0} container>
        <CardContent
          sx={{
            height: '500px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          
            <Example />
         
        </CardContent>
      </Grid>
    </Card>
  );
}

export default AccountBalance;
