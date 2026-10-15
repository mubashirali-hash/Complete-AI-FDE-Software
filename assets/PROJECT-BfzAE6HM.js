const e=`# Lesson 10 project — A reproducible release kit\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Open your tracker README as if you had never seen the project. List every missing setup step before trying a fresh local environment.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`environment_check.py\`. Run python environment_check.py in your normal interpreter and in a virtual environment. The specific Python version may differ.\r
\r
Your Git repository keeps source history. Now make that source runnable by another person. Browser runtime diagnostics describe the browser environment, not your laptop.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A teammate needs to run your expense tracker on a clean machine or environment. Package the interpreter requirement, dependency installation, configuration examples, data-path policy, and smoke test into a release kit. Keep the original working project intact while you test the clean setup in a separate directory.\r
\r
**Learning goal:** Explain which resources a Python virtual environment isolates. Document dependency and configuration assumptions. Verify a project using a clean setup and repeatable smoke test.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A setup guide with platform-appropriate commands.\r
- A dependency declaration or an explicit standard-library-only statement.\r
- A non-secret configuration example and data-path explanation.\r
- A smoke test plus evidence from a clean setup.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Inventory assumptions\r
\r
- List the interpreter, packages, files, and settings the tool needs.\r
- Mark which settings are optional and which have private values.\r
\r
**Stop and check:** No dependency is included only because it happened to be installed locally.\r
\r
### Milestone 2: Write the setup contract\r
\r
- Create a venv and use its interpreter for installation and execution.\r
- Document the startup command and expected smoke-test behavior.\r
\r
**Stop and check:** The guide is unambiguous about which interpreter runs the project.\r
\r
### Milestone 3: Test from clean state\r
\r
- Follow the guide in a separate clean directory.\r
- Record and fix any missing step without modifying the original environment to hide it.\r
\r
**Stop and check:** The same written process produces a usable tool again.\r
\r
## Acceptance checks\r
\r
- [ ] The interpreter requirement and run command are documented.\r
- [ ] Dependencies are explicitly declared or identified as standard-library only.\r
- [ ] Required configuration is documented with no real secrets.\r
- [ ] The data path and working-directory assumptions are clear.\r
- [ ] A clean-environment smoke test succeeds using only the written guide.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Fresh environment with no project packages | Documented installation produces a runnable tool |\r
| 2 | Missing optional setting | Documented default behavior |\r
| 3 | Missing required setting | Helpful startup failure without exposing secrets |\r
| 4 | Run from a different directory | Documented path policy behaves predictably |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`environment_check.py\`, and its expected output. Run python environment_check.py in your normal interpreter and in a virtual environment. The specific Python version may differ.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a small automated setup smoke check in CI.\r
- Record a supported-version matrix after actually testing more than one interpreter.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- What does a venv isolate and what does it not reproduce?\r
- Which hidden assumption did the clean setup reveal?\r
- How would an operator know that startup succeeded?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Python: virtual environments](https://docs.python.org/3/tutorial/venv.html)\r
- [Python Packaging User Guide](https://packaging.python.org/en/latest/tutorials/installing-packages/)\r
\r
[Return to lesson 10](README.md)\r
`;export{e as default};
