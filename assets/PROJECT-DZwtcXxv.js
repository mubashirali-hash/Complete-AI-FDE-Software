const e=`# Lesson 3 project — Support-ticket triage queue\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Write three example tickets and their expected priorities: critical, ordinary at exactly 24 hours, and ordinary at 23 hours. Put the critical rule first.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`triage.py\`. Run python triage.py or paste the example into the Python lab.\r
\r
Your converter had input rules. Now you can express rules directly and apply them repeatedly to a queue.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A support lead needs a repeatable way to review tickets. Build a program that reads a small in-memory ticket list, assigns exactly one priority to each valid ticket, and prints a summary. Critical tickets are urgent; other tickets aged at least 24 hours need review; the rest are standard. Invalid or incomplete tickets must be reported instead of silently classified.\r
\r
**Learning goal:** Trace which branch runs for a given condition, including equality. Process a collection without skipping or endlessly repeating work. Translate written priority rules into an ordered decision structure.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A triage program with documented rule precedence.\r
- A sample queue containing normal, critical, old, and invalid tickets.\r
- A summary of each priority and rejected records.\r
- A test table for empty queues and threshold cases.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Write the decision table\r
\r
- Create one example for each rule and one overlapping example.\r
- Agree that critical severity takes precedence over age.\r
\r
**Stop and check:** The overlapping example has one unambiguous expected priority.\r
\r
### Milestone 2: Process the queue\r
\r
- Use a loop to validate and classify one ticket at a time.\r
- Count outcomes without changing the original queue during iteration.\r
\r
**Stop and check:** Every input ticket has a visible result or rejection reason.\r
\r
### Milestone 3: Handle edges\r
\r
- Test empty input, missing fields, and 23/24/25-hour boundaries.\r
- Save the queue, output, and rule explanation for review.\r
\r
**Stop and check:** Your summary agrees with the individually classified tickets.\r
\r
## Acceptance checks\r
\r
- [ ] Each valid ticket receives exactly one documented priority.\r
- [ ] Critical severity takes precedence over the age rule.\r
- [ ] The 24-hour boundary behaves as specified.\r
- [ ] Invalid records and an empty queue are handled visibly.\r
- [ ] Priority totals and rejection totals match the processed records.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Critical ticket aged 30 hours | Urgent only, not both urgent and review |\r
| 2 | Normal tickets aged 23, 24, and 25 hours | Standard, review, and review |\r
| 3 | Empty queue | Zero counts and a useful no-work message |\r
| 4 | Ticket missing severity or with negative age | Rejected with a reason |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`triage.py\`, and its expected output. Run python triage.py or paste the example into the Python lab.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a maximum batch size and show unprocessed tickets separately.\r
- Make the threshold configurable and test two different policies.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Why does rule order matter?\r
- What happens when the collection is empty?\r
- Which boundary case was most likely to reveal a bug?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Python: control flow](https://docs.python.org/3/tutorial/controlflow.html)\r
\r
[Return to lesson 3](README.md)\r
`;export{e as default};
