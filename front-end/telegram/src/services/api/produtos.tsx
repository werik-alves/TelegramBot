import axios from "axios";

type TopicKey = "amazon" | "shopee" | "infoprodutos" | "magazine";

const BASE_URL = "http://localhost:8080/api";

export const sendProduto = async ({
  topic,
  link,
  price,
  description,
}: {
  topic: TopicKey;
  link: string;
  price: number;
  description: string;
}) => {
  return axios.post(`${BASE_URL}/enviar-produto`, {
    topic,
    link,
    price,
    description,
  });
};

export default {
  sendProduto,
};