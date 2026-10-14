const e=`# 📘 Day 4 — Abstraction: The Most Important Idea in Software\r
\r
![Day 4 visual](../images/days/day-04.svg)\r
\r
**Concept:** A function hides *how* and exposes *what*. You don't need to know how \`print()\` works inside — you just use it. Abstraction is how humans manage complexity: the single most valuable concept in this entire repo.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### What's a function?\r
\r
A **named, reusable block** that takes input, does something, and optionally gives back output.\r
\r
\`\`\`python\r
def greet(name):\r
    return f"Hello, {name}!"\r
\r
message = greet("Mubashir")   # 'message' now holds "Hello, Mubashir!"\r
print(message)\r
\`\`\`\r
\r
- \`def greet(name):\` — **defines** it. \`name\` is a *parameter* (a placeholder).\r
- \`greet("Mubashir")\` — **calls** it. \`"Mubashir"\` is an *argument* (the real value).\r
- \`return\` — sends a result **back** to the caller. Without \`return\`, the function does its job but hands you nothing.\r
\r
### The big idea: hide the how, show the what\r
\r
\`\`\`python\r
def celsius_to_fahrenheit(c):\r
    return (c * 9/5) + 32\r
\r
print(celsius_to_fahrenheit(37))  # 98.6 — you didn't need the formula\r
\`\`\`\r
\r
The caller doesn't know or care about the formula. That's abstraction: **complexity hidden behind a simple name**. Your day-2 converter, refactored into functions, becomes a *toolkit* instead of a script.\r
\r
### Why this matters more than syntax\r
\r
Real software is thousands of functions calling each other. Nobody holds it all in their head — they hold the *names* and trust the *contracts* ("give it X, it returns Y"). When you direct AI to build software, **you'll specify functions**: their names, inputs, outputs. That's the job now.\r
\r
### Scope: where variables live\r
\r
\`\`\`python\r
x = 10          # global: visible everywhere\r
\r
def show():\r
    y = 5       # local: exists ONLY inside show()\r
    print(x)    # can read global\r
    print(y)\r
\r
show()\r
# print(y)  <- ERROR: y doesn't exist out here\r
\`\`\`\r
\r
Variables born inside a function die with it. This is a feature: functions can't accidentally trample each other's data.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Refactor my unit converter (day 2) into functions: one function per conversion (km_to_miles, celsius_to_fahrenheit, pkr_to_usd), plus a main() that handles user interaction. Each conversion function takes a number and returns a number — no input()/print() inside them. Keep input/output in main() only."\r
\r
That last sentence is a **design rule** you're imposing: *logic separated from interaction*. This is real engineering judgment — functions that only compute are testable, reusable, and honest.\r
\r
## 3. Evaluate — be the senior\r
\r
For **each** function the AI produced, answer in writing:\r
1. What does it **hide**? (the formula, the details)\r
2. What does it **expose**? (name, input, output — the contract)\r
3. Could a stranger use it correctly knowing *only* the name and contract? If not, the abstraction leaks — rename or redesign it.\r
4. Is there any copy-pasted logic that should be one function? Any function doing two unrelated jobs that should be two?\r
\r
Then ask the AI: "Which of these functions would break if I changed its internals, and which are safe? Why?"\r
\r
## 4. Business lens 💼\r
\r
Every business is abstraction too: a restaurant menu hides the kitchen; a bank app hides the ledger. Clients pay for **interfaces that hide complexity** — "I click, it happens." When you scope work (day 26), you'll draw these boundaries: what the client sees vs. what the system does. Functions are where that thinking starts.\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
Specify: \`is_prime(n)\` — returns True if n is prime, False otherwise. AI builds; you test with 2, 7, 9, 15, 97. Then explain *why* the logic works, not just that it passes.\r
\r
### Level 2\r
Specify: \`stats(numbers)\` — takes a list, returns min, max, and average. Design decision first: **how** should it return three values? (Hint: ask the AI for options, then *you* choose and defend the choice.)\r
\r
### Level 3\r
Rewrite your day-3 guessing game so \`main()\` is under 10 lines — everything else in well-named functions. Then do the senior review: for each function, write one sentence on what it hides and what it exposes. If you can't write the sentence, the function's job is unclear — fix it.\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can explain abstraction with a non-code example (menu/kitchen, car dashboard)\r
- [ ] You can explain parameters vs arguments vs return values in your own words\r
- [ ] Your converter is functions with logic separated from input/output — and you can defend the design\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[Corey Schafer — Python Functions (YouTube)](https://www.youtube.com/@coreyms) — the clearest functions explanation on the internet.\r
\r
---\r
\r
[← Day 3](../03_Day_Conditionals_Loops/) · [Day 5 →](../05_Day_Lists_Dictionaries/)\r
`;export{e as default};
