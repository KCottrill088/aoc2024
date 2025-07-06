import { occurrences } from "../../src/day01/occurrences";

test.each([
  { ar: [], expected: {} },
  { ar: [ 1 ], expected: {1: 1} },
  { ar: [ 1, 1 ], expected: {1: 2} },
  { ar: [ 1, 2 ], expected: {1: 1, 2: 1} }
])(".occurrences($n)", ({ ar: n, expected }) => {
  expect(occurrences(n)).toStrictEqual(expected);
});
