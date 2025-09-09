const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

setGlobalOptions({ maxInstances: 10 });

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/save-championship", async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ error: "Dados não fornecidos" });
    }

    await db.collection("championships").doc("current").set(data);

    res.json({
      success: true,
      message: "Dados salvos com sucesso no Firebase",
    });
  } catch (error) {
    console.error("Erro ao salvar dados:", error);
    res.status(500).json({ error: "Erro ao salvar dados no Firebase" });
  }
});

app.get("/load-championship", async (req, res) => {
  try {
    const doc = await db.collection("championships").doc("current").get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Dados não encontrados" });
    }

    res.json(doc.data());
  } catch (error) {
    console.error("Erro ao carregar dados:", error);
    res.status(500).json({ error: "Erro ao carregar dados do Firebase" });
  }
});

app.get("/status", (req, res) => {
  res.json({
    status: "running",
    firebaseConfigured: true,
    timestamp: new Date().toISOString(),
    environment: "cloud-functions",
  });
});

exports.api = onRequest(app);
