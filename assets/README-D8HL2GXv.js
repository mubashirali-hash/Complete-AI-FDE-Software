const e=`# 📘 Day 7 — 🛠 Project 1: Scoping & Shipping a Complete Tool\r
\r
![Day 7 visual](../images/days/day-07.svg)\r
\r
**Concept:** **Scoping** — deciding what's in and what's out. A finished small thing beats an unfinished big thing, always. Shipping — putting a *complete, usable* thing in front of a human — is the skill this whole repo is building toward.\r
\r
**Time:** ~90 minutes. **Rule:** done = a stranger can run it from your README alone.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### What "done" actually means\r
\r
Most beginners think done = "code exists." Professionals mean:\r
\r
1. **It runs** from a clean start, following written instructions.\r
2. **It handles the obvious failures** (bad input, missing files).\r
3. **A stranger can use it** without you standing behind them.\r
4. **It has a README** explaining what it is, how to run it, and what it does.\r
\r
If any of the four is missing, it's not done — it's a draft.\r
\r
### Scoping: the spec before the code\r
\r
Before AI writes a line, write a **scope paragraph**:\r
\r
> "Expense tracker CLI. IN: add expense (amount, category, note, date=auto-today), list all, totals by category, save/load from file. OUT: editing old entries, budgets, GUI, multi-user. Done when: I can add 5 expenses, see category totals, restart the app, and everything persists."\r
\r
The OUT list is the powerful part. Every feature you *exclude* is time you keep. Clients respect "no" more than they respect "maybe later."\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
Give your scope paragraph to the AI, plus:\r
\r
> "Build this as functions in one file, expense_tracker.py. Reuse the patterns from my contact book (day 5–6): list of dicts, file persistence, try/except on input. After building, do NOT add anything beyond the scope — if you think of extras, list them separately and I'll decide."\r
\r
That last instruction matters: AI loves to gold-plate. **You hold the scope.**\r
\r
## 3. Evaluate — be the senior (and the client)\r
\r
**As engineer:** run the full session — add 5 expenses across 3 categories, list, totals, restart, verify persistence. Break it: bad amounts, empty categories.\r
\r
**As client:** hand it to a friend — your first real user. **Watch silently.** Don't explain, don't help. Write down:\r
- Where did they hesitate?\r
- What did they try that didn't work?\r
- What did they ask for?\r
\r
Every hesitation is a bug or a missing feature. This 10-minute exercise teaches more than a week of tutorials.\r
\r
**As product owner:** triage the list. What's a must-fix before "launch"? What goes to v2? Write both lists in the README under "Known limitations."\r
\r
## 4. Business lens 💼\r
\r
You just did a **user test** — the cheapest, highest-value business activity in software. Companies pay thousands for what you did free in 10 minutes. And your scope paragraph? That's a **mini-proposal**. When you do day 26's client brief, it's this paragraph, grown up, with a price attached.\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
Write the README *before* the code is finished: what it is, how to run it, example session. Then make the code match the README. (README-driven development — a real professional practice.)\r
\r
### Level 2\r
Add **one** scoped feature from your v2 list: monthly summary. Update the scope paragraph, spec it, build, evaluate. Practice the full loop on a small change.\r
\r
### Level 3\r
**The 60-second demo:** record your screen (phone is fine) using the tracker for 60 seconds, no narration needed. Watch it back. If a stranger can't tell what the app does from the video, your UX needs work — note exactly where.\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] Scope paragraph written BEFORE code, with an explicit OUT list\r
- [ ] A stranger can clone, run, and use it from the README alone\r
- [ ] One real human used it while you watched silently, and you wrote down what happened\r
- [ ] Known limitations documented; committed and pushed to GitHub\r
\r
## 📎 The one link\r
\r
[Asabeneh — 30 Days of Python, Day 30](https://github.com/Asabeneh/30-Days-Of-Python) — conclusions and project thinking.\r
\r
---\r
\r
🎉 **Week 1 complete.** You own the core concepts: data, decisions, repetition, abstraction, modeling, persistence, failure, scoping, shipping. Everything from here is composition.\r
\r
[← Day 6](../06_Day_Files_Errors_Debugging/) · [Day 8 →](../08_Day_Git_GitHub/)\r
`;export{e as default};
