import { Schema, model } from "mongoose";
import { Enum_Tipo_Objetivo } from "../Enums/enum";
import { ProjectModel } from "../Proyectos/proyecto";

interface Objetivo {
    descripcion: string;
    tipo: Enum_Tipo_Objetivo;
    proyecto: Schema.Types.ObjectId;
}

const objectiveSchema = new Schema<Objetivo>({
    descripcion: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum: Enum_Tipo_Objetivo,
        required: true,
    },
    // proyecto: {
    //     type: Schema.Types.ObjectId,
    //     ref: ProjectModel,
    // },
});

const ObjectiveModel = model("Objetivo", objectiveSchema, "Objetivos_Proyecto");

export { ObjectiveModel };