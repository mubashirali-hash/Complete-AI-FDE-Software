const e=`# Lesson 19 project — Source-grounded FAQ assistant\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Choose three public or fictional policy passages. Write one answerable question and one question they cannot answer, with expected outcomes.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`grounded_answer.py\`. Run python grounded_answer.py. This is an extractive source-checking demonstration, not a language-model generator.\r
\r
Reuse Day 18's FAQ records and retrieval comparison. Add a source-supported answer contract rather than treating the top search result as automatically correct.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A team wants answers from a small fictional policy collection. Build a retrieval-and-answer pipeline that preserves source IDs, displays supporting passages, and handles unanswered questions. Use a clearly labelled extractive or fixture baseline first; optionally connect a real model generator without weakening permission or citation checks.\r
\r
**Learning goal:** Describe ingestion, retrieval, context construction, generation, and citation checking. Keep source identity and access policy attached to retrieved information. Evaluate supported answers and no-answer behavior separately.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A small source collection with IDs, locations, and freshness notes.\r
- A retrieval method with inspectable ranked results.\r
- An answer contract including citations and a no-answer state.\r
- A labelled question set covering support, conflict, and missing evidence.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Prepare sources\r
\r
- Record source ownership, identity, and which users can read each document.\r
- Create answerable and unanswerable queries before evaluating output.\r
\r
**Stop and check:** The evidence needed for each expected answer is known.\r
\r
### Milestone 2: Connect retrieval and answers\r
\r
- Retrieve only permitted evidence and preserve its IDs.\r
- Generate or extract an answer under a clearly labelled mode.\r
\r
**Stop and check:** A reviewer can inspect which passages influenced the result.\r
\r
### Milestone 3: Test grounding\r
\r
- Check citation existence and claim support.\r
- Test missing, conflicting, and outdated evidence behavior.\r
\r
**Stop and check:** The assistant does not turn unavailable evidence into confident claims.\r
\r
## Acceptance checks\r
\r
- [ ] Retrieved evidence retains source IDs and inspectable passages.\r
- [ ] Trusted document-access policy is applied before context construction.\r
- [ ] Answer citations refer to supplied evidence and support their claims.\r
- [ ] Missing evidence produces a clear abstention result.\r
- [ ] Retrieval and answer-quality failures are recorded separately.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Question answered by FAQ-01 | Supported answer and relevant source passage |\r
| 2 | Question outside the collection | Clear no-answer result with no invented citation |\r
| 3 | Conflicting source statements | Documented conflict policy rather than silent certainty |\r
| 4 | User forbidden from one source | That source is absent from retrieval and model context |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`grounded_answer.py\`, and its expected output. Run python grounded_answer.py. This is an extractive source-checking demonstration, not a language-model generator.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a real generator adapter and compare it with the extractive baseline.\r
- Evaluate two chunking strategies on the same held-out queries.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- At which pipeline stage did a observed failure begin?\r
- How did you verify citation support rather than format alone?\r
- What keeps a private source out of an unauthorized user's context?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Microsoft: retrieval-augmented generation overview](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)\r
- [OWASP: prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)\r
\r
[Return to lesson 19](README.md)\r
`;export{e as default};
