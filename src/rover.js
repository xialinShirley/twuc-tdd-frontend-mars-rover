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
    if (this.location.direction === 'N') {
      this.location.direction = 'W';
    } else if (this.location.direction === 'W') {
      this.location.direction = 'S';
    } else if (this.location.direction === 'S') {
      this.location.direction = "E";
    } else {
      this.location.direction = 'N';
    }
  }
}