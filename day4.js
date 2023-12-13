import fs from "fs";

let total = 0;
let lines = fs.readFileSync("input4.txt", { encoding: "utf8" }).split("\n");

let winningByLines = []; // Part 2

lines.map((e) => {
  const card = e.split(":")[1].split("|");
  const winningNumbers = card[0].trim().split(/ +/g);
  const listNumbers = card[1].trim().split(/ +/g);
  let subTotal = 0;

  for (let n of winningNumbers) {
    //if (listNumbers.indexOf(n) !== -1) subTotal = (subTotal === 0) ? 1 : subTotal * 2 // Part 1
    if (listNumbers.indexOf(n) !== -1) subTotal += 1; // Part 2
  }
  winningByLines.push(subTotal); // Part 2
  //total += subTotal // Part 1
});

// Part 2

const recursiveCount = (subList, completeList, actualPosition) => {
  let subTotal = 0;
  for (let i in subList) {
    const index = Number(i);
    const nextPart = completeList.slice(
      actualPosition + index + 1,
      actualPosition + index + subList[i] + 1
    );
    subTotal +=
      1 + recursiveCount(nextPart, completeList, actualPosition + index + 1);
  }
  return subTotal;
};

for (let i in winningByLines) {
  const cardIndex = Number(i);
  const nextPart = winningByLines.slice(
    cardIndex + 1,
    cardIndex + 1 + winningByLines[cardIndex]
  );
  total += 1 + recursiveCount(nextPart, winningByLines, cardIndex + 1);
}

console.log("\n", "Total :", total);
