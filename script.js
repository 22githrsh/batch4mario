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

// game loop
let gameLoop = setInterval(function () {

    if (gameRunning === false) {
        return;
    }

    obstacleX = obstacleX - 5;

    obstacle.style.left = obstacleX + "px";

    if (obstacleX < -40) {
        obstacleX = 800;
        score++;
    }

    scoreText.innerHTML = "Score: " + score;

    let marioBox = mario.getBoundingClientRect();
    let obstacleBox = obstacle.getBoundingClientRect();

    if (
        marioBox.right > obstacleBox.left &&
        marioBox.left < obstacleBox.right &&
        marioBox.bottom > obstacleBox.top &&
        marioBox.top < obstacleBox.bottom
    ) {
        gameOver();
    }

}, 10);


function gameOver() {
    gameRunning = false;
    gameOverBox.style.display = "flex";
}









