import mongoose from "mongoose";

const { Schema, model } = mongoose;

// interface Objetivo {
//     descripcion: string;
//     tipo: Enum_Tipo_Objetivo;
//     proyecto: Schema.Types.ObjectId;
// }

const objectiveSchema =
  new Schema(
  {
    descripcion: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      enum: ["GENERAL", "ESPECÍFICO"],
      required: true,
    },
  });

const ObjectiveModel = model("Objetivo", objectiveSchema, "Objetivos_Proyecto");

export { ObjectiveModel };
