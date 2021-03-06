import mongoose from "mongoose";
import { ProjectModel } from "../Proyectos/proyecto.js";
import { UserModel } from "../Usuarios/usuario.js";

const { Schema, model } = mongoose;

// interface Avance {
//     proyecto: Schema.Types.ObjectId;
//     fechaAvance: Date;
//     descripcion: string;
//     observaciones: [string];
//     creadoPor: Schema.Types.ObjectId;
// }

const avanceSchema = new Schema({
    fechaAvance: {
        type: Date,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    observaciones: [
        {
            type: String,
        },
    ],
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
    },
    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
});

const AvanceModel = model("Avance", avanceSchema, "Avance_Proyectos");

export { AvanceModel };