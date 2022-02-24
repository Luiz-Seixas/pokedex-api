import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes/routes";
import bodyParser from "body-parser";

const app = express();

//bodyParser
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(routes);
//rotas ficam depois do express.json pois ele faz a aplicação interpretar json

const port = 3333;
app.listen(port, () => console.log(`🔥 Server running on port ${port} 🚀 `));

app.get("/", (req, res) => res.send({ message: "Hello PokeWorld!" }));
