const e=`# Day 7 — Scope and ship a complete command-line tool\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** A usable CLI expense tracker. You can take several study sessions.\r
\r
**The situation:** A learner wants to record expenses, list them, and see the total from a terminal.\r
\r
### One idea: Finish one useful tool\r
\r
A useful app combines several small ideas. A command chooses the action, functions do the work, a collection holds the records, and a file keeps them between runs. Start with one complete action before adding more. A tiny expense tracker that another person can run teaches more than a large menu whose buttons do nothing.\r
\r
**New words:**\r
\r
- **CLI:** Command-line interface: an app used through typed terminal commands.\r
- **Scope:** The work you agree to include in this version.\r
- **End-to-end:** A complete path from a user's action to the result.\r
\r
### Follow the example below\r
\r
1. The example starts with a small collection of expenses.\r
2. It adds amounts to calculate a total in integer cents.\r
3. This demonstrates the calculation only. The project adds command handling and saving between runs.\r
\r
### Try one small decision\r
\r
What is the smallest useful first milestone for this expense tracker?\r
\r
1. Design a logo and add ten empty commands\r
2. Add one expense, save it, and show it after restarting\r
3. Add an AI assistant before storing expenses\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Choose something a user can actually finish.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
A first complete path can be add → save → restart → list.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Add one expense, save it, and show it after restarting** Yes. This proves one complete useful path, including persistence.\r
\r
</details>\r
\r
**Then practise:** Add a fictional expense of 150 cents to the example. Predict the new total first, then run the calculation and compare.\r
\r
**Your project's first action:** Write the exact terminal conversation for adding one fictional expense and listing it again after a restart. Use that conversation as your first test.\r
\r
**How it connects:** Combine Days 2–6: types, rules, functions, collections, and files. This becomes the expense app you will test and give a web interface later.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
A project becomes useful when another person can complete a task with it. Today you will combine data, decisions, functions, and persistence into an expense tracker. The challenge is finishing a small, coherent product: an understandable workflow, reliable behavior, useful errors, and instructions that work outside your own terminal session.\r
\r
**Your project:** [A usable CLI expense tracker](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Turn a user problem into a bounded feature list and acceptance criteria.\r
- Compose earlier concepts into a complete expense workflow.\r
- Observe a new user and distinguish usability feedback from implementation guesses.\r
\r
## Understand the concept\r
\r
### Scope is a design decision\r
\r
A first version should support a clear task from beginning to end. For an expense tracker, adding an expense, listing expenses, and showing a total form a coherent workflow. Bank integrations, receipt recognition, and multi-user permissions can wait. An explicit out-of-scope list protects the finish line. Scope is not measured by the number of technologies used; it is measured by whether the chosen user's problem can be addressed with the available time and evidence.\r
\r
### Design around a vertical slice\r
\r
A vertical slice crosses input, business logic, and storage for one useful action. Start by adding one valid expense and seeing it after a restart. That proves more than implementing several disconnected screens or functions. Keep the calculation independent of command parsing. Store amounts in a documented representation, such as integer cents. Decide whether the total includes all records or only a filtered view and state that meaning in the output.\r
\r
### A new user tests your assumptions\r
\r
Give a person the README and observe them trying a representative task. Avoid explaining each hesitation immediately, because coaching hides confusing steps. Record the action, expectation, and obstacle before proposing a fix. One person's feedback is useful evidence about that test, not proof that every user will behave the same way. Ask permission before collecting or publishing identifying feedback; fictional sample expenses are enough for the learning project.\r
\r
## A worked example, step by step\r
\r
A simple list supplies the data for a total. No bank connection or live financial data is involved.\r
\r
\`\`\`python\r
expenses = [\r
    {"id": "E1", "label": "Lunch", "amount_cents": 500},\r
    {"id": "E2", "label": "Bus", "amount_cents": 200},\r
]\r
total_cents = sum(expense["amount_cents"] for expense in expenses)\r
for expense in expenses:\r
    print(expense["id"], expense["label"], expense["amount_cents"])\r
print(f"Total: {total_cents} cents")\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
E1 Lunch 500\r
E2 Bus 200\r
Total: 700 cents\r
\`\`\`\r
\r
Each record has an identity, label, and numeric amount. The generator expression supplies amounts to sum without changing the records. The display loop shows individual records before the summary so a user can inspect what the total contains. An empty list naturally totals zero. A complete tracker still needs validation, persistence, and an interface; this working calculation is one vertical slice's business logic, not the finished product.\r
\r
## Practise before building\r
\r
### Exercise 1: Write the smallest specification\r
\r
Describe the user, three core actions, and three excluded features in a short paragraph.\r
\r
**Hint:** Choose a workflow that a new user can complete in a few minutes.\r
\r
**Check your result:** Every core action has an observable success condition.\r
\r
### Exercise 2: Trace a total\r
\r
Add and remove a sample expense, predicting the total after each action.\r
\r
**Hint:** Keep the record count and amount total as different quantities.\r
\r
**Check your result:** The displayed records explain the calculated total.\r
\r
### Exercise 3: Run a usability check\r
\r
Write a task such as add one expense and inspect the total, then watch a new user follow only your instructions.\r
\r
**Hint:** Record what they attempted before deciding what to change.\r
\r
**Check your result:** You have one concrete observation and a corresponding improvement.\r
\r
## Common mistakes and how to debug them\r
\r
- Adding optional features before one workflow works end to end.\r
- Calculating with unvalidated text or unclear money units.\r
- Calling a coached demonstration a usability test without recording the help provided.\r
\r
## The FDE connection\r
\r
Customers need completed workflows, not a collection of impressive fragments. An FDE agrees on a useful slice, demonstrates it with realistic data, and keeps the acceptance criteria visible. Your expense tracker is practice for that delivery discipline.\r
\r
## Build your lesson project\r
\r
**A usable CLI expense tracker**\r
\r
A freelancer needs to record small expenses and inspect a reliable total. Build a command-line tool that adds, lists, and totals fictional expenses, saves them between runs, and explains invalid input. A stranger should be able to install and use it from the README. Receipt scanning, accounts, and bank connections are outside the first version.\r
\r
- An add/list/total command workflow with JSON persistence.\r
- A clear data model and money-unit policy.\r
- A README with setup, sample commands, and error examples.\r
- A recorded user observation and a test-results table.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- What did you intentionally leave out of version one?\r
- Where does one vertical slice cross the system's boundaries?\r
- What did a new user's behavior reveal that your own testing missed?\r
\r
## References and next steps\r
\r
- [Python: argparse](https://docs.python.org/3/library/argparse.html)\r
- [Python: JSON](https://docs.python.org/3/library/json.html)\r
\r
[← Lesson 6](../06_Day_Files_Errors_Debugging/) · [Lesson 8 →](../08_Day_Git_GitHub/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
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
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
