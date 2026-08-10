let mario = document.querySelector(".mario");
let obstacle = document.querySelector(".obstacle");
let gameOverBox = document.querySelector(".game-over");
let button = document.querySelector("button");
let scoreText = document.querySelector(".score");

let marioX = 50;
let marioY = 0;

let obstacleX = 800;

let isJumping = false;
let gameRunning = true;

let score = 0;



document.addEventListener("keydown", function (e) {

  if (gameRunning === false) {
    return;
  }




  if (e.key === "d" || e.key === "ArrowRight") {

    marioX = marioX + 10;

    if (marioX > 750) {
      marioX = 750;
    }

    mario.style.left = marioX + "px";
  }




  if (e.key === "a" || e.key === "ArrowLeft") {

    marioX = marioX - 10;

    if (marioX < 0) {
      marioX = 0;
    }

    mario.style.left = marioX + "px";
  }


  // JUMP

  if (
    e.key === " " ||
    e.key === "w" ||
    e.key === "ArrowUp"
  ) {

    jump();

  }

});



function jump() {

  if (isJumping === true) {
    return;
  }

  isJumping = true;


  let jumpUp = setInterval(function () {

    marioY = marioY + 10;

    mario.style.bottom = marioY + "px";


    if (marioY >= 130) {

      clearInterval(jumpUp);


      let jumpDown = setInterval(function () {

        marioY = marioY - 10;

        mario.style.bottom = marioY + "px";


        if (marioY <= 0) {

          marioY = 0;

          mario.style.bottom = "0px";

          clearInterval(jumpDown);

          isJumping = false;

        }

      }, 20);

    }

  }, 20);

}


let gameLoop = setInterval(function () {

  

}, 20);



function gameOver() {

  gameRunning = false;

  gameOverBox.style.display = "flex";

}




button.addEventListener("click", function () {

  marioX = 50;
  marioY = 0;

  obstacleX = 800;

  score = 0;


  mario.style.left = "50px";
  mario.style.bottom = "0px";

  obstacle.style.left = "800px";

  scoreText.innerHTML = "Score: 0";

  gameOverBox.style.display = "none";

  gameRunning = true;

});
- [ ] 
