import express from "express";
import { PORT } from "./config/env.js";
const app = express();
app.use("/", express.json());

app.get("/", (req, res) => {
  res.send("subscription-tracker API");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
export default app;