import { Schema, model } from "mongoose";
import { Enum_Estado_Usuario, Enum_Rol } from "./enum";

interface User {
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_Rol;
    estado: Enum_Estado_Usuario;
}

const userSchema = new Schema<User>({
    correo: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: "El formato del correo no corresponde a lo habitual.",
        },
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
    rol: {
        type: String,
        required: true,
        enum: Enum_Rol,
    },
    estado: {
        type: String,
        enum: Enum_Estado_Usuario,
        default: Enum_Estado_Usuario.PENDIENTE,
    },
});

const UserModel = model("User", userSchema, "Usuarios_Proyectos");

export { UserModel };