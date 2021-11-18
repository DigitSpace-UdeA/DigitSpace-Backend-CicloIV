import { Schema, model } from "mongoose";
import { ProjectModel } from "./project";
import { UserModel } from "./users";

interface Avance {
    proyecto: Schema.Types.ObjectId;
    fechaAvance: Date;
    descripcion: string;
    observaciones: [string];
    creadoPor: Schema.Types.ObjectId;
}

const avanceSchema = new Schema<Avance>({
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

const AvanceModel = model("Avance", avanceSchema, "Avence_Proyectos");

export { AvanceModel };