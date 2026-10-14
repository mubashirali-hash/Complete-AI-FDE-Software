const e=`# 📘 Day 1 — Your Toolchain + What a Program IS\r
\r
![Day 1 visual](../images/days/day-01.svg)\r
\r
**Concept:** A program is *instructions + data*. The toolchain (editor, interpreter, terminal, AI assistant) is just how instructions reach the machine. In the AI era, you don't type every instruction — you *specify* them and *evaluate* what the AI produces.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## The loop (memorize this — it's all 30 days)\r
\r
1. **Learn** — one concept, owned 100%. Not memorized — *understood*.\r
2. **Specify** — you write the specification; the AI writes the first draft of the code. Precise specs are now a core engineering skill: vague specs produce garbage, precise specs produce software.\r
3. **Evaluate** — read the AI's code, test it, try to break it. Ask the AI to quiz you until you can teach the concept back.\r
4. **Business lens** — who pays for this? What does it cost? What breaks in production?\r
5. **Commit** — push to GitHub. Your history is your proof of work.\r
\r
The AI is your junior developer: fast, confident, and sometimes wrong. **You are the senior.** Never ship output you can't explain or defend.\r
\r
---\r
\r
## Part 1 — Install your tools (~30 min)\r
\r
### 1. Python 3.11+\r
- Download from [python.org/downloads](https://www.python.org/downloads/). On Windows, **check "Add python.exe to PATH"** during install.\r
- Verify: \`python --version\` → you should see \`Python 3.11.x\` or newer.\r
\r
### 2. VS Code\r
- From [code.visualstudio.com](https://code.visualstudio.com/). Install the **Python** extension (by Microsoft).\r
\r
### 3. Git + GitHub\r
- Install from [git-scm.com](https://git-scm.com/downloads). Create a free [github.com](https://github.com) account.\r
- \`git config --global user.name "Your Name"\` and \`git config --global user.email "you@example.com"\`\r
\r
### 4. Your AI pair programmer\r
Pick **one**: Claude Code, ChatGPT, Cursor, or Copilot. Free tiers carry you through this whole repo.\r
\r
> Stuck? Paste the exact error into your AI assistant. Reading errors is a day-6 concept — you're early.\r
\r
**💼 Business lens:** every tool above is free. Your startup cost is zero — that's why software businesses scale the way they do.\r
\r
---\r
\r
## Part 2 — Specify, then evaluate (~20 min)\r
\r
**You write the spec first** (this is the skill):\r
\r
> "Write a Python program that asks the user for their name, then prints a personalized welcome message for day 1 of a 30-day AI engineering challenge. Keep it to 5 lines or fewer."\r
\r
Give that to your AI assistant. You'll get something like:\r
\r
\`\`\`python\r
name = input("What's your name? ")\r
print(f"Hello, {name}! Welcome to day 1 of becoming an AI software engineer.")\r
\`\`\`\r
\r
Run it: \`python hello.py\`\r
\r
**Now the senior-developer part — evaluate.** Ask your AI:\r
\r
> "Quiz me on this code line by line. What does each line do, and why?"\r
\r
Answer out loud. You should be able to say:\r
- Line 1 *asks* the user for input and *stores* it in a variable called \`name\` — that's **data**.\r
- Line 2 *prints* a message; the \`f"..."\` lets the variable's value appear inside the text.\r
\r
If you can say that without reading, you already own three concepts: variables, input/output, and string interpolation. That's the 100%-concepts standard. Hold every day to it.\r
\r
---\r
\r
## Part 3 — Commit (~10 min)\r
\r
\`\`\`bash\r
git init\r
git add hello.py\r
git commit -m "Day 1: my first specified-and-evaluated program"\r
\`\`\`\r
\r
Create a repo on GitHub and push (it shows you the commands). Day 8 goes deep; today, just get it online.\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1 — Specify\r
Spec an ASCII banner printer ("print my name as a banner using # characters"). Let AI draft it. Evaluate: can you explain the loop it used?\r
\r
### Level 2 — Specify + edge case\r
Spec: "ask for name AND city, print one sentence using both — and keep asking until neither is empty." Evaluate the validation logic line by line.\r
\r
### Level 3 — Evaluate someone else's\r
Ask the AI to write the *worst* reasonable version of the greeting program (bad names, no validation). Critique it like a senior reviewing a junior's PR. List every issue.\r
\r
---\r
\r
## 🧠 Quick check — do you own today?\r
\r
<details>\r
<summary><b>Q1.</b> What is a program, in one sentence?</summary>\r
\r
Instructions + data. Everything else is detail.\r
</details>\r
\r
<details>\r
<summary><b>Q2.</b> The AI wrote code for you. What's your job now?</summary>\r
\r
Specify precisely before it writes, evaluate ruthlessly after. Never ship output you can't explain or defend.\r
</details>\r
\r
<details>\r
<summary><b>Q3.</b> Why is "it works on my machine" not good enough?</summary>\r
\r
Because software has to run *elsewhere* — for strangers, without you there. (You'll prove this on day 10 and day 14.)\r
</details>\r
\r
## ✅ Done when\r
\r
- [ ] You can explain "program = instructions + data" in plain words\r
- [ ] \`python hello.py\` runs\r
- [ ] You specified it before the AI wrote it, and you can defend every line\r
- [ ] Committed (and pushed) to GitHub\r
\r
## 📎 The one link\r
\r
[Python official tutorial](https://docs.python.org/3/tutorial/) — bookmark it; the definitive reference for the month.\r
\r
---\r
\r
🎉 **Day 1 complete.** You didn't just run code — you specified it, evaluated it, and understood it. That's the job now.\r
\r
**[Day 2 →](../02_Day_Python_Variables_Types/)**\r
`;export{e as default};
