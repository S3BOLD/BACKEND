const express = require("express")
const app = express();

const expenseView = require("../src/view/expense")

app.use(express.json());

//usa as rotas
app.use("/", expenseView);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
})