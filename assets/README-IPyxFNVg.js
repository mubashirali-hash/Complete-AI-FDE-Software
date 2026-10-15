const e=`# Day 6 — Persistence, errors, and systematic debugging\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** Persistent contact book with recovery. You can take several study sessions.\r
\r
**The situation:** Your contact directory works, but closing the program loses its records.\r
\r
### One idea: Save data so it survives a restart\r
\r
Values in a running program usually disappear when the program stops. A file can keep them for a later run. JSON is a text format for structured data. Saving turns records into file contents; loading reads those contents back. A missing file and a damaged file are different problems. Handle both deliberately so a recovery step does not silently destroy existing work.\r
\r
**New words:**\r
\r
- **Persistence:** Keeping data after the program stops.\r
- **JSON:** A text format used to exchange and store structured values.\r
- **Exception:** A reported problem that interrupts the normal flow of instructions.\r
\r
### Follow the example below\r
\r
1. The example turns contact data into JSON text and reads it back.\r
2. Parsing checks whether the text is valid JSON. It does not guarantee the fields your app needs are present.\r
3. isinstance checks that the top-level value is a dictionary. Field-level validation and local file save/load are further project work.\r
\r
### Try one small decision\r
\r
Your contacts print correctly. You close the app, reopen it, and they are gone. What was missing?\r
\r
1. More print statements\r
2. A different contact name\r
3. Saving records and loading them on the next run\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Separate what exists in memory from what exists on disk.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
A complete persistence loop is load → change → save → restart → load again.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Saving records and loading them on the next run** Yes. Persistence needs a place to store data and a way to read it back.\r
\r
</details>\r
\r
**Then practise:** Keep the working round trip. Add print(isinstance(json.loads("[]"), dict)) below it. Compare that false result with the existing error from loading not valid JSON. Explain why valid JSON can still have the wrong shape.\r
\r
**Your project's first action:** Reuse your Day 5 contact shape. Write down the filename you will save to and what should happen if it does not exist yet.\r
\r
**How it connects:** Extend the contact directory rather than inventing a new data model. Browser lab files belong to its temporary environment; test real restart behaviour in your local project.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
An in-memory directory disappears when the process stops. A useful tool often needs durable state, but saving state introduces new failure modes: missing files, invalid data, and interrupted writes. Today you will connect persistence to recovery and learn to investigate errors using evidence rather than a sequence of guesses.\r
\r
**Your project:** [Persistent contact book with recovery](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Serialize structured data to JSON and load it back deliberately.\r
- Distinguish missing, corrupt, and invalid stored data.\r
- Read an exception and investigate the relevant failing operation.\r
\r
## Understand the concept\r
\r
### Persistence is a boundary\r
\r
Memory belongs to a running process. A file survives beyond that process, but the file format becomes a contract between versions of the application. JSON represents a useful subset of values such as objects, arrays, strings, numbers, booleans, and null. It does not automatically preserve custom Python objects or validate your business rules. Loading syntactically valid JSON is therefore followed by checking that the stored shape and required fields match what your program expects.\r
\r
### Failures need different recovery policies\r
\r
A missing data file on first launch can mean an empty directory. A corrupt existing file may represent information the user expects you to preserve. Do not treat both cases as permission to overwrite the file with an empty object. Decide which errors are recoverable, which need user action, and what evidence to keep. For writes, an intermediate file followed by an appropriate replacement can reduce partial-write risks; the exact durability guarantee still depends on the operating system and storage setup.\r
\r
### Debugging starts with reproduction\r
\r
Read the exception type, message, and relevant stack frames. Identify the input and operation that caused the failure. Reproduce it with the smallest useful example, state a hypothesis, and test one targeted change. Catching every exception and continuing silently removes the evidence you need. A useful error message explains the problem and next action while avoiding private data. After the fix, re-run the successful path as well as the failing case.\r
\r
## A worked example, step by step\r
\r
JSON parsing and application-level validation are separate checks. A small in-memory example keeps the two concepts visible.\r
\r
\`\`\`python\r
import json\r
\r
contacts = {"C001": {"name": "Ali", "city": "Lahore"}}\r
saved_text = json.dumps(contacts)\r
loaded = json.loads(saved_text)\r
if not isinstance(loaded, dict):\r
    raise ValueError("Expected a contact directory")\r
assert loaded == contacts\r
print("Round trip preserved 1 contact")\r
\r
try:\r
    json.loads("not valid JSON")\r
except json.JSONDecodeError:\r
    print("Stored data is not valid JSON; keep the original for investigation")\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
Round trip preserved 1 contact\r
Stored data is not valid JSON; keep the original for investigation\r
\`\`\`\r
\r
dumps converts the dictionary into a JSON text representation, while loads parses that representation into Python values. The isinstance check validates the outer shape and the assertion confirms this sample round trip. A real application must also inspect each contact's fields. The deliberate invalid text produces JSONDecodeError, which is handled specifically. The message recommends preserving the original data instead of pretending a failed read means there are no contacts.\r
\r
## Practise before building\r
\r
### Exercise 1: Separate parsing from validation\r
\r
Load a valid JSON array where the program expects a dictionary. Reject the shape clearly.\r
\r
**Hint:** Valid JSON is not necessarily valid application data.\r
\r
**Check your result:** The failure is a schema problem, not incorrectly reported as corrupt JSON.\r
\r
### Exercise 2: Record a debugging hypothesis\r
\r
Introduce a missing contact field and write the input, observed failure, hypothesis, and fix in four short lines.\r
\r
**Hint:** Find the operation that assumes the missing field exists.\r
\r
**Check your result:** Your fix addresses the assumption and a regression example remains.\r
\r
### Exercise 3: Test recovery locally\r
\r
Use a temporary project data file to test first launch, a normal save, and a damaged copy.\r
\r
**Hint:** Do not experiment on your only copy of useful data.\r
\r
**Check your result:** The normal state reloads and damaged data is not silently overwritten.\r
\r
## Common mistakes and how to debug them\r
\r
- Equating valid JSON with valid records: validate the expected data shape after parsing.\r
- Returning empty data for every exception: that can hide corruption and cause information loss.\r
- Fixing the symptom without preserving a regression case: keep the input that exposed the assumption.\r
\r
## The FDE connection\r
\r
Customer data is part of the product, not disposable debugging material. An FDE plans how to diagnose a failure, protect existing records, and explain recovery to the operator. A modest contact file is a good place to learn these habits before working with a production database.\r
\r
## Build your lesson project\r
\r
**Persistent contact book with recovery**\r
\r
Extend the contact directory so records survive closing and reopening the program. Store them in a documented JSON file, validate loaded records, and distinguish first launch from damaged existing data. Add a recovery message and a backup approach that preserves the user's information while you investigate a failure.\r
\r
- Save and load operations with a documented data-file path and format.\r
- A validated contact schema compatible with lesson 5.\r
- A recovery policy for missing, malformed, and invalid files.\r
- A restart test and a debugging log for one controlled failure.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- How are parsing, validation, and recovery different?\r
- Which failure must not be treated as empty data?\r
- What evidence helped you choose a targeted debugging fix?\r
\r
## References and next steps\r
\r
- [Python: reading and writing files](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files)\r
- [Python: errors and exceptions](https://docs.python.org/3/tutorial/errors.html)\r
\r
[← Lesson 5](../05_Day_Lists_Dictionaries/) · [Lesson 7 →](../07_Day_Project1_CLI_App/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
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
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
