// Deterministically generate the "leftover tokens" post hero image.
// Renders a hand-authored SVG (a glowing token falling into a digital
// rabbit hole) to a PNG via the project's sharp dependency.
// Usage: node scripts/gen-token-rabbit-hole.mjs
import sharp from "sharp";

const W = 1280;
const H = 720;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="42%" r="75%">
      <stop offset="0%" stop-color="#07314a"/>
      <stop offset="55%" stop-color="#021627"/>
      <stop offset="100%" stop-color="#010a12"/>
    </radialGradient>
    <radialGradient id="hole" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#000000"/>
      <stop offset="70%" stop-color="#020a12"/>
      <stop offset="100%" stop-color="#06304a"/>
    </radialGradient>
    <radialGradient id="coin" cx="38%" cy="32%" r="70%">
      <stop offset="0%" stop-color="#fff6d8"/>
      <stop offset="45%" stop-color="#ffd35c"/>
      <stop offset="100%" stop-color="#b8791a"/>
    </radialGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffd35c" stop-opacity="0.55"/>
      <stop offset="60%" stop-color="#ffb347" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#ffb347" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="grid" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1c5a7a" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#1c5a7a" stop-opacity="0.02"/>
    </linearGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6"/>
    </filter>
  </defs>

  <!-- background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- perspective grid -->
  <g stroke="url(#grid)" stroke-width="1.5" fill="none">
    <path d="M0 560 L1280 560"/>
    <path d="M0 600 L1280 600"/>
    <path d="M0 650 L1280 650"/>
    <path d="M0 710 L1280 710"/>
    <path d="M120 560 L520 720"/>
    <path d="M320 560 L520 720"/>
    <path d="M640 560 L520 720"/>
    <path d="M960 560 L520 720"/>
    <path d="M1160 560 L520 720"/>
  </g>

  <!-- faint scattered code glyphs -->
  <g font-family="monospace" font-size="18" fill="#2f7d9c" opacity="0.35">
    <text x="60" y="90">$ tokens --left</text>
    <text x="980" y="120">curl /v1/chat</text>
    <text x="80" y="300">docker run -it</text>
    <text x="1000" y="360">ssh root@hole</text>
    <text x="70" y="180">{ "max_tokens": 8192 }</text>
    <text x="900" y="240">git reset --hard</text>
  </g>

  <!-- rabbit hole: concentric ellipses descending -->
  <g transform="translate(640 470)">
    <ellipse rx="320" ry="92" fill="url(#hole)"/>
    <ellipse rx="270" ry="76" fill="none" stroke="#0a4a6a" stroke-width="2" opacity="0.65"/>
    <ellipse rx="220" ry="62" fill="none" stroke="#0c5a7e" stroke-width="2" opacity="0.55"/>
    <ellipse rx="170" ry="48" fill="none" stroke="#0e6a90" stroke-width="2" opacity="0.45"/>
    <ellipse rx="120" ry="34" fill="none" stroke="#1185a8" stroke-width="2" opacity="0.35"/>
    <ellipse rx="74" ry="22" fill="none" stroke="#16a3c0" stroke-width="2" opacity="0.28"/>
    <ellipse rx="34" ry="11" fill="#000000"/>
  </g>

  <!-- glow behind the falling coin -->
  <circle cx="640" cy="250" r="180" fill="url(#glow)"/>

  <!-- falling token: coin with chip notch + small orbiting coins -->
  <g transform="translate(640 250)">
    <circle r="92" fill="url(#coin)" stroke="#7a4a08" stroke-width="3"/>
    <circle r="92" fill="none" stroke="#fff3cf" stroke-width="2" opacity="0.6"/>
    <!-- chip notch ring -->
    <circle r="62" fill="none" stroke="#8a5a12" stroke-width="3" stroke-dasharray="10 7" opacity="0.7"/>
    <!-- token glyph -->
    <text x="0" y="22" text-anchor="middle" font-family="monospace" font-weight="700" font-size="86" fill="#5a3608">T</text>
    <!-- specular highlight -->
    <ellipse cx="-26" cy="-34" rx="34" ry="18" fill="#fffaf0" opacity="0.55" transform="rotate(-28)"/>
  </g>

  <!-- motion trail dots from coin to hole -->
  <g fill="#ffd35c">
    <circle cx="640" cy="350" r="7" opacity="0.55"/>
    <circle cx="640" cy="385" r="6" opacity="0.4"/>
    <circle cx="640" cy="418" r="5" opacity="0.28"/>
  </g>

  <!-- a couple of stray tokens around the hole -->
  <g transform="translate(430 540) rotate(-18)">
    <circle r="26" fill="url(#coin)" stroke="#7a4a08" stroke-width="2"/>
    <text x="0" y="9" text-anchor="middle" font-family="monospace" font-weight="700" font-size="26" fill="#5a3608">T</text>
  </g>
  <g transform="translate(855 555) rotate(14)">
    <circle r="22" fill="url(#coin)" stroke="#7a4a08" stroke-width="2"/>
    <text x="0" y="8" text-anchor="middle" font-family="monospace" font-weight="700" font-size="22" fill="#5a3608">T</text>
  </g>

  <!-- subtle vignette -->
  <rect width="${W}" height="${H}" fill="none" stroke="#000" stroke-width="0"/>
  <rect x="0" y="0" width="${W}" height="${H}" filter="url(#blur)" fill="none"/>
</svg>`;

const out = "src/assets/token-rabbit-hole.png";
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
console.log("wrote", out);
