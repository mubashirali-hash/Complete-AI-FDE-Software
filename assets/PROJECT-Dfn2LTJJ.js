const e=`# Lesson 8 project — A reviewed validation feature\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Use a copy of your expense project. Run git status, then write down the one validation behaviour you want to change before creating a branch.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`review-workflow.md\`. Read the workflow and run the commands manually inside your own clean project repository. Replace the example filenames with your project's files; do not run it as a Python script.\r
\r
Version your Day 7 tracker. Your project deliverable today is a small reviewed change and its history, so use your terminal rather than the browser code runner.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A teammate reports that your expense tool accepts an invalid amount. Deliver a targeted fix in a feature branch of your own project repository. Include a reproduction case, tests, updated instructions, and a review description. Preserve unrelated work and make the result easy to inspect before merging.\r
\r
**Learning goal:** Explain the working tree, staging area, commit, and branch. Review a diff before recording a change. Deliver a bounded feature with evidence and clear review notes.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A feature branch containing a bounded behavior change.\r
- Before/after output for the reported input.\r
- A regression test and updated user-facing instructions.\r
- A pull-request-style description and a reviewed diff.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Reproduce and branch\r
\r
- Record the invalid input and current behavior.\r
- Inspect the working state and create a branch for the fix.\r
\r
**Stop and check:** You have a reproducible problem and know what files are already changed.\r
\r
### Milestone 2: Fix with evidence\r
\r
- Implement validation and a useful error result.\r
- Add the regression case and rerun the normal path.\r
\r
**Stop and check:** The reported failure is fixed without breaking valid expenses.\r
\r
### Milestone 3: Package for review\r
\r
- Review both working and staged diffs.\r
- Commit the focused change and write the problem, behavior, and validation notes.\r
\r
**Stop and check:** Another person can review the change without hidden context.\r
\r
## Acceptance checks\r
\r
- [ ] The branch is scoped to the reported validation behavior.\r
- [ ] A reproduction case documents the original failure.\r
- [ ] The regression check fails before the fix and passes after it.\r
- [ ] The staged diff contains only the intended code and documentation.\r
- [ ] The review description states behavior, tests, and remaining limits.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Reported invalid expense input | Useful rejection after the fix |\r
| 2 | Previously valid expense input | Existing successful behavior preserved |\r
| 3 | Inspect working versus staged diff | You can explain what the commit will contain |\r
| 4 | Fresh reviewer reads the change description | Problem and validation are understandable without a chat transcript |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`review-workflow.md\`, and its expected output. Read the workflow and run the commands manually inside your own clean project repository. Replace the example filenames with your project's files; do not run it as a Python script.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Practise a conflict resolution in a disposable repository and document both requirements.\r
- Add a lightweight automated check that runs on proposed changes.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- What is recorded in a commit and what is not?\r
- How did you keep unrelated work out of this change?\r
- What evidence would help a reviewer find a missed edge case?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Pro Git: recording changes](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)\r
- [Pro Git: branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)\r
\r
[Return to lesson 8](README.md)\r
`;export{e as default};
