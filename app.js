import {express } from "express";

const app = express();
app.use("/", express.json());



const PORT = process.env.PORT || 80;
app.listen(PORT, () => console.log("Listen on port", PORT));