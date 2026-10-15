const e=`# Lesson 21 project — A shareable document-assistant demo\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Sketch four screens for the same question journey: ready, loading, supported answer, and no evidence. Then connect the first complete path.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`answer_contract.py\`. Run python answer_contract.py. The response is a fixture for a frontend contract, not a model call.\r
\r
Bring together the frontend pattern from Day 13, retrieval from Day 18, and answer contract from Day 19. Reuse these components for the document-assistant demo.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
Create a usable interface for the grounded assistant from lesson 19. Include example questions, answer/source display, no-evidence and failure states, and an honest mode label. Publish a fictional-data demo or document a reproducible local version while a trusted backend is being prepared. A real-provider extension must keep credentials out of the frontend.\r
\r
**Learning goal:** Compose retrieval, answer contracts, source display, and useful interface states. Test the complete user workflow rather than only individual functions. Publish a scoped demonstration with honest operating limits.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A usable interface connected to the validated answer contract.\r
- A fictional/public document collection and scope explanation.\r
- A verified demo URL or a reproducible local delivery record.\r
- A workflow test report and one observed usability improvement.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Connect contracts\r
\r
- Agree on question, answer, source, status, and mode fields.\r
- Reuse the existing retrieval and evidence checks.\r
\r
**Stop and check:** The interface receives enough information to display the correct state.\r
\r
### Milestone 2: Build the whole task\r
\r
- Add starting questions, loading feedback, and inspectable sources.\r
- Handle absent evidence and service errors differently.\r
\r
**Stop and check:** A new user can tell what the assistant knows and how to inspect it.\r
\r
### Milestone 3: Verify and share\r
\r
- Test a clean context using only fictional/public data.\r
- Observe a new user and record the actual delivery mode and limits.\r
\r
**Stop and check:** The demonstration's scope and verification evidence are clear.\r
\r
## Acceptance checks\r
\r
- [ ] The interface states its document scope and actual execution mode.\r
- [ ] Answered results display relevant supporting passages.\r
- [ ] No-evidence and service-failure states are distinguishable and useful.\r
- [ ] The demo contains no private documents or browser-exposed credentials.\r
- [ ] A new-user workflow and delivery verification are recorded.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Representative answerable question | Supported answer and relevant source display |\r
| 2 | Question outside scope | Useful no-evidence state |\r
| 3 | Failed response fixture | Recovery-oriented service error, not invented success |\r
| 4 | Clean browser or fresh local setup | The documented first-use workflow works |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`answer_contract.py\`, and its expected output. Run python answer_contract.py. The response is a fixture for a frontend contract, not a model call.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Connect a trusted provider backend after lesson 24.\r
- Collect explicitly scoped feedback without storing unnecessary personal data.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- What could a new user do without your coaching?\r
- How does the interface distinguish scope limits from service failure?\r
- Which part of the delivery still needs verification?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [MDN: learning web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)\r
- [Streamlit documentation](https://docs.streamlit.io/)\r
\r
[Return to lesson 21](README.md)\r
`;export{e as default};
