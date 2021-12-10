import { UserModel } from "./usuario.js";
import bcrypt from 'bcrypt';
import { InscripcionModel } from "../Inscripciones/inscripcion.js";

const resolversUsuarios = {
    Usuario: {
    inscripciones: async (parent, args, context) => {
        return InscripcionModel.find({ estudiante: parent._id });
        },
    },

    Query: {
        Usuarios: async (parent, args, context) => {
            console.log(args);
            const usuarios = await UserModel.find({...args.filtro})
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuario = await UserModel.findOne({ _id: args._id });
            return usuario;
        },
        Usuarios_Rol: async (parent, args) => {
            const usuarioRol = await UserModel.find({rol: args.rol});
            return usuarioRol;
        }
    },
    
    Mutation: {
        crearUsuario: async (parent, args) => {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);
            const usuarioCreado = await UserModel.create({
              nombre: args.nombre,
              apellido: args.apellido,
              identificacion: args.identificacion,
              correo: args.correo,
              rol: args.rol,
              password: hashedPassword,
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
                estado: args.estado,
            },
                { new: true }
            );
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
    },
};

export { resolversUsuarios };