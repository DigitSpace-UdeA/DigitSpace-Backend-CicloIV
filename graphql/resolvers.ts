import { ProjectModel } from "../models/project";
import { UserModel } from "../models/users";

const resolvers = {
    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find();
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuario = await UserModel.findOne();
            return usuario;
        },
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate("lider");
            return proyectos;
        },
        Proyecto: async (parent, args) => {
            const proyecto = await ProjectModel.findOne().populate("lider");
            return proyecto;
        }},
    
    Mutation: {
        crearUsuario: async (parent, args) => {
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
            });

            // Permite asignarle el estado al usuario al momento de crearlo, si se quiere, dado que por default es Pendiente.
            if (Object.keys(args).includes('estado')) {
                usuarioCreado.estado = args.estado;
            }
            return usuarioCreado;
        },

        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                estado: args.estado,
            });
            return usuarioEditado;
        },

        eliminarUsuario: async (parent, args) => {
            if (Object.keys(args).includes('_id')) {
                const usuarioEliminado = await UserModel.findOneAndDelete({ _id: args._id });
                return usuarioEliminado;
            } else if (Object.keys(args).includes('correo')) {
                const usuarioEliminado = await UserModel.findOneAndDelete({ correo: args.correo });
            }
        },

        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProjectModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                fechaInicial: args.fechaInicial,
                fechaFinal: args.fechaFinal,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
                objetivos: args.objetivos,
            });
            return proyectoCreado;
        },
    },
};

export { resolvers };