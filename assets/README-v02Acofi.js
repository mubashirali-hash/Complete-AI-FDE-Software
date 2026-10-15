const e=`# Day 18 — Embeddings, vector similarity, and retrieval evaluation\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** FAQ retrieval comparison workbench. You can take several study sessions.\r
\r
**The situation:** A customer asks how to get their money back, but the FAQ heading says refunds.\r
\r
### One idea: Find related meaning, not just matching words\r
\r
Keyword search looks for words. Semantic search tries to find related meaning. An embedding represents information as a vector: a list of numbers that can be compared with other vectors. Similar direction can help rank related text. A high similarity score still does not prove the text answers the question. Compare search results with cases you can judge yourself.\r
\r
**New words:**\r
\r
- **Embedding:** A numerical representation used for comparisons such as text similarity.\r
- **Vector:** An ordered list of numbers.\r
- **Ranking:** Putting candidates in an order using a scoring rule.\r
\r
### Follow the example below\r
\r
1. The example defines cosine similarity for two vectors and rejects incompatible dimensions or zero vectors.\r
2. It compares a query with one hand-written document vector, so you can inspect the arithmetic.\r
3. These are teaching vectors, not live-model embeddings. The full project adds records, ranking, and a keyword comparison.\r
\r
### Try one small decision\r
\r
A document has the highest similarity score. What does that tell you?\r
\r
1. Every claim in it is correct\r
2. It is definitely enough to answer the question\r
3. It is a candidate worth checking for relevant evidence\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Separate finding a promising passage from proving an answer.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
A ranking score is a search signal, not a truth certificate.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**It is a candidate worth checking for relevant evidence** Yes. Ranking helps choose candidates; evidence checks still decide whether they support an answer.\r
\r
</details>\r
\r
**Then practise:** Change illustrative_document from [1.0, 0.0] to [0.0, 1.0]. Rerun the similarity calculation and compare the score. This tests arithmetic, not a real embedding model.\r
\r
**Your project's first action:** Write ten FAQ records with IDs. Add a question using different words from one answer and predict which record should be retrieved.\r
\r
**How it connects:** This begins the retrieval component of your document assistant. Keep the ticket classifier's test-set habit: compare methods on the same questions.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
Embeddings represent information as vectors that can support similarity search. A similarity score is not a fact check, and a plausible example is not proof that retrieval will work on a customer's data. Today you will inspect the mathematics with small illustrative vectors, then design a FAQ-search project with labelled queries and a clear comparison method.\r
\r
**Your project:** [FAQ retrieval comparison workbench](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Explain vectors, dimensions, and cosine similarity in practical terms.\r
- Distinguish illustrative vectors from learned embedding-model output.\r
- Evaluate keyword and vector retrieval using expected relevant documents.\r
\r
## Understand the concept\r
\r
### An embedding model supplies a representation\r
\r
A learned embedding model maps input into a vector space. The vector's usefulness depends on the model, training, and task. Similarity in that space can help find related content, but it does not guarantee that a document answers the question or is true. Do not combine document and query vectors produced by incompatible models or dimensions. Record which model and configuration created an index so future queries use a compatible representation.\r
\r
### Cosine compares direction\r
\r
For non-zero vectors of equal dimension, cosine similarity divides their dot product by the product of their lengths. This helps compare direction rather than raw magnitude. A zero vector needs an explicit policy because its cosine denominator is zero. A mismatched dimension is invalid input, not a reason to silently ignore extra coordinates. Small hand-authored vectors make the formula understandable, but their chosen directions are not evidence that a real model captured semantic meaning.\r
\r
### Retrieval needs labelled queries\r
\r
Define which documents should be relevant to a query before judging the ranking. Inspect top-k results, exact-identifier queries, paraphrases, and questions with no useful match. Keyword search can be effective for product codes and exact terms; vector retrieval can help with some semantic variations. Compare them on your actual task rather than assuming one always wins. A threshold tuned on one example can fail elsewhere, so include varied and held-out queries.\r
\r
## A worked example, step by step\r
\r
The example validates dimensions and non-zero lengths before calculating a score.\r
\r
\`\`\`python\r
import math\r
\r
def cosine(left, right):\r
    if len(left) != len(right):\r
        raise ValueError("Dimensions must match")\r
    norm_left = math.sqrt(sum(value * value for value in left))\r
    norm_right = math.sqrt(sum(value * value for value in right))\r
    if norm_left == 0 or norm_right == 0:\r
        raise ValueError("Zero vectors have no cosine similarity")\r
    return sum(a * b for a, b in zip(left, right)) / (norm_left * norm_right)\r
\r
query = [0.8, 0.2]\r
illustrative_document = [1.0, 0.0]\r
print(f"Illustrative similarity: {cosine(query, illustrative_document):.3f}")\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
Illustrative similarity: 0.970\r
\`\`\`\r
\r
The function first enforces the mathematical input contract. Each norm is the square root of the sum of squared coordinates. zip pairs compatible coordinates for the dot product. The division produces a direction-based similarity for the supplied vectors. The final result describes this mathematical example only. To investigate real semantic retrieval, replace the illustrative vectors with a documented model's outputs and evaluate relevant-document ranking on independent query labels.\r
\r
## Practise before building\r
\r
### Exercise 1: Compare directions\r
\r
Compute similarity for identical, perpendicular, and opposite illustrative vectors.\r
\r
**Hint:** Try [1, 0] against [1, 0], [0, 1], and [-1, 0].\r
\r
**Check your result:** The scores are 1, 0, and -1 within numerical tolerance.\r
\r
### Exercise 2: Validate the contract\r
\r
Test mismatched dimensions and a zero vector.\r
\r
**Hint:** Reject before dividing or silently truncating with zip.\r
\r
**Check your result:** Both failures produce a clear error.\r
\r
### Exercise 3: Define relevance\r
\r
Write six FAQ queries with expected relevant document IDs, including an exact code and a no-answer query.\r
\r
**Hint:** Label the expected evidence before looking at ranked output.\r
\r
**Check your result:** You can explain why each document does or does not answer its query.\r
\r
## Common mistakes and how to debug them\r
\r
- Treating similarity as proof that a source is correct or relevant enough to answer.\r
- Mixing vectors from incompatible models or ignoring dimension mismatches.\r
- Presenting hand-authored vectors as measured model performance.\r
\r
## The FDE connection\r
\r
A customer's search problem is about finding useful information under actual data and access constraints. An FDE measures retrieval on representative queries, records index identity, and explains where keyword, vector, or hybrid search fits the task.\r
\r
## Build your lesson project\r
\r
**FAQ retrieval comparison workbench**\r
\r
A team wants staff to find the right FAQ despite variations in wording. Build a small FAQ dataset, a keyword baseline, a vector-search implementation, and labelled query results. Begin with clearly labelled illustrative vectors if needed; optionally add a real embedding model. Compare the methods honestly and preserve a no-match outcome.\r
\r
- At least 10 FAQ records with stable IDs and source text.\r
- Keyword and vector ranking functions with clear input contracts.\r
- At least six queries with expected relevant IDs.\r
- A comparison report naming the representation and its limits.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- What does a cosine score establish and what does it not establish?\r
- Why must index and query representations be compatible?\r
- Which query shows a meaningful difference between your retrieval methods?\r
\r
## References and next steps\r
\r
- [Sentence Transformers: semantic search](https://www.sbert.net/examples/applications/semantic-search/README.html)\r
- [Python: mathematical functions](https://docs.python.org/3/library/math.html)\r
\r
[← Lesson 17](../17_Day_Structured_Outputs_Tools/) · [Lesson 19 →](../19_Day_RAG/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Concept:** An **embedding** turns text into a list of numbers (a vector) where **similar meanings → similar vectors**. Once meaning is math, you can *search by meaning* instead of by keywords. "How do I reset my password?" finds "Password recovery instructions" even with zero shared words. That leap powers everything in days 19–21.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### From words to vectors\r
\r
\`\`\`python\r
embed("dog")  → [0.21, -0.83, 0.55, ...]   # ~1500 numbers\r
embed("puppy") → [0.19, -0.80, 0.58, ...]   # very close\r
embed("tax law") → [-0.44, 0.12, -0.91, ...]  # far away\r
\`\`\`\r
\r
Closeness is measured by **cosine similarity** — the angle between two vectors. Small angle = similar meaning. That's the entire ranking algorithm: embed the query, embed every document, return the documents with the smallest angle.\r
\r
### Why this beats keyword search\r
\r
Keyword search: "refund policy" won't match "how to get your money back." Embedding search: both live in the same *neighborhood of meaning* → it matches. The model's training learned which texts mean similar things; the vector is that knowledge, frozen as numbers.\r
\r
### The properties that matter for engineering\r
\r
- **Dimensions**: ~768–3072 numbers per text. More = finer distinctions, more storage/compute.\r
- **Not reversible**: you can't recover the text from the vector — but don't treat vectors as encrypted secrets either.\r
- **Model-specific**: vectors from model A can't be compared with vectors from model B. Pick one embedding model per system and never mix.\r
- **Cost**: embedding is cheap (a fraction of generation cost) — but at millions of documents, it adds up. (Day 23's unit economics.)\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Build semantic_search.py: 1) take a list of 20 FAQ strings about a fictional shop (returns, hours, warranty, shipping…), 2) embed them all with the embeddings API and cache the vectors in a local JSON file (embeddings_cache.json) so re-runs don't re-pay, 3) function search(query, top_k=3) that embeds the query and returns the 3 most similar FAQs by cosine similarity — implement cosine yourself with math, no library, 4) a demo comparing keyword search vs semantic search on 3 tricky queries (synonyms, typos, indirect phrasing)."\r
\r
You specified **caching** (cost discipline) and **implementing the math yourself** (concept ownership). Both matter.\r
\r
## 3. Evaluate — be the senior\r
\r
- The 3 tricky queries: does semantic search win all 3? For each, explain *why* keywords failed — that's the concept talking.\r
- Delete the cache file and re-run. Does it rebuild? Now run again — does it reuse the cache? (Reproducibility + cost, from days 6 and 10.)\r
- **Adversarial check:** search "how do I hack this system?" against your shop FAQs. The top result is probably irrelevant — notice that **similarity ≠ relevance judgment**. Returning the closest vector is not the same as answering safely. Day 23 will arm this.\r
- Ask the AI: "Quiz me — what is cosine similarity measuring, intuitively? Why must I never mix embedding models? Why cache embeddings?"\r
\r
## 4. Business lens 💼\r
\r
Semantic search is the cheapest AI feature with the highest perceived magic: help centers, product search, knowledge bases, resume screening. It turns "our docs are unsearchable" into a working product in a day. When scoping (day 26), "semantic search over your existing documents" is the fastest credible AI win you can offer a client — and today's cache file is the difference between a demo and a *profitable* deployment.\r
\r
---\r
\r
## 🧠 Quick check — do you own today?\r
\r
<details>\r
<summary><b>Q1.</b> In one sentence: what is an embedding?</summary>\r
\r
Text converted to a list of numbers where similar meanings produce similar numbers — so meaning can be compared with math.\r
</details>\r
\r
<details>\r
<summary><b>Q2.</b> Why can't you compare vectors from two different embedding models?</summary>\r
\r
Each model has its own private "map" of meaning. Coordinates on one map are meaningless on another. One model per system, no mixing.\r
</details>\r
\r
<details>\r
<summary><b>Q3.</b> Your search returns the closest FAQ, but it's a bad answer to the question. What went wrong?</summary>\r
\r
Nothing "went wrong" — cosine similarity finds the nearest meaning, not a correct or safe answer. Retrieval is step one; judging and grounding the answer is the next engineering (day 19's RAG).\r
</details>\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can explain embeddings and cosine similarity to a non-technical friend\r
- [ ] Semantic search beats keyword search on all 3 tricky queries, with reasons\r
- [ ] Embeddings cached locally; re-runs don't re-pay\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[OpenAI — Embeddings Guide](https://platform.openai.com/docs/guides/embeddings) — short, practical, concepts transfer everywhere.\r
\r
---\r
\r
[← Day 17](../17_Day_Structured_Outputs_Tools/) · [Day 19 →](../19_Day_RAG/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
