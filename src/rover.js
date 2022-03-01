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
    const directions = ['N', 'W', "S", 'E'];
    const index = directions.indexOf(this.location.direction);
    this.location.direction = directions[index + 1] || directions[0];
  }

  turnRight() {
    const directions = ['N', 'W', "S", 'E'];
    const index = directions.indexOf(this.location.direction);
    this.location.direction = directions[index - 1] || directions[directions.length - 1];
  }
}