const e=`# Day 19 — RAG, source evidence, and honest abstention\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** Source-grounded FAQ assistant. You can take several study sessions.\r
\r
**The situation:** A customer asks about a refund policy. The assistant should use the actual policy and show where the answer came from.\r
\r
### One idea: Find evidence before answering\r
\r
Retrieval-augmented generation, or RAG, means finding relevant source material before generating an answer. The app retrieves passages, gives permitted evidence to the answer step, and checks the result. A citation helps a reader inspect a claim. It is useful only when the cited passage actually supports the answer. If the evidence is missing, saying so is a valid result.\r
\r
**New words:**\r
\r
- **Retrieval:** Finding candidate information from a source collection.\r
- **Citation:** A reference that lets someone locate supporting evidence.\r
- **Abstention:** Declining to answer when there is not enough support.\r
\r
### Follow the example below\r
\r
1. The example stores one shipping passage with a source ID.\r
2. For shipping, it copies the stored text into the answer and attaches that ID. This is an extractive fixture, not model generation.\r
3. For an unknown topic it returns a no-evidence message. The project adds retrieval and checks that cited passages actually support answers.\r
\r
### Try one small decision\r
\r
No permitted policy passage answers the question. What should the assistant do?\r
\r
1. Invent a likely policy and add a citation\r
2. Explain that the available evidence is insufficient\r
3. Use a forbidden document because it seems useful\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
The goal is a supported answer, not an answer at any cost.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
When supporting evidence is absent, return a clear no-evidence result.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Explain that the available evidence is insufficient** Yes. An honest no-evidence result lets the user seek the right source.\r
\r
</details>\r
\r
**Then practise:** Add a new call for a topic that is not in evidence. Run it and check the no-evidence response. Then add a fictional source for that topic and compare the result.\r
\r
**Your project's first action:** Choose three public or fictional policy passages. Write one answerable question and one question they cannot answer, with expected outcomes.\r
\r
**How it connects:** Reuse Day 18's FAQ records and retrieval comparison. Add a source-supported answer contract rather than treating the top search result as automatically correct.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
Retrieval-augmented generation supplies relevant source material before an answer is generated. It does not automatically make the sources correct or the final answer faithful. Today you will separate retrieval from generation, inspect supporting evidence, and build a document assistant that can say when its evidence is insufficient.\r
\r
**Your project:** [Source-grounded FAQ assistant](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Describe ingestion, retrieval, context construction, generation, and citation checking.\r
- Keep source identity and access policy attached to retrieved information.\r
- Evaluate supported answers and no-answer behavior separately.\r
\r
## Understand the concept\r
\r
### The pipeline has several failure points\r
\r
A RAG system ingests documents, divides or structures their content, retrieves useful pieces, constructs model context, and produces an answer. A wrong answer can originate in outdated data, a missing chunk, poor ranking, misleading context, or unsupported generation. Inspect these stages separately. Chunking is a tradeoff: tiny pieces can lose necessary context while oversized pieces can dilute relevance or exceed the budget. Preserve document IDs, source locations, and freshness information so retrieval can be investigated.\r
\r
### A citation must support the claim\r
\r
A model can produce a citation-looking reference that is absent or irrelevant. Check that cited IDs belong to the supplied evidence and inspect whether the passage supports the actual claim. Sources themselves can be wrong, contradictory, or obsolete, so source selection and ownership matter. Authorization should filter which documents a trusted user can retrieve before those documents enter model context. A prompt asking the model to hide private information is not a substitute for that boundary.\r
\r
### Abstention is a product behavior\r
\r
Define what happens when there is no useful evidence or the evidence conflicts. The answer can explain that the available documents do not establish the requested fact and offer a appropriate next step. Do not fill gaps with a confident invented answer merely to make the demo look smooth. Evaluate answerability, retrieval quality, and faithfulness as different criteria. A simple extractive baseline can help inspect sources before you add an optional language-model generator.\r
\r
## A worked example, step by step\r
\r
A selected evidence record supplies a supported answer. The missing record produces abstention rather than a fabricated policy.\r
\r
\`\`\`python\r
evidence = {\r
    "shipping": {"source_id": "FAQ-01", "text": "Standard shipping takes 3 to 5 business days."}\r
}\r
\r
def answer(topic):\r
    source = evidence.get(topic)\r
    if source is None:\r
        return {"answer": "The available documents do not answer this question.", "citations": []}\r
    return {"answer": source["text"], "citations": [source["source_id"]]}\r
\r
print(answer("shipping")["answer"])\r
print("Source:", answer("shipping")["citations"][0])\r
print(answer("international-tax")["answer"])\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
Standard shipping takes 3 to 5 business days.\r
Source: FAQ-01\r
The available documents do not answer this question.\r
\`\`\`\r
\r
The stable source ID travels with the text. The function returns an answer and citations as separate structured fields. Missing evidence produces a different result with no citation rather than an unrelated reference. This exact-match extractive demonstration isolates evidence handling; it is not semantic retrieval or generative RAG. Your project will add a documented retrieval method and an optional generator behind the same evidence-aware contract.\r
\r
## Practise before building\r
\r
### Exercise 1: Locate the source of failure\r
\r
Describe a wrong answer caused by missing retrieval and a different wrong answer caused by unsupported generation.\r
\r
**Hint:** Inspect the retrieved passages before changing a prompt.\r
\r
**Check your result:** The two failures have different targeted fixes.\r
\r
### Exercise 2: Validate a citation\r
\r
Try a citation ID that is absent from the supplied evidence and one whose passage does not support the claim.\r
\r
**Hint:** Existence and support are separate checks.\r
\r
**Check your result:** Neither citation is accepted as proof of the claim.\r
\r
### Exercise 3: Write a no-answer policy\r
\r
Define the message for missing, conflicting, and outdated evidence.\r
\r
**Hint:** Explain the limitation and a useful next step rather than inventing a result.\r
\r
**Check your result:** A new user can distinguish no evidence from a service error.\r
\r
## Common mistakes and how to debug them\r
\r
- Assuming retrieval makes documents true or makes generated answers faithful.\r
- Accepting a citation solely because its format looks correct.\r
- Retrieving private content and relying on a prompt to conceal it later.\r
\r
## The FDE connection\r
\r
Customer document assistants depend on permissions, source ownership, and operational trust. An FDE makes evidence traceable and separates what the documents establish from what the system cannot currently answer.\r
\r
## Build your lesson project\r
\r
**Source-grounded FAQ assistant**\r
\r
A team wants answers from a small fictional policy collection. Build a retrieval-and-answer pipeline that preserves source IDs, displays supporting passages, and handles unanswered questions. Use a clearly labelled extractive or fixture baseline first; optionally connect a real model generator without weakening permission or citation checks.\r
\r
- A small source collection with IDs, locations, and freshness notes.\r
- A retrieval method with inspectable ranked results.\r
- An answer contract including citations and a no-answer state.\r
- A labelled question set covering support, conflict, and missing evidence.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- At which pipeline stage did a observed failure begin?\r
- How did you verify citation support rather than format alone?\r
- What keeps a private source out of an unauthorized user's context?\r
\r
## References and next steps\r
\r
- [Microsoft: retrieval-augmented generation overview](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)\r
- [OWASP: prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)\r
\r
[← Lesson 18](../18_Day_Embeddings_Semantic_Search/) · [Lesson 20 →](../20_Day_Agents/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Concept:** **RAG (Retrieval-Augmented Generation)** = don't ask the model to *remember* your documents — **fetch the relevant chunks and put them in the prompt**. This fixes the two biggest LLM flaws at once: hallucination (it now has the facts in front of it) and stale knowledge (your documents, not its training data). Most "AI over our data" products are RAG.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### The pipeline, drawn\r
\r
\`\`\`\r
1. INDEX (once):       docs → split into chunks → embed each chunk → store vectors\r
2. RETRIEVE (per q):   question → embed → find top-k similar chunks (day 18!)\r
3. GENERATE (per q):    prompt = system instructions + retrieved chunks + question\r
                       → model answers USING the chunks\r
\`\`\`\r
\r
### Why each step exists\r
\r
- **Chunking** (e.g., 500 tokens with overlap): whole documents don't fit context windows, and one giant vector buries the relevant sentence. Chunks are the unit of retrieval. Too big → noisy; too small → loses context. Overlap (~50 tokens) prevents cutting sentences in half.\r
- **The grounding instruction**: "Answer ONLY from the provided context. If the answer isn't in the context, say you don't know." This is the anti-hallucination contract — day 16's spec discipline applied to generation.\r
- **"I don't know" is a feature**: a RAG system that admits ignorance is trustworthy; one that invents answers is a liability.\r
\r
### The failure modes (know them before you ship)\r
\r
| Failure | Symptom | Fix |\r
|---|---|---|\r
| Bad chunks | Retrieved text is cut mid-thought | Smaller chunks, more overlap |\r
| Missed retrieval | Right doc exists, not retrieved | Better chunking, hybrid search |\r
| Ignored context | Model answers from training, not docs | Stronger grounding instruction, lower temperature |\r
| Fabricated citation | Confident answer, docs don't support it | "Say you don't know" rule + evals (day 22) |\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Build rag_demo.py: 1) index 5 text files (write 5 short docs yourself: shop policies, product specs — keep each under 800 words so chunking is visible), chunk at ~400 tokens with 50-token overlap, embed and cache, 2) ask(question): retrieve top-3 chunks, build the grounded prompt with the anti-hallucination instruction, call the model at temperature=0, 3) print the retrieved chunks AND the answer so grounding is inspectable, 4) test with 3 questions: one answerable, one partially answerable, one completely unanswerable from the docs."\r
\r
You specified **inspectability** (print the chunks) and **the unanswerable test** — the two things that separate real RAG from a demo.\r
\r
## 3. Evaluate — be the senior\r
\r
- The unanswerable question: did it say "I don't know" or invent something? If it invented, strengthen the instruction and re-test. **This test decides whether your system is trustworthy.**\r
- The partially answerable one: does it answer only the supported part and decline the rest? Partial honesty is the bar.\r
- **Retrieval quality:** for each question, are the top-3 chunks actually the right ones? If the answer was right but the chunks were wrong, you got lucky — fix chunking, don't celebrate.\r
- Swap in a trick: ask about something in the docs but phrased with synonyms (day 18's strength should carry you). Then ask something *similar-sounding but different*. Watch the boundary.\r
- Ask the AI: "Quiz me — draw the RAG pipeline from memory. Why chunk? Why 'I don't know' is a feature? What are the 4 failure modes?"\r
\r
## 4. Business lens 💼\r
\r
**"Chat with our documents" is the #1 requested AI feature in small businesses** — support docs, policy manuals, product catalogs. RAG delivers it without fine-tuning (expensive, brittle). Your pricing story: a fixed setup fee + per-query cost you can compute from today's token math. And the "says I don't know" behavior is what makes a business *trust* it with customers — reliability is the product (day 16's lesson, again).\r
\r
---\r
\r
## 🧠 Quick check — do you own today?\r
\r
<details>\r
<summary><b>Q1.</b> Why does RAG reduce hallucination?</summary>\r
\r
The facts are placed in the prompt, so the model predicts continuations of *your documents* instead of its training data. Combined with "answer only from context," fabrication drops sharply.\r
</details>\r
\r
<details>\r
<summary><b>Q2.</b> Your RAG answers correctly but cites the wrong chunk. Is that fine?</summary>\r
\r
No — right answer, wrong retrieval means you got lucky. Retrieval quality is the system's foundation; fix chunking or ranking before it fails on a question you didn't test.\r
</details>\r
\r
<details>\r
<summary><b>Q3.</b> When is RAG the wrong choice vs fine-tuning?</summary>\r
\r
RAG wins when knowledge changes (docs update without retraining) and when you need citations. Fine-tuning is for behavior/style, not for memorizing facts — and it's far more expensive to maintain.\r
</details>\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can draw the RAG pipeline from memory and explain each step's purpose\r
- [ ] The unanswerable question gets an honest "I don't know"\r
- [ ] Retrieved chunks are printed and you've verified they're the *right* chunks\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[Pinecone — RAG Guide](https://www.pinecone.io/learn/retrieval-augmented-generation/) — the clearest single explainer of the pattern and its failure modes.\r
\r
---\r
\r
[← Day 18](../18_Day_Embeddings_Semantic_Search/) · [Day 20 →](../20_Day_Agents/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
