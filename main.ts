import { mkdirSync, writeFileSync } from "node:fs";

// "Senior" beats "Professional": it reads like a real job hierarchy, and
// apologizing directly "to" the geese (not "for" them) lands the twist
// on the first read — the geese are the clients.
const TITLE = "Senior Apologizer to Angry Geese";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
