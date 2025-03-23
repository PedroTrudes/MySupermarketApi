const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Ola mysupermarket api")
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${3000}`);
})