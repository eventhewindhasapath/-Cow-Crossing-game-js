//images and Sounds Variables
let imageRoad;
let imageActor;
let imageCar1;
let imageCar2;
let imageCar3;
let PlayerScore = 0;
let soundTrack;
let colisionSound;
let pointSound;

function preload() {
  imageRoad = loadImage("images/road.png");
  imageActor = loadImage("images/actor-1.png");
  imageCar1 = loadImage("images/car-1.png");
  imageCar2 = loadImage("images/car-2.png");
  imageCar3 = loadImage("images/car-3.png");
  imageCar = [imageCar1, imageCar2, imageCar3, imageCar2, imageCar3, imageCar1];
  soundTrack = loadSound("sounds/soundtrack.mp3");
  colisionSound = loadSound("sounds/colision.mp3");
  pointSound = loadSound("sounds/points.wav");
}

function gamescore() {
  textSize(25);
  text(PlayerScore, 250, 27);
}
