import { expect } from "chai";
import xGapNumbers from "../questions/xGapNumbers.js";

function randomArrayGenerator () {
  const xMax = 10_000_000;
  const xMin = -10_000_000;
  const randomX = Math.floor(Math.random() * (xMax - xMin + 1)) + xMin;
  const randomN = Math.floor(Math.random() * 1001);
  const answer = Array(randomN).fill(randomX).map(index => (index + 1) * randomX);

  return [randomX, randomN, answer];
}

describe("xGapNumbers", function () {
  it("should pass case 1", function () {
    expect(
      xGapNumbers(2, 5)
    ).to.eql([2, 4, 6, 8, 10]);
  });

  it("should pass case 2", function () {
    expect(
      xGapNumbers(4, 3)
    ).to.eql([4, 8, 12]);
  });

  it("should pass case 3", function () {
    expect(
      xGapNumbers(-4, 2)
    ).to.eql([-4, -8]);
  });

  it("should pass random cases", function () {
    // expect(
    //   xGapNumbers(randomX, randomN)
    // ).to.eql(randomAnswer);
  });
});
