import { connect } from 'mongoose';

const conectarBD = async () => {
    return await connect(console.log("Holi"))
      .then(() => {
        console.log("Conexión Exitosa.");
      })
      .catch((e) => {
        console.error("Error en la conexión.", e);
      });
};

export default conectarBD;