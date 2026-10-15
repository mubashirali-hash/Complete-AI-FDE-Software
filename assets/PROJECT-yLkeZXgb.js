const e=`# Lesson 9 project — Weather-service adapter with offline fixtures\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Draw client → request → service → response → display. Write the expected result for both a complete reply and a reply missing temperature.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`weather_adapter.py\`. Run python weather_adapter.py. This fixture example does not perform a live HTTP request or claim current weather.\r
\r
Reuse your validation and error-handling skills. Offline fixtures let you test failures repeatedly before connecting a real service.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A travel dashboard needs a city and clearly labelled temperature, but its provider can return incomplete data or fail. Build an adapter with a fixture transport for repeatable tests and an optional live transport based on a provider's current documentation. Keep the UI independent of the provider's payload shape and distinguish offline demonstration data from live results.\r
\r
**Learning goal:** Describe the method, URL, headers, status, and body of an HTTP exchange. Parse and validate a JSON response before using its fields. Design explicit behavior for timeouts, missing data, and service errors.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A documented request/response and internal-result contract.\r
- Fixture cases for valid data, missing data, timeout, and service error.\r
- A validated adapter and a thin display layer.\r
- An explicit retry policy and optional live-provider setup notes.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Specify the boundary\r
\r
- Write sample success and failure responses.\r
- Define the internal result fields and their units.\r
\r
**Stop and check:** The application can use the internal shape without knowing every provider field.\r
\r
### Milestone 2: Implement fixtures first\r
\r
- Separate transport from parsing and mapping.\r
- Validate shape and return a clear result or error category.\r
\r
**Stop and check:** All failure scenarios can be reproduced without network access.\r
\r
### Milestone 3: Integrate responsibly\r
\r
- Document timeout and bounded retry behavior.\r
- If adding a live transport, verify the current provider contract and label its data source.\r
\r
**Stop and check:** A fixture cannot be mistaken for current weather.\r
\r
## Acceptance checks\r
\r
- [ ] The adapter exposes a documented internal shape with units.\r
- [ ] Fixture data is clearly labelled as offline demonstration data.\r
- [ ] Malformed, missing, and wrongly typed payloads are rejected clearly.\r
- [ ] Timeouts and service errors follow a bounded documented policy.\r
- [ ] Transport and parsing can be tested independently.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Valid fixture with numeric temperature | Correct city, temperature, and unit |\r
| 2 | Missing or text temperature | Explicit invalid-payload result |\r
| 3 | Malformed JSON or wrong outer shape | Clear parsing or schema error |\r
| 4 | Timeout or rate-limit fixture | Documented bounded recovery without false success |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`weather_adapter.py\`, and its expected output. Run python weather_adapter.py. This fixture example does not perform a live HTTP request or claim current weather.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a live read-only transport after verifying the provider's current documentation.\r
- Record a source timestamp and reject stale data according to an explicit policy.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- What is transport failure versus payload failure?\r
- Which provider details should the rest of the app not depend on?\r
- How does retrying a read differ from retrying an operation with side effects?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [MDN: HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)\r
- [Python: urllib.request](https://docs.python.org/3/library/urllib.request.html)\r
\r
[Return to lesson 9](README.md)\r
`;export{e as default};
