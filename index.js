import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint to get a random motivational quote
app.post("/generate-quote", async (req, res) => {
  try {
    const response = await axios.get("https://zenquotes.io/api/random");
    const quoteData = response.data[0];
    const quote = `${quoteData.q} — ${quoteData.a}`;
    res.json({ quote });
  } catch (error) {
    console.error("Error fetching quote:", error.message);
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
