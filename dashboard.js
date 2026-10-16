import { auth } from "./firebase-config.js";

import {
onAuthStateChanged,
signOut
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// CHECK LOGIN

onAuthStateChanged(auth,(user)=>{

if(user){

document.getElementById("username").innerHTML =
user.email;


}else{

window.location.href="login.html";

}

});



// LOGOUT

document
.getElementById("logout")
.addEventListener("click",()=>{


signOut(auth)
.then(()=>{

window.location.href="login.html";

});


});



// SIDEBAR BUTTONS


// document.getElementById("dashboardBtn")
// .onclick=()=>{
// alert("You are already on Dashboard");
// };


// document.getElementById("profileBtn")
// .onclick=()=>{
// alert("Profile page coming soon");
// };


// document.getElementById("projectsBtn")
// .onclick=()=>{
// alert("Projects page coming soon");
// };


// document.getElementById("skillsBtn")
// .onclick=()=>{
// alert("Skills page coming soon");
// };


// document.getElementById("blogBtn")
// .onclick=()=>{
// alert("Blog page coming soon");
// };


// document.getElementById("contactBtn")
// .onclick=()=>{
// alert("Contact messages coming soon");
// };


// document.getElementById("settingsBtn")
// .onclick=()=>{
// alert("Settings coming soon");
// };
document.getElementById("dashboardBtn")
.onclick=()=>{
window.location.href="dashboard.html";
};


document.getElementById("profileBtn")
.onclick=()=>{
window.location.href="profile.html";
};


document.getElementById("projectsBtn")
.onclick=()=>{
window.location.href="projects.html";
};


document.getElementById("skillsBtn")
.onclick=()=>{
window.location.href="skills.html";
};


document.getElementById("blogBtn")
.onclick=()=>{
window.location.href="blog.html";
};


document.getElementById("contactBtn")
.onclick=()=>{
window.location.href="contact.html";
};


document.getElementById("settingsBtn")
.onclick=()=>{
window.location.href="settings.html";
};