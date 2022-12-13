function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
}

function draw() {
  background(imageRoad);
  showActor();
  showCar();
  carMovement();
  actorMovement();
  collideVerify();
  scorePoint();
  gamescore();
}
