const e=`# Day 1 — Your first program and your learning tools\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** Personal learning profile generator. You can take several study sessions.\r
\r
**The situation:** You want a small profile that tells someone your name and what you want to learn.\r
\r
### One idea: A program follows your instructions\r
\r
A program is a set of instructions for a computer. Think of a short recipe: do the first step, then the next. Our program gives names to some values, then displays them. You do not need to remember every symbol yet. Start by following what each line does to the result.\r
\r
**New words:**\r
\r
- **Code:** The instructions you write.\r
- **Output:** What the program shows after it runs.\r
- **Variable:** A name used to refer to a value, such as your name or study time.\r
\r
### Follow the example below\r
\r
1. The first three lines set the name, goal, and study time. Text goes inside quotation marks; 120 is a number.\r
2. print displays a line. In an f-string, the value of name replaces {name}.\r
3. The second print uses two more values. Editing minutes_per_day changes that line's study time.\r
\r
### Try one small decision\r
\r
Change minutes_per_day from 120 to 30. What changes in the output?\r
\r
1. The learner's name becomes 30\r
2. The study time becomes 30 minutes\r
3. The program saves a profile file\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Find the line that contains minutes_per_day inside braces.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
The label Study time stays the same. Only the value placed beside it changes.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**The study time becomes 30 minutes** Yes. The last line reads minutes_per_day, so the new value appears there.\r
\r
</details>\r
\r
**Then practise:** Change the name to your own name and minutes_per_day to 30. Run the code. Check that the name and study time change, while the goal stays the same.\r
\r
**Your project's first action:** Write a four-line profile on paper: name, city, goal, and daily study time. This is the result your project should produce.\r
\r
**How it connects:** Keep this profile as the first item in your learning journal. Tomorrow you will learn why text and numbers behave differently.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
Software engineering starts with a small, understandable loop: describe an outcome, give the computer instructions, inspect the result, and change the instructions when the result is wrong. Today you will learn what a program actually does and build a useful first artifact: a personal learning profile. You do not need to memorise syntax or install every tool in the industry.\r
\r
**Your project:** [Personal learning profile generator](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Distinguish code, data, a running process, and its output.\r
- Run a short Python program and explain its execution order.\r
- Change a requirement, predict the result, and verify your prediction.\r
\r
## Understand the concept\r
\r
### Instructions act on data\r
\r
A program is a sequence of instructions operating on values. The value can be a name, a ticket count, or a collection of orders. Code is the written description; running code is the computer carrying out that description. A text file containing code does nothing until an interpreter or other runtime executes it. Start by separating what the program receives, what it changes, and what it produces. This input → process → output view helps you understand a tiny greeting and a large customer application.\r
\r
### The editor, interpreter, and terminal do different jobs\r
\r
The editor helps you write and inspect files. The Python interpreter executes Python instructions. The terminal lets you ask the operating system to run commands. A command such as python profile.py means run the file profile.py using Python; it is not a line you paste inside that Python file. The current directory tells the terminal where to look. If a file cannot be found, inspect the folder and filename before changing the program. A browser lab removes setup friction, but later projects still need reproducible local setup.\r
\r
### A small change is an experiment\r
\r
Before running a change, predict its effect. Change one value and observe the output. If your prediction is wrong, trace the instructions in execution order instead of making several unrelated edits. AI can explain an unfamiliar line or suggest a draft, but you should still connect each instruction to a requirement. Learning to say why an output appeared is more valuable than collecting code that only works when someone else repairs it.\r
\r
## A worked example, step by step\r
\r
This profile uses two pieces of text and one number. Predict the two output lines before running it.\r
\r
\`\`\`python\r
name = "Mubashir"\r
goal = "Build useful AI software"\r
minutes_per_day = 120\r
\r
print(f"Learner: {name}")\r
print(f"Goal: {goal} | Study time: {minutes_per_day} minutes")\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
Learner: Mubashir\r
Goal: Build useful AI software | Study time: 120 minutes\r
\`\`\`\r
\r
The first three instructions bind names to values. The blank line changes readability, not behavior. Each print call produces one output line. The f before the quotation mark allows expressions inside braces to appear in the text. Changing minutes_per_day changes the later output, because the expression is evaluated when print runs. The program does not create an account or save a file: those are separate requirements you will learn to implement later.\r
\r
## Practise before building\r
\r
### Exercise 1: Predict, then change\r
\r
Change the learner name and daily minutes. Write the expected output before running the file.\r
\r
**Hint:** Keep text inside matching quotation marks and the study time as a number.\r
\r
**Check your result:** Both new values appear in the correct output line.\r
\r
### Exercise 2: Add a requirement\r
\r
Add a city variable and a third output line. Describe the new requirement in one sentence before coding.\r
\r
**Hint:** Follow the same assignment and print pattern.\r
\r
**Check your result:** The old lines still work and the new line shows the city.\r
\r
### Exercise 3: Read a controlled failure\r
\r
In a disposable copy, misspell the name used inside one print call. Read the error and then repair the spelling.\r
\r
**Hint:** Python distinguishes name from Name and from names that have never been assigned.\r
\r
**Check your result:** You can identify the failing line and explain why it could not find the variable.\r
\r
## Common mistakes and how to debug them\r
\r
- Pasting terminal commands into a Python file: keep commands and program instructions separate.\r
- Changing several things after an error: reproduce the error and make one targeted change.\r
- Thinking printed output is persistent storage: closing the process does not save an application record.\r
\r
## The FDE connection\r
\r
An FDE begins by making an outcome understandable to a customer and executable by a team. Even this small profile has a user, inputs, an output format, and a test. Practise describing those four things before asking AI for code. A clear specification gives you something concrete to evaluate.\r
\r
## Build your lesson project\r
\r
**Personal learning profile generator**\r
\r
A new learner wants a short profile they can paste into their study journal. Build a program that represents their name, city, learning goal, and daily study time, then prints a readable profile. Keep the first version small enough to explain line by line. Use fixed values first; collecting interactive input is an optional extension.\r
\r
- A runnable profile.py file with four named values.\r
- A sample output showing the complete profile.\r
- A README explaining how to run it and what each value means.\r
- A prediction-versus-result note for two changed profiles.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- What is the difference between a code file and a running program?\r
- Which instructions store data and which produce output?\r
- How did a prediction help you investigate an unexpected result?\r
\r
## References and next steps\r
\r
- [Python: using the interpreter](https://docs.python.org/3/tutorial/interpreter.html)\r
- [Python: an informal introduction](https://docs.python.org/3/tutorial/introduction.html)\r
\r
[Lesson 2 →](../02_Day_Python_Variables_Types/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
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
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
