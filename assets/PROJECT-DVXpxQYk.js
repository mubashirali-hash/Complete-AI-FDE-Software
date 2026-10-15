const e=`# Lesson 22 project — A repeatable document-assistant evaluation harness\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Create twenty stable case IDs for the document assistant, including answerable, missing-evidence, and forbidden-source cases. Write the expected outcomes first.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`eval_report.py\`. Run python eval_report.py. Results are illustrative scored fixtures, not measured live-model results.\r
\r
Extend Day 16's fixed test-set habit to your Day 21 document assistant. Keep the actual system version with each report.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
Build a harness for at least 20 labelled questions or boundary cases. Run the grounded assistant under a named execution mode, save its actual outputs, score them using a documented rubric, and compare two versions. Include supported answers, no-evidence behavior, permission checks, and failures. Report critical regressions even if an overall average improves.\r
\r
**Learning goal:** Create labelled evaluation cases with observable acceptance criteria. Separate retrieval, answer support, abstention, and operational failure metrics. Compare revisions while recording dataset identity and scoring limits.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A versioned dataset with at least 20 stable case IDs.\r
- A rubric and repeatable run/scoring command.\r
- Per-case output records and category summaries.\r
- A before/after report identifying regressions and limits.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Design coverage\r
\r
- Choose categories from real or fictional user workflows.\r
- Write expected evidence or behavior before generating answers.\r
\r
**Stop and check:** The dataset includes more than easy happy-path questions.\r
\r
### Milestone 2: Build the harness\r
\r
- Run a named mode and save actual case results.\r
- Apply the rubric consistently and preserve human-review notes.\r
\r
**Stop and check:** An operator can rerun the suite without manually reconstructing it.\r
\r
### Milestone 3: Compare revisions\r
\r
- Hold comparison inputs constant and record changed system settings.\r
- Inspect critical failures by ID and category.\r
\r
**Stop and check:** The report can justify a change or explain why it should not ship.\r
\r
## Acceptance checks\r
\r
- [ ] At least 20 labelled cases have stable IDs and documented coverage.\r
- [ ] The harness has a repeatable run command and a reviewed rubric.\r
- [ ] Actual outputs and execution mode are recorded per case.\r
- [ ] Summaries show category counts, denominators, and failed IDs.\r
- [ ] A two-version comparison reports regressions and verification limits.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Supported question with relevant evidence | Rubric assesses retrieval and claim support separately |\r
| 2 | No-answer question | Correct abstention is scored explicitly |\r
| 3 | Forbidden document case | Access boundary is checked as a critical requirement |\r
| 4 | Improved average but worsened critical category | Report exposes the regression rather than hiding it |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`eval_report.py\`, and its expected output. Run python eval_report.py. Results are illustrative scored fixtures, not measured live-model results.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Calibrate automated judge scores against a reviewed human sample.\r
- Add latency and cost reporting with explicit measurement scope.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- What user workload does the dataset represent?\r
- What makes the comparison reproducible?\r
- Which critical failure would block a release despite a higher average score?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Anthropic: building effective agents](https://www.anthropic.com/engineering/building-effective-agents)\r
- [Python: unittest](https://docs.python.org/3/library/unittest.html)\r
\r
[Return to lesson 22](README.md)\r
`;export{e as default};
