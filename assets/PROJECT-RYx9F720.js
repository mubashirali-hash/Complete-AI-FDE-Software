const e=`# Lesson 6 project — Persistent contact book with recovery\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Reuse your Day 5 contact shape. Write down the filename you will save to and what should happen if it does not exist yet.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`persistence.py\`. Run python persistence.py. This worked example serializes in memory; the project adds actual file reads and writes.\r
\r
Extend the contact directory rather than inventing a new data model. Browser lab files belong to its temporary environment; test real restart behaviour in your local project.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
Extend the contact directory so records survive closing and reopening the program. Store them in a documented JSON file, validate loaded records, and distinguish first launch from damaged existing data. Add a recovery message and a backup approach that preserves the user's information while you investigate a failure.\r
\r
**Learning goal:** Serialize structured data to JSON and load it back deliberately. Distinguish missing, corrupt, and invalid stored data. Read an exception and investigate the relevant failing operation.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- Save and load operations with a documented data-file path and format.\r
- A validated contact schema compatible with lesson 5.\r
- A recovery policy for missing, malformed, and invalid files.\r
- A restart test and a debugging log for one controlled failure.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Design storage\r
\r
- Choose a data-file location and write a valid sample JSON document.\r
- Define separate behavior for missing data and damaged existing data.\r
\r
**Stop and check:** The recovery policy does not erase existing data to hide a failure.\r
\r
### Milestone 2: Persist and restore\r
\r
- Save contacts and load them through schema validation.\r
- Close the process, reopen it, and inspect the stored records.\r
\r
**Stop and check:** IDs and fields survive a normal restart.\r
\r
### Milestone 3: Exercise recovery\r
\r
- Test a damaged copy and record the error path.\r
- Keep a backup and demonstrate recovery without guessing.\r
\r
**Stop and check:** A reviewer can follow the recovery steps from your README.\r
\r
## Acceptance checks\r
\r
- [ ] Contacts survive a normal process restart.\r
- [ ] Loaded data is checked for both JSON syntax and contact shape.\r
- [ ] First launch works when the data file is absent.\r
- [ ] Corrupt existing data is reported and preserved for recovery.\r
- [ ] The README documents the data path, backup, and recovery steps.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Start without a data file | An empty usable directory is created according to policy |\r
| 2 | Save two contacts then restart | Both IDs and fields return unchanged |\r
| 3 | Read malformed JSON from a damaged copy | Useful error; original damaged file preserved |\r
| 4 | Read valid JSON with an invalid contact shape | Schema error rather than silent acceptance |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`persistence.py\`, and its expected output. Run python persistence.py. This worked example serializes in memory; the project adds actual file reads and writes.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Write through a temporary file and explain what guarantee it improves.\r
- Add a format version and a migration plan for a future optional field.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- How are parsing, validation, and recovery different?\r
- Which failure must not be treated as empty data?\r
- What evidence helped you choose a targeted debugging fix?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Python: reading and writing files](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files)\r
- [Python: errors and exceptions](https://docs.python.org/3/tutorial/errors.html)\r
\r
[Return to lesson 6](README.md)\r
`;export{e as default};
