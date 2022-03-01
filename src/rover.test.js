import Rover from "./rover";

describe("Mars rover", () => {
  test("Should get location when rover exists", () => {
    const location = {x: 0, y: 0, direction: 'N'};
    const rover = new Rover();
    rover.setLocation(location);
    expect(rover.getLocation()).toEqual(location);
  })

  test.each([
    {location: {x: 0, y: 0, direction: 'N'}, expected: {x: 0, y: 0, direction: 'W'}},
    {location: {x: 0, y: 0, direction: 'W'}, expected: {x: 0, y: 0, direction: 'S'}},
    {location: {x: 0, y: 0, direction: 'S'}, expected: {x: 0, y: 0, direction: 'E'}},
    {location: {x: 0, y: 0, direction: 'E'}, expected: {x: 0, y: 0, direction: 'N'}},
  ])("Should follow rules %j when rover turns left", ({location, expected}) => {
    const rover = new Rover();
    rover.setLocation(location);
    rover.turnLeft();
    expect(rover.getLocation()).toEqual(expected);
  })

  test.each([
    {location: {x: 0, y: 0, direction: 'N'}, expected: {x: 0, y: 0, direction: 'E'}},
    {location: {x: 0, y: 0, direction: 'W'}, expected: {x: 0, y: 0, direction: 'N'}},
    {location: {x: 0, y: 0, direction: 'S'}, expected: {x: 0, y: 0, direction: 'W'}},
    {location: {x: 0, y: 0, direction: 'E'}, expected: {x: 0, y: 0, direction: 'S'}},
  ])("Should follow rules %j when rover turns right", ({location, expected}) => {
    const rover = new Rover();
    rover.setLocation(location);
    rover.turnRight();
    expect(rover.getLocation()).toEqual(expected);
  })

  test.each([
    {location: {x: 1, y: 1, direction: 'N'}, expected: {x: 1, y: 2, direction: 'N'}},
    {location: {x: 1, y: 1, direction: 'E'}, expected: {x: 2, y: 1, direction: 'E'}},
    {location: {x: 1, y: 1, direction: 'W'}, expected: {x: 0, y: 1, direction: 'W'}},
    {location: {x: 1, y: 1, direction: 'S'}, expected: {x: 1, y: 0, direction: 'S'}},
  ])("Should follow rules %j when rover moves", ({ location, expected }) => {
    const rover = new Rover();
    rover.setLocation(location);
    rover.move();
    expect(rover.getLocation()).toEqual(expected);
  })
})
