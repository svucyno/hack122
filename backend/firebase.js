import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkkyEA21Nz3YDPTLhMl81iN-B4hjv8FXI",
  authDomain: "agrisense-eccf3.firebaseapp.com",
  databaseURL: "https://agrisense-eccf3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agrisense-eccf3",
  storageBucket: "agrisense-eccf3.firebasestorage.app",
  messagingSenderId: "1024159603912",
  appId: "1:1024159603912:web:dbf833adf36bd2a09c99fd"
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 🔥 WRITE FUNCTION
export function addCropData() {
  set(ref(db, 'crops/'), {
    name: "Rice",
    price: 2500
  });
}

// 🔥 READ FUNCTION
export function getCropData() {
  return get(ref(db, 'crops/'));
}