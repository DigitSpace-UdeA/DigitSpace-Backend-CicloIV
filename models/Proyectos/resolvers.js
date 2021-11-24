import { ProjectModel } from "./proyecto.js";

const resolversProyecto = {
    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find()
              .populate("lider")
              .populate("avances")
              .populate("inscripciones");
            return proyectos;
        },
        Proyecto: async (parent, args) => {
            const proyecto = await ProjectModel.findOne()
              .populate("lider")
              .populate("avances");
            return proyecto;
        }},
    
    Mutation: {
        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProjectModel.create({
              nombre: args.nombre,
              estadoProyecto: args.estadoProyecto,
              faseProyecto: args.faseProyecto,
              fechaInicial: args.fechaInicial,
              fechaFinal: args.fechaFinal,
              presupuesto: args.presupuesto,
              lider: args.lider,
              objetivos: args.objetivos,
            });
            return proyectoCreado;
        },
    },
};

export { resolversProyecto };