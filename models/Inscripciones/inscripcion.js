import mongoose from "mongoose";
import { ProjectModel } from "../Proyectos/proyecto.js";
import { UserModel } from "../Usuarios/usuario.js";

const { Schema, model } = mongoose;

// interface Inscripcion {
//   estado: Enum_Estado_Inscripcion;
//   fechaIngreso: Date;
//   fechaEgreso: Date;
//   proyecto: Schema.Types.ObjectId;
//   estudiante: Schema.Types.ObjectId;
// }

const inscripcionSchema =
  new Schema(
  {
    estado: {
      type: String,
      enum: ["ACEPTADA", "RECHAZADA", "PENDIENTE"],
      default: "PENDIENTE",
      required: true,
    },
    fechaIngreso: {
      type: Date,
      required: true,
    },
    fechaEgreso: {
      type: Date,
      required: true,
    },
    proyecto: {
      type: Schema.Types.ObjectId,
      ref: ProjectModel,
      required: true,
    },
    estudiante: {
      type: Schema.Types.ObjectId,
      ref: UserModel,
      required: true,
    },
  });

const InscripcionModel = model("Inscripcion", inscripcionSchema);

export { InscripcionModel };
