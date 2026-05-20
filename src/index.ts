import express from "express";
import { add, subtract, multiply, divide } from "./calculator";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", version: "1.0.0" });
});

app.post("/calculate", (req, res) => {
  const { a, b, operation } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "a und b müssen Zahlen sein" });
  }

  try {
    let result: number;
    switch (operation) {
      case "add":      result = add(a, b); break;
      case "subtract": result = subtract(a, b); break;
      case "multiply": result = multiply(a, b); break;
      case "divide":   result = divide(a, b); break;
      default: return res.status(400).json({ error: "Unbekannte Operation" });
    }
    return res.json({ result });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Fehler";
    return res.status(400).json({ error: message });
  }
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

export default app;
