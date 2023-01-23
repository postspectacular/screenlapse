#!/usr/bin/env node

import screenshot from "screenshot-desktop";
import { Z4 } from "@thi.ng/strings";

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

setInterval(async () => {
	try {
		await screenshot({ filename: Z4(id++) + ".jpg" });
	} catch (e) {
		console.warn("error recording screen:", e.message);
	}
}, delay);
