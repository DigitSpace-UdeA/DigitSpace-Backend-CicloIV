import { Schema, model } from "mongoose";
import { Enum_Estado_Proyecto, Enum_Fase_Proyecto } from "./enum";
import { ObjectiveModel } from "./objetivo";
import { UserModel } from "./users";

interface Proyecto {
    nombre: string;
    presupuesto: number;
    fechaInicial: Date;
    fechaFinal: Date;
    estadoProyecto: Enum_Estado_Proyecto;
    faseProyecto: Enum_Fase_Proyecto;
    lider: Schema.Types.ObjectId;
    objetivos: [Schema.Types.ObjectId];
}

const projectSchema = new Schema<Proyecto>({
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
        enum: Enum_Estado_Proyecto,
        default: Enum_Estado_Proyecto.INACTIVO,
    },
    faseProyecto: {
        type: String,
        enum: Enum_Fase_Proyecto,
        default: Enum_Fase_Proyecto.NULO,
    },
    lider: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    objetivos: [
        {
            type: Schema.Types.ObjectId,
            ref: ObjectiveModel,
        },
    ],
});

const ProjectModel = model('Project', projectSchema, "Proyectos_Universidad");

export { ProjectModel };