
// import { db } from "./firebase-config.js";

// import {
//     collection,
//     getDocs
// } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// const storiesContainer = document.getElementById("stories-container");

// const searchInput = document.getElementById("search-story");



// const modal = document.getElementById("story-modal");

// const modalTitle = document.getElementById("modal-title");

// const modalContent = document.getElementById("modal-content");

// const closeModal = document.getElementById("close-modal");



// let allStories = [];



// // DISPLAY STORIES

// function displayStories(stories){


//     storiesContainer.innerHTML = "";



//     stories.forEach((story)=>{



//         const shortContent = story.content.length > 120

//         ? story.content.substring(0,120) + "..."

//         : story.content;



//         storiesContainer.innerHTML += `


//         <div class="blog-card">


//             <img

//                 src="${story.image}"

//                 alt="${story.title}"

//                 class="blog-image"

//             >



//             <h2>

//                 ${story.title}

//             </h2>



//             <p>

//                 ${shortContent}

//             </p>



//             <small>

//                 By ${story.author} | ${story.date}

//             </small>



//             <br><br>



//             <button

//             class="read-more-btn"

//             data-title="${story.title}"

//             data-content="${story.content}"

//             >

//                 Read More

//             </button>



//         </div>


//         `;


//     });




//     const readButtons = document.querySelectorAll(".read-more-btn");



//     readButtons.forEach((button)=>{


//         button.addEventListener("click",()=>{


//             modalTitle.innerText = button.dataset.title;


//             modalContent.innerText = button.dataset.content;



//             modal.style.display = "flex";


//         });


//     });


// }






// // GET STORIES FROM FIRESTORE

// async function getStories(){



//     const querySnapshot = await getDocs(

//         collection(db,"stories")

//     );



//     allStories = [];



//     querySnapshot.forEach((doc)=>{


//         allStories.push(doc.data());


//     });



//     displayStories(allStories);


// }







// // SEARCH STORIES

// searchInput.addEventListener("input",()=>{



//     const keyword = searchInput.value.toLowerCase();




//     const filteredStories = allStories.filter((story)=>{



//         return (

//             story.title.toLowerCase().includes(keyword)

//             ||

//             story.content.toLowerCase().includes(keyword)

//         );


//     });



//     displayStories(filteredStories);



// });








// // CLOSE MODAL


// closeModal.onclick = ()=>{


//     modal.style.display = "none";


// };





// window.onclick = (event)=>{



//     if(event.target === modal){


//         modal.style.display = "none";


//     }


// };






// // START BLOG

// getStories();





import { db } from "./firebase-config.js";

import {
    collection,
    getDocs,
    addDoc,
    query,
    where
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const storiesContainer = document.getElementById("stories-container");

const searchInput = document.getElementById("search-story");


// Modal

const modal = document.getElementById("story-modal");

const modalTitle = document.getElementById("modal-title");

const modalContent = document.getElementById("modal-content");

const closeModal = document.getElementById("close-modal");


// Comments

const commentName = document.getElementById("comment-name");

const commentMessage = document.getElementById("comment-message");

const sendComment = document.getElementById("send-comment");

const commentsList = document.getElementById("comments-list");



let allStories = [];

let currentStoryId = "";




// DISPLAY STORIES

function displayStories(stories){


    storiesContainer.innerHTML = "";



    stories.forEach((story)=>{


        const shortContent = story.content.length > 120

        ? story.content.substring(0,120) + "..."

        : story.content;



        storiesContainer.innerHTML += `


        <div class="blog-card">


            <img

            src="${story.image}"

            alt="${story.title}"

            class="blog-image"

            >



            <h2>

            ${story.title}

            </h2>



            <p>

            ${shortContent}

            </p>



            <small>

            By ${story.author} | ${story.date}

            </small>



            <br><br>



            <button

            class="read-more-btn"

            data-id="${story.title}"

            data-title="${story.title}"

            data-content="${story.content}"

            >

            Read More

            </button>



        </div>


        `;



    });




    const readButtons = document.querySelectorAll(".read-more-btn");



    readButtons.forEach((button)=>{


        button.addEventListener("click",()=>{


            currentStoryId = button.dataset.id;



            modalTitle.innerText = button.dataset.title;


            modalContent.innerText = button.dataset.content;



            modal.style.display = "flex";



            loadComments(currentStoryId);



        });



    });



}







// GET STORIES

async function getStories(){


    const snapshot = await getDocs(

        collection(db,"stories")

    );



    allStories = [];



    snapshot.forEach((doc)=>{


        allStories.push(doc.data());


    });



    displayStories(allStories);



}








// SEARCH

searchInput.addEventListener("input",()=>{


    const keyword = searchInput.value.toLowerCase();



    const filteredStories = allStories.filter((story)=>{


        return (

            story.title.toLowerCase().includes(keyword)

            ||

            story.content.toLowerCase().includes(keyword)

        );


    });



    displayStories(filteredStories);



});









// LOAD COMMENTS

async function loadComments(storyId){


    commentsList.innerHTML = "";



    const q = query(

        collection(db,"comments"),

        where("storyId","==",storyId)

    );



    const snapshot = await getDocs(q);




    snapshot.forEach((doc)=>{


        const comment = doc.data();



        commentsList.innerHTML += `


        <div class="comment">


            <b>

            ${comment.name}

            </b>


            <p>

            ${comment.message}

            </p>



            <small>

            ${comment.date}

            </small>


        </div>


        `;



    });



}








// SEND COMMENT

sendComment.addEventListener("click", async ()=>{


    if(

        commentName.value === "" ||

        commentMessage.value === ""

    ){


        alert("Please fill all fields");

        return;


    }




    await addDoc(collection(db,"comments"),{


        storyId: currentStoryId,

        name: commentName.value,

        message: commentMessage.value,

        date: new Date().getFullYear()


    });




    commentName.value = "";

    commentMessage.value = "";



    loadComments(currentStoryId);



});







// CLOSE MODAL


closeModal.onclick = ()=>{


    modal.style.display = "none";


};





window.onclick = (event)=>{


    if(event.target === modal){


        modal.style.display = "none";


    }


};






// START

getStories();