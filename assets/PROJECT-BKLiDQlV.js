const e=`# Lesson 14 project — A verified public expense dashboard\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Write the version and target URL for the Day 13 dashboard. List three smoke checks before starting the release.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`release-checklist.md\`. Use this as a release record in your own project. Start a local static preview with python -m http.server 8000 --bind 127.0.0.1 from the directory containing index.html; a local preview is not a public deployment.\r
\r
Publish the expense interface you already built. Today's project produces a verified release record rather than another unrelated app.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
Publish the dashboard from lesson 13 in your own learner project repository or chosen static host. Verify the deployed site in a clean browser, test a narrow viewport and reload, and record the release identity. Keep setup and recovery instructions alongside the project. Do not change the academy's hosting configuration as part of your learner exercise.\r
\r
**Learning goal:** Distinguish development source, a deployable artifact, and a running hosted version. Verify assets, routes, and core behavior on the real deployment. Document release identity, configuration ownership, and recovery.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A verified public URL and the source commit that produced it.\r
- Build or publishing instructions for the chosen host.\r
- A completed hosted verification checklist.\r
- A release note, known limits, and recovery steps.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Prepare the artifact\r
\r
- Inspect the files the host should serve and the asset path assumptions.\r
- Publish from your own project with documented configuration.\r
\r
**Stop and check:** The artifact corresponds to a specific reviewed source version.\r
\r
### Milestone 2: Verify the real URL\r
\r
- Open the actual hosted result in a clean context.\r
- Exercise the form, remove action, reload, and small viewport.\r
\r
**Stop and check:** The visible workflow and required assets work outside your development session.\r
\r
### Milestone 3: Record operations\r
\r
- Write release identity, observed checks, and limits.\r
- Explain how a previous known good artifact could be restored.\r
\r
**Stop and check:** The delivery record is useful to a future operator.\r
\r
## Acceptance checks\r
\r
- [ ] A public URL serves the intended application version.\r
- [ ] Required assets load under the actual hosting path.\r
- [ ] Core form and expense workflows pass in a clean browser.\r
- [ ] Direct loading, reload, and a narrow viewport are checked.\r
- [ ] Release identity and recovery instructions are recorded.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Open the verified public URL in a clean context | Usable first-use and empty states |\r
| 2 | Complete add/remove workflow | Correct records, totals, and validation |\r
| 3 | Load under the project's hosting subpath | Assets resolve without missing-file errors |\r
| 4 | Inspect a previous release and recovery instructions | A specific known good version and verification steps are identified |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`release-checklist.md\`, and its expected output. Use this as a release record in your own project. Start a local static preview with python -m http.server 8000 --bind 127.0.0.1 from the directory containing index.html; a local preview is not a public deployment.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Automate build and publish checks for future changes.\r
- Add a simple release-health check without collecting private user data.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Which artifact is actually hosted?\r
- What differed from your local environment?\r
- What information would an operator need if the latest release failed?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [GitHub Pages: publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)\r
- [MDN: publishing your website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website)\r
\r
[Return to lesson 14](README.md)\r
`;export{e as default};
