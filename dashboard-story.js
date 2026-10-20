// import { db } from "./firebase-config.js";

// import {
//     collection,
//     addDoc
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// const titleInput = document.getElementById("story-title");
// const contentInput = document.getElementById("story-content");
// const publishBtn = document.getElementById("publish-story");


// publishBtn.addEventListener("click", async ()=>{


//     const title = titleInput.value;
//     const content = contentInput.value;


//     if(title === "" || content === ""){
//         alert("Please fill all fields");
//         return;
//     }


//     await addDoc(collection(db,"stories"),{

//         title: title,
//         content: content,
//         author: "Bosco",
//         date: new Date().getFullYear()

//     });


//     alert("Story published successfully");


//     titleInput.value = "";
//     contentInput.value = "";


// });







import { db } from "./firebase-config.js";

import {
    collection,
    addDoc,
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const imageInput = document.getElementById("story-image");
const titleInput = document.getElementById("story-title");
const contentInput = document.getElementById("story-content");
const publishBtn = document.getElementById("publish-story");


// tuzashyiramo id ya story igihe turi editing
let editStoryId = window.editStoryId || null;



publishBtn.addEventListener("click", async ()=>{


    const title = titleInput.value;
    const content = contentInput.value;


    if(title === "" || content === ""){

        alert("Please fill all fields");
        return;

    }



    // UPDATE STORY
    if(editStoryId){


        await updateDoc(doc(db,"stories",editStoryId),{

            title: title,
            content: content

        });


        alert("Story updated successfully");


        editStoryId = null;
        publishBtn.innerText = "Publish Story";


    }



    // NEW STORY
    else{
        await addDoc(collection(db,"stories"),{

    title: title,

    content: content,

    image: imageInput.value,

    author: "Bosco",

    date: new Date().getFullYear()

});


        // await addDoc(collection(db,"stories"),{

        //     title: title,
        //     content: content,
        //     author: "Bosco",
        //     date: new Date().getFullYear()

        // });


        alert("Story published successfully");


    }



    titleInput.value = "";
    contentInput.value = "";


});