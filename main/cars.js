//CarCode

let xCar = [500, 500, 500, 500, 500, 500];
let yCar = [45, 100, 155, 215, 270, 325];
let carSpeed = [5, 3.3, 4.2, 3, 3.8, 4.6];
let carWidth = 50;
let carLength = 30;

function showCar() {
  for (let i = 0; i < imageCar.length; i++) {
    image(imageCar[i], xCar[i], yCar[i], carWidth, carLength);
  }
}

function carMovement() {
  for (let i = 0; i < imageCar.length; i++) {
    xCar[i] -= carSpeed[i];
  }

  for (let i = 0; i < imageCar.length; i++) {
    if (xCar[i] <= -47) {
      xCar[i] = 500;
    }
  }
}
