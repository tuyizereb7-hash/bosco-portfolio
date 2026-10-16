import { auth } from "./firebase-config.js";


import {
signInWithEmailAndPassword
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";




const loginForm =
document.getElementById("loginForm");



loginForm.addEventListener("submit",(e)=>{


e.preventDefault();



const email =
document.getElementById("email").value;



const password =
document.getElementById("password").value;




signInWithEmailAndPassword(
auth,
email,
password
)

.then((userCredential)=>{


localStorage.setItem(
"login",
"true"
);



localStorage.setItem(
"userEmail",
userCredential.user.email
);



window.location.href="dashboard.html";


})


.catch(()=>{


document.getElementById("error").innerHTML =
"❌ Email cyangwa password ntabwo ari byo";


});


});