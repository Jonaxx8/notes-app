// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2j20fqQqKFNwWp42P4Wulhm3Gzf4Dm4Q",
  authDomain: "notes-app-2871d.firebaseapp.com",
  projectId: "notes-app-2871d",
  storageBucket: "notes-app-2871d.appspot.com",
  messagingSenderId: "629478367711",
  appId: "1:629478367711:web:9f64c2de0f38b08d67e46a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;