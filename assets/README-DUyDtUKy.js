const e=`# 🏁 Day 29 — Capstone, Part 2: Deploy & Harden\r
\r
![Day 29 visual](../images/days/day-29.svg)\r
\r
**Concept:** "Works on my machine" is day 0. **Deployed, monitored, and stranger-proof** is the product. Today your capstone goes live with everything production needs: hosting, secrets, monitoring, runbooks, and a final red-team pass. Tomorrow you demo it.\r
\r
**Time:** 2–3 hours. **Done when a stranger can break it and it behaves.**\r
\r
---\r
\r
## The deployment checklist\r
\r
### Ship it\r
- [ ] Deployed to a public URL (Render/Railway/Streamlit Cloud — your day-14 playbook)\r
- [ ] Secrets in platform env vars, never in code or logs\r
- [ ] Health endpoint (\`GET /health\` → \`{"status": "ok"}\`) so you know it's alive\r
- [ ] Works in incognito, on mobile, for a stranger\r
\r
### Harden it\r
- [ ] Guardrails live and tested *on the deployed URL* (not just locally)\r
- [ ] Rate limits + daily budget cap configured; alert threshold set\r
- [ ] Structured logging on; you can trace any request end-to-end\r
- [ ] RUNBOOK.md deployed alongside (your future self at 2am says thanks)\r
\r
### Prove it\r
- [ ] Final eval run on the deployed system — score: ___/20\r
- [ ] Red-team pass: 10 fresh attacks (injections, huge inputs, rapid-fire). Log results.\r
- [ ] One real human uses it while you watch silently. Write down every confusion.\r
- [ ] \`/stats\` shows real usage data; cost math verified against actual tokens\r
\r
### Document it\r
- [ ] Project README: what it is, who it's for, live URL, architecture diagram, eval score, cost model, known limits, runbook link\r
- [ ] Add it to your portfolio (day 27) as the flagship piece\r
\r
---\r
\r
## The pre-demo audit (tonight, honestly)\r
\r
Answer in writing:\r
\r
1. What's the eval score, and what are the known failures?\r
2. What's the cost per 100 uses, measured (not estimated)?\r
3. What happens when it gets attacked? (Show the logs.)\r
4. What's explicitly OUT of scope?\r
5. If the demo gods strike tomorrow (API down, no internet), what's your backup? (Recorded video. Always have a recorded video.)\r
\r
**A demo with honest limits beats a demo with hidden ones.** Every time.\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] Live URL, stranger-tested, mobile-checked\r
- [ ] Guardrails + budget cap verified on the deployed system\r
- [ ] Final eval score logged; red-team results logged\r
- [ ] Portfolio updated; recorded backup video exists\r
- [ ] Committed to GitHub\r
\r
---\r
\r
[← Day 28](../28_Day_Capstone_Part1/) · [Day 30 →](../30_Day_Ship_It/)\r
`;export{e as default};
