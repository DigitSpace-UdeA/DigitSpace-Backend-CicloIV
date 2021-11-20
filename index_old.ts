import conectarBD from "./db/db";
import { UserModel } from "./models/Usuarios/usuario";
import { Enum_Estado_Usuario, Enum_Rol, Enum_Tipo_Objetivo } from "./models/Enums/enum";
import { ObjectId } from "mongoose";
import { ProjectModel } from "./models/Proyectos/proyecto";
import { ObjectiveModel } from "./models/Objetivos/objetivo";

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

    // ProjectModel.create({
    //     nombre: "Proyecto con Objetivos 4",
    //     presupuesto: 123456789000,
    //     fechaInicial: Date.now(),
    //     fechaFinal: new Date("2023/12/31"),
    //     lider: "618c058eca0e5a1c9fa2c393",
    //     objetivos: ["618c842abee077f7a75d365b", "618c83da756f3e871fe21f2f"],
    // }).then((u) => {
    //     console.log("Proyecto creado exitosamente: ", u);
    // })
    //     .catch((e) => {
    //         console.error("Error creando el proyecto: ", e);
    // });

    // const proyecto = await ProjectModel.find({ nombre: "Proyecto con Objetivos 4" }).populate("lider").populate("objetivos");
    // console.log("El proyecto es: ", JSON.stringify(proyecto));

    // Crear Objetivos

    // const objet = await ObjectiveModel.create({
    //     descripcion: "Objetivo Específico.",
    //     tipo: Enum_Tipo_Objetivo.especifico,
    // });

    const crearProyectoConObjetivos = async () => {
        const usuarioInicial = await UserModel.create({
            nombre: 'David',
            apellido: 'González',
            correo: 'general@ur.com',
            identificacion: '0192837748',
            rol: Enum_Rol.administrador,
            estado: Enum_Estado_Usuario.autorizado,
        });

    const proyectoCreado = await ProjectModel.create({
        nombre: 'Proyecto Mision TIC',
        fechaInicio: new Date('2021/12/24'),
        fechaFin: new Date('2022/12/24'),
        presupuesto: 120000,
        lider: usuarioInicial._id,
        objetivos: [
            { descripcion: 'Se crea el objetivo general.', tipo: Enum_Tipo_Objetivo.general },
            { descripcion: 'Se crea el objetivo específico 1.', tipo: Enum_Tipo_Objetivo.especifico },
            { descripcion: 'Se crea el objetivo específico 2.', tipo: Enum_Tipo_Objetivo.especifico },
        ],
    });
};

    const consultaProyectoConObjetivos = async () => {
        const proyectoCreado = await ProjectModel.find({ id: '618d5b22e4e2a99bddab693e' });
        console.log('proyecto', proyectoCreado);
    };
};

main(); 