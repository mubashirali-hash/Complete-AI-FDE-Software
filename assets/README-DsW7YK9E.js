const e=`# 📘 Day 8 — Version Control: Time Travel for Software\r
\r
![Day 8 visual](../images/days/day-08.svg)\r
\r
**Concept:** Git is a **timeline of every decision** you ever made in a project. A commit is a saved snapshot with a message explaining *why*. A branch is a **parallel universe** where you can experiment without breaking the real world. This is how professionals — and teams — stay sane.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### The timeline mental model\r
\r
Imagine your project as a film. Every commit is a **frame** — a snapshot of all your files at one moment, with a message describing what changed and why.\r
\r
\`\`\`\r
* 3a7f2c1  Add totals by category        <- you are here\r
* 9b1e4d0  Add file persistence\r
* 41c8f2a  Day 1: my first program\r
\`\`\`\r
\r
Made a mistake? **Time-travel** back to any frame. Want to know *why* a line exists? Read the commit message from the day it was born. This beats "final_v2_REALLY_FINAL.py" forever.\r
\r
### Commits: small, messaged, honest\r
\r
\`\`\`bash\r
git add expense_tracker.py\r
git commit -m "Add totals by category"\r
\`\`\`\r
\r
- \`git add\` = "stage these changes for the snapshot."\r
- \`git commit -m "..."\` = "take the snapshot, with this message."\r
- Good messages are **imperative and specific**: "Add totals by category" ✓, "fix stuff" ✗, "asdf" ✗✗✗.\r
\r
Rule of thumb: **commit when something works**, not at end of day. Small commits = easy time travel.\r
\r
### Branches: parallel universes\r
\r
\`\`\`bash\r
git branch add-charts       # create a universe called 'add-charts'\r
git checkout add-charts     # step into it\r
# ... build charts, commit ...\r
git checkout main           # step back — main is untouched\r
git merge add-charts         # bring the work over when it's good\r
\`\`\`\r
\r
The \`main\` branch is the **known-good world**. You never experiment there directly — you branch, break things freely, and merge only what works. A **pull request (PR)** is just "hey, please review my universe before merging it" — even if you're both the author and reviewer, the ritual forces a second look.\r
\r
### GitHub: the timeline, published\r
\r
\`git push\` uploads your timeline to GitHub. Now it's **backup + portfolio + collaboration** in one. Anyone can read your history and see *how you think*.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "My expense tracker repo has messy history — a few giant commits with bad messages like 'update' and 'fix'. Teach me to: 1) rewrite the last 4 commit messages properly WITHOUT changing the code, 2) create a branch called 'add-monthly-summary', add that feature there, 3) open a pull request against main and merge it myself, 4) show me the final history as a story. Explain each command before I run it."\r
\r
You're not asking AI to *do* Git for you — you're asking it to **teach** while you type. The commands must live in your fingers.\r
\r
## 3. Evaluate — be the senior\r
\r
- Run \`git log --oneline --graph\` — does your history read like a story? Would a stranger understand what happened, in order?\r
- On your branch, deliberately break something, commit it, then fix it in the next commit. Merge. Now the history shows the *mistake and the fix* — that's honest engineering, and it's fine.\r
- Ask the AI: "Quiz me — what's the difference between git add, commit, push? What does a branch actually contain? What happens to main when I commit on a branch?"\r
- The killer question: **"If I delete my laptop tonight, what survives?"** (Answer: everything pushed. Everything unpushed dies with the laptop. Push like it matters — it does.)\r
\r
## 4. Business lens 💼\r
\r
Employers and clients **read your GitHub history before they read your CV**. A year of small, well-messaged commits says "disciplined professional" louder than any certificate. And in team/contract work, clean branches + PRs are how you prove what you built and when — it's your **paper trail for getting paid**.\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
Rewrite your last 4 commit messages using \`git rebase -i\` (have AI walk you through it — then explain back what each step did).\r
\r
### Level 2\r
Branch → break → fix → PR → merge, all on your expense tracker. Write the PR description as if a client will read it: what changed, why, how you tested.\r
\r
### Level 3\r
**The disaster drill:** copy your repo folder somewhere safe, then in the original: delete a file, commit the deletion, then recover it using Git history. If you can resurrect deleted work from the timeline, you truly understand what Git *is*.\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can explain add vs commit vs push, and branches vs main, without notes\r
- [ ] Your history reads like a story a stranger could follow\r
- [ ] You've done a full branch → PR → merge cycle yourself\r
- [ ] Everything is pushed — nothing exists only on your laptop\r
\r
## 📎 The one link\r
\r
[Pro Git book (free, official)](https://git-scm.com/book/en/v2) — chapters 1–3 cover 90% of daily Git.\r
\r
---\r
\r
[← Day 7](../07_Day_Project1_CLI_App/) · [Day 9 →](../09_Day_HTTP_APIs_JSON/)\r
`;export{e as default};
