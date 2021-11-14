import { expect } from "chai";
import addNonExistNum from "../questions/addNonExistNum.js";

function randomArrayGenerator () {
  const totalSum = 45;
  const storage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomCount = Math.floor(Math.random() * 9);

  while(randomCount >= 0) {
    const randomNum =  Math.floor(Math.random() * storage.length - 1);

    totalSum -= randomNum;
    storage.splice(storage.indexOf(randomNum));
    randomCount--;
  }

  return [storage, totalSum];
}
const randomArray = randomArrayGenerator[0];
const randomSum = randomArrayGenerator[1];

describe("addNonExistNum", function () {
  it("should pass case 1", function () {
    expect(
      addNonExistNum([1, 2, 3, 4, 6, 7, 8, 0])
    ).to.eql(14);
  });

  it("should pass case 2", function () {
    expect(
      addNonExistNum([5, 8, 4, 0, 6, 7, 9])
    ).to.eql(6);
  });

  it("should pass case 3", function () {
    expect(randomArray).to.eql(randomSum);
  });
});
