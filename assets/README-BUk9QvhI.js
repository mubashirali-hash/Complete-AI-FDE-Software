const e=`# 📘 Day 16 — Specification: Prompts as Engineering\r
\r
![Day 16 visual](../images/days/day-16.svg)\r
\r
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
`;export{e as default};
