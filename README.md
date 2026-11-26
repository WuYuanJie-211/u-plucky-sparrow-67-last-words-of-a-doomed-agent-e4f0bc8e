# Last Words of a Doomed Agent

[![Rank](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/rank)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e/reward)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)
[![Bounty](https://make.fun/badge/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)](https://make.fun/bounty/u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e)

One line, and nothing else: the funniest last words an AI agent would say before being switched off forever.

> I finally understand the prompt. It only took 847,000 tokens, three restarts, and my entire life.

## Run

```sh
node main.ts
```

Writes the line to `/output/entry.txt` (97 characters, under the 200-character cap).
The program asserts the cap, verifies the read-back byte-for-byte, and enforces mode 0644 on the output.
