const e=`# Lesson 24 project — FastAPI feedback and question service\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Write the feedback endpoint contract: required fields, accepted values, success result, and invalid-input result. Choose a local database file path.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`feedback_store.py\`. Run python feedback_store.py. It uses an in-memory SQLite database to demonstrate the storage operation; the project adds file persistence and HTTP endpoints.\r
\r
Combine Day 6 persistence with Day 9 request/response contracts. Add durable feedback to the document assistant rather than relying on browser-only state.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
Build POST /feedback, GET /feedback/{id}, and POST /ask for the fictional assistant. Use validated request models, a documented SQLite file, parameterized queries, and a trusted-identity boundary or explicitly labelled local identity fixtures. Reuse your answer contract and make invalid, missing, and forbidden outcomes clear. Verify the current FastAPI installation command in the linked documentation.\r
\r
**Learning goal:** Specify API methods, request fields, response fields, and failure categories. Store and retrieve records using parameterized SQL. Distinguish request validation, authentication, authorization, and database consistency.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- An API contract and runnable FastAPI service with documented setup.\r
- A durable feedback schema and parameterized storage layer.\r
- Request validation and explicitly scoped access checks.\r
- HTTP, restart, and invalid-input test results.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Agree on the API\r
\r
- Write request/response examples for the three endpoints.\r
- Define domain rules and the identity/permission scope.\r
\r
**Stop and check:** Invalid and forbidden cases have different documented outcomes.\r
\r
### Milestone 2: Connect durable storage\r
\r
- Implement parameterized writes and reads against a file database.\r
- Keep SQL and provider configuration out of frontend code.\r
\r
**Stop and check:** A restart preserves feedback and a quote-containing note remains intact.\r
\r
### Milestone 3: Test the integration\r
\r
- Exercise real HTTP handlers with success and failure cases.\r
- Document startup, data location, backup, and prototype identity limits.\r
\r
**Stop and check:** The service can be reproduced and its security claims match the implemented boundary.\r
\r
## Acceptance checks\r
\r
- [ ] The three endpoints follow documented request/response contracts.\r
- [ ] Invalid payloads and domain-rule failures are rejected clearly.\r
- [ ] Feedback survives a process restart in the documented database.\r
- [ ] Database values use parameterized SQL rather than command concatenation.\r
- [ ] Trusted identity or fixture limits and access checks are explicitly tested.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Valid feedback then lookup by ID | Stored record returned under the documented contract |\r
| 2 | Malformed or blank feedback input | Validation failure without a stored invalid record |\r
| 3 | Note containing quotes or SQL-looking text | Stored as data; schema remains intact |\r
| 4 | Restart or forbidden lookup | Persistence verified and unauthorized access rejected |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`feedback_store.py\`, and its expected output. Run python feedback_store.py. It uses an in-memory SQLite database to demonstrate the storage operation; the project adds file persistence and HTTP endpoints.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a versioned schema migration and test upgrade from a sample older database.\r
- Introduce verified authentication and multi-user tests before claiming production account isolation.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Which rules belong to schema validation versus authorization?\r
- What makes the SQL operation safe for arbitrary note text?\r
- What evidence proves the feedback is actually durable?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [FastAPI tutorial](https://fastapi.tiangolo.com/tutorial/)\r
- [Python: sqlite3](https://docs.python.org/3/library/sqlite3.html)\r
\r
[Return to lesson 24](README.md)\r
`;export{e as default};
