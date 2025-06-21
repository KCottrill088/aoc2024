//npx tsc
//node dist/index.js

import events from "events";
import fs from "fs";
import readline from "readline";

const infile = './src/day01/data/screen.dat';

(async function processLineByLine() {
  try {
    var list1: number[] = [];
    var list2: number[] = [];
    
    const fileStream = fs.createReadStream(infile);

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });

    rl.on("line", (line) => {
      console.log(line);
      let fields = splitLine(line);
      // console.log(`${Number(fields.pop())}, ${fields.pop()}`);

      list2.push(Number(fields.pop()));
      list1.push(Number(fields.pop()));
    });
    
    await events.once(rl, 'close');

    list1.forEach((x) => console.log(x));
    list2.forEach((x) => console.log(x));
  } catch (err) {
    console.error(err);
  }
})();

function splitLine(line: string): string[] {
  return line.split(/\s+/);
}
