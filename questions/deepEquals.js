/*
 * Detect if the given two JSON-like objects are equal.
 * [DO NOT USE] JSON.parse or JSON.stringify
 */

 export default function deepEquals(original, target) {

  const originalKeys = Object.keys(original);
  const goalKeys = Object.keys(target);

  if (originalKeys.length !== goalKeys.length) {
    return false;
  }

  for (const key in original) {

    if (typeof original[key] === null || typeof target[key] === null) {
      return false;
    }

    if (typeof original[key] === "object" && typeof target[key] === "object") {
      return (deepEquals(original[key], target[key]));
    }

    if (original[key] !== target[key]) {
      return false;
    }

  }

  return true;
}
