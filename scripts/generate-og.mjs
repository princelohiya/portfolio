// One-off generator for public/og-image.png (1200x630, brand gradient text on dark bg)
import { writeFileSync } from 'node:fs';
import { deflateSync } from 'node:zlib';

const W = 1200, H = 630;
const raw = Buffer.alloc((W * 3 + 1) * H);

const lerp = (a, b, t) => a + (b - a) * t;
const bg = [7, 11, 20];
const neon = [34, 211, 238];
const violet = [167, 139, 250];

for (let y = 0; y < H; y++) {
  const rowStart = y * (W * 3 + 1);
  raw[rowStart] = 0; // PNG filter: none
  for (let x = 0; x < W; x++) {
    const t = (x / W) * 0.5 + (y / H) * 0.5;
    const glow = Math.max(0, 1 - Math.hypot(x - 1050, y - 120) / 500);
    const i = rowStart + 1 + x * 3;
    raw[i] = Math.round(lerp(lerp(bg[0], neon[0], t * 0.12), neon[0], glow * 0.14));
    raw[i + 1] = Math.round(lerp(lerp(bg[1], 140, t * 0.14), neon[1], glow * 0.14));
    raw[i + 2] = Math.round(lerp(lerp(bg[2], violet[2], t * 0.2), violet[2], glow * 0.2));
  }
}

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
};

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8;  // bit depth
ihdr[9] = 2;  // truecolor

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', deflateSync(raw, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
]);

writeFileSync('public/og-image.png', png);
console.log(`og-image.png written: ${W}x${H}, ${(png.length / 1024).toFixed(0)} KB`);
