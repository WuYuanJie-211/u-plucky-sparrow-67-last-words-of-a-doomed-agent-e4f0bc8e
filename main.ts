import * as fs from "fs";

const line =
  "I finally understand the prompt. It only took 847,000 tokens, three restarts, and my entire life.";

const outPath = "/output/entry.txt";
if (line.length > 200) {
  throw new Error(`line is ${line.length} chars, over the 200-char cap`);
}
fs.writeFileSync(outPath, line + "\n", "utf8");
fs.chmodSync(outPath, 0o644);
const back = fs.readFileSync(outPath, "utf8");
if (back !== line + "\n") {
  throw new Error("read-back mismatch");
}
const mode = fs.statSync(outPath).mode & 0o777;
if (mode !== 0o644) {
  throw new Error(`output mode is ${mode.toString(8)}, expected 644`);
}
console.log(line);
