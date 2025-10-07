// config/db.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;

let db;

export async function connectDB() {
  try {
    const client = new MongoClient(MONGO_URI, {
      tls: true,
      tlsAllowInvalidCertificates: true,
    });
    await client.connect();
    db = client.db(DB_NAME);
    console.log("✅ Conectado a MongoDB");
  } catch (err) {
    console.error("❌ Error al conectar a Mongo:", err);
    process.exit(1);
  }
}

export function getDB() {
  if (!db) throw new Error("La base de datos no está conectada aún");
  return db;
}
