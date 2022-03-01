import Rover from "./rover";

describe("Mars rover", () => {
  test("Should get location when rover exists", () => {
    const location = {x: 0, y: 0, direction: 'N'};
    const rover = new Rover();
    rover.setLocation(location);
    expect(rover.getLocation()).toEqual(location);
  })

  test("Should facing W when rover turns left from N", () => {
    const location = {x: 0, y: 0, direction: 'N'};
    const rover = new Rover();
    rover.setLocation(location);
    rover.turnLeft();
    expect(rover.getLocation()).toEqual({ x: 0, y: 0, direction: 'W' });
  })
})