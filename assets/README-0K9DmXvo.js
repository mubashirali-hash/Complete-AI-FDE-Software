const e=`# Day 29 — Release hardening, recovery, and operational ownership\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** A hardened capstone release package. You can take several study sessions.\r
\r
**The situation:** Your capstone demo works. Now you need to know what happens when access is denied, a service fails, or a release breaks.\r
\r
### One idea: Prepare for failure as well as success\r
\r
A release needs more than its happy path. Check permissions, configuration, resource limits, and the failures a user is likely to meet. Keep a known-good version and a documented way to return to it. A rollback plan is stronger when you have rehearsed it. Record any remaining limits clearly so the next person can operate the version you actually delivered.\r
\r
**New words:**\r
\r
- **Rollback:** Returning to a known earlier version after a problematic release.\r
- **Health check:** A check that reports a stated aspect of the running service's condition.\r
- **Release record:** The version, configuration, checks, and known limits for a delivery.\r
\r
### Follow the example below\r
\r
1. The readiness example lists the version and the checks needed for a release.\r
2. It includes failure handling and a rollback path rather than just a successful demo.\r
3. The document is a template. Fill it with actual observations from your capstone and mark unfinished checks clearly.\r
\r
### Try one small decision\r
\r
A new release breaks the main workflow. What preparation most directly helps recovery?\r
\r
1. A known-good version and a rehearsed rollback procedure\r
2. A longer launch announcement\r
3. Deleting the old release immediately\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Think about restoring working behaviour under pressure.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
Keep the previous version identifiable and practise the return procedure.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**A known-good version and a rehearsed rollback procedure** Yes. They give you a concrete recovery action instead of improvising during the failure.\r
\r
</details>\r
\r
**Then practise:** Fill the release-readiness template using your capstone. Rehearse one failure and its recovery; keep the actual results beside the planned checks.\r
\r
**Your project's first action:** Name a known-good capstone version. Write how you would restore it, then test the procedure in your practice environment and record the result.\r
\r
**How it connects:** Apply Day 14 release checks, Day 23 permissions, and Day 25 incident investigation to the complete Day 28 capstone.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
A capstone release needs more than a working happy path. Today you will verify the hosted environment, secret handling, access boundaries, bounded failures, and a practical recovery procedure. Your project is a release-readiness package that identifies what was checked and makes the system operable by someone other than you.\r
\r
**Your project:** [A hardened capstone release package](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Connect deployment configuration to the actual released version.\r
- Verify critical permissions, failures, and resource policies after deployment.\r
- Document and rehearse recovery with compatible data and a known good version.\r
\r
## Understand the concept\r
\r
### Release checks target the environment\r
\r
Inspect configuration, required services, asset paths, database access, and provider connectivity in the hosted environment. A successful local test does not establish that server secrets or production permissions are configured correctly. Record the actual source/artifact identity and the observed checks. Avoid reporting a service as healthy merely because its process exists or its home page loads; choose a small representative operational check that matches the system's core responsibilities.\r
\r
### Recovery includes state compatibility\r
\r
Redeploying a previous code version can help after a bad release, but database schema and stored data may have changed. Document whether the previous version can read the new data and what backup or migration action is required. Test recovery in an isolated environment before depending on it. Keep the operator's instructions explicit about what should be observed after each step and what must not be overwritten silently.\r
\r
### Operational responsibility must be named\r
\r
A customer needs to know who owns configuration, data access, alerts, provider spend, backup, and support escalation. Define useful service limits and a response when they are reached. A rate-limit control with no observed behavior or no owner is not a complete operating story. Record known limitations and unresolved checks so the release decision is based on evidence rather than pressure to finish a calendar milestone.\r
\r
## A worked example, step by step\r
\r
An unperformed check starts pending rather than being counted as passed.\r
\r
\`\`\`markdown\r
# Capstone release readiness\r
Release identity: actual commit and artifact version\r
Environment: actual host and documented configuration names\r
Access checks: pending until executed with allowed and forbidden identities\r
Failure checks: timeout, unavailable provider, and exhausted budget\r
Data checks: durable feedback, backup location, schema compatibility\r
Recovery target: a named previously verified version\r
Recovery rehearsal: date, procedure, observed outcome\r
Operator: owner of alerts, configuration, and support escalation\r
Known limits: unresolved checks and excluded capabilities\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
A completed release record names the version, environment, observed check results, recovery outcome, and operational owners.\r
Pending checks remain visible until evidence exists.\r
\`\`\`\r
\r
Release identity links operations back to reviewed source. Environment names where checks were performed. Permission and failure checks must be executed, not inferred from a prompt or a configuration file. Data compatibility connects code recovery to stored state. Naming an operator makes the alert and support process actionable. The final limits section prevents a handoff from implying capabilities or guarantees that were never verified.\r
\r
## Practise before building\r
\r
### Exercise 1: Choose a real health check\r
\r
Define a low-impact check that verifies a representative capability and a failure signal.\r
\r
**Hint:** A home-page response may not test retrieval or database access.\r
\r
**Check your result:** The check's scope is explicitly stated.\r
\r
### Exercise 2: Rehearse recovery\r
\r
In an isolated copy, return to a known good release and verify its compatibility with sample data.\r
\r
**Hint:** Preserve original data and understand schema assumptions before changing versions.\r
\r
**Check your result:** The recovery result is observed and recorded.\r
\r
### Exercise 3: Assign responsibility\r
\r
Name who handles an alert, a broken provider credential, and a failed backup check.\r
\r
**Hint:** Use role names for a fictional customer scenario.\r
\r
**Check your result:** No operational issue is left with an unexplained someone will fix it.\r
\r
## Common mistakes and how to debug them\r
\r
- Equating a loaded home page with a complete hosted workflow check.\r
- Ignoring schema/data compatibility during rollback planning.\r
- Leaving alert, backup, and configuration ownership undefined.\r
\r
## The FDE connection\r
\r
An FDE's responsibility continues through the release decision and handoff. Operational evidence and clear ownership let the customer use the system safely and investigate problems after the builder is no longer in the room.\r
\r
## Build your lesson project\r
\r
**A hardened capstone release package**\r
\r
Take the capstone through a documented release-readiness process. Verify its actual environment, permissions, bounded failures, stored feedback, and operating limits. Rehearse recovery in an isolated setup using fictional data. Produce a release decision with evidence and unresolved checks instead of claiming universal production readiness.\r
\r
- A versioned hosted or reproducible release record.\r
- Permission, failure, resource, and data check evidence.\r
- A recovery runbook and isolated rehearsal result.\r
- An operational-owner map and explicit release limitations.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- Which check establishes the actual hosted behavior?\r
- What could make a previous code version incompatible with current data?\r
- Who acts when the first alert or customer failure occurs?\r
\r
## References and next steps\r
\r
- [GitHub Actions documentation](https://docs.github.com/en/actions)\r
- [OpenTelemetry: observability concepts](https://opentelemetry.io/docs/concepts/observability-primer/)\r
\r
[← Lesson 28](../28_Day_Capstone_Part1/) · [Lesson 30 →](../30_Day_Ship_It/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
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
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
