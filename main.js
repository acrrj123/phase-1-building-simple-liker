// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hiddenClass = document.getElementById("modal");

const heartButton = document.querySelectorAll(".like-glyph");

//console.log(heartButton)

for (const glyph of heartButton) {
  glyph.addEventListener("click", () => onHeartClick(glyph));
}

function onHeartClick(likeGlyph) {
  //const likeGlyph = e.target;
  mimicServerCall()
    //when on success
    .then(function() {
      //console.log("pass", e.target)
        if (likeGlyph.innerText == EMPTY_HEART) {
          likeGlyph.innerText = FULL_HEART;
          likeGlyph.classList.add("activated-heart");
        } else {
          likeGlyph.innerText = EMPTY_HEART;
          likeGlyph.classList.remove("activated-heart");
        };
    })
    //if error occurs
    .catch(function() {
        hiddenClass.classList.remove("hidden");
        const modalMessage = document.getElementById("modal-message")
        modalMessage.innerHTML = "Server Error";

        setTimeout(function() {
          hiddenClass.classList.add("hidden")
          modalMessage.innerHTML = "";
        }, 3000);
    });
};

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