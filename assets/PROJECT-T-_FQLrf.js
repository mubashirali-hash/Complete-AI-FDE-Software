const e=`# Lesson 12 project — A regression suite for the expense calculator\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Choose one expense-calculation bug. Write its smallest failing input and independently calculate the correct output.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`regression.py\`. Run python regression.py. Assertions in this lesson demonstrate tests; they are not a replacement for production input validation.\r
\r
Return to the Day 7 tracker. Your quote functions from Day 4 also give you small calculations that are easy to test.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
The expense calculator once produced an incorrect total. Build a repeatable test suite that captures that failure, normal calculations, zero values, invalid input, and a storage round trip. Keep the expected results independent and write a short report describing what the suite establishes and what still requires a workflow or provider check.\r
\r
**Learning goal:** Write assertions that express an external requirement. Distinguish unit checks, integration checks, and a user workflow check. Create a regression case that detects a concrete bug.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A test module runnable with unittest or pytest.\r
- A regression case for a documented calculation bug.\r
- Boundary, invalid-input, and storage integration cases.\r
- A report of assertions, observed results, and coverage limits.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Choose meaningful cases\r
\r
- Write requirements and manual expected values.\r
- Include the exact input from a prior or deliberately reproduced bug.\r
\r
**Stop and check:** Every assertion corresponds to an observable requirement.\r
\r
### Milestone 2: Make the suite repeatable\r
\r
- Move assertions into a runner with isolated fixture data.\r
- Use a temporary directory for persistence tests.\r
\r
**Stop and check:** The tests do not depend on your personal working data or a live service.\r
\r
### Milestone 3: Verify the evidence\r
\r
- Demonstrate a failure before a targeted fix and a pass after it.\r
- Summarise which integration and user paths remain untested.\r
\r
**Stop and check:** The report distinguishes a test result from a broader guarantee.\r
\r
## Acceptance checks\r
\r
- [ ] The suite runs with a documented single command.\r
- [ ] At least one regression case detects a concrete faulty implementation.\r
- [ ] Expected values are independent of the code under test.\r
- [ ] Normal, zero, invalid-input, and persistence cases are included.\r
- [ ] The test report records results and meaningful verification limits.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Faulty addition implementation instead of multiplication | Regression test fails |\r
| 2 | Fixed normal calculation | Manual expected total matches |\r
| 3 | Zero and negative quantity | Zero result and explicit negative-input rejection |\r
| 4 | Save and reload in a temporary directory | Records survive without depending on personal files |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`regression.py\`, and its expected output. Run python regression.py. Assertions in this lesson demonstrate tests; they are not a replacement for production input validation.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a workflow check that uses only documented CLI commands.\r
- Introduce a small mutation and identify which test should catch it.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- What requirement does each assertion establish?\r
- Which test could pass while the application is still unusable?\r
- How did you know the regression test was capable of detecting the bug?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Python: unittest](https://docs.python.org/3/library/unittest.html)\r
- [pytest: getting started](https://docs.pytest.org/en/stable/getting-started.html)\r
\r
[Return to lesson 12](README.md)\r
`;export{e as default};
