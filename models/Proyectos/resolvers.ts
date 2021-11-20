import { ProjectModel } from "./proyecto";

const resolversProyecto = {
    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProjectModel.find().populate("lider");
            return proyectos;
        },
        Proyecto: async (parent, args) => {
            const proyecto = await ProjectModel.findOne().populate("lider");
            return proyecto;
        }},
    
    Mutation: {
        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProjectModel.create({
                nombre: args.nombre,
                estado: args.estado,
                fase: args.fase,                
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