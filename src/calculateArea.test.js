import { areaOfCircle, areaOfTriangle, areaOfRectangle } from "./calculateArea";


describe("areaOfTriangle", () => {
  it("should calculate the area of the triangle ", () => {
    expect(areaOfTriangle(3, 4)).toBe(6);
  });
  it('should not calculate the area of the triangle ', () => {
    expect(areaOfTriangle(12, 23)).not.toBe(233);
  });
});

describe("areaOfRectangle", () => {
  it("should calculate the area of the triangle ", () => {
    expect(areaOfRectangle(31, 43)).toBe(1333);

  });
  it("should calculate the area of the triangle ", () => {
    expect(areaOfRectangle(17, 38)).toBe(646);
  });
});

describe("areaOfCircle", () => {
    it("should calculate the area of the circle by given radius", () => {
      expect(areaOfCircle(23)).toBe(1661.9);

    });

    it("should calculate the area of the circle by given radius", () => {
      expect(areaOfCircle(1)).toBe(3.14);

    });
    
  });