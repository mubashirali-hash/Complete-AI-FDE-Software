const e=`# Lesson 29 project — A hardened capstone release package\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Name a known-good capstone version. Write how you would restore it, then test the procedure in your practice environment and record the result.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`release-readiness.md\`. Complete this record using the actual capstone release and an isolated recovery rehearsal. It is an operating document, not an executable script.\r
\r
Apply Day 14 release checks, Day 23 permissions, and Day 25 incident investigation to the complete Day 28 capstone.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
Take the capstone through a documented release-readiness process. Verify its actual environment, permissions, bounded failures, stored feedback, and operating limits. Rehearse recovery in an isolated setup using fictional data. Produce a release decision with evidence and unresolved checks instead of claiming universal production readiness.\r
\r
**Learning goal:** Connect deployment configuration to the actual released version. Verify critical permissions, failures, and resource policies after deployment. Document and rehearse recovery with compatible data and a known good version.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A versioned hosted or reproducible release record.\r
- Permission, failure, resource, and data check evidence.\r
- A recovery runbook and isolated rehearsal result.\r
- An operational-owner map and explicit release limitations.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Inspect configuration\r
\r
- Verify the deployed version and required configuration without printing secret values.\r
- Check startup and a representative workflow in the actual environment.\r
\r
**Stop and check:** The operating record identifies which version and environment were tested.\r
\r
### Milestone 2: Exercise boundaries\r
\r
- Test allowed/forbidden access and bounded service failures.\r
- Verify feedback durability, backup policy, and resource-limit behavior.\r
\r
**Stop and check:** Failures have observable, useful outcomes rather than silent success.\r
\r
### Milestone 3: Rehearse and hand over\r
\r
- Test recovery using a known good version and compatible sample data.\r
- Assign operational roles and list unresolved release checks.\r
\r
**Stop and check:** An operator can follow the recovery and escalation story.\r
\r
## Acceptance checks\r
\r
- [ ] The tested release and environment are explicitly identified.\r
- [ ] Allowed and forbidden access paths are verified after deployment.\r
- [ ] Timeout, provider failure, and budget exhaustion are bounded and visible.\r
- [ ] Data durability and recovery compatibility are checked in an isolated rehearsal.\r
- [ ] Configuration, alerts, backup, and escalation have documented owners.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Allowed and forbidden identities | Intended access only, with clear forbidden outcomes |\r
| 2 | Unavailable provider or timed-out retrieval | Bounded failure and useful product feedback |\r
| 3 | Restart and recovery with sample feedback | Durable records and documented version compatibility |\r
| 4 | Operator follows recovery/escalation instructions | Expected results and responsible roles are clear |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`release-readiness.md\`, and its expected output. Complete this record using the actual capstone release and an isolated recovery rehearsal. It is an operating document, not an executable script.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a staged rollout and a concrete stop/rollback threshold.\r
- Automate one meaningful release check without replacing the full operator review.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Which check establishes the actual hosted behavior?\r
- What could make a previous code version incompatible with current data?\r
- Who acts when the first alert or customer failure occurs?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [GitHub Actions documentation](https://docs.github.com/en/actions)\r
- [OpenTelemetry: observability concepts](https://opentelemetry.io/docs/concepts/observability-primer/)\r
\r
[Return to lesson 29](README.md)\r
`;export{e as default};
