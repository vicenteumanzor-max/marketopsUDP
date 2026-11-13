
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { Sucursal } from "./models/sucursal.mjs";   
import { User } from "./models/users.mjs";
import { Equipo } from "./models/equipo.mjs";
import { Falla } from "./models/falla.mjs";
const app = express();

app.use(express.json());

app.get("/api/salud", (req, res) => {
  res.json({ ok: true });
});
app.get("/api/sucursales", async (req, res) => {
  const sucursales = await Sucursal.find();
  res.json(sucursales);
});
app.get("/api/usuarios", async (req, res) => {
  const usuarios = await User.find().populate("sucursalId");
  res.json(usuarios);
});
app.get("/api/equipos", async (req, res) => {
  const equipos = await Equipo.find();
  res.json(equipos);
});
app.get("/api/fallas", async (req, res) => {
  const fallas = await Falla.find();
  res.json(fallas);
});
try {
  await mongoose.connect(process.env.MONGODB_URI);

  console.log("MongoDB conectado correctamente");

  app.listen(3001, "127.0.0.1", () => {
    console.log("Servidor MarketOps iniciado en puerto 3001");
  });
} catch (error) {
  console.error("Error al conectar MongoDB:", error.message);
  process.exitCode = 1;
}