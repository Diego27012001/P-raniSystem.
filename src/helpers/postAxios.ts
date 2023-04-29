import axios from 'axios';

const enviarDatos = async (endpoint, datos) => {
  try {
    const respuesta = await axios.post(endpoint, datos);
    return respuesta.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export default enviarDatos;