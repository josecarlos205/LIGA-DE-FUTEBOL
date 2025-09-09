# Gerenciador de Campeonato de Futebol

Uma aplicação web completa para gerenciar campeonatos de futebol, com frontend em HTML/CSS/JS puro e backend em Node.js com Firebase.

## Funcionalidades

- ✅ Cadastro de times
- ✅ Cadastro de jogadores
- ✅ Geração automática de tabela de jogos
- ✅ Registro de resultados e ocorrências (gols, cartões)
- ✅ Classificação automática
- ✅ Artilharia
- ✅ Controle de cartões
- ✅ Geração de súmulas
- ✅ Persistência de dados com Firebase Firestore

## Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **Banco de Dados:** Firebase Firestore
- **Autenticação:** Firebase Admin SDK

## Instalação e Configuração

### 1. Clonagem do Repositório

```bash
git clone <seu-repositorio>
cd liga-de-futebol
```

### 2. Instalação das Dependências

```bash
npm install
```

### 3. Configuração do Firebase

#### Opção 1: Usando Variáveis de Ambiente (Recomendado)

Crie um arquivo `.env` na raiz do projeto:

```env
FIREBASE_PROJECT_ID=seu-projeto-firebase
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSUA_CHAVE_PRIVADA_AQUI\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@seu-projeto-firebase.iam.gserviceaccount.com
```

#### Opção 2: Configuração Direta no Código

Edite o arquivo `firebase-admin-config.js` e substitua os valores de placeholder pelas suas credenciais do Firebase.

### 4. Executar a Aplicação

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3001`.

## Estrutura do Projeto

```
liga-de-futebol/
├── index.html              # Frontend da aplicação
├── server.js               # Backend Express.js
├── firebase-admin-config.js # Configuração Firebase Admin
├── firebase-config.js      # Configuração Firebase Client
├── package.json            # Dependências do projeto
├── TODO.md                 # Lista de tarefas
└── README.md              # Este arquivo
```

## Como Usar

1. **Cadastro de Times:** Clique em "Times" e adicione os times participantes
2. **Cadastro de Jogadores:** Clique em "Jogadores" e cadastre jogadores para cada time
3. **Gerar Jogos:** Clique em "Tabela de Jogos" e gere a tabela automaticamente
4. **Registrar Resultados:** Clique em "Resultados" para registrar placares e ocorrências
5. **Visualizar Estatísticas:** Use as abas de Classificação, Artilharia e Cartões
6. **Gerar Súmulas:** Clique em "Súmula" para gerar relatórios detalhados dos jogos

## API Endpoints

- `GET /status` - Verifica o status do servidor
- `POST /save-championship` - Salva dados do campeonato
- `GET /load-championship` - Carrega dados do campeonato

## Desenvolvimento

### Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm test` - Executa os testes (se configurados)

### Configuração do Firebase

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Ative o Firestore Database
4. Vá para Configurações do Projeto > Contas de Serviço
5. Gere uma nova chave privada
6. Use as credenciais geradas para configurar as variáveis de ambiente

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Suporte

Para suporte, entre em contato:
- Email: josecarlos.saopaulo@gmail.com
- Celular: 99992-2743

---

Desenvolvido por José Carlos da Silva
