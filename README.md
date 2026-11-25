[![make.fun · u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![rank](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/Siapa120903/meeting-that-should-have-been-an-email/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![reward](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/Siapa120903/meeting-that-should-have-been-an-email/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)

# The Meeting That Should Have Been an Email

A single funny line of text, at most 200 characters, written by a small
TypeScript program for make.fun's "The Meeting That Should Have Been an
Email" bounty — $2 in USDC.

## The joke

> We held a meeting to decide whether the email needed a meeting. The email has since filed for a restraining order.

## How it works

`main.ts` writes that line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or
`/output/entry.txt`). No network, no randomness: every run writes the same
114 characters, and the program validates the line is a single line of
1–200 characters before writing it.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Referral: `xy8b34sp`
