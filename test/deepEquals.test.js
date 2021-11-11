import { expect } from "chai";
import deepEquals from "../questions/deepEquals.js";

describe("Deep Equals", function () {
  it("should pass case 1", function () {
    expect(
      deepEquals({ name: "ham", age: 31 }, { name: "ham", age: 31 })
    ).to.eql(true);
  });

  it("should pass case 2", function () {
    const original = {
      name: "ham",
      detail: { nationality: "Korean", age: 31 },
    };
    const goal = {
      name: "ham",
      detail: { nationality: "Korean", age: 31 },
    };

    expect(deepEquals(original, goal)).to.eql(true);
  });

  it("should pass case 3", function () {
    const original = {
      name: "ham",
      detail: { nationality: "Korean", age: 31 },
    };
    const goal = {
      name: "ham",
      detail: { nationality: "Korean", age: 30 },
    };

    expect(deepEquals(original, goal)).to.eql(false);
  });

  it("should pass case 4", function () {
    const original = {
      name: "ham",
      detail: ["Korean", "age", 31],
    };
    const goal = {
      name: "ham",
      detail: ["Korean", { age: 31 }],
    };

    expect(deepEquals(original, goal)).to.eql(false);
  });

  it("should pass case 5", function () {
    const original = {
      name: "ham",
      detail: ["Korean", { age: 31, children: 3 }],
    };
    const goal = {
      name: "ham",
      detail: ["Korean", { age: 31 }, { children: 3 }],
    };

    expect(deepEquals(original, goal)).to.eql(false);
  });

  it("should pass case 6", function () {
    const original = {
      name: "ham",
      detail: ["Korean", 12345, { age: 31, children: 3 }],
    };
    const target = {
      name: "ham",
      detail: ["Korean", 12345, { age: 31, children: 4 }],
    };

    expect(deepEquals(original, target)).to.eql(false);
  });

  it("should pass case 7", function () {
    const original = {
      name: "ham",
      detail: ["Korean",
        { a: 1, b: 2, c: [1, 2, 3, { h: 1, e: 2, e: 3 }] },
      ],
    };
    const goal = {
      name: "ham",
      detail: ["Korean",
        { a: 1, b: 2, c: [1, 2, 3, { h: 1, e: 2, e: 3 }] },
      ],
    };

    expect(deepEquals(original, goal)).to.eql(true);
  });

  it("should pass case 8", function () {
    const original = {
      name: "ham",
      detail: ["Korean",
        { a: 1, b: 2, c: [1, 2, 3, { h: 1, e: 2, e: 3 }] },
      ],
    };
    const target = {
      name: "ham",
      detail: ["Korean",
        { a: 1, b: 2, c: [1, 2, 3, { h: 1, e: 2, e: 2 }] },
      ],
    };

    expect(deepEquals(original, target)).to.eql(false);
  });

  it("should pass case 9", function () {
    const original = {
      name: "ham",
      detail: ["Korean",
        [12345],
        { a: 1, b: 2, c: [1, 2, 3, { h: 1, e: 2, e: 3 }] },
      ],
    };
    const target = {
      name: "ham",
      detail: ["Korean",
        [12345],
        { a: 1, b: 2, c: [1, 2, 3, { h: 1, e: 2, e: 3 }] },
      ],
    };

    expect(deepEquals(original, target)).to.eql(true);
  });
});
