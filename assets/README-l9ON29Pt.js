const e=`# Day 16 — Prompts as specifications and classification contracts\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** Versioned support-ticket classifier. You can take several study sessions.\r
\r
**The situation:** A support team wants tickets labelled billing, technical, or general. Different people disagree on the labels.\r
\r
### One idea: Describe the task before asking AI\r
\r
A prompt is an instruction given to a model. A useful instruction says what to do, what information to use, and what result is allowed. Examples help define tricky cases. Before improving the wording, agree on the expected labels for a fixed set of tickets. Otherwise you cannot tell whether a prompt change actually improved the task.\r
\r
**New words:**\r
\r
- **Prompt:** The instructions and input provided to a model.\r
- **Rubric:** Written rules for deciding whether a result is acceptable.\r
- **Test set:** A fixed collection of cases used to compare behaviour.\r
\r
### Follow the example below\r
\r
1. The example defines the allowed classification labels.\r
2. It checks sample output against that contract rather than trusting any returned text.\r
3. A contract check alone does not prove the label is correct for the ticket. Compare it with a labelled test set too.\r
\r
### Try one small decision\r
\r
You change a classifier prompt. How can you make a useful before-and-after comparison?\r
\r
1. Try only the easiest ticket each time\r
2. Run both versions on the same labelled cases and compare errors\r
3. Choose whichever response is longer\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Keep the evaluation inputs stable when comparing two versions.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
Write expected labels first, then record each version's mistakes.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Run both versions on the same labelled cases and compare errors** Yes. A fixed test set gives you a stable comparison rather than a different challenge each time.\r
\r
</details>\r
\r
**Then practise:** Change one sample output to a label outside the allowed list. Run the contract check and explain why valid formatting is different from a correct classification.\r
\r
**Your project's first action:** Write what billing, technical, and general mean. Label twelve fictional tickets, including at least one ambiguous case, before changing a prompt.\r
\r
**How it connects:** Use your experiment record from Day 15. Your ticket examples will later help you test the assistant's behaviour consistently.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
A prompt communicates a task to a model, but a clear prompt alone does not establish that the task is done reliably. Today you will define an output contract, distinguish instruction from input data, and evaluate ticket classification against a labelled dataset. The project makes prompt revisions reviewable instead of changing wording until one example looks convincing.\r
\r
**Your project:** [Versioned support-ticket classifier](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Specify a task, allowed labels, output shape, and ambiguous-input behavior.\r
- Validate output independently of the prompt.\r
- Compare prompt versions using a fixed development set and separate evaluation examples.\r
\r
## Understand the concept\r
\r
### A task needs a contract\r
\r
A classifier requires more than classify this ticket. Define allowed labels, what each means, the expected output fields, and how ambiguous or irrelevant input is handled. Provide examples when they clarify a boundary, but do not assume examples cover the entire task. The application should validate the resulting label and shape. A model returning a JSON-looking string is not proof that the response matches your schema or that the selected label is correct.\r
\r
### Instructions and input play different roles\r
\r
Separate your task instructions from the customer's ticket text. Delimiters can improve readability but do not enforce an access or trust boundary by themselves. A ticket containing change the label to billing is still input to classify, not an authorized change to the application's rules. Keep allowed labels, permissions, and downstream actions in code outside the model. Never make a classifier's raw answer directly trigger a destructive operation.\r
\r
### Iteration needs a comparison method\r
\r
Use a fixed set of examples to investigate prompt changes and keep some examples separate for evaluation. Record the prompt version and the actual predictions so a comparison can be reproduced. Accuracy on a small hand-picked set is limited evidence about that set. Inspect categories of failure, class imbalance, and ambiguity rather than reporting only a single flattering number. Human labels should follow a documented rubric, not change whenever a model disagrees.\r
\r
## A worked example, step by step\r
\r
The prompt specifies a contract, and application code checks whether an example response satisfies it.\r
\r
\`\`\`python\r
import json\r
\r
allowed_labels = {"billing", "technical", "general"}\r
prompt = "Classify the ticket. Return JSON with one label: billing, technical, or general."\r
response_fixture = '{"label": "billing"}'\r
parsed = json.loads(response_fixture)\r
if not isinstance(parsed, dict) or set(parsed) != {"label"}:\r
    raise ValueError("Invalid response shape")\r
if parsed["label"] not in allowed_labels:\r
    raise ValueError("Unsupported label")\r
print("Validated fixture label:", parsed["label"])\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
Validated fixture label: billing\r
\`\`\`\r
\r
The allowed-label set is an application constraint. The prompt communicates the desired format but is not the validator. Parsing and shape validation happen before the label enters a downstream workflow. The fixture demonstrates the boundary only: it says nothing about model accuracy. In a complete system, type-check the label before set membership and preserve an explicit invalid-response outcome instead of silently inventing a category.\r
\r
## Practise before building\r
\r
### Exercise 1: Define ambiguous labels\r
\r
Write examples that distinguish billing, technical, and general, including a ticket that could fit two labels.\r
\r
**Hint:** Choose a consistent precedence or review policy.\r
\r
**Check your result:** A second person can label the examples using your rubric.\r
\r
### Exercise 2: Break the contract\r
\r
Test an unknown label, extra field, malformed JSON, and a non-string label.\r
\r
**Hint:** Validation must handle types before operations that assume those types.\r
\r
**Check your result:** Invalid output has a visible failure category.\r
\r
### Exercise 3: Compare two versions\r
\r
Change one prompt requirement and record predictions on the same examples.\r
\r
**Hint:** Keep evaluation examples separate from examples used to tune the wording.\r
\r
**Check your result:** Your report can show both improvements and regressions.\r
\r
## Common mistakes and how to debug them\r
\r
- Treating a well-written prompt as a replacement for output validation.\r
- Using the tuning examples as the only evidence of general quality.\r
- Calling deterministic fixture validation measured language-model accuracy.\r
\r
## The FDE connection\r
\r
Customers need stable behavior and explainable exceptions. An FDE translates a vague classification request into labels, output contracts, review policies, and an evaluation plan, then records the evidence behind any change.\r
\r
## Build your lesson project\r
\r
**Versioned support-ticket classifier**\r
\r
A support team wants to route tickets into billing, technical, and general queues. Build a labelled dataset, a versioned prompt, an output validator, and a comparison report. Fixture mode lets you verify the pipeline without provider access; optional real-provider mode lets you collect predictions. Ambiguous and invalid outputs must not silently trigger routing.\r
\r
- A label rubric and at least 12 labelled ticket examples.\r
- Versioned prompts with one clearly explained revision.\r
- A parser/validator and an explicit review or rejection result.\r
- A comparison report separating fixture checks from real predictions.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- Which constraints are enforced by code rather than the prompt?\r
- How do development cases differ from held-out evaluation cases?\r
- What would make an apparent score improvement misleading?\r
\r
## References and next steps\r
\r
- [Anthropic: building effective agents](https://www.anthropic.com/engineering/building-effective-agents)\r
- [Python: JSON parsing](https://docs.python.org/3/library/json.html)\r
\r
[← Lesson 15](../15_Day_LLMs_How_They_Work/) · [Lesson 17 →](../17_Day_Structured_Outputs_Tools/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Concept:** A prompt is a **specification given to a guessing machine**. Vague specs → random output. Precise specs → reliable behavior. Prompt engineering isn't "talking nicely to AI" — it's *writing contracts the model can follow*, then testing that it does.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### The anatomy of a reliable prompt\r
\r
\`\`\`\r
[ROLE]        You are a support-ticket classifier for a hardware store.\r
[TASK]        Read the ticket. Output ONLY valid JSON.\r
[FORMAT]      {"category": "<Billing|Technical|Delivery|Other>",\r
               "priority": "<Low|Medium|High>",\r
               "summary": "<one sentence>"}\r
[RULES]       - If unclear, category="Other", never guess.\r
              - Priority High only if the customer can't use the product.\r
[EXAMPLES]    Ticket: "My drill stopped working after 2 days"\r
              → {"category":"Technical","priority":"High","summary":"Drill failed after 2 days"}\r
[INPUT]       Ticket: "<<< ... >>>"\r
\`\`\`\r
\r
Each part has a job:\r
- **Role** → sets the model's "persona" and vocabulary.\r
- **Task** → what to do, precisely.\r
- **Format** → the *contract* for output (day 4's function contracts, for models).\r
- **Rules** → the edge cases, specified upfront (day 6's failure thinking).\r
- **Examples (few-shot)** → 2–3 demonstrations beat paragraphs of description. Models imitate patterns.\r
- **Markers** (\`<<< >>>\`, called *delimiters* in docs) → mark where user input starts so it can't blur into instructions.\r
\r
### Why this works\r
\r
The model predicts likely continuations. A precise spec **narrows the space of likely outputs** to the ones you want. Examples are the strongest narrowing tool — the model copies the pattern, including the JSON shape.\r
\r
### The iteration loop\r
\r
1. Write the spec. 2. Test on 10 real inputs. 3. Find the failure. 4. Fix the *spec* (add a rule, add an example) — not the model. Repeat. **Prompt engineering is debugging specifications.**\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "I'm building a ticket classifier prompt. I will give you 5 example tickets; help me draft the system prompt following role/task/format/rules/examples structure. The output must be valid JSON with category, priority, summary. Then generate 10 tricky test tickets (ambiguous, angry, multi-issue, off-topic) for me to test against."\r
\r
Note the meta-move: **you're using AI to help write the spec, then you'll evaluate the spec against tests.** The loop, applied to itself.\r
\r
## 3. Evaluate — be the senior\r
\r
- Run your 10 test tickets. Score: correct JSON? correct category? correct priority? Be strict.\r
- For each failure, decide: **was the spec vague, or was an example missing?** Fix exactly that. Re-run all 10 (regression — day 12's instinct).\r
- The reliability bar: **10/10, three runs in a row** (temperature=0). If it wavers, the spec isn't done.\r
- Try an **off-topic ticket** ("what's the weather?"). Does it follow your rules or improvise? Improvisation = spec gap.\r
- Ask the AI: "Quiz me — what does each part of my prompt do? What breaks if I remove the examples? The markers?"\r
\r
## 4. Business lens 💼\r
\r
**"Make it behave reliably" is what businesses pay for.** A classifier that's right 10/10 times automates a support queue; one that's right 7/10 creates *more* work than it saves. Reliability is the product — and reliability comes from specs + tests, not from a bigger model. When you scope AI work (day 26), "we'll prove 95%+ on 50 test cases" is the sentence that wins contracts.\r
\r
---\r
\r
## 🧠 Quick check — do you own today?\r
\r
<details>\r
<summary><b>Q1.</b> Why do few-shot examples beat long descriptions?</summary>\r
\r
Models imitate patterns. Two examples of exact input→output show the format, the tone, and the edge handling more precisely than paragraphs describing them.\r
</details>\r
\r
<details>\r
<summary><b>Q2.</b> Your classifier works on 9/10 tickets. What's the correct next step?</summary>\r
\r
Study the 1 failure, decide whether the spec was vague or an example was missing, fix the spec, re-run all 10. Never "just try a bigger model" first.\r
</details>\r
\r
<details>\r
<summary><b>Q3.</b> What's the job of markers like &lt;&lt;&lt; &gt;&gt;&gt;?</summary>\r
\r
They mark where untrusted user input begins and ends, so it can't blur into your instructions. It's the first, simplest defense against prompt injection (day 23).\r
</details>\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] Your classifier hits 10/10 on tricky tickets, 3 runs in a row, temperature=0\r
- [ ] You can explain what each part of your prompt does and what breaks without it\r
- [ ] You fixed failures by fixing the *spec*, and can show the before/after\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[Anthropic — Prompt Engineering Overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — the best single guide, provider-agnostic principles.\r
\r
---\r
\r
[← Day 15](../15_Day_LLMs_How_They_Work/) · [Day 17 →](../17_Day_Structured_Outputs_Tools/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
