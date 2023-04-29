/*import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { createUser, modifyUser } from 'src/redux/states/user';


function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();

const SignIn = () => {
  const dispatcher = useDispatch();
  const  [data,setData] = React.useState([]);
  const [login, setLogin] = React.useState(true);

  const validate = (user) =>{
    console.log(user)
    dispatcher(createUser({
      nameuser: user.nameuser
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const da = new FormData(event.currentTarget);
    const user = da.get('usuario');
    const password = da.get('contraseña');

    await axios
      .get('http://localhost:3001/employee')
      .then((response) => {
        const userFind = response.data.find(
          (e) => e.dni === user && e.dni === password
        );
        setData(userFind);
        window.location.href = `http://localhost:3000/dashboards/crypto?id=${userFind.user_id}`;
      })
      .catch((error) => {
        console.log(error);
      });

      
  };

  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Tienda Pirani
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Usuario"
              name="usuario"
              autoComplete="usuario"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contraseña"
              label="contraseña"
              type="password"
              id="constraseña"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: '100%', mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Webcam from 'react-webcam';
import { Card } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import * as faceapi from 'face-api.js';
import ruta from '../../img/fotoLogin.png';

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down('sm')]: {
      display: 'none' // Oculta la card cuando la pantalla es menor de 600px
    }
  },
  Webcam: {
    [theme.breakpoints.down('sm')]: {
      width: '100%' // Oculta la card cuando la pantalla es menor de 600px
    }
  }
}));


export default function SignUp() {



  const classes = useStyles();
  const webcamRef = React.useRef(null);
  const [foto, setFoto] = React.useState(null);
 
  // Función para capturar la foto
  const capturarFoto = () => {
    // Obtener la imagen de la cámara
    const imagen = webcamRef.current.getScreenshot();

    // Establecer la imagen en el estado
    setFoto(imagen); 
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const img = document.getElementById('fotoPrueba')
    //const input = await faceapi.bufferToImage(img);
    
    console.log(img);

      console.log(foto)
      const detector = async() =>{
        //const result = await faceapi.detectAllFaces(img,new faceapi.SsdMobilenetv1Options());
        //console.log(result);
      }
      detector() 
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '100%'
      }}
    >
      
      <Card
        sx={{
          width: '50%',
          margin: '20px 0'
        }}
      >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Tienda Pirani 2023
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Identificarme
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Trabajando para mejorar.
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <div style={{ width: '100%' }}>
 
              <div
                style={{
                  width: '80%',
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '60px'
                }}
              >
                {foto ? null : (
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    style={{ width: '60%', margin: '0px auto' }}
                    className={classes.Webcam}
                  />
                )}
              </div>


     
              <div style={{ width: '40%', margin: 'auto' }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, width: '100%' }}
                  onClick={capturarFoto}
                >
                  Capturar Foto
                </Button>
              </div>

             
              {foto && <img id="entradaFoto" src={foto} alt="Foto capturada" />}
              <img id='fotoPrueba' src={ruta} />
            </div>
          </Box>
        </Box>
      </Card>
    </Card>
  );
}
*/

import { useState, useEffect, useRef } from 'react';
import * as faceapi from 'face-api.js';
import axios from 'axios';
import { Avatar, Button, Card, Typography } from '@mui/material';

const Login = () => {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/employee')
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const videoHeight = 480;
  const videoWidth = 640;
  const [initializing, setInitializing] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = process.env.PUBLIC_URL + '/models';
      setInitializing(true);
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
      ]).then(startVideo);
    };
    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {}
      })
      .then((stream) => (videoRef.current.srcObject = stream));
  };

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      if (initializing) {
        setInitializing(false);
      }
      canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
        videoRef.current
      );
      const displaySize = {
        width: videoWidth,
        height: videoHeight
      };

      faceapi.matchDimensions(canvasRef.current, displaySize);
      /*
      const faceDescriptor = await faceapi
        .detectSingleFace(
          videoRef.current,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceLandmarks()
        .withFaceDescriptor();

      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      canvasRef.current
        .getContext('2d')
        .clearRect(0, 0, videoWidth, videoHeight);
      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
      //faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);*/
    }, 100);
  };

  const comparar = () => {
    const fotos = document.getElementsByClassName('photo');
    const imagenes = [];
    for (let index = 0; index < fotos.length; index++) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = fotos[index].getAttribute('src');
      imagenes.push(img);
    }
    return imagenes;
  };
  return (
    <Card
      sx={{
        margin: '5%'
      }}
    >
      <div
        style={{
          margin: '10% auto'
        }}
      >
        <Typography component="h1" variant="h5" align="center">
          Tienda Pirani
        </Typography>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            height={videoHeight}
            width={videoWidth}
            onPlay={handleVideoOnPlay}
            style={{
              margin: '10% auto',
              width: '80%'
            }}
          />
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              margin: '80% auto'
            }}
          />
        </div>

        <div>
          {employee.map((e) => {
            return (
              <div key={e.user_id}>
                <img
                  className="photo"
                  key={e.user_id}
                  src={`http://localhost:3001/employee/photo/${e.user_id}`}
                  style={{
                    display: 'none'
                  }}
                />
              </div>
            );
          })}
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5%'
          }}
        >
        
          <Button
            style={{
              width: '40%'
            }}
            className="suceess"
            onClick={async () => {
              console.log('k')
              const faceDescriptor = await faceapi
                .detectSingleFace(
                  videoRef.current,
                  new faceapi.TinyFaceDetectorOptions()
                )
                .withFaceLandmarks()
                .withFaceDescriptor();
                
              const faceMatcher = new faceapi.FaceMatcher(
                faceDescriptor.descriptor,
                0.5
              );
              console.log(faceDescriptor);

              const imgs = comparar();

              for (let index = 0; index < imgs.length; index++) {
                console.log(imgs[index]);
                const foto_login = await faceapi
                  .detectSingleFace(imgs[index])
                  .withFaceLandmarks()
                  .withFaceDescriptor();

                if (faceMatcher === undefined) {
                  console.log('Rostro no detectado')
                } else {
                  const bestMatch = faceMatcher.findBestMatch(
                    foto_login.descriptor
                  );

                  if (bestMatch.label === 'person 1') {
                    // El rostro detectado coincide con la persona1
                    console.log(
                      'El rostro detectado coincide con la persona, permiso concedido'
                    );
                  } else {
                    // El rostro detectado no coincide con ninguna persona registrada
                    console.log(
                      'El rostro detectado no coincide con ninguna persona registrada, permiso denegado'
                    );
                  }
                }
              }

              /*
          
          console.log(foto_login);
          console.log(comparar());
          console.log(faceMatcher);
          
          */
            }}
          >
            {' '}
            INGRESAR{' '}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Login;
