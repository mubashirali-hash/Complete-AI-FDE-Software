const e=`# Lesson 4 project — A reusable quote calculator\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Write one example quote by hand with two items and a delivery fee, all in cents. Work out the expected grand total before writing functions.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`quote.py\`. Run python quote.py. The example uses integer cents rather than live currency conversion.\r
\r
Use conditions from Day 3 to reject invalid quantities. This calculator can later support a web form without changing its arithmetic.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A small service business creates quotes with line items and a delivery fee. Build calculation functions using integer cents, plus a thin display layer. Define supported prices and quantities explicitly. The first version has no tax integration, discounts, payments, or live exchange rates; those are separate scope decisions.\r
\r
**Learning goal:** Distinguish a function's parameters, return value, and side effects. Separate pure calculation from input/output code. Write and test a function contract with normal and invalid inputs.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- Calculation functions for line totals, subtotal, and grand total.\r
- A readable example quote with two line items.\r
- A written contract for integer prices and quantities.\r
- Tests for zero, negative, and unsupported inputs.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Specify calculations\r
\r
- Write a sample quote and calculate it manually.\r
- Define the unit and valid range of every input.\r
\r
**Stop and check:** The manual expected total is available before the code is written.\r
\r
### Milestone 2: Build reusable functions\r
\r
- Return calculated values instead of printing inside business functions.\r
- Keep user-facing formatting in a small separate caller.\r
\r
**Stop and check:** The same functions can be called from a test or another interface.\r
\r
### Milestone 3: Review change impact\r
\r
- Test the boundaries and compare results with the manual quote.\r
- Change the delivery fee and show which function or caller changes.\r
\r
**Stop and check:** The change does not alter unrelated line calculations.\r
\r
## Acceptance checks\r
\r
- [ ] Calculations use documented integer minor units.\r
- [ ] Line, subtotal, and grand-total functions return useful values.\r
- [ ] The display layer is separate from the calculation functions.\r
- [ ] Zero and invalid inputs follow the written contract.\r
- [ ] A manually checked quote and regression examples agree with the implementation.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | 250 cents times quantity 3 | 750 cents |\r
| 2 | Zero quantity and a non-zero delivery fee | Zero line total plus the documented fee |\r
| 3 | Negative price or quantity | Clear rejection rather than a negative quote |\r
| 4 | Change one line's quantity | Only that line, subtotal, and grand total change |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`quote.py\`, and its expected output. Run python quote.py. The example uses integer cents rather than live currency conversion.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Introduce a documented percentage-discount policy with explicit rounding.\r
- Use the functions behind a small web form after lesson 13.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Which function contracts could another developer rely on?\r
- Why is returning a value different from printing it?\r
- Which possible future change would require a contract change?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Python: defining functions](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)\r
\r
[Return to lesson 4](README.md)\r
`;export{e as default};
