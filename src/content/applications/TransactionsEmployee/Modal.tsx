import {
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Modal,
    Backdrop,
    Fade,
    Button
  } from '@mui/material';
  import axios from 'axios';
  import { useEffect, useState } from 'react';
  
  const ModalEmployee = () => {
    const [open, setOpen] = useState(false);
    const [employee, setEmployee] = useState([]);
  
    useEffect(() => {
      axios
        .get('http://localhost:3001/employee')
        .then((response) => {
          setEmployee(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (

              
        <Modal
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <CardActionArea sx={{ width: '60%' }}>
              <CardMedia
                component="img"
                height="200"
                width={'10px'}
                src={`http://localhost:3001/employee/photo/`}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                ></Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
                <Typography variant="body2" color="text.secondary"></Typography>
              </CardContent>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, width: '20%' }}
              >
                Eliminar empleado
              </Button>
            </CardActionArea>
          </Fade>
        </Modal>
    
    );
  };
  
  export default ModalEmployee;