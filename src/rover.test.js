import Rover from "./rover";

describe("Marrover", () => {
    test("Should return location", () => {
        const location = {x: 0, y: 0, direction: 'N'};
        const rover = new Rover(location);
        const newLocation = rover.getLocation();
        expect(newLocation).toEqual(location);
    })
})