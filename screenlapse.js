#!/usr/bin/env node

const screenshot = require("screenshot-desktop");
const Z4 = require("@thi.ng/strings").padLeft(4, "0");

let id = 0;
let delay = 500;

switch (process.argv.length - 2) {
    case 2:
        id = parseInt(process.argv[3]);
    case 1:
        delay = parseInt(process.argv[2]);
        break;
    default:
}

console.log(`recording from id=${id} @ ${delay}ms...`);
console.log("press ctrl+c to stop.");

setInterval(() => screenshot({ filename: Z4(id++) + ".jpg" }), delay);
