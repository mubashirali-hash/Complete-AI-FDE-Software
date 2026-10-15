const e=`# Day 21 — Compose and share a usable document assistant\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** A shareable document-assistant demo. You can take several study sessions.\r
\r
**The situation:** Your retrieval and answer checks work separately. A new user needs one screen that explains waiting, answers, and missing evidence.\r
\r
### One idea: Make the assistant usable as a whole\r
\r
An AI product needs a complete user journey around the model. A person submits a question, sees that work is happening, receives a supported answer or a useful failure, and can inspect sources. Your interface should represent these states clearly. A saved sample response is useful for developing the interface, but label it as a fixture so users know what they are testing.\r
\r
**New words:**\r
\r
- **Interface state:** What the screen shows at one stage, such as loading or no evidence.\r
- **Contract:** An agreement about the input, output, and allowed behaviour between components.\r
- **Stranger test:** Watching someone unfamiliar with the project try its main task.\r
\r
### Follow the example below\r
\r
1. The response record contains a status, a clearly labelled fixture mode, an answer, and a source passage.\r
2. The example prints the status, mode, and source count.\r
3. The assertion checks a JSON round trip, not answer quality or allowed states. The project adds contract validation and a usable interface.\r
\r
### Try one small decision\r
\r
The assistant has no evidence for a question. What should its screen display?\r
\r
1. An endless loading indicator\r
2. A blank answer card\r
3. A clear no-evidence message and an appropriate next action\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Every finished operation needs a visible outcome.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
No evidence is an outcome you can explain, not an empty screen.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**A clear no-evidence message and an appropriate next action** Yes. Tell the user what happened and how they can continue.\r
\r
</details>\r
\r
**Then practise:** Remove the sample source and run the example. It will print zero sources while keeping status answered. Explain why the JSON round-trip assertion still passes and what extra validation the project needs.\r
\r
**Your project's first action:** Sketch four screens for the same question journey: ready, loading, supported answer, and no evidence. Then connect the first complete path.\r
\r
**How it connects:** Bring together the frontend pattern from Day 13, retrieval from Day 18, and answer contract from Day 19. Reuse these components for the document-assistant demo.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
A document assistant becomes a product when a new user can understand its scope, ask a useful question, inspect the evidence, and recover from failure. Today you will combine earlier components behind one interface and evaluate the whole workflow. The project can begin in a clearly labelled offline mode and add real generation only after its evidence boundaries work.\r
\r
**Your project:** [A shareable document-assistant demo](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Compose retrieval, answer contracts, source display, and useful interface states.\r
- Test the complete user workflow rather than only individual functions.\r
- Publish a scoped demonstration with honest operating limits.\r
\r
## Understand the concept\r
\r
### Composition needs shared contracts\r
\r
The frontend, retrieval layer, and answer generator need compatible data shapes. Define question input, answer text, source records, and status categories before connecting them. Preserve distinctions such as no evidence, invalid request, and temporarily unavailable service. A boolean success field alone may hide the information the interface needs to guide recovery. Reuse earlier validated components instead of implementing each boundary differently inside a new UI.\r
\r
### First-use guidance is part of the product\r
\r
Explain what collection the assistant uses and offer representative starting questions. Show a loading state when work is in progress, an answer with inspectable source passages, and a useful no-answer state. Keep model/fixture identity clear. An attractive empty chat box can leave a user unsure what to ask and what to trust. A source panel must connect evidence to the specific answer, not merely list every document in the collection.\r
\r
### A shared demo needs a data policy\r
\r
Use fictional or intentionally public documents for a public demonstration. Browser code cannot safely contain a private model API credential. A real-provider integration belongs in a trusted local or hosted backend with explicit configuration. An offline extractive demonstration is useful for workflow testing but must not be sold as measured model performance. Inspect the deployed application in a clean context and record what a new user could actually complete.\r
\r
## A worked example, step by step\r
\r
A structured response preserves the answer, evidence, and mode so a UI can display them honestly.\r
\r
\`\`\`python\r
import json\r
\r
response = {\r
    "status": "answered",\r
    "mode": "extractive-fixture",\r
    "answer": "Standard shipping takes 3 to 5 business days.",\r
    "sources": [{"id": "FAQ-01", "passage": "Standard shipping takes 3 to 5 business days."}],\r
}\r
print("Status:", response["status"])\r
print("Mode:", response["mode"])\r
print("Sources:", len(response["sources"]))\r
assert json.loads(json.dumps(response)) == response\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
Status: answered\r
Mode: extractive-fixture\r
Sources: 1\r
\`\`\`\r
\r
The response separates status from answer text and preserves a source record with a stable ID. The mode tells the interface whether it is showing a fixture, extractive baseline, or real provider result. The JSON round trip checks that this sample can cross a frontend/backend boundary. It does not prove answer correctness or a working deployment. Test those separately through representative questions and actual user interaction.\r
\r
## Practise before building\r
\r
### Exercise 1: Design interface states\r
\r
Sketch ready, loading, answered, no-evidence, and failed states.\r
\r
**Hint:** Each state should tell the user what happened and what they can do next.\r
\r
**Check your result:** A service error is not presented as an unsupported factual answer.\r
\r
### Exercise 2: Trace one question\r
\r
Follow a question through input validation, retrieval, answer creation, and source display.\r
\r
**Hint:** Check the contract at each boundary.\r
\r
**Check your result:** The visible source actually supports the displayed answer.\r
\r
### Exercise 3: Observe a stranger test\r
\r
Ask a new user to answer a policy question using only your interface.\r
\r
**Hint:** Record any coaching you had to provide.\r
\r
**Check your result:** You have a concrete usability finding and a retested improvement.\r
\r
## Common mistakes and how to debug them\r
\r
- Combining components without agreeing on their input/output shapes.\r
- Showing every source instead of evidence relevant to the answer.\r
- Publishing private documents or putting provider credentials in browser code.\r
\r
## The FDE connection\r
\r
An FDE turns working components into a customer workflow with a useful handoff. Integration, onboarding, evidence display, and deployment verification are all part of the result the customer can use.\r
\r
## Build your lesson project\r
\r
**A shareable document-assistant demo**\r
\r
Create a usable interface for the grounded assistant from lesson 19. Include example questions, answer/source display, no-evidence and failure states, and an honest mode label. Publish a fictional-data demo or document a reproducible local version while a trusted backend is being prepared. A real-provider extension must keep credentials out of the frontend.\r
\r
- A usable interface connected to the validated answer contract.\r
- A fictional/public document collection and scope explanation.\r
- A verified demo URL or a reproducible local delivery record.\r
- A workflow test report and one observed usability improvement.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- What could a new user do without your coaching?\r
- How does the interface distinguish scope limits from service failure?\r
- Which part of the delivery still needs verification?\r
\r
## References and next steps\r
\r
- [MDN: learning web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)\r
- [Streamlit documentation](https://docs.streamlit.io/)\r
\r
[← Lesson 20](../20_Day_Agents/) · [Lesson 22 →](../22_Day_Evals/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Today you ship your first real AI product:** a RAG chatbot over real documents, deployed to a live URL. This is the Week 3 proof — and the template for the kind of thing businesses actually buy.\r
\r
**Time:** 2–3 hours. **Scope:** tight. One chatbot, one document set, live URL. **Done when strangers can use it.**\r
\r
---\r
\r
## The mission\r
\r
**Build and deploy "AskMyDocs"** — a chatbot that answers questions from a real document collection, with sources shown, "I don't know" when it can't, and a live public URL.\r
\r
### Suggested document set (pick one)\r
\r
- A local business's public FAQs/policies (with permission)\r
- Public documentation of an open-source tool you like\r
- Your own notes from days 15–20 (delightfully meta)\r
\r
---\r
\r
## The spec (write this before touching code)\r
\r
Your README for the project must answer:\r
\r
1. **What it does:** "Answers questions about X documents; shows sources; admits ignorance."\r
2. **Architecture:** Streamlit UI → retrieve (embeddings) → grounded prompt → model → answer + sources. Draw the diagram (day 19's pipeline).\r
3. **Reliability contract:** temperature=0; "answer only from context"; top-3 chunks shown with every answer.\r
4. **Cost model:** tokens per question (measured), estimated monthly cost at 100 questions/day. Write the number.\r
5. **Known limits:** "Fails gracefully on unanswerable questions; no real-time data; English only."\r
\r
---\r
\r
## The build (your call on order)\r
\r
- [ ] Index pipeline: chunk → embed → cache (days 18–19, reused)\r
- [ ] Streamlit chat UI (day 13's patterns): question box, answer, expandable "sources" showing the retrieved chunks\r
- [ ] The honesty test: 3 unanswerable questions → all get "I don't know"\r
- [ ] 10-question eval set: run it, score it, fix the worst failure (day 22's instinct, early)\r
- [ ] Secrets in \`.env\`/Streamlit secrets, never in code (day 14's audit, again)\r
- [ ] Deploy to Streamlit Cloud → **live URL**\r
- [ ] Project README with the spec above + the URL + the cost model\r
\r
## The senior review (do this before calling it done)\r
\r
- [ ] Ask it something it can't know → honest "I don't know"? (If not, you're not done.)\r
- [ ] Check the sources panel → are the chunks actually relevant?\r
- [ ] Open the URL in incognito → works for a stranger?\r
- [ ] Read your cost model → could this survive real usage without losing money?\r
- [ ] Show it to one real person. Watch them use it. Write down what confused them.\r
\r
---\r
\r
## 🧠 Milestone check — Week 3\r
\r
<details>\r
<summary><b>Q1.</b> Explain your chatbot's full pipeline in 60 seconds.</summary>\r
\r
Index (chunk → embed → cache) → per question: embed → retrieve top-3 → grounded prompt → model answers from context only → show answer + sources. Temperature 0, "I don't know" when unsupported.\r
</details>\r
\r
<details>\r
<summary><b>Q2.</b> What's the single most important behavior you tested?</summary>\r
\r
Honest ignorance. A chatbot that admits what it doesn't know is trustworthy; one that invents answers is a liability you shipped to the public.\r
</details>\r
\r
<details>\r
<summary><b>Q3.</b> What's your cost per 100 questions, and why does it matter?</summary>\r
\r
Your measured number. It matters because it decides pricing: if each question costs $0.01 and you charge nothing, 10k questions cost you $100. Token economics or the business dies.\r
</details>\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] Live URL works for a stranger in incognito\r
- [ ] Sources shown with every answer; "I don't know" tested and passing\r
- [ ] Project README has spec, cost model, known limits, and the URL\r
- [ ] Committed; URL shared with at least one real person\r
\r
## 📎 The one link\r
\r
[Streamlit — Build a Chatbot](https://docs.streamlit.io/develop/tutorials/llms/build-conversational-apps) — the official chat UI pattern you'll build on.\r
\r
---\r
\r
**You now have three shipped projects: a CLI tool, a live web app, and a live AI product.** Week 4 is about making all of this *production-grade and sellable*.\r
\r
[← Day 20](../20_Day_Agents/) · [Day 22 →](../22_Day_Evals/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
