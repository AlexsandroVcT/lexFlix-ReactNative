import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyAoB1ZioUBuYgrt_E4QgA72UWdG0ZZ0zg4",
  authDomain: "fullturealexflix.firebaseapp.com",
  projectId: "fullturealexflix",
  storageBucket: "fullturealexflix.appspot.com",
  messagingSenderId: "440133700015",
  appId: "1:440133700015:web:42d52f33602bc826f1475a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
