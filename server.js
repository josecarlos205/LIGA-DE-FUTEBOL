const express = require('express');
const cors = require('cors');
const { Octokit } = require('@octokit/rest');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do GitHub
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // Você deve definir esta variável de ambiente
});

// Endpoint para atualizar o arquivo JSON no GitHub
app.post('/update-championship', async (req, res) => {
  try {
    const { data } = req.body;

    if (!data) {
      return res.status(400).json({ error: 'Dados não fornecidos' });
    }

    // Obter o conteúdo atual do arquivo
    const { data: fileData } = await octokit.repos.getContent({
      owner: 'josecarlos205', // Substitua pelo seu nome de usuário
      repo: 'LIGA-DE-FUTEBOL', // Substitua pelo nome do repositório
      path: 'campeonato.json',
    });

    // Atualizar o arquivo
    const content = Buffer.from(JSON.stringify(data, null, 2)).toString('base64');

    await octokit.repos.createOrUpdateFileContents({
      owner: 'josecarlos205',
      repo: 'LIGA-DE-FUTEBOL',
      path: 'campeonato.json',
      message: 'Atualização automática dos dados do campeonato',
      content: content,
      sha: fileData.sha,
    });

    res.json({ success: true, message: 'Arquivo atualizado com sucesso no GitHub' });
  } catch (error) {
    console.error('Erro ao atualizar arquivo:', error);
    res.status(500).json({ error: 'Erro ao atualizar arquivo no GitHub' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
