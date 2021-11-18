import { connect } from 'mongoose';

// Variable para esconder la BD
const conectarBD = async () => {
  return await connect(
      process.env.DATABASE_URL
      )
      .then(() => {
        console.log("Conexión Exitosa.");
      })
      .catch((e) => {
        console.error("Error en la conexión.", e);
      });
};

export default conectarBD;