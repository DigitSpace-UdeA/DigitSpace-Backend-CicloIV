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
        },
        Proyecto_Lider: async (parent, args) => {
            const proyectoLiderado = await ProjectModel.find({lider: args.lider})
            console.log("Proyectos Liderados:", proyectoLiderado)
            return proyectoLiderado;
        },
      },
    
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
        editarProyecto: async (parent, args) => {
          if (args.campos.faseProyecto === "TERMINADO") {
            args.campos.fechaFinal = Date.now().toISOString().split("T")[0];
          }
          const proyectoEditado = await ProjectModel.findByIdAndUpdate(
              args._id,
              {...args.campos},
              { new: true }
            );
            return proyectoEditado;
        },
        crearObjetivo: async (parent, args) => {
            const objetivoCreado = await ProjectModel.findByIdAndUpdate(
              args.idProyecto,
              {
                $addToSet: {
                  objetivos: { ...args.campos },
                },
              },
              { new: true }
            );
            return objetivoCreado;
        },
        editarObjetivo: async (parent, args) => {
            const objetivoEditado = await ProjectModel.findByIdAndUpdate(
              args.idProyecto,
              {
                $set: {
                  [`objetivos.${args.indexObjetivo}.descripcion`]:
                    args.campos.descripcion,
                  [`objetivos.${args.indexObjetivo}.tipo`]: args.campos.tipo,
                },
              },
              { new: true }
            );
            return objetivoEditado;
        },
        eliminarObjetivo: async (parent, args) => {
            const objetivoEliminado = await ProjectModel.findByIdAndUpdate(
              {_id: args.idProyecto},
              {
                $pull: {
                  objetivos: {
                    _id: args.idObjetivo,
                  },
                },
              },
              { new: true }
            );
            return objetivoEliminado;
        },        
    },
};

export { resolversProyecto };