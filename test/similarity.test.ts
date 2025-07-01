import { similarity } from "../src/similarity";

test.each([
  { l1: [1], l2: [], expected: 0 },
  { l1: [1], l2: [ 1 ], expected: 1 },
  { l1: [2], l2: [ 1, 2 ], expected: 2 },
  { l1: [2], l2: [ 2, 1, 2], expected: 4},
  { l1: [3], l2: [ 4, 3, 5, 3, 9, 3 ], expected: 9 },
  { l1: [3, 4, 2, 1, 3, 3], l2: [ 4, 3, 5, 3, 9, 3 ], expected: 31 }
])(".similarity($n, ar)", ({ l1, l2, expected }) => {
  expect(similarity(l1, l2)).toStrictEqual(expected);
});
