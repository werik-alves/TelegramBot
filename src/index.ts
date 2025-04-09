import express from "express";
import inseridoProduto from "./routes/inserindoProdutos";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

// Usa as rotas do módulo
app.use("/api", inseridoProduto);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
