import { safe } from "../../src/day02/safe";

test.each([
  { report: [], expected: false },
  { report: [1], expected: false },
  { report: [1, 1], expected: false },
  { report: [1, 2], expected: true },
  { report: [1, 5], expected: false },
  { report: [2, 1], expected: true },
  { report: [5, 1], expected: false },
  { report: [1, 2, 1], expected: false },
  { report: [7, 6, 4, 2, 1], expected: true },
  { report: [1, 2, 7, 8, 9], expected: false },
  { report: [9, 7, 6, 2, 1], expected: false },
  { report: [1, 3, 2, 4, 5], expected: false },
  { report: [8, 6, 4, 4, 1], expected: false },
  { report: [1, 3, 6, 7, 9], expected: true },
])("safe(report)", ({ report, expected }) => {
  expect(safe(report)).toStrictEqual(expected);
});
