const e=`# Lesson 15 project — LLM experiment and budget notebook\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Create an experiment record with columns for input, model-or-fixture identity, output, and your check. Label any offline examples as fixtures.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`model_budget.py\`. Run python model_budget.py. The prices and usage below are fictional exercise assumptions, not current provider quotes.\r
\r
Your earlier API adapter separated outside data from app logic. Use that same boundary for a model provider. Keep the expense project as a completed milestone while beginning the assistant track.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A team is deciding whether a model could help with short support summaries. Create a small experiment record containing prompts, response examples, scoring criteria, latency/usage fields, and a cost estimate. Support an offline fixture mode for learning and an optional real-provider mode. Never combine the two modes into an unlabeled performance claim.\r
\r
**Learning goal:** Explain why tokenization and fluent generation do not guarantee factual correctness. Describe context and output budgets without assuming every model supports the same settings. Calculate an estimate from explicit input/output usage and price assumptions.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- An experiment log with model or fixture identity and request settings.\r
- Three prompt cases with a human-readable quality rubric.\r
- A usage/cost calculator with explicit scope and assumptions.\r
- A comparison note distinguishing observations, estimates, and unknowns.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Define the experiment\r
\r
- Choose a narrow support-summary task and three varied inputs.\r
- Write correctness and usefulness criteria before inspecting responses.\r
\r
**Stop and check:** A fluent but unsupported summary can receive a failing score.\r
\r
### Milestone 2: Record responses honestly\r
\r
- Use labelled fixtures or optional provider calls through a trusted local/server environment.\r
- Record the actual mode, supported settings, and available usage fields.\r
\r
**Stop and check:** A reviewer can distinguish mocked examples from measured calls.\r
\r
### Milestone 3: Estimate and reflect\r
\r
- Calculate costs from documented assumptions and usage units.\r
- Inspect failures and state what a larger evaluation would still need.\r
\r
**Stop and check:** The estimate is reproducible and the experiment's limits are explicit.\r
\r
## Acceptance checks\r
\r
- [ ] Every response is labelled as fixture or observed provider output.\r
- [ ] The chosen model/settings or fixture version is recorded.\r
- [ ] A quality rubric covers support, completeness, and task fit.\r
- [ ] The cost calculation states volume, usage, prices, and included scope.\r
- [ ] Results distinguish measurements, estimates, and remaining uncertainty.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Fictional 2000-request budget from the example | $6 text-only estimate |\r
| 2 | Double output tokens only | Only the output-cost component doubles |\r
| 3 | A fluent response inventing a customer fact | Rubric rejects unsupported content |\r
| 4 | A fixture response without provider access | Reported as a fixture, not measured model quality |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`model_budget.py\`, and its expected output. Run python model_budget.py. The prices and usage below are fictional exercise assumptions, not current provider quotes.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add a provider adapter after verifying its current request and usage contract.\r
- Compare repeated results on a held-out input and record variability.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- What context does the request actually supply?\r
- Which cost terms are omitted from your first estimate?\r
- What evidence would be needed before claiming the model is reliable?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Hugging Face: tokenizers](https://huggingface.co/docs/transformers/main_classes/tokenizer)\r
- [Anthropic: building effective agents](https://www.anthropic.com/engineering/building-effective-agents)\r
\r
[Return to lesson 15](README.md)\r
`;export{e as default};
