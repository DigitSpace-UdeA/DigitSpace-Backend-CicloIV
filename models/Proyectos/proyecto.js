import mongoose from "mongoose";
import { UserModel } from "../Usuarios/usuario.js";

const { Schema, model } = mongoose;

// interface Proyecto {
//     nombre: string;
//     presupuesto: number;
//     fechaInicial: Date;
//     fechaFinal: Date;
//     estadoProyecto: Enum_Estado_Proyecto;
//     faseProyecto: Enum_Fase_Proyecto;
//     lider: Schema.Types.ObjectId;
//     objetivos: [Schema.Types.ObjectId];
// }

const projectSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    presupuesto: {
      type: Number,
      required: true,
    },
    fechaInicial: {
      type: Date,
      required: true,
    },
    fechaFinal: {
      type: Date,
      required: true,
    },
    estadoProyecto: {
      type: String,
      enum: ["ACTIVO", "INACTIVO"],
      default: "INACTIVO",
    },
    faseProyecto: {
      type: String,
      enum: ["INICIADO", "EN_DESARROLLO", "TERMINADO", "NULO"],
      default: "NULO",
    },
    lider: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: UserModel,
    },
    objetivos: [
      {
        descripcion: {
          type: String,
          required: true,
        },
        tipo: {
          type: String,
          enum: ["GENERAL", "ESPECIFICO"],
          required: true,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
  
projectSchema.virtual("avances", {
  ref: "Avance",
  localField: "_id",
  foreignField: "proyecto",
});

projectSchema.virtual("inscripciones", {
  ref: "Inscripcion",
  localField: "_id",
  foreignField: "proyecto",
});

const ProjectModel = model("Project", projectSchema, "Proyectos_Universidad");

export { ProjectModel };
