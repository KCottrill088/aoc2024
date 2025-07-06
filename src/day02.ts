//tsc
//node ./dist/src/day02.js <screen/input1>

import events from "events";
import fs from "fs";
import readline from "readline";

import { safe } from "./day02/safe";

const infile = `./src/day02/data/${process.argv[2]}.dat`;

(async function processLineByLine() {
  let reports: number[][] = [];
  try {
    const fileStream = fs.createReadStream(infile);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    rl.on("line", (line) => {
      let fields = splitLine(line);
      let report: number[] = fields.map((i) => Number(i));
      reports.push(report);
    });

    await events.once(rl, "close");
  } catch (err) {
    console.error(err);
  }

  var safe_reports = reports.reduce(
    (accumulator, report) => accumulator + (safe(report) ? 1 : 0),
    0
  );

  console.log(safe_reports);
})();

function splitLine(line: string): string[] {
  return line.split(/\s+/);
}
