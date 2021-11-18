import { Schema, model } from 'mongoose';
import { Enum_Estado_Inscripcion } from './enum';
import { ProjectModel } from './project';
import { UserModel } from './users';

interface Inscripcion {
  estado: Enum_Estado_Inscripcion;
  fechaIngreso: Date;
  fechaEgreso: Date;
  proyecto: Schema.Types.ObjectId;
  estudiante: Schema.Types.ObjectId;
}

const inscripcionSchema = new Schema<Inscripcion>({
    estado: {
        type: String,
        enum: Enum_Estado_Inscripcion,
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

const InscripcionModel = model('Inscripcion', inscripcionSchema);

export { InscripcionModel };