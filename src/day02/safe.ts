export function safe(report: number[]): boolean {
  let safe = false;
  let prev_diff = 0;
  for (let i = 1; i < report.length; i++) {
    let diff = report[i] - report[i - 1];
    if (diff > 0) {
      if (prev_diff < 0) {
        safe = false;
        break;
      }
      safe = diff > 0 && diff < 4;
    } else {
      if (prev_diff > 0) {
        safe = false;
        break;
      }
      safe = diff < 0 && diff > -4;
    }
    if (!safe) break;
    prev_diff = diff;
  }
  return safe;
}
