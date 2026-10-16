
document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;


    let messages = JSON.parse(localStorage.getItem("messages")) || [];


    messages.push({
        name: name,
        email: email,
        message: message,
        status: "New"
    });


    localStorage.setItem("messages", JSON.stringify(messages));


    alert("Message sent successfully!");

    this.reset();

});





