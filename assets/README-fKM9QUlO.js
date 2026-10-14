const e=`# 📘 Day 3 — Decisions & Repetition\r
\r
![Day 3 visual](../images/days/day-03.svg)\r
\r
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
[← Day 2](../02_Day_Python_Variables_Types/) · [Day 4 →](../04_Day_Functions/)\r
`;export{e as default};
