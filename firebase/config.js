import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAP7Rl3yB9EJoQFQjyRSTQ_SOGt2e12BNc",
  authDomain: "rn-social-app-58de3.firebaseapp.com",
  projectId: "rn-social-app-58de3",
  storageBucket: "rn-social-app-58de3.appspot.com",
  messagingSenderId: "962545339421",
  appId: "1:962545339421:web:be935755e8c20fb4624af4",
  measurementId: "G-6CSW9G5K09",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
