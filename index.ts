import conectarBD from "./db/db";
import { UserModel } from "./models/users";
import { Enum_Rol } from "./models/enum";
import { ObjectId } from "mongoose";
import { ProjectModel } from "./models/project";

const main = async () => {
    await conectarBD();

    // Crear un Usuario
    // await UserModel.create({
    //     nombre: "David Andrés",
    //     apellido: "González Medina",
    //     identificacion: "1029384756",
    //     correo: "prueba2@gmail.com",
    //     rol: Enum_Rol.estudiante,
    // }, {
    //     nombre: "Daniel Alexander",
    //     apellido: "Flórez Orrego",
    //     identificacion: "5647839210",
    //     correo: "prueba2@gmail.com",
    //     rol: Enum_Rol.estudiante,
    // }, {
    //     nombre: "Katerin",
    //     apellido: "Barrera Ortega",
    //     identificacion: "0192837465",
    //     correo: "prueba4@gmail.com",
    //     rol: Enum_Rol.lider,
    // }).then((u) => {
    //     console.log("Usuario creado exitosamente: ", u);
    // }).catch((e) => {
    //     console.error("Error creando el usuario: ", e);
    // });

    // Para comentar masívamente Ctrl K y Ctrl + C
    // Para quitar el comentario es Ctrl k + Ctrl u

    // Consultar Usuarios
    
    // await UserModel.find()
    //   .then((u) => {
    //     console.log("Base de Usuarios: ", u);
    // }).catch((e) => {
    //     console.error("Error obteniendo los usuarios ", e);
    // });

    // Consultar un único Usuario
    
    // await UserModel.findOne()
    //   .then((u) => {
    //     console.log("Usuario encontrado exitosamente: ", u);
    // }).catch((e) => {
    //     console.error("Error obteniendo el usuario consultado ", e);
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
    //     console.log("Usuario actualizado exitosamente: ", u);
    // })
    //     .catch((e) => {
    //     console.error("Error actualizando el usuario: ", e);
    // });
    
    // // Eliminar un Usuario
    
    // await UserModel.findOneAndDelete(
    //     { nombre: "Paquita" }
    // )
    //     .then((u) => {
    //     console.log("Usuario eliminado exitosamente: ", u);
    // })
    //     .catch((e) => {
    //     console.error("Error eliminando el usuario: ", e);
    // });

    // Crear un Proyecto

    ProjectModel.create({
        nombre: "Proyecto 1",
        presupuesto: 10000000000,
        fechaInicial: Date.now(),
        fechaFinal: new Date("2022/11/10"),
    },{
        nombre: "Proyecto 2",
        presupuesto: 8000000000,
        fechaInicial: Date.now(),
        fechaFinal: new Date("2023/05/10"),
    },{
        nombre: "Proyecto 3",
        presupuesto: 3850,
        fechaInicial: Date.now(),
        fechaFinal: new Date("2022/12/15"),
    },{
        nombre: "Proyecto 4",
        presupuesto: 6750000000,
        fechaInicial: Date.now(),
        fechaFinal: new Date("2022/11/10"),
    }).then((u) => {
        console.log("Proyecto creado exitosamente: ", u);
    }).catch((e) => {
        console.error("Error creando el Proyecto: ", e);
    });    
};

main();