import { connect } from 'mongoose';

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