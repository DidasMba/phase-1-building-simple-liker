// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");
});

const emptyHearts = document.querySelectorAll(".like-glyph");

emptyHearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        // Change the heart to a full heart
        heart.innerText = FULL_HEART;
        heart.classList.add("activated-heart");
      })
      .catch((error) => {
        // Display the error modal
        const errorModal = document.getElementById("modal");
        const errorMessage = document.getElementById("modal-message");
        errorMessage.innerText = error;
        errorModal.classList.remove("hidden");

        // Hide the modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });
});

const fullHearts = document.querySelectorAll(".activated-heart");

fullHearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    // Change the heart back to an empty heart
    heart.innerText = EMPTY_HEART;
    heart.classList.remove("activated-heart");
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
