const e=`# Day 28 — Capstone design and a complete customer workflow\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** Customer-policy assistant capstone. You can take several study sessions.\r
\r
**The situation:** Your capstone needs a real user journey, not a collection of disconnected components.\r
\r
### One idea: Connect one complete customer workflow\r
\r
A complete slice carries one task through the system: a user asks a question, the backend checks access, retrieval finds permitted evidence, and the interface shows an answer or a useful no-evidence result. Agree on observable acceptance criteria first. Reuse the pieces you have already tested. Keep the first version narrow enough to finish and explain.\r
\r
**New words:**\r
\r
- **Capstone:** A larger project combining the skills you have practised.\r
- **Acceptance criterion:** An observable condition used to judge whether a requirement is met.\r
- **Architecture:** How the system's parts connect and share responsibilities.\r
\r
### Follow the example below\r
\r
1. The example names three acceptance criteria before implementation.\r
2. Each criterion starts unverified. A plan is not a passing test report.\r
3. Mark a criterion verified only after running its check and attaching the actual result.\r
\r
### Try one small decision\r
\r
You have drawn the architecture and written acceptance criteria. Which status is honest before running the app?\r
\r
1. All checks passed because the plan looks right\r
2. Planned and unverified\r
3. Customer impact confirmed\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Separate an intended behaviour from an observed behaviour.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
The example begins with verified set to False for a reason.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Planned and unverified** Yes. Keep the plan separate from observed results until the checks run.\r
\r
</details>\r
\r
**Then practise:** Add one acceptance criterion to the plan and leave it unverified. Run the listing, then describe the real action that would produce evidence for it.\r
\r
**Your project's first action:** Use your Day 26 brief to choose one user and one task. Write three observable acceptance criteria, then connect the smallest path through your existing components.\r
\r
**How it connects:** Reuse the interface, source contract, evaluation harness, database, and request trace where they fit the brief. Change components only when the customer requirement calls for it.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
The capstone combines discovery, frontend, backend, AI boundaries, evaluation, and operations around one scoped problem. It is not a requirement to build every possible feature in one day. Today you will select a narrow customer workflow, define the contracts between components, and implement a useful end-to-end slice with observable acceptance criteria.\r
\r
**Your project:** [Customer-policy assistant capstone](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Turn a customer brief into a bounded system design.\r
- Connect interface, backend, retrieval, and evidence contracts coherently.\r
- Demonstrate one complete workflow and its critical failure cases.\r
\r
## Understand the concept\r
\r
### Start from the brief, not the stack\r
\r
Choose the user, current workflow, desired outcome, data access, and operating constraints before selecting components. A small support-policy assistant is one possible capstone, but a non-model lookup may be the better choice for a particular problem. Write acceptance criteria that a customer can observe, such as finding a permitted policy answer with its source or receiving a useful no-evidence result. Avoid introducing capabilities that the brief never requested.\r
\r
### Contracts keep composition manageable\r
\r
Define question input, trusted identity, retrieved evidence, answer status, citation records, and feedback storage. Map which component owns each validation and failure category. An architecture diagram should show actual data movement and trust boundaries, not just logos. Reuse earlier components where their contracts fit; explain any change that invalidates earlier assumptions or tests. Keep a provider adapter separate from the workflow so an offline fixture does not masquerade as a model result.\r
\r
### Finish a useful slice before expanding\r
\r
Implement the path from user question through permitted evidence to a displayed supported answer. Then exercise missing evidence, invalid input, and a forbidden source. A limited, tested slice gives you feedback about the overall design. Optional features such as external messaging or autonomous record updates can wait. Record unfinished work explicitly instead of hiding it behind a confident demo or a broad production-ready label.\r
\r
## A worked example, step by step\r
\r
The plan lists observable outcomes before implementation and marks them unverified.\r
\r
\`\`\`python\r
acceptance_plan = [\r
    {"id": "A1", "behavior": "Permitted policy answer has a supporting passage", "verified": False},\r
    {"id": "A2", "behavior": "Missing evidence produces abstention", "verified": False},\r
    {"id": "A3", "behavior": "Forbidden source never enters context", "verified": False},\r
]\r
for item in acceptance_plan:\r
    print(item["id"], "pending" if not item["verified"] else "verified")\r
print("Mark results only after executing the corresponding checks")\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
A1 pending\r
A2 pending\r
A3 pending\r
Mark results only after executing the corresponding checks\r
\`\`\`\r
\r
Each criterion has an identity, a behavior statement, and an unverified starting state. The plan records what must be proven without pretending the implementation already passed. As you run the capstone, attach actual input, output, source version, and result to each criterion. A green checklist without that evidence should not replace the tests and observations that justify the claim.\r
\r
## Practise before building\r
\r
### Exercise 1: Write the bounded brief\r
\r
State one primary user, one workflow, three core behaviors, and three excluded features.\r
\r
**Hint:** Choose a problem you can evaluate with available fictional/public data.\r
\r
**Check your result:** Every core behavior has a visible acceptance criterion.\r
\r
### Exercise 2: Trace the architecture\r
\r
Draw how question, identity, sources, answer, and feedback move across components.\r
\r
**Hint:** Mark where permission filtering happens before model context.\r
\r
**Check your result:** The diagram identifies contracts and trust boundaries.\r
\r
### Exercise 3: Plan a failure demonstration\r
\r
Choose missing-evidence, forbidden-source, and failed-provider cases before completing the happy path.\r
\r
**Hint:** A failure should produce an understandable product state.\r
\r
**Check your result:** The demo plan includes recovery or abstention rather than fabricated success.\r
\r
## Common mistakes and how to debug them\r
\r
- Choosing an oversized feature list before agreeing on the user outcome.\r
- Drawing an architecture that does not match actual data movement.\r
- Marking acceptance complete because the intended code exists rather than because behavior was checked.\r
\r
## The FDE connection\r
\r
A capstone practises end-to-end ownership: understand the customer context, design a bounded workflow, connect the implementation, and produce evidence that the agreed behavior exists. Take multiple sessions when needed; completeness matters more than the calendar label.\r
\r
## Build your lesson project\r
\r
**Customer-policy assistant capstone**\r
\r
Build a fictional customer's read-only policy assistant using a clear interface, trusted backend boundary, source-grounded answer flow, feedback storage, and an evaluation suite. Start with a labelled offline mode if necessary, then add a real provider only when its contract and secret handling are understood. Keep external messaging, purchases, and autonomous writes outside this capstone scope.\r
\r
- A scoped customer brief and actual architecture diagram.\r
- A working question-to-evidence-to-answer workflow.\r
- Feedback persistence and clear product failure states.\r
- Acceptance evidence, a repeatable eval suite, and an unfinished-work list.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- Which user outcome guided the architecture?\r
- Which boundary owns each critical validation?\r
- What remains incomplete and how does it affect the agreed workflow?\r
\r
## References and next steps\r
\r
- [FastAPI tutorial](https://fastapi.tiangolo.com/tutorial/)\r
- [Anthropic: building effective agents](https://www.anthropic.com/engineering/building-effective-agents)\r
\r
[← Lesson 27](../27_Day_Portfolio_Getting_Hired/) · [Lesson 29 →](../29_Day_Capstone_Part2/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Concept:** Everything converges. The capstone is a **client-grade AI system** — not a tutorial project, but something you'd defend in front of a paying client: scoped brief, tested reliability, documented limits, honest cost model. Today: the brief and the build. Tomorrow: deploy and harden.\r
\r
**Time:** 2–3 hours. **Scope:** one system, done properly. **Done when you'd sign your name to it.**\r
\r
---\r
\r
## The mission\r
\r
**Pick ONE** (the smaller the scope, the better the result):\r
\r
- **A)** A RAG assistant over a real organization's real documents (with their permission) — your day-21 project, rebuilt to client standard.\r
- **B)** A tool-using assistant for a real workflow (e.g., "quote calculator + FAQ answerer" for a real shop type).\r
- **C)** Your own choice — but it must have a *real user* in mind, not "users."\r
\r
---\r
\r
## Part 1: The brief (30 min, written BEFORE code)\r
\r
Write \`BRIEF.md\`:\r
\r
\`\`\`markdown\r
# Capstone Brief\r
User: [specific person/business type]\r
Problem: [their words, quantified: hours × people × frequency]\r
Solution: [3 bullets]\r
IN scope: [3 bullets] / OUT of scope: [3 bullets]\r
Success metric: [measurable]\r
Reliability target: [e.g., 90%+ on 20-case eval set]\r
Cost ceiling: [max $/100 uses]\r
Risks: [honest list]\r
\`\`\`\r
\r
**If you can't write this, you don't have a project yet** — you have an idea. Go back to day 26 until the brief is real.\r
\r
## Part 2: The build (rest of the day)\r
\r
- [ ] Architecture: API backend (day 24) + RAG or tools (days 17–19) + logging (day 25)\r
- [ ] Eval set FIRST (day 22): 20 cases written before tuning — this is your contract with yourself\r
- [ ] Guardrails (day 23): input limits, injection handling, budget cap — all three layers\r
- [ ] Repeat: build → eval → fix → eval. Log every change and score.\r
- [ ] The honesty tests: unanswerable questions, injection attempts, bad inputs — all must behave\r
\r
## The senior review (end of day)\r
\r
- [ ] Run the full eval set. Score: ___/20. Every failure has a name and a fix-or-document decision.\r
- [ ] Read BRIEF.md again. Did you build what's IN and avoid what's OUT? (Scope discipline is the grade.)\r
- [ ] Attack it like day 23. Anything new break?\r
- [ ] Would you demo this to the user in your brief tomorrow? If not, what's the one thing blocking — fix that first.\r
\r
---\r
\r
## 🧠 Check — do you own the standard?\r
\r
<details>\r
<summary><b>Q1.</b> What makes this "client-grade" instead of "tutorial-grade"?</summary>\r
\r
A real user, a written brief with IN/OUT scope, an eval set built before tuning, guardrails, honest limits, and a cost model. Tutorials skip all six; clients pay for all six.\r
</details>\r
\r
<details>\r
<summary><b>Q2.</b> Your eval score is 16/20 and you're tired. Ship or fix?</summary>\r
\r
Decide with the brief: which 4 failed, and do they touch the success metric? If yes, fix. If they're edge cases outside scope, document them as known limits and ship. "Tired" is not a criterion.\r
</details>\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] BRIEF.md exists and the build matches its IN/OUT\r
- [ ] 20-case eval set, baseline score logged, failures triaged\r
- [ ] Guardrails + honesty tests passing\r
- [ ] Committed to GitHub\r
\r
---\r
\r
[← Day 27](../27_Day_Portfolio_Getting_Hired/) · [Day 29 →](../29_Day_Capstone_Part2/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
