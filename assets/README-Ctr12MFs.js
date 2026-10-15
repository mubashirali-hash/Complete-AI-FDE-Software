const e=`# Day 24 — Backend APIs, databases, and durable feedback\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** FastAPI feedback and question service. You can take several study sessions.\r
\r
**The situation:** Your assistant needs to store feedback so the team can inspect it after the server restarts.\r
\r
### One idea: Put durable data behind an API\r
\r
A backend receives requests and applies application rules. An API endpoint is an address for a particular operation. A database stores records and can enforce useful rules such as unique IDs. Validate requests before writing, use parameterized database queries, and return an understandable result. Creating a database table alone does not create a complete web service.\r
\r
**New words:**\r
\r
- **Endpoint:** An API address and method for a particular operation.\r
- **Database:** A system for storing and querying structured records.\r
- **Parameterized query:** A query that passes values separately from SQL instructions.\r
\r
### Follow the example below\r
\r
1. The example creates a SQLite feedback table and inserts a record.\r
2. Values are passed as parameters, keeping them separate from the SQL statement.\r
3. The example uses an in-memory database. Your project needs a file-backed database plus a FastAPI service to test restart persistence.\r
\r
### Try one small decision\r
\r
Your API returns 'saved', but feedback disappears after restart. What should you inspect first?\r
\r
1. The colour of the Save button\r
2. Only the model prompt\r
3. The storage path, database lifetime, and committed writes\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Remember the difference between temporary memory and durable storage.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
An in-memory database belongs to the process; use and verify a durable path for this project.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**The storage path, database lifetime, and committed writes** Yes. Check where records are written and whether they are still present in a new process.\r
\r
</details>\r
\r
**Then practise:** Change the sample feedback value and read it back from the example database. Explain why this in-memory run cannot prove data survives a server restart.\r
\r
**Your project's first action:** Write the feedback endpoint contract: required fields, accepted values, success result, and invalid-input result. Choose a local database file path.\r
\r
**How it connects:** Combine Day 6 persistence with Day 9 request/response contracts. Add durable feedback to the document assistant rather than relying on browser-only state.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
A backend owns shared rules and durable state behind a contract other programs can use. Today you will connect HTTP input validation, database operations, and explicit error behavior. Your project is a small FastAPI feedback service for the assistant, with parameterized SQL and a documented trust boundary.\r
\r
**Your project:** [FastAPI feedback and question service](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Specify API methods, request fields, response fields, and failure categories.\r
- Store and retrieve records using parameterized SQL.\r
- Distinguish request validation, authentication, authorization, and database consistency.\r
\r
## Understand the concept\r
\r
### An API is a caller-facing contract\r
\r
Describe what POST /feedback accepts, what a successful response contains, and which invalid inputs are rejected. HTTP validation and domain validation are related but different: a string can be structurally valid while being an empty or unauthorized source reference. FastAPI can parse and validate declared request shapes, but your application still owns domain rules and resource permissions. Keep responses stable enough for callers to handle them deliberately.\r
\r
### SQL separates values from commands\r
\r
Parameterized queries pass values separately from SQL text. Building SQL by joining arbitrary input into a command risks confusing data with executable syntax. Use stable record IDs and constraints appropriate to the model. Transactions group related changes that must succeed or fail together. A single-process SQLite demonstration helps teach durable data, but production concurrency, migrations, backups, and recovery need their own operating plan.\r
\r
### Trusted identity and validation are different\r
\r
A valid feedback payload does not establish who sent it or whether they may inspect another user's feedback. Authenticate at a trusted boundary, then authorize the requested operation. For a local lesson prototype, a clearly labelled identity fixture can demonstrate policy, but a free-form user ID header is not production authentication. Keep provider credentials on the backend and avoid returning private internals in error responses.\r
\r
## A worked example, step by step\r
\r
User content is a parameter value, not part of the SQL command structure.\r
\r
\`\`\`python\r
import sqlite3\r
\r
connection = sqlite3.connect(":memory:")\r
connection.execute("CREATE TABLE feedback (id INTEGER PRIMARY KEY, note TEXT NOT NULL)")\r
note = "The source passage helped me check the answer."\r
with connection:\r
    connection.execute("INSERT INTO feedback (note) VALUES (?)", (note,))\r
row = connection.execute("SELECT id, note FROM feedback WHERE id = ?", (1,)).fetchone()\r
print("Stored feedback:", row[0])\r
print(row[1])\r
connection.close()\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
Stored feedback: 1\r
The source passage helped me check the answer.\r
\`\`\`\r
\r
The connection creates a temporary in-memory database. The placeholder question mark marks a value position, and the tuple supplies the value separately. The connection context manages transaction success or failure, and the later explicit close releases the connection. The SELECT also uses a parameter. An in-memory database disappears when closed, so a durable service must use a documented file path or another persistence system and test a real restart.\r
\r
## Practise before building\r
\r
### Exercise 1: Write the endpoint contract\r
\r
Specify feedback input, successful output, invalid input, and missing-record behavior before implementing HTTP handlers.\r
\r
**Hint:** Use concrete example requests and responses.\r
\r
**Check your result:** A frontend developer can build against the contract without reading database internals.\r
\r
### Exercise 2: Separate data from SQL\r
\r
Store a note containing quotation marks through a parameterized query.\r
\r
**Hint:** Pass it as a value instead of escaping it into command text.\r
\r
**Check your result:** The complete note is stored as data and the table still exists.\r
\r
### Exercise 3: Test durable restart\r
\r
Change the demonstration to a disposable file database and inspect it after reopening the connection.\r
\r
**Hint:** Document the file location and commit behavior.\r
\r
**Check your result:** The record remains after process restart.\r
\r
## Common mistakes and how to debug them\r
\r
- Concatenating request input into SQL commands.\r
- Treating a valid request schema as authentication or authorization.\r
- Claiming persistence based only on an in-memory database demonstration.\r
\r
## The FDE connection\r
\r
An FDE connects customer-facing workflows to trusted shared state. The API contract, permission boundary, and database operating story should be understandable to both the integration team and the future operator.\r
\r
## Build your lesson project\r
\r
**FastAPI feedback and question service**\r
\r
Build POST /feedback, GET /feedback/{id}, and POST /ask for the fictional assistant. Use validated request models, a documented SQLite file, parameterized queries, and a trusted-identity boundary or explicitly labelled local identity fixtures. Reuse your answer contract and make invalid, missing, and forbidden outcomes clear. Verify the current FastAPI installation command in the linked documentation.\r
\r
- An API contract and runnable FastAPI service with documented setup.\r
- A durable feedback schema and parameterized storage layer.\r
- Request validation and explicitly scoped access checks.\r
- HTTP, restart, and invalid-input test results.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- Which rules belong to schema validation versus authorization?\r
- What makes the SQL operation safe for arbitrary note text?\r
- What evidence proves the feedback is actually durable?\r
\r
## References and next steps\r
\r
- [FastAPI tutorial](https://fastapi.tiangolo.com/tutorial/)\r
- [Python: sqlite3](https://docs.python.org/3/library/sqlite3.html)\r
\r
[← Lesson 23](../23_Day_Guardrails_Cost/) · [Lesson 25 →](../25_Day_Observability_Debugging/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Concept:** Streamlit is a demo vehicle; **real products need a backend**: an API (FastAPI) that serves your AI logic to any client — web, mobile, WhatsApp — and a **database** (SQLite/Postgres) that remembers users, conversations, and usage. Today your RAG chatbot grows a spine: HTTP in, answers out, everything recorded.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### Why a backend\r
\r
\`\`\`\r
Before:  Streamlit app (UI + logic glued together, one user at a time)\r
After:   FastAPI server ← HTTP → any client (web/mobile/bot)\r
              ↓\r
         Database (users, conversations, token usage)\r
\`\`\`\r
\r
The API is a **contract** (day 4's idea, at system scale): \`POST /ask {"question": "..."}\` → \`{"answer": "...", "sources": [...], "tokens_used": 412}\`. Any client can use it. Your AI logic becomes a *service*.\r
\r
### FastAPI in 20 lines\r
\r
\`\`\`python\r
from fastapi import FastAPI\r
from pydantic import BaseModel\r
\r
app = FastAPI()\r
\r
class AskRequest(BaseModel):\r
    question: str          # validated automatically: must be a string\r
\r
class AskResponse(BaseModel):\r
    answer: str\r
    sources: list[str]\r
    tokens_used: int\r
\r
@app.post("/ask", response_model=AskResponse)\r
def ask(req: AskRequest):\r
    # your RAG pipeline from day 19 goes here\r
    ...\r
\`\`\`\r
\r
**Pydantic models are contracts**: bad input gets rejected with a clear error before your code ever sees it. This is validation (day 17's law #1) built into the framework.\r
\r
### The database: memory that survives restarts\r
\r
SQLite (a single file, zero setup) is perfect now; Postgres later when you scale. One table to start:\r
\r
\`\`\`sql\r
CREATE TABLE interactions (\r
    id INTEGER PRIMARY KEY,\r
    timestamp TEXT,\r
    question TEXT,\r
    answer TEXT,\r
    tokens_used INTEGER,\r
    was_refusal BOOLEAN\r
);\r
\`\`\`\r
\r
Every answer your API gives gets recorded. That table **is** your usage billing, your eval data (day 22), and your debugging history (day 25) — one table, three jobs.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Convert my RAG chatbot to a FastAPI backend: 1) POST /ask with Pydantic request/response models including tokens_used, 2) every interaction logged to SQLite with timestamp, question, answer, tokens, refusal flag, 3) GET /stats returning total questions, total tokens, total estimated cost, refusal rate — computed from the DB, 4) keep the Streamlit UI but make it call the API instead of the pipeline directly, 5) run with uvicorn; document the endpoints in the README."\r
\r
You specified **the contract, the logging, and the stats** — the three things that make a backend production-shaped.\r
\r
## 3. Evaluate — be the senior\r
\r
- \`curl\` the API directly (no UI). Bad input (\`{"question": 123}\`) → clean 422 error, not a crash? Contracts hold?\r
- Ask 5 questions through the UI, then check \`/stats\` and query the DB directly. Do the numbers match? **Your billing depends on this table being right.**\r
- Kill the server mid-answer (Ctrl+C). Restart. Is the history intact? (That's the point of the database.)\r
- Load test lightly: 20 rapid requests. Does anything break? (You don't need perfection — you need to *know* the limit.)\r
- Ask the AI: "Quiz me — why does a backend beat Streamlit-only for real products? What do Pydantic models guarantee? What three jobs does the interactions table do?"\r
\r
## 4. Business lens 💼\r
\r
**An API turns your AI work into something businesses can buy and integrate.** "Here's your endpoint and docs" beats "here's a demo link" — it plugs into *their* systems (their website, their WhatsApp, their internal tools). And the interactions table is your business intelligence: which questions are asked most (→ new features), what it costs per client (→ pricing), where it refuses (→ doc gaps to fix, billable work). The backend isn't just servers and setup — it's the business.\r
\r
---\r
\r
## 🧠 Quick check — do you own today?\r
\r
<details>\r
<summary><b>Q1.</b> What does a Pydantic model guarantee at your API boundary?</summary>\r
\r
That incoming data matches the contract (types, required fields) — invalid requests are rejected with clear errors before touching your logic. Validation at the border.\r
</details>\r
\r
<details>\r
<summary><b>Q2.</b> Why log every interaction to the database?</summary>\r
\r
One table serves three jobs: usage billing (tokens per client), eval data (real questions to test against), and debugging history (what happened when something went wrong).\r
</details>\r
\r
<details>\r
<summary><b>Q3.</b> A client asks "can our mobile app use your chatbot?" — what changed by having a backend?</summary>\r
\r
Nothing needs rebuilding: the API contract already serves any HTTP client. That's the whole point — the AI logic is a service now, not a demo page.\r
</details>\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can explain backends, API contracts, and the DB's three jobs in plain words\r
- [ ] \`/ask\` works via curl; bad input gets clean errors; \`/stats\` matches the DB\r
- [ ] Streamlit UI calls the API; history survives a restart\r
- [ ] Committed to GitHub\r
\r
> 🔭 **Coming back to this:** [Phase 2, weeks 1–2](../31_Phase2_Build_Like_An_Engineer/) rebuilds everything you touched today — Postgres with migrations, a documented API strangers can use. Today you met the backend. There, you'll own it.\r
\r
## 📎 The one link\r
\r
[FastAPI Tutorial — First Steps](https://fastapi.tiangolo.com/tutorial/first-steps/) — the official tutorial; you'll use the first half today.\r
\r
---\r
\r
[← Day 23](../23_Day_Guardrails_Cost/) · [Day 25 →](../25_Day_Observability_Debugging/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
