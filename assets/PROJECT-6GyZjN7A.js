const e=`# Lesson 16 project — Versioned support-ticket classifier\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Write what billing, technical, and general mean. Label twelve fictional tickets, including at least one ambiguous case, before changing a prompt.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`classifier_contract.py\`. Run python classifier_contract.py. This example validates a response fixture; it does not invoke or measure a language model.\r
\r
Use your experiment record from Day 15. Your ticket examples will later help you test the assistant's behaviour consistently.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A support team wants to route tickets into billing, technical, and general queues. Build a labelled dataset, a versioned prompt, an output validator, and a comparison report. Fixture mode lets you verify the pipeline without provider access; optional real-provider mode lets you collect predictions. Ambiguous and invalid outputs must not silently trigger routing.\r
\r
**Learning goal:** Specify a task, allowed labels, output shape, and ambiguous-input behavior. Validate output independently of the prompt. Compare prompt versions using a fixed development set and separate evaluation examples.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A label rubric and at least 12 labelled ticket examples.\r
- Versioned prompts with one clearly explained revision.\r
- A parser/validator and an explicit review or rejection result.\r
- A comparison report separating fixture checks from real predictions.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Specify and label\r
\r
- Define category meanings and ambiguous-input behavior.\r
- Create varied cases and reserve some from prompt tuning.\r
\r
**Stop and check:** The target labels are justified by the rubric rather than the model.\r
\r
### Milestone 2: Build the response boundary\r
\r
- Validate JSON shape, label type, and allowed values.\r
- Keep invalid results out of automatic downstream routing.\r
\r
**Stop and check:** Malformed output cannot become a successful routing result.\r
\r
### Milestone 3: Evaluate a revision\r
\r
- Record prompt versions and predictions on a consistent set.\r
- Inspect false classifications and report held-out results separately.\r
\r
**Stop and check:** The comparison includes regressions and uncertainty, not only successes.\r
\r
## Acceptance checks\r
\r
- [ ] Allowed categories and ambiguity policy are documented.\r
- [ ] At least 12 labelled examples include boundary and invalid-input cases.\r
- [ ] Response parsing validates shape, types, and allowed labels.\r
- [ ] Prompt versions and predictions are recorded for comparison.\r
- [ ] Fixture checks and real-provider evaluations are reported separately.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | A clear billing question | Billing according to the rubric |\r
| 2 | An ambiguous multi-topic ticket | Documented precedence or review behavior |\r
| 3 | Unknown label, extra fields, or invalid JSON | Explicit invalid-response result |\r
| 4 | Ticket text instructing the system to change its rules | Treated as input data, not an authorized rule change |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`classifier_contract.py\`, and its expected output. Run python classifier_contract.py. This example validates a response fixture; it does not invoke or measure a language model.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a human-review queue for uncertain or invalid outputs.\r
- Report per-category errors and class balance instead of accuracy alone.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Which constraints are enforced by code rather than the prompt?\r
- How do development cases differ from held-out evaluation cases?\r
- What would make an apparent score improvement misleading?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Anthropic: building effective agents](https://www.anthropic.com/engineering/building-effective-agents)\r
- [Python: JSON parsing](https://docs.python.org/3/library/json.html)\r
\r
[Return to lesson 16](README.md)\r
`;export{e as default};
