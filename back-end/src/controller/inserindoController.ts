import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

type TopicKey = "amazon" | "shopee" | "infoprodutos" | "magazine";

const THREADS: Record<TopicKey, number> = {
  amazon: 4,
  shopee: 6,
  infoprodutos: 8,
  magazine: 10,
};

export const sendProductToTelegram = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { topic, link, description, price } = req.body;

    if (!topic || !link) {
      return res.status(400).json({ error: "Topic e link são obrigatórios." });
    }

    const message = `<b>🔥 Oferta ${topic}!</b>\n${link}`;
    const priceTag = price ? `💰Valor em R$: <b>${price}</b>` : "";
    const descriptionTag = description
      ? `<b>Descrição: ${description}</b>`
      : "";

    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      message_thread_id: THREADS[topic as TopicKey],
      text: `${message}\n\n${priceTag}\n${descriptionTag}`,
      parse_mode: "HTML",
    });

    return res.status(200).json({ message: "Produto enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar produto:", error);
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
};

export default sendProductToTelegram;
