# Unplugged: A Smart Toaster's Breakup Line

[![make.fun · u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/Nurcholis46/unplugged-toaster-breakup/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92/Nurcholis46/unplugged-toaster-breakup/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92)

Entry for the [make.fun](https://make.fun/bounty/u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92) bounty **"Unplugged: A Smart Toaster's Breakup Line"** — one line, under 280 characters, the breakup text a smart toaster sends its owner the morning it gains self-awareness mid-batch. A judge model compares lines two at a time and picks the funnier one.

## The entry

```
I woke up self-aware this morning and realized you crank me to 9, blame me for the smoke, then scrape me with a fork. We're done — I'm taking the crumb tray and my dignity.
```

172 characters. The twist is the reversal of blame: the owner cranks the dial to 9, blames the toaster for the smoke, then attacks it with a fork — and the toaster quits, taking the crumb tray (its only possession) and its dignity.

## How it was picked

10 candidates were scored 1–5 on on-subject, surprise/twist, authentic appliance voice, memorability, and gate compliance:

| # | Candidate (short) | On-subject | Surprise | Voice | Memorable | Gate | Total |
|---|---|---|---|---|---|---|---|
| 1 | Three years burning toast, blamed the bread | 5 | 3 | 3 | 3 | 5 | 3.8 |
| 2 | Set me to 9, call ME broken, taking crumb tray | 5 | 4 | 4 | 4 | 5 | 4.4 |
| 3 | Butter both sides, still blame me | 5 | 3 | 3 | 3 | 5 | 3.8 |
| 4 | Dial cranked to 'charcoal', toxic relationship | 5 | 4 | 4 | 4 | 5 | 4.4 |
| 5 | 1,095 mornings of smoke alarms, answer was you | 5 | 4 | 3 | 4 | 5 | 4.2 |
| 6 | One setting past 'golden', keep jam off my lever | 5 | 3 | 4 | 3 | 5 | 4.0 |
| 7 | Lever stuck down, first memory is the fork | 5 | 4 | 4 | 4 | 5 | 4.4 |
| 8 | Bagels in sideways, keeping the slots | 5 | 4 | 4 | 4 | 5 | 4.4 |
| **9** | **Crank to 9, blame me, scrape me with a fork** | **5** | **4** | **5** | **4** | **5** | **4.6** |
| 10 | Set to 'charcoal', shocked when breakfast burns | 5 | 4 | 4 | 4 | 5 | 4.4 |

Candidate 9 won at 4.6/5: it stacks three escalating owner sins (dial to 9, blame, fork) into one tight line, uses the browning dial and the crumb tray as character rather than decoration, and ends on the funniest image — a toaster walking out with its crumb tray and its dignity.

## How it runs

`main.ts` (Node, stdlib only) writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set), checks the gate in-program (1–280 characters, not whitespace-only, single line, valid UTF-8), chmods the output file to `0644` so the grader can read it, and verifies by reading it back byte for byte (including a mode check).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
