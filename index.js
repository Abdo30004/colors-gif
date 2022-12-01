import fs from "fs";
import GIFEncoder from "gif-encoder-2";
import { createCanvas } from "canvas";
import { rgb } from "./Util/function.js";
import config from "./Util/config.js";

const canvas = createCanvas(config.width, config.height);
const ctx = canvas.getContext("2d");
const encoder = new GIFEncoder(canvas.width, canvas.height);
encoder.createReadStream().pipe(fs.createWriteStream(config.path));

encoder.start();
encoder.setRepeat(config.repeat);
encoder.setDelay(config.delay);
encoder.setQuality(config.quality);
encoder.setTransparent(config.transparent);

console.log("Strating...");

for (let k = 0; k < config.frames; k++) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < canvas.height; i += config.pixelFill) {
    for (let j = 0; j < canvas.width; j += config.pixelFill) {
      ctx.fillStyle = `rgb(${rgb()},${rgb()},${rgb()})`;

      ctx.fillRect(j, i, config.pixelFill, config.pixelFill);
    }
  }
  encoder.addFrame(ctx);
  //console.log("frame added", k+1);
}

encoder.finish();
console.log("Done!");
