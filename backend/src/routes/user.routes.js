import express from "express";

import { createNewUser } from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/", createNewUser);

export default router;
