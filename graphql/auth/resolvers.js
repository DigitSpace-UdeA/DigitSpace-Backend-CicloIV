import { UserModel } from "../../models/Usuarios/usuario.js";
import bcrypt from 'bcrypt';
import { generarToken } from "../../utils/tokenUtils.js";

const resolverAutenticacion = {
  Mutation: {
    registrarUsuario: async (parent, args) => {

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
      console.log("Se crea el siguiente usuario: ", usuarioCreado);
      return {
        token: generarToken({
          _id: usuarioCreado._id,
          nombre: usuarioCreado.nombre,
          apellido: usuarioCreado.apellido,
          identificacion: usuarioCreado.identificacion,
          correo: usuarioCreado.correo,
          rol: usuarioCreado.rol,
        }),
      };
    },

    login: async (parent, args) => {
      const usuarioEncontrado = await UserModel.findOne({ correo: args.correo });
      if (await bcrypt.compare(args.password, usuarioEncontrado.password)) {
        return {
          token: generarToken({
            _id: usuarioEncontrado._id,
            nombre: usuarioEncontrado.nombre,
            apellido: usuarioEncontrado.apellido,
            identificacion: usuarioEncontrado.identificacion,
            correo: usuarioEncontrado.correo,
            rol: usuarioEncontrado.rol,
          }),
        };
      }
    },

    refreshToken: async (parent, args, context) => {
      console.log("Contexto", context);
      if (!context.userData) {
        return {
          error: "Token no válido.",
        };
      } else {
        return {
          token: generarToken({
            _id: context.userData._id,
            nombre: context.userData.nombre,
            apellido: context.userData.apellido,
            identificacion: context.userData.identificacion,
            correo: context.userData.correo,
            rol: context.userData.rol,
          }),
        };
      }
    },
  },
};

export { resolverAutenticacion };
