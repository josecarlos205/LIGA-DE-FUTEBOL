// Configuração do Firebase SDK para o frontend
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAWK-MAArUem82rYhI0xfTAlPqrr8VAStY",
  authDomain: "liga-de-futebol-b31cd.firebaseapp.com",
  projectId: "liga-de-futebol-b31cd",
  storageBucket: "liga-de-futebol-b31cd.firebasestorage.app",
  messagingSenderId: "298249819923",
  appId: "1:298249819923:web:b6e275020d791d04882ce6",
  measurementId: "G-8K3KHN5CKP"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

export { db };
