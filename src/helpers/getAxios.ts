import axios from 'axios';


const recibirDatos = async(url) =>{

  return axios.get(url)
    .then(response => {
      console.log(response.data)
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
}

export default recibirDatos;