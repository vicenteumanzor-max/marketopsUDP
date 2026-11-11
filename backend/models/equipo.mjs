
import mongoose from "mongoose";

const EquipoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    tipo: {
        type: String,
        enum: ["caja", "balanza", "impresora"],
        required: true
    },
    sucursalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sucursal",
        required: true
    },
    estado: {
        type: String,
        enum: ["Sin fallas","Con fallas","Fuera de servicio"],
        default: "Sin fallas",
        required: true
    }
}, { timestamps: true });

export const Equipo = mongoose.model("Equipo",EquipoSchema,"equipos");
