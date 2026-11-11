
import mongoose from "mongoose";

const FallaSchema = new mongoose.Schema({
    equipoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Equipo",
        required: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    fechaFalla: {
        type: Date,
        default: Date.now,
        required: true
    },
    fechaResolucion: {
        type: Date,
        default: null
    },
    estado: {
        type: String,
        enum: ["Pendiente","En proceso","Resuelta"],
        default: "Pendiente",
        required: true
    }
}, { timestamps: true });

export const Falla = mongoose.model("Falla",FallaSchema,"fallas");
