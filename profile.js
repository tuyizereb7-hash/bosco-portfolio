import {auth} from "./firebase-config.js";


import {
onAuthStateChanged
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



onAuthStateChanged(auth,(user)=>{


if(user){

document.getElementById("email").innerHTML =
user.email;


}else{

window.location.href="login.html";

}


});



document.getElementById("backBtn")
.onclick=()=>{

window.location.href="dashboard.html";

};



document.getElementById("editBtn")
.onclick=()=>{

alert("Edit Profile feature coming soon");

};