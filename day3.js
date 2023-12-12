import fs from "fs";

let total = 0;
let lines = fs.readFileSync("input3.txt", { encoding: "utf8" }).split("\n");

const isNumber = /[0-9]+/g;
const isSymbol = (char) => char !== "." && !/[0-9]/.test(char);
const haveSymbol = (str) =>
  str
    .split("")
    .reduce(
      (haveSymbol, e) =>
        isSymbol(e) ? haveSymbol || true : haveSymbol || false,
      false
    );

for (let i = 0; i < lines.length; i++) {

  const lastLine = lines[i - 1];
  const nextLine = lines[i + 1];
  const currentLine = lines[i];

  let match;
  while ((match = isNumber.exec(currentLine)) != null) {
    
    console.log('Number', match[0], 'found at', match.index);

    const index = match.index;
    const number = match[0];
    const indexAfter = index + match[0].length;

    if (isSymbol(currentLine[index - 1]) || isSymbol(currentLine[indexAfter])) {
      console.log("--------------------> Have symbol before/after ! (", number, ":", index, "->", indexAfter, ')');
      total += Number(match[0]);
    } else {
      const begin = index === 0 ? 0 : index - 1;
      const end =
        indexAfter >= currentLine.length ? currentLine.length : indexAfter + 1;
      const partOfLastLine = lastLine ? lastLine.slice(begin, end) : "";
      const partOfNextLine = nextLine ? nextLine.slice(begin, end) : "";

      if (haveSymbol(partOfLastLine) || haveSymbol(partOfNextLine)) {
        console.log("--------------------> Have symbol last/next line ! (", number, ":", index, "->", indexAfter, ')');
        total += Number(match[0]);
      }
    }
  }
}

console.log("\n", "Total :", total);
