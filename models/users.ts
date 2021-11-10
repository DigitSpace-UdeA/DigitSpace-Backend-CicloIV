import { Schema, model } from "mongoose";

const userSchema = new Schema({
    correo: {
        type: String,
        required: true,
    },
    identificacion: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
});

export default userSchema;