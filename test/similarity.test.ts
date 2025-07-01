import { similarity } from "../src/similarity";

test.each([
  { n: [1], ar: [], expected: 0 },
  { n: [1], ar: [ 1 ], expected: 1 }
])(".similarity($n, ar)", ({ n, ar, expected }) => {
  expect(similarity(n, ar)).toStrictEqual(expected);
});
