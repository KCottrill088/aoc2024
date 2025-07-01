export function occurrences(ar: number[]): { [index: number]: number } {
  let occurrences: { [index: number]: number } = {};

  ar.forEach((el) => {
    occurrences[el] = occurrences[el] === undefined ? 1 : occurrences[el] + 1;
  })

  return occurrences;
}
