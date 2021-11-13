import { expect } from "chai";
import plusMinus from "../questions/plusMinus.js";

describe("Deep Equals", function () {
  it("should pass case 1", function () {
    expect(
      plusMinus([4, 7, 12], [true, false, true])
    ).to.eql(9);
  });

  it("should pass case 2", function () {
    expect(
      plusMinus([1, 2, 3], [false, false, true])
    ).to.eql(0);
  });
});
