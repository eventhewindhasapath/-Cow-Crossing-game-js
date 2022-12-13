//actorCode

let yActor = 370;
let xActor = 100;
let collide = false;

function showActor() {
  image(imageActor, xActor, yActor, 25, 25);
}

function actorMovement() {
  if (keyIsDown(UP_ARROW)) {
    yActor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (mayMove()) {
      yActor += 3;
    }
  }
}

function mayMove() {
  return yActor < 370;
}

function collideVerify() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imageCar.length; i++) {
    collide = collideRectCircle(
      xCar[i],
      yCar[i],
      carWidth,
      carLength,
      xActor + 12,
      yActor + 12,
      25
    );
    if (collide) {
      colisionSound.play();
      yActor = 370;
    }
    if (collide) {
      if (stopAtZero()) {
        PlayerScore -= 1;
      }
    }
  }
  function stopAtZero() {
    return PlayerScore > 0;
  }
}

function scorePoint() {
  if (yActor < 10) {
    pointSound.play();
    PlayerScore += 1;
  }
  if (yActor < 10) {
    yActor = 400;
  }
}
