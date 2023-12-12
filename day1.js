import fs from "fs";

let total = 0;
let lines = fs.readFileSync("input1.txt", { encoding: "utf8" }).split("\n");

// Part 2 ---
// Keep first and last letter (case "eightwo")
const dict = [
  ["one", "o1e"],
  ["two", "t2o"],
  ["three", "t3e"],
  ["four", "f4r"],
  ["five", "f5e"],
  ["six", "s6x"],
  ["seven", "s7n"],
  ["eight", "e8t"],
  ["nine", "n9e"],
];

for (let i of dict) {
  lines = lines.map((e) => e.replaceAll(i[0], i[1]));
}
// ----------

lines.map((e, i) => {
  const first = e.match(/^[a-z]*(?<first>[0-9])/);
  const last = e.match(/(?<last>[0-9])[a-z]*$/);
  const number = Number(first.groups.first + last.groups.last);
  total += number;
  console.log(i, "-", e, ":", number);
});

console.log("\n", "Total :", total);
