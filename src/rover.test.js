import Rover from "./rover";

describe("Mars rover", () => {
  test("Should get location when rover exists", () => {
    const location = {x: 0, y: 0, location: 'N'};
    const rover = new Rover();
    rover.setLocation(location);
    expect(rover.getLocation()).toEqual(location);
  })
})