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
    }
  }
}