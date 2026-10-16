
// let messages = JSON.parse(localStorage.getItem("messages")) || [];

// let table = document.getElementById("messageTable");


// messages.forEach(function(msg){

//     let row = document.createElement("tr");

//     row.innerHTML = `
//         <td>${msg.name}</td>
//         <td>${msg.email}</td>
//         <td>${msg.message}</td>
//         <td>${msg.status}</td>
//     `;

//     table.appendChild(row);

// });





















let messages = JSON.parse(localStorage.getItem("messages")) || [];

let table = document.getElementById("messageTable");


messages.forEach(function(msg, index){

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${msg.message}</td>
        <td>${msg.status}</td>
        <td>
            <button class="delete-btn" onclick="deleteMessage(${index})">
    Delete
</button>
        </td>
    `;

    table.appendChild(row);

});


function deleteMessage(index){

    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.splice(index, 1);

    localStorage.setItem("messages", JSON.stringify(messages));

    location.reload();

}