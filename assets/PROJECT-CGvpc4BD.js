const e=`# Lesson 7 project — A usable CLI expense tracker\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Write the exact terminal conversation for adding one fictional expense and listing it again after a restart. Use that conversation as your first test.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`expenses.py\`. Run python expenses.py. This example models the calculation; add the CLI and persistent storage in the project.\r
\r
Combine Days 2–6: types, rules, functions, collections, and files. This becomes the expense app you will test and give a web interface later.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A freelancer needs to record small expenses and inspect a reliable total. Build a command-line tool that adds, lists, and totals fictional expenses, saves them between runs, and explains invalid input. A stranger should be able to install and use it from the README. Receipt scanning, accounts, and bank connections are outside the first version.\r
\r
**Learning goal:** Turn a user problem into a bounded feature list and acceptance criteria. Compose earlier concepts into a complete expense workflow. Observe a new user and distinguish usability feedback from implementation guesses.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- An add/list/total command workflow with JSON persistence.\r
- A clear data model and money-unit policy.\r
- A README with setup, sample commands, and error examples.\r
- A recorded user observation and a test-results table.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Complete one slice\r
\r
- Write the add-expense contract and store one valid record.\r
- Restart the tool and confirm the record is available.\r
\r
**Stop and check:** One expense travels from input to durable storage and back.\r
\r
### Milestone 2: Finish the workflow\r
\r
- Add listing and total operations using shared calculation logic.\r
- Handle invalid amounts, empty data, and missing files.\r
\r
**Stop and check:** Each core action works without a hidden manual step.\r
\r
### Milestone 3: Share and refine\r
\r
- Test a fresh setup from your README.\r
- Observe a new user, fix one specific obstacle, and retest.\r
\r
**Stop and check:** The user can complete the agreed task with less help.\r
\r
## Acceptance checks\r
\r
- [ ] Add, list, and total form a working command-line workflow.\r
- [ ] Expenses survive a restart with stable IDs.\r
- [ ] Amounts follow a documented numeric representation and validation policy.\r
- [ ] A fresh setup works from the README alone.\r
- [ ] One usability observation and all test cases are recorded.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Two valid expenses of 500 and 200 cents | Both listed; total is 700 cents |\r
| 2 | Empty expense list | Zero total and clear no-records message |\r
| 3 | Invalid or negative amount | Helpful rejection and no stored invalid record |\r
| 4 | Restart after adding a record | Stored record remains available |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`expenses.py\`, and its expected output. Run python expenses.py. This example models the calculation; add the CLI and persistent storage in the project.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add category filtering with an explicit filtered-total label.\r
- Export a report and document which fields it includes.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- What did you intentionally leave out of version one?\r
- Where does one vertical slice cross the system's boundaries?\r
- What did a new user's behavior reveal that your own testing missed?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Python: argparse](https://docs.python.org/3/library/argparse.html)\r
- [Python: JSON](https://docs.python.org/3/library/json.html)\r
\r
[Return to lesson 7](README.md)\r
`;export{e as default};
