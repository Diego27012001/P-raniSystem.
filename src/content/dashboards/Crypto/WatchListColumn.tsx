import {
  Card,
  Typography,
  Grid,
  CardActionArea,
  CardMedia,
  CardContent
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

function WatchListColumn() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/store')
      .then((response) => {
        setStore(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      {store.map((e) => {
        return (
          <Card sx={{ maxWidth: 345, margin: '50px auto' }} key={e.id_store}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="500"
                width={'500px'}
                image="https://cdn.pixabay.com/photo/2014/07/10/11/19/tuba-388989_960_720.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.name_store}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.ruc}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.Schedule.entry_time} AM - {e.Schedule.departure_time} PM
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Grid>
  );
}

export default WatchListColumn;
