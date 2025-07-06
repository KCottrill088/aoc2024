//tsc
//node ./dist/src/index.js

import { similarity } from "./day01/similarity";

import events from "events";
import fs from "fs";
import readline from "readline";

const infile = `./src/day01/data/${process.argv[2]}.dat`;

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
      // console.log(line);
      let fields = splitLine(line);

      list2.push(Number(fields.pop()));
      list1.push(Number(fields.pop()));
    });
    
    await events.once(rl, 'close');

    // list1.sort();
    // list2.sort();

    // var distance: number[] = [];
    // for(var i = 0; i < list1.length; i++) {
    //   distance.push(Math.abs(list1[i] - list2[i]));
    //   console.log(`${list1[i]}, ${list2[i]}, ${distance[i]}`);
    // }
    // console.log(distance.reduce(add));
    const sim = similarity(list1, list2);
    console.log(sim);
  } catch (err) {
    console.error(err);
  }
})();

function add(reduction: number, element: number): number {
  return reduction + element;
}

function splitLine(line: string): string[] {
  return line.split(/\s+/);
}
