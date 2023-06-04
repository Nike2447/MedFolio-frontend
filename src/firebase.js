import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBBz4t3FZfJGxeD5XupCA-LjV8j6YrbgHk",
  authDomain: "uploadingfile-d633c.firebaseapp.com",
  projectId: "uploadingfile-d633c",
  storageBucket: "uploadingfile-d633c.appspot.com",
  messagingSenderId: "350809122241",
  appId: "1:350809122241:web:f6e915bba3a3b906e8fb40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)