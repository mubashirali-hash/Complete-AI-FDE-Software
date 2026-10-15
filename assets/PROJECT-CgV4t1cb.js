const e=`# Lesson 20 project — A bounded policy-research assistant\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Draw a research loop with an allowed search tool, a maximum of three steps, and outcomes for enough evidence, no evidence, and tool failure.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`bounded_workflow.py\`. Run python bounded_workflow.py. The action list is scripted fixture data, not model-directed agent behavior.\r
\r
Combine the tool boundary from Day 17 with the evidence rule from Day 19. Start with fixed steps before experimenting with model-selected actions.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A team needs a short evidence-based summary from approved fictional policy documents. Build a workflow with search, read, and finish actions, then optionally replace scripted action selection with a model adapter. Enforce resource limits, permitted tools, and no-answer behavior in code. The first version is read-only and cannot send messages or modify business records.\r
\r
**Learning goal:** Distinguish a fixed workflow from model-directed action selection. Enforce step, time, and budget limits in application code. Record observable actions and results without depending on hidden model reasoning.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- An allowed-tool contract and fixed or model-selected action interface.\r
- Application-enforced step, timeout, and budget policies.\r
- An inspectable trace of actions and result categories.\r
- Fixtures for success, tool failure, invalid action, and budget exhaustion.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Choose the flow\r
\r
- Write the goal and allowed observations/actions.\r
- Compare a fixed workflow with the proposed dynamic version.\r
\r
**Stop and check:** The design includes a reason for any dynamic decisions.\r
\r
### Milestone 2: Enforce limits\r
\r
- Validate each action and apply step/time/resource limits before execution.\r
- Separate completed, abstained, failed, and exhausted outcomes.\r
\r
**Stop and check:** No action can authorize more tools or extend its own budget.\r
\r
### Milestone 3: Observe and evaluate\r
\r
- Record safe action/result events.\r
- Run each failure fixture and inspect the final outcome.\r
\r
**Stop and check:** The workflow always stops with a clear result.\r
\r
## Acceptance checks\r
\r
- [ ] Only the documented read-only tools can execute.\r
- [ ] Application code enforces step, timeout, and resource policies.\r
- [ ] Completion, abstention, failure, and budget exhaustion are distinct.\r
- [ ] Observable traces identify actions and results without hidden reasoning.\r
- [ ] Success and failure fixtures terminate within the documented limits.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Search, read, then finish fixture | Completed result with supporting evidence |\r
| 2 | Repeated search without finish | Budget exhaustion rather than endless work |\r
| 3 | Unknown or forbidden tool proposal | Rejected before execution |\r
| 4 | Timed-out read operation | Bounded failure and useful final status |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`bounded_workflow.py\`, and its expected output. Run python bounded_workflow.py. The action list is scripted fixture data, not model-directed agent behavior.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a model-selection adapter and compare it with the fixed workflow.\r
- Detect repeated identical actions and explain the recovery policy.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Which decisions benefit from an agent instead of a fixed flow?\r
- Who controls limits and permissions?\r
- What observable events explain a failed run?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Anthropic: building effective agents](https://www.anthropic.com/engineering/building-effective-agents)\r
\r
[Return to lesson 20](README.md)\r
`;export{e as default};
