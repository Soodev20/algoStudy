import { expect } from "chai";
import maxMinLotto from "../questions/maxMinLotto.js";

describe("maxMinLotto", function () {
  it("should pass case 1", function () {
    expect(
      maxMinLotto([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
    ).to.eql([3, 5]);
  });

  it("should pass case 2", function () {
    expect(
      maxMinLotto([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])
    ).to.eql([1, 6]);
  });

  it("should pass case 3", function () {
    expect(
      maxMinLotto([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])
    ).to.eql([1, 1]);
  });
});
