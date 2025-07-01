import { occurrences } from "./occurrences";

export function similarity(n: number[], ar: number[]): number {
  const occ = occurrences(ar);
  let similarity = 0;
   n.forEach(el => {
    similarity += occ[el] === undefined ? 0 : occ[el];
  })
  return similarity;
}
