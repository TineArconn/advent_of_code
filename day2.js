import fs from "fs";

let total = 0;
let input = fs.readFileSync("input2.txt", { encoding: "utf8" }).split("\n");

// const max = { red: 12, green: 13, blue: 14 }; // Part 1
input.map((e) => {
  const sets = e.split(": ")[1].split("; ");
  // let possible = true; // Part 1
  let sumOfGame; // Part 2
  let max = { red: 0, green: 0, blue: 0 }; // Part 2

  for (let set of sets) {
    set.split(", ").map((e) => {
      const cubes = e.split(" ");
      // if (max[cubes[1]] < cubes[0]) possible = false; // Part 1

      const cubesColor = Number(cubes[0]); // Part 2
      if (max[cubes[1]] < cubesColor) max[cubes[1]] = cubesColor; // Part 2
    });

    sumOfGame = max.red * max.green * max.blue; // Part 2
  }

  //if (possible) total += i + 1; // Part 1
  total += sumOfGame; // Part 2
});

console.log("\n", "Total :", total);
