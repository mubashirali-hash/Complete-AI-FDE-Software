const e=`# Day 10 — Environments, packages, and reproducible setup\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** A reproducible release kit. You can take several study sessions.\r
\r
**The situation:** Your app works on your laptop. A teammate cannot run it because their Python packages are different.\r
\r
### One idea: Make setup repeatable\r
\r
A project depends on more than its code: the language version, packages, settings, and run commands matter too. A virtual environment keeps one project's Python packages separate from other projects. A dependency file records what needs installing. Clear setup instructions help someone recreate the environment instead of guessing what your laptop contains.\r
\r
**New words:**\r
\r
- **Dependency:** A package or tool your project needs.\r
- **Virtual environment:** An isolated Python environment for a project.\r
- **Reproducible:** Possible to repeat using the documented inputs and setup.\r
\r
### Follow the example below\r
\r
1. The diagnostic prints the Python major version used for this run.\r
2. It reports whether the interpreter is using a virtual environment.\r
3. It demonstrates inspecting setup, not creating an environment. Create and test that locally for the project.\r
\r
### Try one small decision\r
\r
A teammate has your source files but no installed packages. What helps them run the app reliably?\r
\r
1. A screenshot of your desktop\r
2. Documented language version, dependencies, setup, and run commands\r
3. Your private API key committed in Git\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Think about every input a fresh machine needs.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
Code + runtime + dependencies + settings + commands make a useful setup guide.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Documented language version, dependencies, setup, and run commands** Yes. They can recreate and verify the environment from those instructions.\r
\r
</details>\r
\r
**Then practise:** Run the diagnostic and read its two fields. Then run the downloaded diagnostic locally and explain why the environment result may differ.\r
\r
**Your project's first action:** Open your tracker README as if you had never seen the project. List every missing setup step before trying a fresh local environment.\r
\r
**How it connects:** Your Git repository keeps source history. Now make that source runnable by another person. Browser runtime diagnostics describe the browser environment, not your laptop.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
A project is not delivered if it only runs in the environment you happened to build it in. Today's work makes the setup explicit: interpreter, dependencies, run commands, and required configuration. Your project is a reproducible release of an earlier tool, verified from a clean environment rather than your already-working session.\r
\r
**Your project:** [A reproducible release kit](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Explain which resources a Python virtual environment isolates.\r
- Document dependency and configuration assumptions.\r
- Verify a project using a clean setup and repeatable smoke test.\r
\r
## Understand the concept\r
\r
### An environment is more than code\r
\r
The interpreter version, installed packages, environment variables, data paths, and operating system can affect behavior. A Python virtual environment isolates a package installation context; it does not automatically include private data, configure external services, or reproduce every system library. Record the assumptions that matter. A failure after a fresh installation can reveal an undocumented dependency that your development environment was hiding.\r
\r
### Dependencies need an installation contract\r
\r
A dependency declaration names what the project needs, while version constraints or a lock strategy control how those needs resolve. Pinning can improve repeatability but also creates maintenance work when security or compatibility changes. Use the package manager associated with the intended interpreter, for example python -m pip. Keep secrets out of dependency and configuration examples. An .env.example can document names and non-secret placeholders without publishing real values.\r
\r
### Reproduction is a test\r
\r
A clean setup check exercises your documentation as well as the code. Start in a new working directory and new environment; follow only the written instructions. Note where you needed an unstated action. Use a small smoke test to establish that startup and the core task work, then run the substantive tests for behavior. Document working-directory assumptions instead of relying on where your editor happens to open the terminal.\r
\r
## A worked example, step by step\r
\r
This check reports interpreter facts without printing secrets or assuming an exact version string.\r
\r
\`\`\`python\r
import sys\r
\r
is_virtual_environment = sys.prefix != sys.base_prefix\r
print("Python major version:", sys.version_info.major)\r
print("Virtual environment:", is_virtual_environment)\r
print("Run command: python environment_check.py")\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
Python major version: 3\r
Virtual environment: False\r
Run command: python environment_check.py\r
The second line becomes True inside a normal venv.\r
\`\`\`\r
\r
sys.version_info exposes the interpreter version as structured data. A normal venv uses a prefix different from the base interpreter's prefix, which the boolean comparison reports. The output is diagnostic context, not a complete environment lock. Compare this check across environments, then run your project smoke test. If behavior differs, inspect the actual interpreter, installed dependencies, configuration, and paths before concluding that the code itself is wrong.\r
\r
## Practise before building\r
\r
### Exercise 1: Create an isolated environment\r
\r
Create a venv in a disposable learner project and run its Python executable explicitly.\r
\r
**Hint:** Windows typically uses .venv/Scripts/python.exe; POSIX systems use .venv/bin/python.\r
\r
**Check your result:** The interpreter check identifies the environment you intended to use.\r
\r
### Exercise 2: Find a hidden assumption\r
\r
Move your tool into a fresh directory and follow its README without relying on the old terminal session.\r
\r
**Hint:** Look for implicit data paths and missing installation commands.\r
\r
**Check your result:** Every required action is now documented.\r
\r
### Exercise 3: Document configuration safely\r
\r
List required and optional settings using placeholder values only.\r
\r
**Hint:** A configuration name is not a secret; its private value may be.\r
\r
**Check your result:** The example can be shared without exposing an account credential.\r
\r
## Common mistakes and how to debug them\r
\r
- Running pip for a different interpreter from the one executing the project.\r
- Assuming a venv reproduces external services or customer data.\r
- Testing setup only in an environment where everything is already installed.\r
\r
## The FDE connection\r
\r
Customer environments vary, and support teams need reproducible instructions. An FDE treats setup, configuration ownership, and startup checks as part of the deliverable. The question is not only whether the code runs, but whether another operator can recreate the working conditions.\r
\r
## Build your lesson project\r
\r
**A reproducible release kit**\r
\r
A teammate needs to run your expense tracker on a clean machine or environment. Package the interpreter requirement, dependency installation, configuration examples, data-path policy, and smoke test into a release kit. Keep the original working project intact while you test the clean setup in a separate directory.\r
\r
- A setup guide with platform-appropriate commands.\r
- A dependency declaration or an explicit standard-library-only statement.\r
- A non-secret configuration example and data-path explanation.\r
- A smoke test plus evidence from a clean setup.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- What does a venv isolate and what does it not reproduce?\r
- Which hidden assumption did the clean setup reveal?\r
- How would an operator know that startup succeeded?\r
\r
## References and next steps\r
\r
- [Python: virtual environments](https://docs.python.org/3/tutorial/venv.html)\r
- [Python Packaging User Guide](https://packaging.python.org/en/latest/tutorials/installing-packages/)\r
\r
[← Lesson 9](../09_Day_HTTP_APIs_JSON/) · [Lesson 11 →](../11_Day_OOP_Essentials/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Concept:** Software must run **elsewhere** — on a client's laptop, a server, a colleague's machine. A *virtual environment* is an isolated box of Python + packages for one project. \`requirements.txt\` is the **recipe** to rebuild that box anywhere. Without these, your software is a rumor; with them, it's real.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### The problem\r
\r
You \`pip install requests\` on your laptop. Your program works. You send it to a friend — **it crashes**: they don't have \`requests\`. Or they have version 1.0, you built against 2.31, and something subtle breaks. This is "dependency hell," and it has ended careers.\r
\r
### The solution: isolated boxes + recipes\r
\r
\`\`\`bash\r
python -m venv .venv          # build an isolated box called .venv\r
source .venv/bin/activate     # step inside it (Windows: .venv\\Scripts\\activate)\r
pip install requests          # install ONLY inside the box\r
pip freeze > requirements.txt # write the recipe: exact packages + versions\r
\`\`\`\r
\r
- **venv** = your project's private Python. What you install here doesn't touch anything else on your system, and nothing else touches it.\r
- **requirements.txt** = the recipe. Anyone, anywhere: \`pip install -r requirements.txt\` → identical box.\r
- **The rule:** never \`pip install\` outside a venv. Global installs are how "it worked yesterday" mysteries begin.\r
\r
### Why versions are pinned\r
\r
\`requirements.txt\`:\r
\`\`\`\r
requests==2.31.0\r
\`\`\`\r
\r
\`==2.31.0\` means *exactly* this version. Libraries change; today's update can break yesterday's code. Pinning says: "I built and tested against **this** — rebuild **this**." (Teams relax this later with ranges; pinned is correct for you now.)\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "My weather CLI from day 9 currently runs on my system Python. Walk me through: 1) creating a venv for it, 2) installing only what it needs inside the venv, 3) generating requirements.txt, 4) then PROVE it works by deleting the venv and rebuilding from the recipe in a fresh copy of the project folder. Explain each command before I run it — I need this in my fingers, not just done."\r
\r
The proof step is the lesson. Anyone can follow install steps; **verifying from zero** is engineering.\r
\r
## 3. Evaluate — be the senior\r
\r
- After rebuilding from the recipe in a fresh folder: does \`python weather.py\` work first try? If not — **your recipe is the bug**, not the code. Fix the recipe.\r
- Run \`pip list\` inside the venv. For each package: what is it, and does your project actually need it? (If you can't justify it, it shouldn't be in the recipe.)\r
- Ask the AI: "Quiz me — what breaks if two projects share one global Python? What does 'activate' actually change? Why pin versions?"\r
- Check: is \`.venv/\` in your \`.gitignore\`? (It must be — the box is rebuilt from the recipe, never committed. Committing it is like mailing someone your kitchen instead of the recipe.)\r
\r
## 4. Business lens 💼\r
\r
A client can't use what they can't install. **"Just run these three commands"** (clone → venv → install → run) is the difference between a demo that impresses and a delivery that works. In freelance/contract work, the handover *is* the product — and reproducibility is what makes handovers clean. Docker (which you'll meet later) is this same idea, industrialized.\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
\`pip list\` in your venv. Write one line per package: what it does and why your project needs it. No line = no justification = remove it.\r
\r
### Level 2\r
Write \`setup.sh\`: a script that takes a fresh clone from zero to running program (venv → install → run). Test it by actually cloning fresh. This script is gold — it's your project's **birth certificate**.\r
\r
### Level 3\r
**Break it on purpose:** install a wrong version of \`requests\` in a scratch venv, run your weather CLI, observe the failure. Then fix by reinstalling from your pinned recipe. You've now *felt* dependency hell and its cure — you'll never skip pinning again.\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can explain venv vs global Python, and why recipes beat boxes, without notes\r
- [ ] Fresh folder + your recipe + your setup steps = working program, first try\r
- [ ] \`.venv/\` is gitignored; \`requirements.txt\` is committed\r
- [ ] Pushed to GitHub\r
\r
## 📎 The one link\r
\r
[Python docs — venv & pip](https://docs.python.org/3/tutorial/venv.html) — short, definitive.\r
\r
---\r
\r
[← Day 9](../09_Day_HTTP_APIs_JSON/) · [Day 11 →](../11_Day_OOP_Essentials/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
