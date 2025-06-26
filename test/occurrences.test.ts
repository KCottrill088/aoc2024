import { occurrences } from "../src/occurrences";

test.each([
  { ar: [], expected: {} },
  { ar: [ 1 ], expected: {1: 1} }
])(".occurrences($n)", ({ ar: n, expected }) => {
  expect(occurrences(n)).toStrictEqual(expected);
});
