const express = require("express")
const app = express();

const userView = require("../src/view/user")

app.use("/users", userView);

app.listen(1080, () => {
    console.log("Servidor rodando na porta 1080");
})


