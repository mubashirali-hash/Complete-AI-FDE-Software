const e=`# Day 25 — Observability, diagnosis, and practical runbooks

A working system needs enough evidence to explain why it stopped working. Observability connects events, measurements, and request context to the questions an operator needs to answer. Today you will add a safe request trace and a runbook to your assistant instead of relying on scattered print statements or private data dumps.

**Your project:** [Request tracing and an incident runbook](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.

## What you will be able to do

- Distinguish logs, measurements, and traces by the question they answer.
- Connect events from one request with a stable correlation ID.
- Write a runbook with symptoms, checks, recovery, and escalation ownership.

## Understand the concept

### Choose evidence for an operational question

A log records an event, a metric summarizes a measured quantity, and a trace can connect spans of work across components. Start with questions such as which stage timed out or how many requests failed, then choose useful fields. More logs do not automatically create better diagnosis. Stable event names and failure categories often help more than unstructured messages that change with every release. Record units and scope for latency or cost measurements.

### Correlation should not require private content

A request ID connects validation, retrieval, tool execution, and final response events. Use source IDs, status categories, and timings where possible instead of copying full customer messages or documents. Decide retention, access, and redaction responsibilities. A log can itself become a sensitive data store. For this learning project, fictional inputs and explicit event fields are enough to practise correlation without collecting unnecessary information.

### A runbook supports action

A useful runbook describes the symptom, initial checks, likely failure categories, mitigation options, recovery verification, and who owns escalation. It should be usable when the original developer is unavailable. Avoid a command list with no explanation of expected results; an operator needs to know whether each step helped. Distinguish reducing current impact from finding the final root cause and capture the evidence before a recovery action removes it.

## A worked example, step by step

Two structured events share a request ID. Neither event contains a full user question or a private document.

\`\`\`python
import json

request_id = "REQ-001"
events = [
    {"request_id": request_id, "event": "retrieval_completed", "source_count": 2},
    {"request_id": request_id, "event": "response_completed", "status": "answered", "fixture_latency_ms": 120},
]
for event in events:
    print(json.dumps(event, sort_keys=True))
\`\`\`

**Expected result**

\`\`\`text
{"event": "retrieval_completed", "request_id": "REQ-001", "source_count": 2}
{"event": "response_completed", "fixture_latency_ms": 120, "request_id": "REQ-001", "status": "answered"}
\`\`\`

The correlation ID stays constant across events for one request. Stable event names identify the stage and structured fields preserve searchable values. sort_keys makes the sample output deterministic, but key order is not a required logging contract. The latency field explicitly says fixture because no live timing was measured. A real implementation should use an appropriate monotonic timer for elapsed duration, record actual values, and keep an intentional redaction policy.

## Practise before building

### Exercise 1: Trace a failed request

Create events for validation, retrieval timeout, and final failure under one ID.

**Hint:** Keep the failure category visible without copying the entire input.

**Check your result:** A reader can identify the failed stage from the events.

### Exercise 2: Define safe fields

Classify proposed log fields as necessary, optional, or inappropriate for your scope.

**Hint:** Question text and credentials may be unnecessary or sensitive.

**Check your result:** The event schema answers operational questions with minimal data.

### Exercise 3: Test the runbook

Give a simulated symptom and your runbook to another learner.

**Hint:** Include expected results and a recovery verification step.

**Check your result:** They can identify a next action without asking you what a command means.

## Common mistakes and how to debug them

- Logging private prompts or credentials to make debugging convenient.
- Reporting fixture timings as measured latency.
- Writing recovery commands without symptoms, expected results, or ownership.

## The FDE connection

A customer depends on the system after the demonstration ends. An FDE makes the operating story understandable: what to observe, how to reduce impact, how to verify recovery, and who decides the next action.

## Build your lesson project

**Request tracing and an incident runbook**

Instrument the fictional assistant's validation, retrieval, answer, and failure stages with structured events and a shared request ID. Create a runbook for a retrieval timeout and a bad release. Measure actual elapsed time where implemented, clearly label fixtures, and avoid unnecessary private content in logs.

- A structured event schema and correlated request trace.
- A redaction/data-minimization policy for logs.
- Runbooks for timeout diagnosis and release recovery.
- Evidence from a simulated incident and runbook walkthrough.

Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.

## Explain it back

- Which event identifies the failed stage?
- Which fields did you intentionally avoid collecting?
- How does the runbook establish that recovery succeeded?

## References and next steps

- [Python: logging](https://docs.python.org/3/library/logging.html)
- [OpenTelemetry: observability concepts](https://opentelemetry.io/docs/concepts/observability-primer/)

[← Lesson 24](../24_Day_FastAPI_Databases/) · [Lesson 26 →](../26_Day_Client_Discovery_FDE/)

<details>
<summary>Optional original workshop and alternative exercises</summary>

<!-- original-workshop:begin -->
**Concept:** Code you can't observe is code you can't run. **Observability** = the ability to answer "what happened?" from your logs and metrics — every request logged, every AI call traced (tokens, latency, cost), key numbers aggregated. And a **runbook** = the written "when X breaks, do Y" so 2am-you (or your client) doesn't have to think from scratch.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### The three pillars (practical version)\r
\r
1. **Logs** — "what happened, in order." Every request: timestamp, question (or its hash, for privacy), retrieved chunks, tokens, latency, errors. Structured (JSON) beats prose — machines can search JSON.\r
2. **Metrics** — "how are we doing, in numbers." Requests/min, error rate, avg tokens/answer, cost/hour, refusal rate. One dashboard, five numbers.\r
3. **Traces** — "follow one request through the system." Question → retrieval (which chunks, how long) → model call (tokens, latency) → response. When an answer is bad, the trace shows *which step* failed.\r
\r
### What to log for AI systems (the checklist)\r
\r
- [ ] Input (or hash) + timestamp + user/session id\r
- [ ] Retrieved chunk IDs (so you can replay retrieval)\r
- [ ] Model, temperature, tokens in/out, latency\r
- [ ] Final answer + refusal flag\r
- [ ] Every tool call: name, arguments, result, duration (day 17's law #3)\r
- [ ] Every error with full context\r
\r
### Runbooks: operations as code\r
\r
\`\`\`markdown\r
## Runbook: costs spiking\r
Symptom: cost/hour > $X (alert fires)\r
1. Check /stats: which user/session is driving volume?\r
2. Check logs: legit traffic or abuse? (huge inputs? rapid-fire?)\r
3. If abuse: block the source, keep the logs.\r
4. If legit: raise the cap temporarily, notify the client, re-price.\r
5. Post-mortem: why didn't the cap catch it?\r
\`\`\`\r
\r
Write runbooks for your **top 3 failure modes** before you need them. Writing them forces you to decide the response while calm.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Add observability to my FastAPI backend: 1) structured JSON logging for every /ask request covering the AI checklist above (log to app.log), 2) extend /stats with avg latency, error rate, cost per hour, top 5 most-asked question patterns, 3) write RUNBOOK.md with 3 runbooks: cost spike, bad answers reported, API down — each with symptoms, diagnosis steps, fixes, and when to escalate to me, 4) a simple alerts script that reads the log and prints a warning if cost/hour exceeds my configured threshold."\r
\r
You specified **the checklist, the runbooks, and the alert** — operations, not just code.\r
\r
## 3. Evaluate — be the senior\r
\r
- **The replay test:** pick a bad answer from the log. Using only the log, can you reconstruct exactly what happened (which chunks, what tokens)? If yes, your observability works. If no, add what's missing.\r
- Trigger your cost alert with a tiny threshold. Does it fire? An alert you've never seen fire is a hope, not a system.\r
- Hand your RUNBOOK.md to someone (or your AI) and roleplay: "costs are spiking, follow the runbook." Where do they get stuck? Fix the runbook.\r
- Ask the AI: "Quiz me — what are logs, metrics, traces in one line each? What's on the AI logging checklist? Why write runbooks before incidents?"\r
\r
## 4. Business lens 💼\r
\r
**Observability is what lets you *sell* reliability.** "We monitor cost, latency, and answer quality continuously, with runbooks for the top failure modes" — that sentence is worth money in every client conversation. It's also your maintenance product: monthly reports from /stats ("your users asked X, it cost Y, we fixed Z") justify a retainer. Unobserved systems fail silently; observed systems fail *noisily and fixably* — and clients pay for the difference.\r
\r
---\r
\r
## 🧠 Quick check — do you own today?\r
\r
<details>\r
<summary><b>Q1.</b> A client reports "the chatbot gave a wrong answer yesterday." What's your first move?</summary>\r
\r
The logs: find the request, read the trace — which chunks were retrieved, what the model was given. The trace tells you whether retrieval, grounding, or data was at fault. No guessing.\r
</details>\r
\r
<details>\r
<summary><b>Q2.</b> Why JSON logs instead of plain text?</summary>\r
\r
Structure makes logs searchable and aggregatable by machines — you can compute cost/hour, filter by user, replay requests. Prose logs are write-only.\r
</details>\r
\r
<details>\r
<summary><b>Q3.</b> What's a runbook, and why write it before anything breaks?</summary>\r
\r
A written "when X breaks, do Y." Writing it calm forces clear decisions; following it during an incident prevents panic-driven mistakes. It's operations as code.\r
</details>\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can explain logs/metrics/traces and the AI logging checklist\r
- [ ] The replay test passes: a past bad answer is fully reconstructable from logs\r
- [ ] RUNBOOK.md has 3 tested runbooks; the cost alert fires\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[Google SRE Book — Monitoring](https://sre.google/sre-book/monitoring-distributed-systems/) — the definitive chapter on what to monitor and why; skim for principles.\r
\r
---\r
\r
[← Day 24](../24_Day_FastAPI_Databases/) · [Day 26 →](../26_Day_Client_Discovery_FDE/)
<!-- original-workshop:end -->

</details>
`;export{e as default};
