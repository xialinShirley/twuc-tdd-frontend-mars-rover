export default class Rover {
  constructor() {
    this.location = null;
  }

  setLocation(location) {
    this.location = location;
  }

  getLocation() {
    return this.location;
  }

  turnLeft() {
    this.location.direction = this.getNextDirection(this.location.direction);
  }

  turnRight() {
    this.location.direction = this.getNextDirection(
      this.location.direction,
      true
    );
  }

  getNextDirection(direction, isClosewise) {
    const directions = ["N", "W", "S", "E"];
    const index = directions.indexOf(this.location.direction);
    if (isClosewise) {
      return directions[index - 1] || directions[directions.length - 1];
    }
    return directions[index + 1] || directions[0];
  }

  move() {
    const moveDistance = {
      N: { x: 0, y: 1 },
      S: { x: 0, y: -1 },
      E: { x: 1, y: 0 },
      W: { x: -1, y: 0 },
    };
    this.location.x += moveDistance[this.location.direction].x;
    this.location.y += moveDistance[this.location.direction].y;
  }
}
