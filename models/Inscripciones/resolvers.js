import { ProjectModel } from "../Proyectos/proyecto.js";
import { UserModel } from "../Usuarios/usuario.js";
import { InscripcionModel } from "./inscripcion.js";

const resolverInscripciones = {
  Inscripcion: {
    proyecto: async (parent, args, context) => {
      return await ProjectModel.findOne({ _id: parent.proyecto })
    },
    estudiante: async (parent, args, context) => {
      return await UserModel.findOne({ _id: parent.estudiante })
    },
  },

  Query: {
    Inscripciones: async (parent, args, context) => {
      let filtro = {};
      if (context.userData) {
        if (context.userData.rol === 'LIDER') {
          const projects = await ProjectModel.find({ lider: context.userData._id });
          const projectList = projects.map((p) => p._id.toString());
          filtro = {
            proyecto: {
              $in: projectList,
            },
          };
        }
      }
      const inscripciones = await InscripcionModel.find({ ...filtro });
      return inscripciones;
    },

    // inscripcionesNoAprobadas: async () => {
    //   const ina = await InscriptionModel.find({ estado: 'PENDIENTE' }).populate('estudiante');
    // },
  },

  // Query: {
  //   Inscripciones: async (parent, args) => {
  //     const inscripciones = await InscripcionModel.find();
  //     return inscripciones;
  //   },
  // },

  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await InscripcionModel.create({
        estadoInscripcion: args.estadoInscripcion,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },

    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await InscripcionModel.findByIdAndUpdate(
        args.id,
        {
          estadoInscripcion: "ACEPTADA",
          fechaIngreso: Date.now(),
        },
        { new: true }
      );
      return inscripcionAprobada;
    },
  },
};

export { resolverInscripciones };
