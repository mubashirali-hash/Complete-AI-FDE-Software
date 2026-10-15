const e=`# Day 11 — Objects, state, and domain rules\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** Support-ticket domain model. You can take several study sessions.\r
\r
**The situation:** A support ticket should move between allowed states. A random string should not become its status.\r
\r
### One idea: Keep related state and rules together\r
\r
An object groups some data with actions that use that data. A class describes how to make those objects. For a ticket, the data might be its ID and status; an action might close it. The useful part is keeping state changes behind clear rules. Use a class when this helps understanding; small functions can still be the right choice elsewhere.\r
\r
**New words:**\r
\r
- **Class:** A definition used to create objects with related data and actions.\r
- **State:** The values describing something at a particular moment.\r
- **Method:** A function attached to an object.\r
\r
### Follow the example below\r
\r
1. The class creates a ticket with an open starting state.\r
2. close checks whether the current state is open before changing it to closed.\r
3. The prints show the state before and after closing. The project adds a fuller state policy and validation.\r
\r
### Try one small decision\r
\r
A ticket only allows open and closed. Someone asks to set its status to banana. What should happen?\r
\r
1. Reject the unsupported state and keep the previous valid state\r
2. Store banana because it is text\r
3. Delete the ticket\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
The method should protect the rules, not just assign any string.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
Validate the proposed new state before changing the current one.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Reject the unsupported state and keep the previous valid state** Yes. The transition rule protects the object's data from an invalid state.\r
\r
</details>\r
\r
**Then practise:** Add a second ticket.close() call after the existing example. Run it and inspect the error. Explain why the method refuses to close an already closed ticket.\r
\r
**Your project's first action:** Draw the allowed ticket states and arrows between them. Decide what closing an already closed ticket should do.\r
\r
**How it connects:** This revisits the support queue from Day 3. You are now putting its rules around each ticket's state.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
Objects can make a domain clearer when related state and behavior belong together. They also add complexity if introduced without a useful responsibility. Today you will model a support ticket and its allowed status transitions, then compare that design with a simpler dictionary-and-function version.\r
\r
**Your project:** [Support-ticket domain model](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Identify an object's identity, state, and related behavior.\r
- Keep domain rules in a clear place rather than spreading them across callers.\r
- Compare a class with a simpler representation using actual change scenarios.\r
\r
## Understand the concept\r
\r
### State and behavior can form a useful unit\r
\r
A ticket has an ID, title, and status. Closing the ticket is behavior governed by a rule about its current state. A class can keep those ideas together so callers do not each invent their own transition rules. The object is one representation of the domain, not the domain itself. Begin by writing the supported states and transitions in ordinary language. The useful abstraction is the rule, not merely a class declaration containing the same fields as a dictionary.\r
\r
### Invariants constrain valid state\r
\r
An invariant is a condition your design intends to keep true, such as a ticket always having a non-blank title. Decide whether invalid input is rejected at construction, at a method boundary, or elsewhere. Public mutable fields can let callers bypass a method's validation, so be honest about what a simple dataclass does and does not enforce. In a small lesson project, test and document the boundaries rather than claiming that a class automatically prevents all invalid state.\r
\r
### Prefer the simplest model that earns its cost\r
\r
A dictionary plus pure functions may be clearer for a simple transformation or one-off report. A class may help when an entity owns state and several related operations. Compare how a new rule would be added in both versions. Avoid inheritance unless the substitution relationship and behavior are clear; sharing a couple of fields is not enough reason. Good design reduces the mental work of making a correct change.\r
\r
## A worked example, step by step\r
\r
The close operation checks the current state rather than letting the caller silently choose an arbitrary transition.\r
\r
\`\`\`python\r
from dataclasses import dataclass\r
\r
@dataclass\r
class Ticket:\r
    ticket_id: str\r
    title: str\r
    status: str = "open"\r
\r
    def close(self):\r
        if self.status != "open":\r
            raise ValueError("Only an open ticket can be closed")\r
        self.status = "closed"\r
\r
ticket = Ticket("T001", "Order question")\r
print(ticket.ticket_id, ticket.status)\r
ticket.close()\r
print(ticket.ticket_id, ticket.status)\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
T001 open\r
T001 closed\r
\`\`\`\r
\r
The dataclass supplies an initializer for the declared fields. self refers to the object receiving the method call. close validates the starting state before mutating status. The two output lines show the same identity through a transition. This minimal example does not validate titles or prevent direct assignment to status; those limitations are visible requirements for your project to address or document.\r
\r
## Practise before building\r
\r
### Exercise 1: Draw the state diagram\r
\r
List the supported ticket states and allowed transitions, including attempts to repeat a transition.\r
\r
**Hint:** A second close may be rejected or idempotent; choose and document one policy.\r
\r
**Check your result:** Every transition has a defined result.\r
\r
### Exercise 2: Protect a rule\r
\r
Add a non-blank-title requirement and test where it is checked.\r
\r
**Hint:** Think about creation and later updates, not just the first constructor call.\r
\r
**Check your result:** Your stated boundary actually enforces or clearly limits the invariant.\r
\r
### Exercise 3: Compare representations\r
\r
Implement the close operation using a dictionary and function, then compare the two designs.\r
\r
**Hint:** Judge a future rule change rather than counting class syntax.\r
\r
**Check your result:** You can defend the simpler design for at least one use case.\r
\r
## Common mistakes and how to debug them\r
\r
- Introducing classes without an entity responsibility or a useful contract.\r
- Assuming a dataclass automatically validates every field or mutation.\r
- Using inheritance to share names while the behaviors do not support substitution.\r
\r
## The FDE connection\r
\r
A customer's workflow contains entities and rules, not merely database rows. An FDE makes those rules visible and chooses a representation that is practical for future changes. Showing where a model can still be bypassed is part of an honest design explanation.\r
\r
## Build your lesson project\r
\r
**Support-ticket domain model**\r
\r
A help desk needs tickets with stable IDs, readable titles, and controlled status changes. Build a small domain model with create, close, and optional reopen operations. Test invalid creation and repeated transitions. Compare your object-based design with a simpler alternative and explain which one you would use for this scope.\r
\r
- A ticket model and a written state-transition policy.\r
- Validation for required identity and title fields.\r
- Tests for normal, invalid, and repeated operations.\r
- A short class-versus-functions design comparison.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- Which rule does the object own?\r
- What invariant can still be bypassed in your design?\r
- When would a dictionary and functions be clearer than this class?\r
\r
## References and next steps\r
\r
- [Python: classes](https://docs.python.org/3/tutorial/classes.html)\r
- [Python: dataclasses](https://docs.python.org/3/library/dataclasses.html)\r
\r
[← Lesson 10](../10_Day_Environments_Packages/) · [Lesson 12 →](../12_Day_Testing_Clean_Code/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
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
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
