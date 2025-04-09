import express from "express";
import type { Request, Response, Router } from "express";
import { sendProductToTelegram } from "../controller/inserindoController";

const router: Router = express.Router();

router.post("/enviar-produto", (req: Request, res: Response) => {
  sendProductToTelegram(req, res);
});

export default router;
