import express from "express";

import {
  createNewUser,
  authenticate,
  confirmed,
  forgotPassword,
  checkToken,
  newToken
} from "../controllers/users.controllers.js";

const router = express.Router();

router.post("/", createNewUser);
router.post("/login", authenticate);
router.get("/confirmed/:token", confirmed);
router.post("/forgot-password", forgotPassword);
router.get("/forgot-password/:token", checkToken);
router.post("/forgot-password/:token", newToken);

export default router;
