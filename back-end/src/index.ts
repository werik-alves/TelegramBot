import express from "express";
import inseridoProduto from "./routes/inserindoProdutos";
import cors from "cors";
const loginRouter = require("./routes/login");
const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:3030",
    credentials: true, // Permite o envio de cookies
  })
);
app.use(express.json());
//✅
// Usa as rotas do módulo
app.use("/api", inseridoProduto);
app.use("/api", loginRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
