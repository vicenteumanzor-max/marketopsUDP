import mongoose from "mongoose";

const SucursalSchema = new mongoose.Schema(
  { 
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    direccion: {
        type: String,
        required: true,
    }
    },
)
export const Sucursal = mongoose.model("Sucursal", SucursalSchema, "sucursales");