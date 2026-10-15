const e=`# Day 3 — Decisions, repetition, and boundary cases

<!-- beginner-path:begin -->
## Start here — one idea at a time

**Your goal:** Support-ticket triage queue. You can take several study sessions.

**The situation:** A support lead needs critical tickets handled first and other tickets reviewed when they are at least 24 hours old.

### One idea: Turn a rule into a decision

A condition asks a question that has a true or false answer. if runs a block when its condition is true. elif checks another condition only if the earlier condition was false. else handles what remains. A loop repeats these instructions for each item. Rule order matters: a critical ticket should keep its urgent priority even when it is also old.

**New words:**

- **Condition:** A question with a true or false result.
- **Boundary:** The exact point where a rule changes, such as 24 hours.
- **Loop:** Instructions repeated for each item or until a stopping rule is met.

### Follow the example below

1. The example checks the critical-severity rule before the age rule.
2. The age rule includes exactly 24 using >=. That symbol means greater than or equal to.
3. The remaining tickets receive the standard priority. One ticket gets one result.

### Try one small decision

A ticket is critical and 30 hours old. With the critical rule checked first, what priority should it receive?

1. Standard, because every ticket starts there
2. Review and urgent at the same time
3. Urgent

<details>
<summary>A small hint</summary>

Follow the conditions from top to bottom.

</details>

<details>
<summary>Another hint</summary>

After a true if branch, Python skips the related elif and else branches.

</details>

<details>
<summary>Answer and explanation</summary>

**Urgent** Yes. The first condition matches critical severity, so the later age branch is skipped.

</details>

**Then practise:** Find the age threshold in the example. Test an ordinary ticket at 23, 24, and 25 hours. Keep the rule unchanged and explain why exactly 24 belongs to review.

**Your project's first action:** Write three example tickets and their expected priorities: critical, ordinary at exactly 24 hours, and ordinary at 23 hours. Put the critical rule first.

**How it connects:** Your converter had input rules. Now you can express rules directly and apply them repeatedly to a queue.

Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.

<!-- beginner-path:end -->

Conditions let a program choose an action; loops let it repeat an action over data. Together they express business rules such as which ticket needs attention and when processing should stop. Today you will move from isolated if statements to a small ticket-triage workflow with explicit priority rules and a visible summary.

**Your project:** [Support-ticket triage queue](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.

## What you will be able to do

- Trace which branch runs for a given condition, including equality.
- Process a collection without skipping or endlessly repeating work.
- Translate written priority rules into an ordered decision structure.

## Understand the concept

### Conditions have precise boundaries

The expression count > 10 asks a different question from count >= 10. The first excludes exactly ten; the second includes it. Test the boundary itself and the values on either side. For multiple rules, decide their order: an if/elif chain chooses the first matching branch, whereas separate if statements can run more than one branch. A ticket that is both old and critical must follow a documented priority rule, not whichever order was accidentally typed first.

### A loop needs a clear unit of work

A for loop visits items in an iterable. Identify what one iteration means: one ticket, one customer, or one attempt. Keep counters and accumulated results separate from the current item. An empty collection performs zero iterations, so your summary must still be meaningful. Avoid changing the collection you are iterating over unless you understand the behavior; filtering into a new collection is often clearer for a beginner.

### Termination belongs in the design

A while loop repeats while its condition is true. If the state used by that condition never changes, the loop can run forever. Interactive programs need a way to exit, and retrying programs need a maximum attempt count or time limit. break stops the loop; continue skips the rest of the current iteration. Neither should hide a missing design decision about what happens to rejected work or unfinished items.

## A worked example, step by step

The critical severity rule takes priority over the age rule. Trace each ticket before running the loop.

\`\`\`python
tickets = [
    {"id": "T1", "severity": "critical", "age_hours": 2},
    {"id": "T2", "severity": "normal", "age_hours": 24},
    {"id": "T3", "severity": "normal", "age_hours": 3},
]
for ticket in tickets:
    if ticket["severity"] == "critical":
        priority = "urgent"
    elif ticket["age_hours"] >= 24:
        priority = "review"
    else:
        priority = "standard"
    print(ticket["id"], priority)
\`\`\`

**Expected result**

\`\`\`text
T1 urgent
T2 review
T3 standard
\`\`\`

The list contains three dictionaries, each representing one ticket. The for statement binds ticket to each dictionary in turn. For T1, the first condition is true and the other branches are skipped. T2 reaches the age condition and qualifies at exactly 24 hours because the operator includes equality. T3 falls into the else branch. Each iteration assigns priority before it prints, so the previous ticket's result cannot accidentally be reused.

## Practise before building

### Exercise 1: Test the exact boundary

Create tickets aged 23, 24, and 25 hours. Predict their priority.

**Hint:** Focus on >= rather than the displayed age alone.

**Check your result:** Exactly 24 hours follows the written rule.

### Exercise 2: Count outcomes

Add a counter for urgent tickets and print a summary after the loop.

**Hint:** Initialise the counter before the loop and increment it only for the matching priority.

**Check your result:** The summary is correct for an empty list and for multiple critical tickets.

### Exercise 3: Bound repeated attempts

Write a three-attempt retry simulation that stops early after success.

**Hint:** Use a fixed range and break on the successful result.

**Check your result:** Failure cannot cause a fourth attempt or an endless loop.

## Common mistakes and how to debug them

- Using > where the requirement includes equality: test the threshold explicitly.
- Using separate if statements when only one priority should win: write down rule precedence.
- Forgetting empty input or stop conditions: the absence of work should still produce a useful summary.

## The FDE connection

Business policies often contain exceptions and conflicting rules. An FDE asks which rule wins and what happens at the threshold, then records examples before implementing the policy. A short, tested decision table can prevent a long argument after delivery.

## Build your lesson project

**Support-ticket triage queue**

A support lead needs a repeatable way to review tickets. Build a program that reads a small in-memory ticket list, assigns exactly one priority to each valid ticket, and prints a summary. Critical tickets are urgent; other tickets aged at least 24 hours need review; the rest are standard. Invalid or incomplete tickets must be reported instead of silently classified.

- A triage program with documented rule precedence.
- A sample queue containing normal, critical, old, and invalid tickets.
- A summary of each priority and rejected records.
- A test table for empty queues and threshold cases.

Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.

## Explain it back

- Why does rule order matter?
- What happens when the collection is empty?
- Which boundary case was most likely to reveal a bug?

## References and next steps

- [Python: control flow](https://docs.python.org/3/tutorial/controlflow.html)

[← Lesson 2](../02_Day_Python_Variables_Types/) · [Lesson 4 →](../04_Day_Functions/)

<details>
<summary>Optional original workshop and alternative exercises</summary>

<!-- original-workshop:begin -->
**Concept:** \`if\` = decisions. Loops = repetition. Every app on earth — Instagram, banking, AI chatbots — is these two ideas composed at scale. Learn them deeply once, recognize them everywhere forever.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### Decisions: \`if / elif / else\`\r
\r
\`\`\`python\r
temperature = 38\r
\r
if temperature > 37:\r
    print("Fever — see a doctor.")\r
elif temperature > 36:\r
    print("Slightly warm — rest.")\r
else:\r
    print("Normal.")\r
\`\`\`\r
\r
The program **chooses a path** based on data. Key ideas:\r
- Conditions are True/False questions (that's the \`bool\` type from day 2).\r
- \`elif\` = "otherwise, if this…". \`else\` = "if nothing above matched."\r
- Indentation (the spaces) is how Python knows what belongs inside the decision. It matters.\r
\r
Comparison operators you'll use constantly: \`==\` (equal), \`!=\` (not equal), \`>\` \`<\` \`>=\` \`<=\`. And combiners: \`and\`, \`or\`, \`not\`.\r
\r
\`\`\`python\r
if age >= 18 and has_id:\r
    print("Entry allowed.")\r
\`\`\`\r
\r
### Repetition: loops\r
\r
**\`while\`** — repeat *until something changes*:\r
\`\`\`python\r
tries = 0\r
while tries < 3:\r
    print("Trying...")\r
    tries = tries + 1   # if you forget this line, the loop NEVER ends\r
\`\`\`\r
\r
**\`for\`** — repeat *for each item*:\r
\`\`\`python\r
for name in ["Ali", "Sara", "Bilal"]:\r
    print(f"Hello, {name}!")\r
\`\`\`\r
\r
### The two ideas together\r
\r
\`\`\`python\r
secret = 7\r
guess = 0\r
\r
while guess != secret:          # repetition: keep going until correct\r
    guess = int(input("Guess: "))\r
    if guess < secret:          # decision: which hint?\r
        print("Higher...")\r
    elif guess > secret:\r
        print("Lower...")\r
    else:\r
        print("Correct!")\r
\`\`\`\r
\r
Read it out loud: "keep asking *while* the guess is wrong; *if* too low say higher…" — if you can narrate it, you own it.\r
\r
### ⚠️ The classic trap: infinite loops\r
\r
A \`while\` loop whose condition never becomes False runs **forever**. Every programmer does this once. When it happens: \`Ctrl+C\` stops it. Then ask: "what was supposed to change, and didn't?"\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
Write the spec **before** touching AI. Example:\r
\r
> "Write a number guessing game: 1) computer picks a random number 1–100, 2) player guesses, gets 'higher'/'lower' hints, 3) counts tries and reports them at the end, 4) asks 'play again? (y/n)' and respects the answer, 5) if the player types a non-number, say so and don't count it as a try."\r
\r
Give it to the AI. Then — critically — **check the game against YOUR spec**, rule by rule. Did it implement what you specified, or what it imagined?\r
\r
## 3. Evaluate — be the senior\r
\r
- Play it badly on purpose: type \`abc\`, type \`9999\`, type nothing, say \`n\` then \`y\`.\r
- For each surprise: was the *spec* incomplete, or did the AI misread it? Fix whichever was wrong.\r
- Ask the AI: "Show me where the loop could become infinite in this program, and what prevents it."\r
- Trace: if the secret is 42 and I guess 50, then 30, then 42 — which branches execute, in order?\r
\r
## 4. Business lens 💼\r
\r
"Play again? (y/n)" is a **retention loop** — the same pattern as "watch next episode?" Every business wants users to come back; loops in code mirror loops in business. And input validation ("don't count \`abc\` as a try") is **data quality** — garbage in, garbage out is a business problem, not just a code problem.\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
FizzBuzz, specified by you: "print 1–100; multiples of 3 → 'Fizz', of 5 → 'Buzz', of both → 'FizzBuzz'." AI builds; you verify all four cases appear.\r
\r
### Level 2\r
A **password checker**: ask for a password, require 8+ characters AND at least one digit. Keep asking until valid. Specify the rules first — then check the AI enforced *your* rules.\r
\r
### Level 3\r
**ATM simulator**: balance starts at 10,000. Loop a menu: 1) check balance 2) deposit 3) withdraw 4) exit. Withdraw more than balance → refuse with a message. Specify every rule (including: can balance go negative? what about non-number input?). Then be the QA engineer: try to break your own spec.\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can narrate any loop+if program out loud, branch by branch\r
- [ ] Your spec produced the game you imagined — you checked rule by rule\r
- [ ] You can explain what makes a loop infinite and how to stop one\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[Asabeneh — 30 Days of Python, Days 9–10](https://github.com/Asabeneh/30-Days-Of-Python) — conditionals and loops drills.\r
\r
---\r
\r
[← Day 2](../02_Day_Python_Variables_Types/) · [Day 4 →](../04_Day_Functions/)
<!-- original-workshop:end -->

</details>
`;export{e as default};
