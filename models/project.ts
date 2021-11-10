import { Schema, model } from "mongoose";
import { Enum_Estado_Proyecto, Enum_Estado_Usuario, Enum_Fase_Proyecto, Enum_Rol } from "./enum";

interface Proyecto {
    nombre: string;
    presupuesto: number;
    fechaInicial: Date;
    fechaFinal: Date;
    estadoProyecto: Enum_Estado_Proyecto;
    faseProyecto: Enum_Fase_Proyecto;
    lider: Schema.Types.ObjectId;
}

const ProjectSchema = new Schema<Proyecto>({
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
        default: Enum_Estado_Proyecto.inactivo,
    },
    faseProyecto: {
        type: String,
        enum: Enum_Fase_Proyecto,
        default: Enum_Fase_Proyecto.null,
    },
    lider: {
        
    }
});

const ProjectModel = model('Project', ProjectSchema, "Proyectos_Universidad");

export { ProjectModel };