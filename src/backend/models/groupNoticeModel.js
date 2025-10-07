// models/groupNoticeModel.js
import { getDB } from "../config/db.js";

const COLLECTION_NAME = process.env.COLLECTION_NAME || "groupnotice";

export async function getAllNotices() {
  const db = getDB();
  const collection = db.collection(COLLECTION_NAME);
  return await collection.find({}).toArray();
}

export async function getNoticesByCluster(cluster) {
  const db = getDB();
  const collection = db.collection(COLLECTION_NAME);
  return await collection.find({ cluster: Number(cluster) }).toArray();
}
