window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};
const canvas = document.querySelector("canvas");
canvas.style.border = "2px solid black";
const ctx = canvas.getContext("2d");
const background = new Image();
background.src = "../images/road.png";
const car = new Image();
car.src = "../images/car.png";
let speed = 0;
let carX = 200;
let carY = 525;
const carWidth = 100;
const carHeight = 150;
window.onload = () => {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  // ctx.drawImage(car, carX, carY, carWidth, carHeight);
  function drawCar(carX, carY, carWidth, carHeight) {
    ctx.drawImage(car, carX, carY, carWidth, carHeight);
  }
drawCar(250, 300, carWidth, carHeight)
  document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowLeft") {
      console.log("keyleft");
    } else if (event.key == "ArrowRight") {
      console.log("Keyright");
    }
  });
}

