import conectarBD from "./db/db";
import { UserModel } from "./models/users";
import { Enum_Rol } from "./models/enum";

const main = async () => {
    await conectarBD();

    // Crear un Usuario
    await UserModel.create({
        nombre: "David Andrés",
        apellido: "González Medina",
        identificacion: "987654321",
        correo: "prueba@gmail.com",
        rol: Enum_Rol.estudiante,
    }).then((u) => {
        console.log("Usuario creado exitósamente: ", u);
    }).catch((e) => {
        console.error("Error creando el usuario: ", e);
    });

    // Consultar Usuarios
    /*
    await UserModel.find()
      .then((u) => {
        console.log("Base de Usuarios: ", u);
    }).catch((e) => {
        console.error("Error obteniendo los usuarios ", e);
    });
    */
};

main();