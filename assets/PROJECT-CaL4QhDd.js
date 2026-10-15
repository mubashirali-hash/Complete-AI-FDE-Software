const e=`# Lesson 25 project — Request tracing and an incident runbook\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Draw your assistant's request stages. Choose an ID field, then write the first three investigation steps for a retrieval failure.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`request_trace.py\`. Run python request_trace.py. The timing is a fixed illustrative fixture, not a benchmark.\r
\r
Add tracing to the backend from Day 24 and the evidence path from Day 19. Use it to understand failures found by Day 22's evaluation cases.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
Instrument the fictional assistant's validation, retrieval, answer, and failure stages with structured events and a shared request ID. Create a runbook for a retrieval timeout and a bad release. Measure actual elapsed time where implemented, clearly label fixtures, and avoid unnecessary private content in logs.\r
\r
**Learning goal:** Distinguish logs, measurements, and traces by the question they answer. Connect events from one request with a stable correlation ID. Write a runbook with symptoms, checks, recovery, and escalation ownership.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A structured event schema and correlated request trace.\r
- A redaction/data-minimization policy for logs.\r
- Runbooks for timeout diagnosis and release recovery.\r
- Evidence from a simulated incident and runbook walkthrough.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Define the questions\r
\r
- List the incidents you need to diagnose and the fields each requires.\r
- Choose stable event names, units, and correlation IDs.\r
\r
**Stop and check:** Each field serves a stated operational question.\r
\r
### Milestone 2: Instrument the boundaries\r
\r
- Connect validation, retrieval, and response events for a request.\r
- Keep real measurements separate from fixture values and redact excluded fields.\r
\r
**Stop and check:** A failed run is traceable without a private-data dump.\r
\r
### Milestone 3: Practise recovery\r
\r
- Simulate a timeout and follow the runbook's checks and mitigation.\r
- Have another person review expected results and escalation ownership.\r
\r
**Stop and check:** Recovery is verified rather than assumed from an attempted command.\r
\r
## Acceptance checks\r
\r
- [ ] Events from one request share a correlation ID.\r
- [ ] Stable event names identify success and failure stages.\r
- [ ] Logs omit credentials and unnecessary private content.\r
- [ ] Actual measurements and fixture values are clearly distinguished.\r
- [ ] Runbooks include symptoms, checks, recovery verification, and ownership.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Successful request | Correlated stage and response events |\r
| 2 | Retrieval timeout | Failed stage, bounded outcome, and recovery guidance visible |\r
| 3 | Input containing secret-looking text | Excluded from the selected event fields |\r
| 4 | Another learner follows the runbook | Expected results and escalation path are understandable |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`request_trace.py\`, and its expected output. Run python request_trace.py. The timing is a fixed illustrative fixture, not a benchmark.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a failure-rate summary with a documented time window and denominator.\r
- Integrate an observability backend after deciding retention and access policy.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Which event identifies the failed stage?\r
- Which fields did you intentionally avoid collecting?\r
- How does the runbook establish that recovery succeeded?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Python: logging](https://docs.python.org/3/library/logging.html)\r
- [OpenTelemetry: observability concepts](https://opentelemetry.io/docs/concepts/observability-primer/)\r
\r
[Return to lesson 25](README.md)\r
`;export{e as default};
