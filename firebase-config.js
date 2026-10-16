// // Firebase Configuration

// import { initializeApp } from 
// "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


// import { getAuth } from 
// "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// const firebaseConfig = {

//   apiKey: "AIzaSyCRxqqHAjl-8XMfDG8MI8ZMtSzRW77pQOs",

//   authDomain: "website-45a5b.firebaseapp.com",

//   projectId: "website-45a5b",

//   storageBucket: "website-45a5b.firebasestorage.app",

//   messagingSenderId: "165173585171",

//   appId: "1:165173585171:web:b1b9d8bc6b43b0ddf2e6e6",

//   measurementId: "G-RG9L4EW6WZ"

// };



// const app = initializeApp(firebaseConfig);



// export const auth = getAuth(app);
import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCRxqqHAjl-8XMfDG8MI8ZMtSzRW77pQOs",
  authDomain: "website-45a5b.firebaseapp.com",
  projectId: "website-45a5b",
  storageBucket: "website-45a5b.firebasestorage.app",
  messagingSenderId: "165173585171",
  appId: "1:165173585171:web:b1b9d8bc6b43b0ddf2e6e6",
  measurementId: "G-RG9L4EW6WZ"
};


export const auth = getAuth(
    initializeApp(firebaseConfig)
);