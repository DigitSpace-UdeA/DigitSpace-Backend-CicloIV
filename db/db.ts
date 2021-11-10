import { connect } from 'mongoose';

const conectarBD = async () => {
  return await connect(
      'mongodb+srv://digitspace:digitspace@proyecto-final-cicloiv.m1h2k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
      .then(() => {
        console.log("Conexión Exitosa.");
      })
      .catch((e) => {
        console.error("Error en la conexión.", e);
      });
};

export default conectarBD;