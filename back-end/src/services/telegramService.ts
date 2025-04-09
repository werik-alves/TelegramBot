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

export async function sendMessageToTopic(
  topic: TopicKey,
  message: string,
  price: string = "",
  description: string = ""
): Promise<void> {
  const messageThreadId = THREADS[topic];

  const fullMessage = `${message}\n\n${price}\n${description}`;

  await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    chat_id: CHAT_ID,
    message_thread_id: messageThreadId,
    text: fullMessage,
    parse_mode: "HTML",
  });
}
