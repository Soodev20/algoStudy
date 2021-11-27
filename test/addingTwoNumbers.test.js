import { expect } from "chai";
import addingTwoNumbers from "../questions/addNonExistNum.js";

describe("addingTwoNumbers", function () {
  it("should pass case 1", function () {
    expect(
      addingTwoNumbers([2, 1, 3, 4, 1])
    ).to.eql([2, 3, 4, 5, 6, 7]);
  });

  it("should pass case 2", function () {
    expect(
      addingTwoNumbers([5, 0, 2, 7])
    ).to.eql([2, 5, 7, 9, 12]);
  });
});
