// server.js
import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ===== CONFIG MONGO =====
const MONGO_URI = process.env.MONGO_URI; // tu cadena de conexión
const DB_NAME = process.env.DB_NAME || "TU_DB";
const COLLECTION_NAME = process.env.COLLECTION_NAME || "groupnotice";

// ===== CONEXIÓN MONGO =====
let db;
async function connectDB() {
  try {
    const client = new MongoClient(MONGO_URI, {
      tls: true,
      tlsAllowInvalidCertificates: true, // opcional
    });
    await client.connect();
    db = client.db(DB_NAME);
    console.log("✅ Conectado a MongoDB");
  } catch (err) {
    console.error("❌ Error al conectar a Mongo:", err);
    process.exit(1);
  }
}

// ===== RUTA API =====
app.get("/groupnotices", async (req, res) => {
  try {
    const collection = db.collection(COLLECTION_NAME);
    const docs = await collection.find({}).toArray();
    res.json(docs);
  } catch (err) {
    console.error("❌ Error al obtener documentos:", err);
    res.status(500).json({ error: "Error al obtener documentos" });
  }
});

// ===== START SERVER =====
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
});
