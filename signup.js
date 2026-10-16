// import { auth } from "./firebase-config.js";
import { auth } from "./firebase-config.js";


import {
createUserWithEmailAndPassword
}
from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const signupForm =
document.getElementById("signupForm");



signupForm.addEventListener("submit",(e)=>{


e.preventDefault();



const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;




createUserWithEmailAndPassword(
auth,
email,
password
)

.then(()=>{


alert("Account created successfully 🔥");


window.location.href="login.html";


})


.catch((error)=>{


document.getElementById("error").innerHTML =
error.message;


});


});