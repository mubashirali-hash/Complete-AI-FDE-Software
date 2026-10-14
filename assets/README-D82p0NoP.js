const e=`# 📘 Day 25 — Operations: Logging, Tracing & Runbooks\r
\r
![Day 25 visual](../images/days/day-25.svg)\r
\r
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
[← Day 24](../24_Day_FastAPI_Databases/) · [Day 26 →](../26_Day_Client_Discovery_FDE/)\r
`;export{e as default};
