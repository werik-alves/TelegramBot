import axios from "axios";

type TopicKey = "amazon" | "shopee" | "infoprodutos" | "magazine";

const BASE_URL = "http://localhost:8080/api";

export const sendProduto = async (
  topic: TopicKey,
  link: string,
  price: number,
  description: string
) => {
  try {
    const response = await axios.post(`${BASE_URL}/enviar-produto`, {
      topic,
      link,
      price,
      description,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar produto:", error);
    throw error;
  }
};
export default {
  sendProduto,
};