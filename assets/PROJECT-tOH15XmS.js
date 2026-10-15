const e=`# Lesson 5 project — Customer contact directory\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Draw two contact records with different IDs but the same name. Add a city to each and decide which fields are required.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`contacts.py\`. Run python contacts.py. Records remain in memory in this example; lesson 6 adds persistence.\r
\r
Your queue already held several tickets. Now you are choosing a deliberate data structure; tomorrow you will save records between runs.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A small team needs to add, find, update, and list contacts. Build an in-memory directory keyed by stable IDs. Allow duplicate display names, validate required fields, and make a missing ID understandable. Persistence is intentionally left for the next lesson, so today you can concentrate on data shape and operations.\r
\r
**Learning goal:** Choose between a list and a dictionary for a specific operation. Model records with stable IDs rather than ambiguous display names. Explain mutation, missing keys, and duplicate-record behavior.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A contact model with ID, name, city, and optional email.\r
- Operations to add, look up, update, search, and list records.\r
- A sample dataset containing duplicate names and missing optional values.\r
- An explanation of identity, validation, and ordering decisions.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Model the records\r
\r
- List required and optional fields with sample values.\r
- Choose an ID strategy and document duplicate-name behavior.\r
\r
**Stop and check:** Two people with the same name remain separate records.\r
\r
### Milestone 2: Implement useful operations\r
\r
- Add lookup and update operations that use the stable ID.\r
- Return search results without mutating the stored directory.\r
\r
**Stop and check:** An unknown ID produces an explicit not-found outcome.\r
\r
### Milestone 3: Inspect data integrity\r
\r
- Try duplicate IDs, blank names, and missing optional email.\r
- Check that an update preserves all unrelated records.\r
\r
**Stop and check:** The dataset still follows the model after all operations.\r
\r
## Acceptance checks\r
\r
- [ ] Each contact has a stable unique ID and a non-blank name.\r
- [ ] Duplicate display names do not overwrite records.\r
- [ ] Lookup and update use IDs and handle missing IDs clearly.\r
- [ ] Search does not delete or mutate the original directory.\r
- [ ] Required and optional fields are documented and tested.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Two contacts named Ali with different IDs | Both remain available |\r
| 2 | A duplicate ID | Rejected or handled by an explicit documented update operation |\r
| 3 | An unknown ID | Useful not-found result |\r
| 4 | Blank name and missing email | Blank required name rejected; optional email handled |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`contacts.py\`, and its expected output. Run python contacts.py. Records remain in memory in this example; lesson 6 adds persistence.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add explicit alphabetical sorting without changing stored identities.\r
- Design an import report that distinguishes accepted, duplicate, and rejected records.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Why is an ID different from a display name?\r
- Which operations benefit from keyed lookup?\r
- What did you choose to do with missing and duplicate data?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Python: data structures](https://docs.python.org/3/tutorial/datastructures.html)\r
\r
[Return to lesson 5](README.md)\r
`;export{e as default};
