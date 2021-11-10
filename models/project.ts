import { Schema, model } from "mongoose";
import { Enum_Estado_Proyecto, Enum_Estado_Usuario, Enum_Fase_Proyecto, Enum_Rol } from "./enum";

interface Proyecto {
    nombre: string;
    presupuesto: number;
    fechaInicial: Date;
    fechaFinal: Date;
    estadoProyecto: Enum_Estado_Proyecto;
    faseProyecto: Enum_Fase_Proyecto;
    leader: Schema.Types.ObjectId;
}

