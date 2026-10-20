import { db } from "./firebase-config.js";

import {
    collection,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const storiesContainer = document.getElementById("my-stories-container");


const titleInput = document.getElementById("story-title");
const contentInput = document.getElementById("story-content");
const publishBtn = document.getElementById("publish-story");


async function loadMyStories(){

    const snapshot = await getDocs(collection(db, "stories"));


    storiesContainer.innerHTML = "";


    snapshot.forEach((item)=>{


        const story = item.data();


        storiesContainer.innerHTML += `

        <div class="story-card">

            <h3>${story.title}</h3>

            <p>${story.content}</p>

            <small>
            By ${story.author} | ${story.date}
            </small>

            <br><br>


            <button class="edit-btn" data-id="${item.id}">
                Edit
            </button>


            <button class="delete-btn" data-id="${item.id}">
                Delete
            </button>


        </div>

        `;


    });



    // EDIT BUTTON

    const editButtons = document.querySelectorAll(".edit-btn");


    editButtons.forEach((button)=>{


        button.addEventListener("click", async ()=>{


            const id = button.dataset.id;


            const storyDoc = snapshot.docs.find(
                (doc)=> doc.id === id
            );


            const story = storyDoc.data();


            titleInput.value = story.title;

            contentInput.value = story.content;


            // tubika id kugira ngo update ikore
            window.editStoryId = id;


            publishBtn.innerText = "Update Story";


            window.scrollTo({
                top:0,
                behavior:"smooth"
            });


        });


    });



    // DELETE BUTTON

    const deleteButtons = document.querySelectorAll(".delete-btn");


    deleteButtons.forEach((button)=>{


        button.addEventListener("click", async ()=>{


            const id = button.dataset.id;


            const confirmDelete = confirm(
                "Are you sure you want to delete this story?"
            );


            if(confirmDelete){


                await deleteDoc(doc(db,"stories",id));


                alert("Story deleted");


                loadMyStories();

            }


        });


    });


}


loadMyStories();








// import { db } from "./firebase-config.js";

// import {
//     collection,
//     getDocs,
//     deleteDoc,
//     doc
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// const storiesContainer = document.getElementById("my-stories-container");


// async function loadMyStories(){

//     const snapshot = await getDocs(collection(db, "stories"));


//     storiesContainer.innerHTML = "";


//     snapshot.forEach((item)=>{


//         const story = item.data();


//         storiesContainer.innerHTML += `

//         <div class="story-card">

//             <h3>${story.title}</h3>

//             <p>${story.content}</p>

//             <small>
//             By ${story.author} | ${story.date}
//             </small>


//             <br>
//             <button class="edit-btn" data-id="${item.id}">
//     Edit
// </button>

// <button class="delete-btn" data-id="${item.id}">
//     Delete
// </button>


//         </div>

//         `;


//     });



//     const deleteButtons = document.querySelectorAll(".delete-btn");


//     deleteButtons.forEach((button)=>{


//         button.addEventListener("click", async ()=>{


//             const id = button.dataset.id;


//             const confirmDelete = confirm(
//                 "Are you sure you want to delete this story?"
//             );


//             if(confirmDelete){


//                 await deleteDoc(doc(db,"stories",id));


//                 alert("Story deleted");


//                 loadMyStories();

//             }


//         });


//     });


// }


// loadMyStories();