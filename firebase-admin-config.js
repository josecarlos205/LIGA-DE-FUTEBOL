// Configuração do Firebase Admin SDK para o backend
require('dotenv').config();
const admin = require('firebase-admin');

// Para desenvolvimento local, você pode usar uma configuração mais simples
// Para produção, configure as variáveis de ambiente adequadas

let serviceAccount;

try {
  // Tentar carregar de variáveis de ambiente
  if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
    serviceAccount = {
      type: "service_account",
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
    };
  } else {
    // Configuração com credenciais reais do Firebase
    serviceAccount = {
      type: "service_account",
      project_id: "liga-de-futebol-b31cd",
      private_key_id: "4b0edafc07b743eabede09fc4b0a2eadd97bad62",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDMdz8Pw3SZZ7Z4\nEwP/99TAsheEbm9fR165mVwC9egtEFxV6nRDMRkZJ39gWLNkVIkGfifg0vsqGWQS\nCnhZrxfXp3IMyYEumhT59IrvaSlXkhW+Wg8+cQgb2fk9mRznupoBxHSka6oe2Wfo\nEuWo1fey+FdCsGBEwKVdiEprziuehbgkk/o4zKcMaFOXUa0wS5Hzn7+/vV1LAyMl\nAU+xe+5NOf6anf45QSWryABDHrZeRoXlQ6n4AChn0oiVV7FFDjtJkGsvk+ZiIwnh\nbgkEngD0LpV9P/M/zFgIBh8LcpzlQPANlbUE6bOsvNK77o/QRT7aG1LYYhnnt51n\n+ccZr0lZAgMBAAECggEADXjX9LPGCtY8vXRR9vt/Oa53rTf86klmEj2Vb0krofh/\nf6u3OwwmTAmAXjqfS1TkmG3B4TxAOgRlRb5fMq2TmRfahGwshlkMWRyF9li2qs31\n1SPS+E7IoCkrFSYcXkplxl20P8yA74/B8GvPqmG6yes3Y1itZypNsGLVYH1mU1ym\n/a3e6p9E347nIZXouE2F54SD25eGSJ0X7VJhZmsK83SPcCk7im0aleZDLpL4ViKu\nXqOt3S6qm2nN9qNg8T2LU/htWG+rdnJZjCM+plAhMxA+0Gu5oRtrfXFRo7GMQYT7\npL3Sus7VsvMscsDaRe+7D9qcHjdFIsHlnW5X8kqRWQKBgQDyz0sZwssU/8ixlkIk\nBtFvwMITT4hPDJyT5j919zmtVcm/cIVUST2ehFKdhKaYZ21DVnU7XqjfE+S3iIKB\nEFqsD8Xv/vS0T906Um9lfFanqs94PGjVSib2Jyx8q4EYXBk6Zxu1ma6+eVJgRmwq\nC2Ml+1Js4W/I0jjdbr1DrzuCDQKBgQDXkrYm7kiBLGI2e49GjaS6H1syKvC825m9\nRk7Bo/ENQDqreUzSeAN3zJ062vTMJ8bryTVhFJnxyig/qxoU963D6zlVj/NG2oHO\nlMR5P86EOgo3Y0rHKEgpZfcBPS6IxUZt0uR24QtcpSkXkgl3M4mOU9JgJng6sU1x\nVUckdDatfQKBgAvXSBZNhZHUl3jxlvAi1PvaLpy6eC9CsjAUPmwGTm3BjUEkv5vI\nppSgZ1b/LRCpmo56HOV0TE/0rGa25YZdwc46RrDZgh1495TsiDouwhsTHWMDrykX\noKbIakb6JiWF+ET82kEU6YyoZfgD9yplu8QSaYadx9HHTradu+UdGo3RAoGBAM9C\nzULM4oTfSWYckfpBgNk6AJJRWrgZYszp5hqjJsWYtU/cBhJtNNhfr+PAVJBcxhI4\nl8vI5OHlfaEJPsBeCYFOjQdIqZu7xgX6XpQ81q+mpd/u5RxqDEdRM5TLYAw7r6Uz\nmFj7sdLXMJTq4ZLryBtBWAj9s6aqhUyrswTHfzJ5AoGBAKg1/XIHVDyhtSp74OAy\n0triyXxxjJ5vhtgPsEMmMxgf4XFRe6hBAo52kvfcIrtUWxSWE8bpRomCfnBKsIbA\nwpmc1XPubqK/KLTOi4XfCC8YT8Iy1q63VpB5BZzC6HqULAm4G1YMZmMFl7SOnioC\nOERzZnmRyr2NSEgvBuKNzGqX\n-----END PRIVATE KEY-----\n",
      client_email: "firebase-adminsdk-fbsvc@liga-de-futebol-b31cd.iam.gserviceaccount.com",
      client_id: "105296748525876000852",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40liga-de-futebol-b31cd.iam.gserviceaccount.com",
      universe_domain: "googleapis.com"
    };
  }

  // Inicializar Firebase Admin
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const db = admin.firestore();
  module.exports = { admin, db };

} catch (error) {
  // Apenas log uma vez, não repetir
  if (!global.firebaseErrorLogged) {
    console.error('Erro ao configurar Firebase Admin:', error.message);
    console.log('Para desenvolvimento, você pode usar apenas o Firestore do cliente.');
    console.log('Configure as variáveis de ambiente FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY e FIREBASE_CLIENT_EMAIL');
    global.firebaseErrorLogged = true;
  }

  // Fallback: exportar null para indicar que Firebase Admin não está configurado
  module.exports = { admin: null, db: null };
}
