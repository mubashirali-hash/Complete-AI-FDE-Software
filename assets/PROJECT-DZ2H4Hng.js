const e=`# Lesson 18 project — FAQ retrieval comparison workbench\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Write ten FAQ records with IDs. Add a question using different words from one answer and predict which record should be retrieved.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`vector_search.py\`. Run python vector_search.py. These vectors are hand-authored mathematical illustrations, not learned semantic embeddings.\r
\r
This begins the retrieval component of your document assistant. Keep the ticket classifier's test-set habit: compare methods on the same questions.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A team wants staff to find the right FAQ despite variations in wording. Build a small FAQ dataset, a keyword baseline, a vector-search implementation, and labelled query results. Begin with clearly labelled illustrative vectors if needed; optionally add a real embedding model. Compare the methods honestly and preserve a no-match outcome.\r
\r
**Learning goal:** Explain vectors, dimensions, and cosine similarity in practical terms. Distinguish illustrative vectors from learned embedding-model output. Evaluate keyword and vector retrieval using expected relevant documents.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- At least 10 FAQ records with stable IDs and source text.\r
- Keyword and vector ranking functions with clear input contracts.\r
- At least six queries with expected relevant IDs.\r
- A comparison report naming the representation and its limits.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Prepare evidence\r
\r
- Write the FAQ records and label representative query relevance.\r
- Include exact identifiers, paraphrases, and missing-answer cases.\r
\r
**Stop and check:** Relevance labels exist before ranking results are inspected.\r
\r
### Milestone 2: Implement comparable retrieval\r
\r
- Build the keyword baseline and validated vector similarity.\r
- Record whether vectors are illustrative or from a specified model.\r
\r
**Stop and check:** Both methods return ranked document IDs that can be inspected.\r
\r
### Milestone 3: Evaluate and explain\r
\r
- Compare useful hits and failure cases on the same queries.\r
- Document an explicit no-match policy and a potential improvement.\r
\r
**Stop and check:** The report does not claim learned semantic performance from hand-authored vectors.\r
\r
## Acceptance checks\r
\r
- [ ] FAQ records and query relevance use stable IDs.\r
- [ ] Keyword and vector methods are evaluated on the same labelled queries.\r
- [ ] Vector dimensions and zero-length inputs are validated.\r
- [ ] The vector model or illustrative-fixture identity is recorded.\r
- [ ] No-answer queries and observed retrieval failures are reported.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Identical, perpendicular, and opposite example vectors | Expected 1, 0, and -1 similarities |\r
| 2 | Mismatched dimension or zero vector | Clear rejection |\r
| 3 | Exact product-code query | Baseline comparison records whether the relevant FAQ is retrieved |\r
| 4 | Question not answered by any FAQ | No useful match rather than forced success |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`vector_search.py\`, and its expected output. Run python vector_search.py. These vectors are hand-authored mathematical illustrations, not learned semantic embeddings.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Use a documented embedding model and rerun the independent relevance cases.\r
- Compare a hybrid method while recording what changed and why.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- What does a cosine score establish and what does it not establish?\r
- Why must index and query representations be compatible?\r
- Which query shows a meaningful difference between your retrieval methods?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Sentence Transformers: semantic search](https://www.sbert.net/examples/applications/semantic-search/README.html)\r
- [Python: mathematical functions](https://docs.python.org/3/library/math.html)\r
\r
[Return to lesson 18](README.md)\r
`;export{e as default};
