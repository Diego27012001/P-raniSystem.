import { Card, Grid, styled, Avatar, CardContent } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

function AccountBalance() {
  const [employee, setEmployee] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const localTime = new Date(time.getTime() + -180 * 60 * 1000);

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
            height: '100px',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around'
          }}
        >
          <Card
            sx={{
              background: '#ff7961',
              width: '20%'
            }}
          >
            
            <i className="fa-regular fa-users-line"></i>
          </Card>

          <Card
            sx={{
              background: '#ff7961',
              height: '10px',
              width: '20%'
            }}
          ></Card>

          <Card
            sx={{
              background: '#ff7961',
              height: '10px',
              width: '20%'
            }}
          ></Card>
        </CardContent>
      </Grid>
    </Card>
  );
}

export default AccountBalance;
