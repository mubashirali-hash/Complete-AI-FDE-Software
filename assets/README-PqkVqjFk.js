const e=`# 📘 Day 11 — Modeling Reality: Objects (Just Enough)\r
\r
![Day 11 visual](../images/days/day-11.svg)\r
\r
**Concept:** A class models a thing with **state** (data it holds) + **behavior** (things it can do). The real skill isn't syntax — it's **judgment**: when does a class earn its existence, and when is a plain function or dict better? Most OOP tutorials teach too much; you need just enough, plus the judgment.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### The idea in one example\r
\r
\`\`\`python\r
class BankAccount:\r
    def __init__(self, owner, balance=0):\r
        self.owner = owner        # state: data this account HOLDS\r
        self.balance = balance\r
\r
    def deposit(self, amount):    # behavior: things it can DO\r
        self.balance += amount\r
\r
    def withdraw(self, amount):\r
        if amount > self.balance:\r
            return "Insufficient funds."\r
        self.balance -= amount\r
        return f"Withdrew {amount}."\r
\r
acc = BankAccount("Mubashir", 10000)\r
acc.deposit(5000)\r
print(acc.balance)   # 15000\r
\`\`\`\r
\r
- \`class BankAccount:\` — the **blueprint**.\r
- \`__init__\` — the constructor: runs when you create one ("birth").\r
- \`self\` — "this specific account." \`acc.deposit()\` means: run \`deposit\` **on acc's data**.\r
- An **object** (\`acc\`) is the blueprint brought to life with its own state.\r
\r
### The judgment: when is a class worth it?\r
\r
| Use a class when… | Use a function/dict when… |\r
|---|---|\r
| The thing has **state that changes** over time (account balance, game player) | It's a one-shot computation (convert units) |\r
| Multiple **behaviors operate on the same data** | One behavior, no memory needed |\r
| You need **many independent copies** (100 accounts) | There's only ever one of it |\r
\r
The test: **"Does this thing remember things between uses?"** If yes → class candidate. If no → function. Applying this test correctly is senior thinking; most over-engineering comes from skipping it.\r
\r
### What you DON'T need today\r
\r
Inheritance hierarchies, polymorphism lectures, design patterns — skip them. You'll recognize when you need them (roughly: when you catch yourself writing the same class three times with small differences). Today: state + behavior + the judgment test.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Refactor my expense tracker into classes: an Expense class (amount, category, note, date) and an ExpenseTracker class (holds the list, with add/list/totals_by_category/save/load methods). BUT first: argue the case — for each class, tell me what state it owns and why a dict + functions wouldn't be enough. If you can't make the case for a class, don't create it."\r
\r
You're making the AI **defend its design before typing** — exactly the review you'd get (or give) in a real team.\r
\r
## 3. Evaluate — be the senior\r
\r
- For each class, answer: **what state does it own?** What breaks if that state were global instead?\r
- Create two trackers. Add an expense to one. Does the other change? (If yes — shared state bug, the classic OOP footgun. Understand *why*.)\r
- Ask the AI: "Show me one place in this refactor where a class was NOT worth it, and what you'd use instead." Then decide if you agree — **you're the judge**.\r
- The killer question: "What did classes buy me here that functions didn't?" If the answer is thin, that's a lesson too.\r
\r
## 4. Business lens 💼\r
\r
Over-engineering **costs clients real money** — every unnecessary class is code to write, test, and maintain. The most expensive sentence in software is "let's make it flexible for the future." Clients pay for software that solves *today's* problem cleanly and can evolve *when* needed, not for architecture astronautics. "Just enough" is a business skill.\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
\`BankAccount\` with deposit/withdraw/balance — then add \`transaction_history\` (a list of dicts — day 5 meets day 11). State + behavior, small and clean.\r
\r
### Level 2\r
Model a **library book**: title, author, \`is_borrowed\` state, \`borrow()\`/\`return_book()\` behavior. Rule: can't borrow an already-borrowed book. Where does the rule live — in the method or outside? (Defend your choice.)\r
\r
### Level 3\r
**The deletion exercise:** take your refactored tracker and delete one class, replacing it with functions + dicts. Does anything get *worse*? Write a paragraph: what did the class actually buy you? If the answer is "not much," you've learned the most valuable OOP lesson there is.\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can explain state vs behavior, and the "does it remember things?" test, without notes\r
- [ ] Every class in your refactor is defended — state owned, alternative considered\r
- [ ] You can explain \`self\` in one sentence\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[Corey Schafer — Python OOP series (YouTube)](https://www.youtube.com/@coreyms) — watch only what you need; you have the core already.\r
\r
---\r
\r
[← Day 10](../10_Day_Environments_Packages/) · [Day 12 →](../12_Day_Testing_Clean_Code/)\r
`;export{e as default};
