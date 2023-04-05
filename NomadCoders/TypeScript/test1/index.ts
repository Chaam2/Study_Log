import { Square } from "./class";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const c1 = new Square();

rl.on("line", (line: string) => {
    c1.setLength(parseInt(line));
    rl.close();
});
rl.on('close', () => {
    console.log(c1.getLength());
    c1.draw();
})