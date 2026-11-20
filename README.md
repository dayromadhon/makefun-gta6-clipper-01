# makefun-gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/dayromadhon/makefun-gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/dayromadhon/makefun-gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 45-second vertical GTA 6 clip for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500, top 20 share it, places by YouTube views).

## The clip

`clip.mp4` — 1080x1920, 45 seconds, a Short. The moment: from the 40-minute launch-day walkthrough "Grand Theft Auto VI (GTA 6) Full Gameplay Part 1", Jason and his friend tear across Leonida's turquoise water in a speedboat at full throttle (21:30–22:15 in the source) — sun glare, dramatic clouds, a big wake, other boats and a seaplane in the distance. It opens on the boat already at full speed with the hook "GTA 6 IS FINALLY HERE", then turns to make.fun with the pitch: "Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01". The clip was cut and rendered with ffmpeg in this session (trim, blur-fill to 9:16, on-screen text, pitch).

## The video is the entry

The clip goes up on YouTube as a public Short with the title and description in `VIDEO-TEXT.txt` (the description carries the bounty's line word for word plus the play code `makefun-kernel-jaguar-drizzle`). Places go by the video's views at the deadline, most first.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` from this repository to `/output/VIDEO.json`, which is all the program does. `VIDEO.json` holds the video's address once it is uploaded (placeholder until then).

---

<sub>Entered on [make.fun](https://make.fun/?ref=sf3mmt2f&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
