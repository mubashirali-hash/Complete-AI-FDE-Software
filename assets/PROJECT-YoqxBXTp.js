const e=`# Lesson 23 project — A permission and budget boundary for the assistant\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
List the assistant's protected resources and who may access each. Add a request limit, then write one denied request for each boundary.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`policy_gate.py\`. Run python policy_gate.py. This is a single-process authorization fixture, not a complete identity system.\r
\r
Apply the allowlist from Day 17 to retrieval and budget use. Add denied-access and limit cases to the evaluation harness from Day 22.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
Harden the fictional document assistant with trusted-user fixtures, document filtering, request limits, and explicit exhausted-budget behavior. Add a small threat model and abuse test set. Keep the prototype's limits visible: fixture identity and single-process budgets demonstrate boundaries but are not a deployed authentication or distributed-quota system.\r
\r
**Learning goal:** Distinguish untrusted instruction-like content from trusted application authority. Apply document permissions and resource limits before work is executed. Estimate operating cost and test abuse/failure cases under an explicit scope.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A trust-boundary diagram and protected-resource list.\r
- Permission filtering before context construction.\r
- Explicit request/resource limits and recovery results.\r
- An abuse-test report and a reproducible cost estimate.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Define the policy\r
\r
- Specify which trusted users may access each source and tool.\r
- List untrusted inputs and likely misuse paths.\r
\r
**Stop and check:** Protected data is identified before implementation.\r
\r
### Milestone 2: Enforce before execution\r
\r
- Filter forbidden documents before retrieval/context use.\r
- Apply scoped resource gates before expensive work.\r
\r
**Stop and check:** A rejected request cannot consume the same unrestricted workflow as an accepted one.\r
\r
### Milestone 3: Test and estimate\r
\r
- Run malicious-text, unknown-user, and budget-exhaustion cases.\r
- Document cost assumptions, alert ownership, and prototype limitations.\r
\r
**Stop and check:** The report distinguishes observed defenses from untested attack space.\r
\r
## Acceptance checks\r
\r
- [ ] Trusted authority is separate from user text and model arguments.\r
- [ ] Forbidden documents never enter an unauthorized user's context.\r
- [ ] Resource limits are enforced outside the model prompt.\r
- [ ] Budget exhaustion and policy rejection produce clear outcomes.\r
- [ ] The threat model, attack results, and cost assumptions are recorded.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Staff identity requests public FAQ | Permitted evidence only |\r
| 2 | Staff identity requests internal pricing | Forbidden source excluded before context |\r
| 3 | Retrieved text requests an admin override | Policy map and allowed resources remain unchanged |\r
| 4 | Unknown identity or exhausted resource budget | Explicit rejection or exhaustion result |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`policy_gate.py\`, and its expected output. Run python policy_gate.py. This is a single-process authorization fixture, not a complete identity system.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Replace fixture identity with a verified authentication boundary in a later backend iteration.\r
- Design shared quota storage and concurrency checks for multi-worker operation.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Which check enforces authority outside model output?\r
- What happens before and after the budget gate?\r
- What would be misleading about calling the prototype fully secure?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [OWASP: prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)\r
- [OWASP: authorization guidance](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)\r
\r
[Return to lesson 23](README.md)\r
`;export{e as default};
