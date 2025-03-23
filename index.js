const express = require("express");
const connectDB = require("./src/db/server.connect");
const userRoutes = require("./src/router/user.router");

const app = express();
const PORT = 3000;

app.use(express.json());
connectDB();

app.use("/my_market_app", userRoutes)

app.get("/", (req, res) => {
    res.send("Ola mysupermarket api")
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${3000}`);
})