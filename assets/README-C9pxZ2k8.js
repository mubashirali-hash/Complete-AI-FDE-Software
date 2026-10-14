const e=`# 📘 Day 6 — State, Persistence & Failure\r
\r
![Day 6 visual](../images/days/day-06.svg)\r
\r
**Concept:** Programs have **amnesia** — when they stop, everything in memory vanishes. *Persistence* (saving to files) is how software remembers. And *everything fails*: files vanish, users type nonsense, networks drop. Engineering isn't writing the happy path — it's expecting failure and handling it gracefully.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### Persistence: memory vs files\r
\r
\`\`\`python\r
contacts = [...]   # lives in RAM — gone when the program exits\r
\`\`\`\r
\r
\`\`\`python\r
# Save: turn data into text, write it to a file\r
with open("contacts.txt", "w") as f:\r
    f.write("Ali,0300-1111111,Lahore\\n")\r
\r
# Load: read the file, turn text back into data\r
with open("contacts.txt") as f:\r
    for line in f:\r
        name, phone, city = line.strip().split(",")\r
\`\`\`\r
\r
\`with open(...)\` handles opening *and* closing — even if something goes wrong. The pattern "data → text → file → text → data" is called **serialization**, and every database on earth is a fancier version of it.\r
\r
### Failure: the \`try/except\` mindset\r
\r
\`\`\`python\r
try:\r
    age = int(input("Age? "))      # might explode if user types "abc"\r
    print(f"Next year: {age + 1}")\r
except ValueError:\r
    print("That's not a number — try again.")\r
\`\`\`\r
\r
- \`try:\` — "attempt this dangerous thing."\r
- \`except ValueError:\` — "if *this specific* failure happens, do this instead of crashing."\r
- Golden rule: catch **specific** failures, not everything. \`except:\` (bare) hides bugs you'll never find.\r
\r
### Reading tracebacks: the most underrated skill\r
\r
\`\`\`\r
Traceback (most recent call last):\r
  File "<stdin>", line 3, in <module>\r
    total = float(price) * 2\r
ValueError: could not convert string to float: 'abc'\r
\`\`\`\r
\r
Read **bottom-to-top**: the last line names the failure (\`ValueError\`) and the *data* that caused it (\`'abc'\`). The lines above show *where* (\`line 3\`). That's the whole debugging method: **what failed → on what data → at which line → why.**\r
\r
### The debugging loop (memorize it)\r
\r
1. **Reproduce** — make it fail on demand.\r
2. **Read** — traceback bottom-to-top: what, on what data, where.\r
3. **Hypothesize** — "I think X is wrong because…"\r
4. **Test** — change one thing, re-run. One thing at a time.\r
5. **Fix at the cause**, not the symptom.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Extend my contact book (day 5): 1) on start, load contacts from contacts.txt if it exists; if the file is missing, start empty (no crash, no error message needed); 2) after every add/delete, save all contacts back to the file, one per line as name,phone,city; 3) if a line in the file is malformed (wrong number of fields), skip it and continue loading the rest; 4) wrap file operations so a disk error shows 'Could not save — your changes are still in memory' instead of a traceback."\r
\r
You just specified **four failure behaviors**. Most beginners specify zero. This is what "engineering" means.\r
\r
## 3. Evaluate — be the senior\r
\r
Break it on purpose — this is the fun part:\r
- Delete \`contacts.txt\` → start the program. Does it start clean?\r
- Write garbage into the file (\`not,a,valid,line,with,too,many\`) → does it skip and continue?\r
- Make the file read-only (or point it at a bad path) → do you get your friendly message or a raw traceback?\r
- For each: trace the exact path through \`try/except\` that handled it. If you can't trace it, you don't own it.\r
\r
Then ask the AI: "Quiz me — show me three tracebacks; I tell you what failed, on what data, at which line."\r
\r
## 4. Business lens 💼\r
\r
A shop's billing software that **loses data on crash** isn't a buggy app — it's a *liability*. Data loss destroys trust permanently; one lost customer database can kill a small business's faith in software. Persistence + graceful failure handling is what makes software **trustworthy enough to sell**. When you demo (day 27), "your data is safe even if…" is a selling sentence.\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
Write a program that opens a file that doesn't exist — handle it so gracefully a user never sees the word "Traceback."\r
\r
### Level 2\r
Add **error logging** to your contact book: every caught failure appends a timestamped line to \`errors.log\`. Then trigger three different failures and read the log. (This is day-25 observability, five-minute version.)\r
\r
### Level 3\r
Ask the AI to write **three buggy programs** (one type error, one file error, one logic error that produces no traceback). Debug each using only the traceback + the debugging loop. For the logic error — no traceback to help — write down your hypothesis *before* changing anything. That's the discipline.\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] Your contact book survives restart, missing files, and malformed lines\r
- [ ] You can read any traceback bottom-to-top: what failed, on what data, at which line\r
- [ ] You can recite the debugging loop without notes\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[Python docs — Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html) — the definitive reference.\r
\r
---\r
\r
[← Day 5](../05_Day_Lists_Dictionaries/) · [Day 7 →](../07_Day_Project1_CLI_App/)\r
`;export{e as default};
