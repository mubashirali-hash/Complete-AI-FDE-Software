const e=`# Lesson 26 project — A discovery interview and customer brief\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Roleplay a short interview with a fictional shop owner. Ask for the last failed task, then write their current steps before proposing features.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`discovery-notes.md\`. Complete the discovery notes through a fictional roleplay or a conversation you are authorized to conduct. The starter is a writing artifact, not executable code.\r
\r
Use what you learned while building the assistant to ask better questions. Today's brief becomes the starting point for your capstone; it may justify changing the solution.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
Use the retailer scenario in the app or another clearly fictional business workflow. Conduct a structured roleplay, record evidence and assumptions, compare implementation alternatives, and produce a one-page brief. A real interview is optional and requires authorization from the people involved; the learning project can be completed entirely with fictional data.\r
\r
**Learning goal:** Investigate a real or fictional workflow using specific recent examples. Identify users, data ownership, constraints, and operational responsibility. Write a scoped brief with a baseline, target, evaluation method, and explicit assumptions.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A discovery-question plan and notes from two roleplays or authorized interviews.\r
- A one-page problem, scope, constraints, and success brief.\r
- A baseline-measurement and evaluation plan.\r
- An alternatives comparison and a risk/owner list.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Investigate the workflow\r
\r
- Ask for a concrete recent example and map its steps.\r
- Record affected users, existing systems, and data ownership.\r
\r
**Stop and check:** The notes distinguish the customer's words from your interpretation.\r
\r
### Milestone 2: Shape the pilot\r
\r
- Compare a simple workflow fix with an AI-assisted option.\r
- Write in-scope and out-of-scope tasks with access constraints.\r
\r
**Stop and check:** The pilot has a clear useful outcome and a bounded action set.\r
\r
### Milestone 3: Agree on evidence\r
\r
- Label estimates and plan a measured baseline.\r
- Define target, quality guardrails, ownership, and next decision.\r
\r
**Stop and check:** A customer and an engineer could review the same brief.\r
\r
## Acceptance checks\r
\r
- [ ] The brief identifies the user and a concrete current workflow.\r
- [ ] Measured facts, interview estimates, and unknowns are distinguished.\r
- [ ] In-scope and excluded tasks are explicit.\r
- [ ] Data access, constraints, and operating ownership are recorded.\r
- [ ] Success criteria include a baseline and an evaluation method.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Customer says we need AI | Discovery begins with a workflow example |\r
| 2 | Interview supplies 8 x 20 minutes/day | Labelled estimate, not proven savings |\r
| 3 | Purchasing is requested during a read-only pilot | Scope impact is made explicit |\r
| 4 | A new reviewer reads the brief | Users, outcome, constraints, and evidence plan are understandable |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`discovery-notes.md\`, and its expected output. Complete the discovery notes through a fictional roleplay or a conversation you are authorized to conduct. The starter is a writing artifact, not executable code.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Create a measurement worksheet for a sample of actual tasks.\r
- Repeat the roleplay with a changed constraint and revise the brief.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- What did discovery change about your initial idea?\r
- Which important number is still an assumption?\r
- Why is the selected pilot preferable to the alternative for this scope?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Palantir: forward deployed engineering approach](https://www.palantir.com/docs/foundry/architecture-center/)\r
- [Atlassian: the forward deployed engineer](https://www.atlassian.com/blog/how-we-build/meet-the-forward-deployed-engineer)\r
\r
[Return to lesson 26](README.md)\r
`;export{e as default};
