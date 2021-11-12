import { expect } from "chai";
import compressArray from "../questions/compressArray.js";

describe("Deep Equals", function () {
  it("should pass case 1", function () {
    expect(
      compressArray([1, 1, 1, 3, 3, 5, 5, 5, 5, 5, 1])
    ).to.eql([1, 3, 5, 1]);
  });

  it("should pass case 2", function () {
    expect(
      compressArray([1, 3, 3, 5, 1, 5, 5, 4, 4, 4, 5, 5, 1])
    ).to.eql([1, 3, 5, 1, 5, 4, 5, 1]);
  });

  it("should pass case 3", function () {
    expect(
      compressArray([4, 3, 2, 1])
    ).to.eql([4, 3, 2, 1]);
  });
});
