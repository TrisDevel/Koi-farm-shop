import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Cấu hình Firebase của bạn
const firebaseConfig = {
    apiKey: "AIzaSyBHMFf8H2NNa5C6ox832YcE_bfIVpamgL0",
    authDomain: "koi-farm-shop-fc559.firebaseapp.com",
    projectId: "koi-farm-shop-fc559",
    storageBucket: "koi-farm-shop-fc559.appspot.com",
    messagingSenderId: "721649282248",
    appId: "1:721649282248:web:11ef91190cf39989c089fd",
    measurementId: "G-BZT6CF881M"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
