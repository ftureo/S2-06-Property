import express from "express";

import { createNewUser, authenticate } from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/", createNewUser);
router.post("/login", authenticate);

export default router;
