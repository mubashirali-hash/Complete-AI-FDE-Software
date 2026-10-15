const e=`# Lesson 17 project — An allowlisted inventory tool service\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Write two read-only inventory tools in plain English: their names, required inputs, and possible results. List one action they must never perform.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`tool_dispatcher.py\`. Run python tool_dispatcher.py. The call is a fixture proposal and the tool reads fictional local inventory.\r
\r
Combine Day 4 function contracts with Day 16 output validation. You will reuse the permission boundary in later agent and capstone work.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A shop assistant needs read-only stock lookup and product search over fictional inventory. Build a dispatcher with two named tools, argument validation, not-found results, and a trusted-user access policy. Demonstrate invalid proposals and resource restrictions with fixtures before optionally connecting a model that proposes tool calls.\r
\r
**Learning goal:** Describe the loop from model proposal to tool result and final response. Validate tool names and argument types before execution. Keep authorization and consequential actions outside model control.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- Two documented read-only tool contracts and a dispatcher.\r
- A fictional inventory dataset and trusted-user policy fixtures.\r
- Tests for invalid names, arguments, and forbidden resources.\r
- A trace of proposal, validation, execution, and tool result.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Define narrow operations\r
\r
- Specify lookup and search inputs, results, and not-found behavior.\r
- List explicitly excluded write operations.\r
\r
**Stop and check:** The contract cannot place orders or change stock.\r
\r
### Milestone 2: Enforce the boundary\r
\r
- Validate proposals and dispatch only recognized operations.\r
- Apply trusted access policy before reading a resource.\r
\r
**Stop and check:** Model-supplied arguments cannot grant extra access.\r
\r
### Milestone 3: Inspect execution\r
\r
- Record safe tool traces and simulate invalid or timed-out calls.\r
- Keep failures distinguishable from successful results.\r
\r
**Stop and check:** A reviewer can see why each call was accepted or rejected.\r
\r
## Acceptance checks\r
\r
- [ ] Only the two documented read-only tools can execute.\r
- [ ] Names, shapes, types, and ranges are validated before calls.\r
- [ ] Trusted user/resource policy is enforced outside model arguments.\r
- [ ] Not-found, forbidden, and failed-call results remain distinguishable.\r
- [ ] A safe execution trace and invalid-proposal tests are recorded.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Valid stock lookup for an allowed product | Structured stock result |\r
| 2 | Unknown tool or unexpected argument field | Rejected before execution |\r
| 3 | Model arguments claim an admin role | Ignored as authority; trusted policy still applies |\r
| 4 | Unknown or forbidden product | Not-found or forbidden result without fabricated stock |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`tool_dispatcher.py\`, and its expected output. Run python tool_dispatcher.py. The call is a fixture proposal and the tool reads fictional local inventory.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a model adapter while keeping the same validated dispatcher.\r
- Design a write tool on paper with approval and idempotency; do not silently add it to the read-only pilot.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Who decides whether the tool is authorized?\r
- What changes when a tool has external side effects?\r
- Which trace fields are useful without exposing private content?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Anthropic: building effective agents](https://www.anthropic.com/engineering/building-effective-agents)\r
- [OWASP: prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)\r
\r
[Return to lesson 17](README.md)\r
`;export{e as default};
