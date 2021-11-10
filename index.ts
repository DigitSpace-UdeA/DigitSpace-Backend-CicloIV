import conectarBD from "./db/db";
import { UserModel } from "./models/users";
import { Enum_Rol } from "./models/enum";

const main = async () => {
    await conectarBD();

    // Crear un Usuario
    await UserModel.create({
        nombre: "David Andrés",
        apellido: "González Medina",
        identificacion: "1029384756",
        correo: "prueba2@gmail.com",
        rol: Enum_Rol.estudiante,
    }, {
        nombre: "Daniel Alexander",
        apellido: "Flórez Orrego",
        identificacion: "5647839210",
        correo: "prueba2@gmail.com",
        rol: Enum_Rol.estudiante,
    }, {
        nombre: "Katerin",
        apellido: "Barrera Ortega",
        identificacion: "0192837465",
        correo: "prueba4@gmail.com",
        rol: Enum_Rol.lider,
    }).then((u) => {
        console.log("Usuario creado exitósamente: ", u);
    }).catch((e) => {
        console.error("Error creando el usuario: ", e);
    });

    // Para comentar masívamente Ctrl K y Ctrl + C
    // Para quitar el comentario es Ctrl k + Ctrl u

    // Consultar Usuarios
    
    // await UserModel.find()
    //   .then((u) => {
    //     console.log("Base de Usuarios: ", u);
    // }).catch((e) => {
    //     console.error("Error obteniendo los usuarios ", e);
    // });

    // Editar un Usuario
    
    // await UserModel.findOneAndUpdate(
    //     { nombre: "Paquita" },
    //     {
    //         correo: "Paquita 2",
    //         identificacion: "84973224r2"
    //     }
    // )
    //     .then((u) => {
    //     console.log("Usuario actualizado exitósamente: ", u);
    // })
    //     .catch((e) => {
    //     console.error("Error actualizando el usuario: ", e);
    // });
    
    // // Eliminar un Usuario
    
    // await UserModel.findOneAndUpdate(
    //     { nombre: "Paquita" },
    //     {
    //         correo: "Paquita 2",
    //         identificacion: "84973224r2"
    //     }
    // )
    //     .then((u) => {
    //     console.log("Usuario eliminado exitósamente: ", u);
    // })
    //     .catch((e) => {
    //     console.error("Error eliminando el usuario: ", e);
    // });

};

main();