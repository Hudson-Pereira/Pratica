const express = require("express");
const routers = require("./routers/index");
const { sequelize } = require("./models/index");

const app = express();

app.use(express.json()); //middleware para poder requisicao tipo json
app.use("/", routers);

sequelize.sync().then(() => {
  console.log("Conectado ao DB.");
});

app.listen(3000, () => {
  console.log("App rodando em http://localhost:3000");
});
