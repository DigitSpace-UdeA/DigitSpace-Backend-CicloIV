import { AvanceModel } from "./avance.js";

const resolverAvances = {
    Query: {
        Avances: async (parent, args) => {
            const avances = await AvanceModel.find()
              .populate("proyecto")
              .populate("creadoPor");
            return avances;
        },
        filtrarAvance:  async (parent, args) => {
            const avanceFiltrado = await AvanceModel.find({ proyecto: args._id }).populate("proyecto").populate("creadoPor");
            return avanceFiltrado;
        },
        filtrarAvanceEstudiante:  async (parent, args) => {
            const avanceFiltradoEstudiante = await AvanceModel.find({
              creadoPor: args._id,
            })
              .populate("proyecto")
              .populate("creadoPor");
            return avanceFiltradoEstudiante;
        },
    },
    
    Mutation: {
        crearAvance: async (parent, args) => {
            const avanceCreado = await AvanceModel.create({
              fechaAvance: new Date(args.fechaAvance),
              descripcion: args.descripcion,
              proyecto: args.proyecto,
              creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },
        
        editarAvance: async (parent, args) => {
            const avanceEditado = await AvanceModel.findByIdAndUpdate(
              args._id,
              {
                descripcion: args.descripcion,
              }
            );
            return avanceEditado;
        },

        editarObservacionesAvance: async (parent, args) => {
            const avanceConObservaciones = await AvanceModel.findByIdAndUpdate(
              args._id,
              {
                $addToSet: {
                  observaciones: [ args.observacion ],
                },
              },
              { new: true }
            );
            return avanceConObservaciones;
        },
    },
};

export { resolverAvances };