const express = require('express');
const cors = require('cors');
const path = require('path');
const { db } = require('./firebase-admin-config');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '/')));

// Verificar se Firebase Admin está configurado
const firebaseAvailable = db !== null;

// Endpoint para salvar dados no Firebase
app.post('/save-championship', async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ error: 'Dados não fornecidos' });
    }

    if (!firebaseAvailable) {
      return res.status(503).json({ error: 'Firebase não configurado. Configure as credenciais do Firebase Admin.' });
    }

    // Salvar dados no Firestore
    await db.collection('championships').doc('current').set(data);

    res.json({ success: true, message: 'Dados salvos com sucesso no Firebase' });
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    res.status(500).json({ error: 'Erro ao salvar dados no Firebase' });
  }
});

// Endpoint para carregar dados do Firebase
app.get('/load-championship', async (req, res) => {
  try {
    if (!firebaseAvailable) {
      return res.status(503).json({ error: 'Firebase não configurado. Configure as credenciais do Firebase Admin.' });
    }

    const doc = await db.collection('championships').doc('current').get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Dados não encontrados' });
    }

    res.json(doc.data());
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    res.status(500).json({ error: 'Erro ao carregar dados do Firebase' });
  }
});

// Endpoint de status
app.get('/status', (req, res) => {
  res.json({
    status: 'running',
    firebaseConfigured: firebaseAvailable,
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Firebase Admin configurado: ${firebaseAvailable ? 'Sim' : 'Não'}`);
  if (!firebaseAvailable) {
    console.log('Para habilitar Firebase, configure as variáveis de ambiente:');
    console.log('- FIREBASE_PROJECT_ID');
    console.log('- FIREBASE_PRIVATE_KEY');
    console.log('- FIREBASE_CLIENT_EMAIL');
  }
});
