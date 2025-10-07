// routes/groupNoticeRoutes.js
import express from "express";
import { getGroupNotices, getGroupNoticesByCluster } from "../controllers/groupNoticeController.js";

const router = express.Router();

router.get("/", getGroupNotices);
router.get("/:cluster", getGroupNoticesByCluster);

export default router;
