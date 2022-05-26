import express from "express";

import {
  createNewUser,
  authenticate,
  confirmed
} from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/", createNewUser);
router.post("/login", authenticate);
router.get("/confirmed/:token", confirmed);

export default router;
