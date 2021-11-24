import { InscripcionModel } from "./inscripcion.js";

const resolverInscripciones = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscripcionModel.find();
      return inscripciones;
    },
  },

  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await InscripcionModel.create({
        estadoInscripcion: args.estadoInscripcion,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },
  },
};

export { resolverInscripciones };
