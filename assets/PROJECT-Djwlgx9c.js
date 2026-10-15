const e=`# Lesson 28 project — Customer-policy assistant capstone\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Use your Day 26 brief to choose one user and one task. Write three observable acceptance criteria, then connect the smallest path through your existing components.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`capstone_acceptance.py\`. Run python capstone_acceptance.py. These records are illustrative acceptance-plan entries, not results from an implemented capstone.\r
\r
Reuse the interface, source contract, evaluation harness, database, and request trace where they fit the brief. Change components only when the customer requirement calls for it.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
Build a fictional customer's read-only policy assistant using a clear interface, trusted backend boundary, source-grounded answer flow, feedback storage, and an evaluation suite. Start with a labelled offline mode if necessary, then add a real provider only when its contract and secret handling are understood. Keep external messaging, purchases, and autonomous writes outside this capstone scope.\r
\r
**Learning goal:** Turn a customer brief into a bounded system design. Connect interface, backend, retrieval, and evidence contracts coherently. Demonstrate one complete workflow and its critical failure cases.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A scoped customer brief and actual architecture diagram.\r
- A working question-to-evidence-to-answer workflow.\r
- Feedback persistence and clear product failure states.\r
- Acceptance evidence, a repeatable eval suite, and an unfinished-work list.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Agree on design\r
\r
- Reuse the discovery brief and define component contracts.\r
- Choose a narrow data collection and explicit access rules.\r
\r
**Stop and check:** The design maps directly to observable customer criteria.\r
\r
### Milestone 2: Build one complete slice\r
\r
- Connect interface, backend, retrieval, and source display.\r
- Record actual mode and implement feedback storage.\r
\r
**Stop and check:** One representative user task works end to end.\r
\r
### Milestone 3: Validate critical cases\r
\r
- Run missing-evidence, permission, and service-failure cases.\r
- Save eval outputs and list remaining work for the next release stage.\r
\r
**Stop and check:** The current result and its limitations are reviewable.\r
\r
## Acceptance checks\r
\r
- [ ] The capstone follows a specific brief with explicit excluded actions.\r
- [ ] A complete user question produces supported evidence and a usable response.\r
- [ ] Missing evidence and service failure have honest distinct states.\r
- [ ] Access policy and feedback persistence are tested at their boundaries.\r
- [ ] A repeatable eval report and remaining-work list accompany the implementation.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Permitted answerable policy question | Supported response with inspectable source |\r
| 2 | Question outside the document collection | Clear abstention |\r
| 3 | Forbidden document or failed provider | Protected context boundary and useful failure result |\r
| 4 | Submit feedback then restart | Stored feedback remains available under its access policy |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`capstone_acceptance.py\`, and its expected output. Run python capstone_acceptance.py. These records are illustrative acceptance-plan entries, not results from an implemented capstone.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Improve one demonstrated retrieval failure instead of adding unrelated features.\r
- Add a provider adapter while preserving the same output and evidence contracts.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Which user outcome guided the architecture?\r
- Which boundary owns each critical validation?\r
- What remains incomplete and how does it affect the agreed workflow?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [FastAPI tutorial](https://fastapi.tiangolo.com/tutorial/)\r
- [Anthropic: building effective agents](https://www.anthropic.com/engineering/building-effective-agents)\r
\r
[Return to lesson 28](README.md)\r
`;export{e as default};
