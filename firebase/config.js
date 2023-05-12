// Для роботи із firebase обовʼязково треба ініціалізувати проект
import {initializeApp} from "firebase/app";
// Функція для підключення авторизації в проект
import {getAuth} from "firebase/auth";
// Функція для підключення бази даних у проект
import {getFirestore} from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAP7Rl3yB9EJoQFQjyRSTQ_SOGt2e12BNc",
  authDomain: "rn-social-app-58de3.firebaseapp.com",
  databaseURL: "https://rn-social-app-58de3.firebaseio.com",
  projectId: "rn-social-app-58de3",
  storageBucket: "rn-social-app-58de3.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
