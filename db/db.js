import mongoose from 'mongoose';

// La conexión a la BD está definida en el archivo.env el cual no se subirá a GitHub.

const conectarBD = async () => {
  return await mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log("Conexión Exitosa.");
      })
      .catch((e) => {
        console.error("Error en la conexión.", e);
      });
};

export default conectarBD;

