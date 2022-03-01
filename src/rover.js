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
    this.location.direction = this.getNextDirection(this.location.direction, true);
  }

  getNextDirection(direction, isClosewise) {
    const directions = ['N', 'W', "S", 'E'];
    const index = directions.indexOf(this.location.direction);
    if (isClosewise) {
      return directions[index - 1] || directions[directions.length - 1];
    }
    return directions[index + 1] || directions[0];
  }
}