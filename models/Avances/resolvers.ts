import { AvanceModel } from "./avance";

const resolverAvances = {
    Query: {
        Avances: async (parent, args) => {
            const avances = await AvanceModel.find();
            return avances;
        }},
    
    Mutation: {
        crearAvance: async (parent, args) => {
            const avanceCreado = await AvanceModel.create({
                fechaAvance: args.fechaAvance,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },
    },
};

export { resolverAvances };