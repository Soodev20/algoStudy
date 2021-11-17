import { expect } from "chai";
import addDivisor from "../questions/addDivisor.js";

describe("addDivisor", function () {
  it("should pass case 1", function () {
    expect(addDivisor(12)).to.eql(28);
  });

  it("should pass case 2", function () {
    expect(addDivisor(5)).to.eql(6);
  });

  it("should pass case 3", function () {
    expect(addDivisor(0)).to.eql(0);
  });

  it("should pass case 4", function () {
    expect(addDivisor(1)).to.eql(1);
  });

  it("should pass case 5", function () {
    expect(addDivisor(2)).to.eql(3);
  });
});
