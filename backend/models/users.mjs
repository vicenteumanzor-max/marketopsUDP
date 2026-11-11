import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    rol: {
        type: String,
        enum: ["administrador", "soporte", "encargado"],
        required:true,
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true,
        select: false,
    },
    sucursalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sucursal",
        default: null
    },
})
export const User = mongoose.model("User", UserSchema, "users");