import { occurrences } from "./occurrences";

export function similarity(l1: number[], l2: number[]): number {
  const occ = occurrences(l2);
  let sim = 0;
   l1.forEach(el => {
    sim += occ[el] === undefined ? 0 : occ[el] * el;
  })
  return sim;
}
