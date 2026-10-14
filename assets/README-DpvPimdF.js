const e=`# 📘 Day 2 — Data: Types, Variables, Representation\r
\r
![Day 2 visual](../images/days/day-02.svg)\r
\r
**Concept:** Everything in software is *data* with a *type* — and the type decides what operations mean. \`"2" + "2"\` gives \`"22"\`, but \`2 + 2\` gives \`4\`. Same symbols, different types, different universe. This single idea explains half of all beginner bugs ever.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### What's a variable?\r
A variable is a **named box** that holds data. You put something in, you take it out later by name.\r
\r
\`\`\`python\r
name = "Mubashir"   # a box called 'name' holding text\r
age = 28            # a box called 'age' holding a number\r
\`\`\`\r
\r
### The types that matter today\r
\r
| Type | Python name | Example | What it's for |\r
|------|-------------|---------|---------------|\r
| Text | \`str\` | \`"hello"\` | Names, messages, anything written |\r
| Whole number | \`int\` | \`42\` | Counting |\r
| Decimal | \`float\` | \`19.99\` | Money, measurements |\r
| True/False | \`bool\` | \`True\` | Decisions (day 3) |\r
\r
### The big insight: types change meaning\r
\r
\`\`\`python\r
print("2" + "2")   # "22"  (text joins together)\r
print(2 + 2)       # 4     (numbers add)\r
\`\`\`\r
\r
The \`+\` didn't change. The *data* changed. When a program does something "weird," the first question is always: **what type is this data, really?**\r
\r
### Conversion: changing types on purpose\r
\r
\`\`\`python\r
price = input("Price? ")      # input() ALWAYS gives you text, e.g. "250"\r
total = float(price) * 2      # convert text -> decimal, then multiply\r
print(f"Double: {total}")\r
\`\`\`\r
\r
\`input()\` always returns text — even if the user typed a number. Forgetting this causes roughly a million beginner bugs. Now you won't be one of them.\r
\r
### f-strings: text with holes\r
\r
\`\`\`python\r
name = "Mubashir"\r
city = "Lahore"\r
print(f"{name} lives in {city}.")\r
\`\`\`\r
\r
The \`f\` before the quotes lets \`{...}\` holes fill in with variable values. You'll use this every single day.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
Write this spec yourself, then give it to your AI assistant:\r
\r
> "Write a Python program that converts between units. It should: 1) ask the user which conversion they want (km-to-miles, celsius-to-fahrenheit, pkr-to-usd), 2) ask for the value, 3) print the result rounded to 2 decimals, 4) if the user types something that isn't a number, say 'That's not a number — try again' instead of crashing, 5) keep it under 40 lines."\r
\r
Notice what you did: you specified the **behavior**, including the failure case. That's engineering.\r
\r
## 3. Evaluate — be the senior\r
\r
- Run it. Try: a normal number, a decimal, text like \`abc\`, an empty input, a negative number.\r
- For each: **what type** is the data at each step? Trace one conversion by hand: user types \`"100"\` (text) → converted to \`float\` → multiplied → printed.\r
- Ask the AI: "Quiz me — in this program, where does text become a number, and what happens if conversion fails?"\r
- Find one thing you'd improve. Tell the AI to change *only that*.\r
\r
## 4. Business lens 💼\r
\r
A currency converter with a type bug once charged customers wrong amounts at a real company — \`"100" + "50"\` instead of \`100 + 50\`. Types aren't academic. In business software, **wrong types = wrong money**. Data modeling — choosing the right types and shapes — is billable work precisely because getting it wrong is expensive.\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
Ask the AI to quiz you: "Give me 5 expressions; I tell you the type of the result." Example: \`"5" * 3\` → ?\r
\r
### Level 2\r
Specify and build a **bill splitter**: total bill, number of people, tip %. Print each person's share. Handle non-number input gracefully.\r
\r
### Level 3\r
Specify a **grade calculator**: takes 5 subject marks (0–100), prints average and a letter grade (A ≥ 90, B ≥ 80, C ≥ 70, D ≥ 60, F below). Reject marks outside 0–100 with a clear message. Then explain to the AI *why* each rejection rule exists — you're practicing defending specs.\r
\r
---\r
\r
## 🧠 Quick check — do you own today?\r
\r
<details>\r
<summary><b>Q1.</b> What does <code>"2" + "2"</code> give, and why?</summary>\r
\r
\`"22"\` — both are text, so \`+\` joins them instead of adding. Types decide what operations mean.\r
</details>\r
\r
<details>\r
<summary><b>Q2.</b> <code>input()</code> always returns what type — and why does it matter?</summary>\r
\r
Text (\`str\`), always — even if the user typed digits. Forgetting this is the #1 beginner bug: you must convert before doing math.\r
</details>\r
\r
<details>\r
<summary><b>Q3.</b> A shop's program charged a customer wrong. The code said <code>total = price + fee</code>. What do you check first?</summary>\r
\r
The types of \`price\` and \`fee\`. If either is text, \`+\` glues together instead of adding — wrong types = wrong money.\r
</details>\r
\r
## ✅ Done when\r
\r
- [ ] You can explain why \`"2" + "2"\` ≠ \`2 + 2\` without notes\r
- [ ] You can say what type every variable in your converter holds, at every step\r
- [ ] It survives garbage input without crashing\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[Asabeneh — 30 Days of Python, Day 2](https://github.com/Asabeneh/30-Days-Of-Python) — deeper drills on types and variables.\r
\r
---\r
\r
[← Day 1](../01_Day_Setup_Learn_With_AI/) · [Day 3 →](../03_Day_Conditionals_Loops/)\r
`;export{e as default};
