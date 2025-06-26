import { similarity } from "../src/similarity";

test.each([{ n: 1, expected: [] }])(".factorize($n)", ({ n, expected }) => {
  expect(similarity(n)).toStrictEqual(expected);
});
