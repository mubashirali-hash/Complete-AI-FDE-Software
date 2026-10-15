const e=`# Lesson 13 project — Responsive expense dashboard\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Sketch an empty expense dashboard: a labelled form, an empty-list message, and a total. Then trace what changes after adding one expense.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`index.html\`. Open index.html in a browser or paste it into the HTML/CSS lab. Try the form with a keyboard as well as a pointer.\r
\r
Give the expense tracker from Days 7 and 12 a web interface. Keep its calculation rules even though the way users interact is changing.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A freelancer wants to add labelled expenses, see a list and total, remove a mistaken record, and return to the data later in the same browser. Build a semantic HTML/CSS/JavaScript interface using fictional data. Document that browser-local persistence is a learning constraint and does not provide shared accounts or server-side authorization.\r
\r
**Learning goal:** Explain how HTML structure, CSS presentation, and JavaScript behavior cooperate. Handle a form submission with validation and visible feedback. Test an interface with keyboard input, a narrow screen, and a new user.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A responsive form, expense list, total, and empty state.\r
- Clear labels, keyboard behavior, and validation messages.\r
- Browser-local persistence with useful handling of damaged saved data.\r
- A usability and narrow-viewport test report.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Build the task structure\r
\r
- Sketch the add, inspect, and remove workflow with semantic controls.\r
- Add labels and readable empty-state feedback before styling.\r
\r
**Stop and check:** A user can identify the primary action without explanation.\r
\r
### Milestone 2: Connect state and behavior\r
\r
- Store individual expense records and derive the total from them.\r
- Validate submissions and restore saved records carefully.\r
\r
**Stop and check:** A rejected record does not enter the list or total.\r
\r
### Milestone 3: Verify the experience\r
\r
- Test keyboard interaction, reload, and a 375px viewport.\r
- Observe a new user and improve one concrete hesitation.\r
\r
**Stop and check:** The main task remains usable across the tested conditions.\r
\r
## Acceptance checks\r
\r
- [ ] Adding and removing named expenses updates the list and total correctly.\r
- [ ] Form controls have visible labels and work with a keyboard.\r
- [ ] Invalid input has a useful message and does not change stored data.\r
- [ ] Data survives a reload in the same browser with documented limits.\r
- [ ] The task works at 375px without page-wide horizontal overflow.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Add 250 and 100 cents | Two records and a 350-cent total |\r
| 2 | Remove the 250-cent record | One record and a 100-cent total |\r
| 3 | Empty, negative, or fractional amount | Rejected according to the integer-cents contract |\r
| 4 | Reload and use Tab/Enter at 375px | Saved data restored and controls remain usable |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`index.html\`, and its expected output. Open index.html in a browser or paste it into the HTML/CSS lab. Try the form with a keyboard as well as a pointer.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a category filter with a clearly labelled filtered total.\r
- Move the calculation behind a validated API after lesson 24.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Which responsibilities belong to HTML, CSS, and JavaScript?\r
- What behavior does your local persistence guarantee?\r
- What changed after watching another person use the interface?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [MDN: learning web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)\r
- [MDN: client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)\r
\r
[Return to lesson 13](README.md)\r
`;export{e as default};
