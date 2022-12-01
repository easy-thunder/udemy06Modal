'use strict';
// the modal button
const buttonModal = document.querySelectorAll(".show-modal");
//hides the modal by using CSS to display none. Also hides the overlay until the modal is clicked.
const hideModal = document.querySelector(".hidden");
// creates an X button at the top right of the modal so that you can click out of it
const closeModal = document.querySelector(".close-modal");
//this is the overlay that needs to be displayed when show modal is clicked
const overlay = document.querySelector(".overlay");
// the message content that is hidden.
const modal = document.querySelector(".modal");

// add button functionality to open modal
const openModal = function (){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};


for (let i = 0; i < buttonModal.length; i++)
buttonModal[i].addEventListener("click", openModal);

//add button functionality on X of the modal
const close = function (){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

hideModal.addEventListener("click", close);

// add functionality of escape key being pressed to get out of modal
document.addEventListener("keydown", function(e){
    if(e.key === "Escape" ){
       close();
    };
});

// add functionality of clicking off modal to close modal
overlay.addEventListener("click", close);







