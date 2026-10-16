// ==========================
// PORTFOLIO SYSTEM
// ==========================


// CHECK LOGIN STATUS

const isLoggedIn = localStorage.getItem("login");

const loginLink = document.getElementById("loginLink");

const logoutBtn = document.getElementById("logoutBtn");



// SHOW LOGIN OR LOGOUT

if(isLoggedIn === "true"){


    if(loginLink){

        loginLink.style.display="none";

    }


    if(logoutBtn){

        logoutBtn.style.display="block";

    }


}
else{


    if(loginLink){

        loginLink.style.display="block";

    }


    if(logoutBtn){

        logoutBtn.style.display="none";

    }


}





// LOGOUT

if(logoutBtn){


logoutBtn.addEventListener("click",()=>{


    localStorage.removeItem("login");

    localStorage.removeItem("currentUser");


    window.location.href="login.html";


});


}





// ==========================
// TYPING EFFECT
// ==========================


const text = "Frontend Developer";


let index = 0;


function typing(){


    const element = document.querySelector(".home-text h1:nth-of-type(2)");


    if(element && index < text.length){


        element.innerHTML += text.charAt(index);

        index++;


        setTimeout(typing,150);


    }


}


// start typing

typing();







// ==========================
// ACTIVE NAVBAR
// ==========================


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");



window.addEventListener("scroll",()=>{


let current="";



sections.forEach(section=>{


const sectionTop = section.offsetTop - 150;


if(scrollY >= sectionTop){


current = section.getAttribute("id");


}



});



navLinks.forEach(link=>{


link.classList.remove("active");


if(link.getAttribute("href") === "#" + current){


link.classList.add("active");


}



});



});






// ==========================
// CONTACT FORM VALIDATION
// ==========================


const contactForm = document.getElementById("contactForm");



if(contactForm){


contactForm.addEventListener("submit",(e)=>{


e.preventDefault();



const name =
document.getElementById("name").value.trim();


const email =
document.getElementById("email").value.trim();


const message =
document.getElementById("message").value.trim();




if(
name === "" ||
email === "" ||
message === ""
){


alert("Please fill all fields");


return;


}




alert("Message sent successfully!");



contactForm.reset();



});


}