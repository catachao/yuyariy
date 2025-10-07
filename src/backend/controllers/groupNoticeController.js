// controllers/groupNoticeController.js
import { getAllNotices, getNoticesByCluster } from "../models/groupNoticeModel.js";

export async function getGroupNotices(req, res) {
  try {
    const docs = await getAllNotices();
    res.json(docs);
  } catch (err) {
    console.error("❌ Error al obtener documentos:", err);
    res.status(500).json({ error: "Error al obtener documentos" });
  }
}

export async function getGroupNoticesByCluster(req, res) {
  try {
    const { cluster } = req.params;
    const docs = await getNoticesByCluster(cluster);

    if (!docs || docs.length === 0) {
      return res.status(404).json({ message: `No se encontraron documentos para el cluster ${cluster}` });
    }

    res.json(docs);
  } catch (err) {
    console.error("❌ Error al obtener documentos por cluster:", err);
    res.status(500).json({ error: "Error al obtener documentos" });
  }
}
