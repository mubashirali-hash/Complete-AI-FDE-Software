const e=`# Day 27 — Portfolio evidence and clear technical communication\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** An evidence-based portfolio case study. You can take several study sessions.\r
\r
**The situation:** A reviewer sees 'I built an amazing AI app' in your portfolio but cannot tell what it does or whether it works.\r
\r
### One idea: Show evidence someone can inspect\r
\r
A case study explains a specific problem, your decisions, and the resulting behaviour. Link claims to evidence: a working demo, a reproducible test, or a report with its dataset and version. Clearly name your contribution, including where AI helped. Honest limits make the project easier to judge. A reader should understand the work without needing your chat history.\r
\r
**New words:**\r
\r
- **Case study:** An explanation of a problem, approach, evidence, and result.\r
- **Evidence:** Something inspectable that supports a claim.\r
- **Contribution:** The work and decisions you personally made.\r
\r
### Follow the example below\r
\r
1. The example opens with the user problem instead of a tool list.\r
2. It connects the implementation to a result and describes how that result was checked.\r
3. It records limits and next steps, so planned features are not mistaken for completed work.\r
\r
### Try one small decision\r
\r
Which portfolio statement gives a reviewer the most useful evidence?\r
\r
1. Production-ready and 100% accurate\r
2. Built using many popular frameworks\r
3. Passed 18 of 20 stated cases; the report includes the two failures\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Prefer a specific claim with something a reader can verify.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
Give the cases, actual result, and limitations rather than an unsupported adjective.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Passed 18 of 20 stated cases; the report includes the two failures** Yes. The scope, denominator, and inspectable failures make the claim assessable.\r
\r
</details>\r
\r
**Then practise:** Rewrite the example using your own project. Replace every claimed number with an actual measured result or an explicit estimate label.\r
\r
**Your project's first action:** Choose one completed project. Write two sentences: who had the problem, and what your implementation now lets them do. Then find one artifact supporting that claim.\r
\r
**How it connects:** Use your expense release or document assistant, its source version, and actual test results. These become evidence for your portfolio rather than a new unrelated build.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
A portfolio should help a reader understand a problem you solved and assess the evidence behind your contribution. Screenshots and technology lists do not establish impact by themselves. Today you will build a case study that connects user needs, decisions, tests, results, and limitations without inventing performance or customer claims.\r
\r
**Your project:** [An evidence-based portfolio case study](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Explain a project's problem and your contribution to a new reader.\r
- Support outcome claims with traceable evidence or clearly labelled estimates.\r
- Package a reproducible demo, repository, and case study.\r
\r
## Understand the concept\r
\r
### Lead with the problem and resulting behavior\r
\r
Describe who had the problem, what the original workflow was, and what changed. Then explain the decisions that matter to understanding the result. A list of frameworks tells the reader what tools were present, but not whether the solution addressed a useful task. A concrete before/after example often communicates more than broad claims such as production-ready or enterprise-grade.\r
\r
### Evidence needs provenance\r
\r
A test report, deployment record, user observation, or evaluation result should identify what was checked and under which conditions. Separate your own contribution from generated, copied, or teammate work. Distinguish measured outcomes from expected benefits and estimates. If the project uses fictional data or mocked providers, say so. Honesty about limitations makes the case study useful to an engineer assessing whether they could extend or operate the project.\r
\r
### A reader needs a path to inspect the work\r
\r
Provide a working demo when available, a repository, setup instructions, and a short explanation of the core workflow. A public project should not include private customer data or secrets. Keep links current and record when you last checked them. A concise architecture diagram can show boundaries and tradeoffs, but it should reflect the actual implementation rather than the system you hope to build later.\r
\r
## A worked example, step by step\r
\r
A case-study structure creates a place for both evidence and limits.\r
\r
\`\`\`markdown\r
# Case study: support document assistant\r
Problem: who needed help and what task was difficult?\r
Scope: what was built and deliberately excluded?\r
My contribution: what decisions and implementation work did I own?\r
Approach: retrieval, source checking, interface, and failure handling\r
Evidence: name the dataset, tests, deployment checks, and observed results\r
Result: distinguish measured changes from estimates\r
Limitations: fictional data, fixture mode, or remaining unverified paths\r
Inspect: verified demo URL and repository\r
Next step: one improvement supported by the evidence\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
A completed case study connects a real project record to inspectable evidence.\r
It contains no invented customer, salary, accuracy, or savings claim.\r
\`\`\`\r
\r
The structure leads with the user's task instead of implementation vocabulary. Scope prevents the reader from assuming unsupported capabilities. My contribution makes ownership visible. Evidence names the check conditions and result, while limitations distinguish a prototype from a verified production service. The next step should follow from a failure or constraint rather than merely adding another fashionable tool.\r
\r
## Practise before building\r
\r
### Exercise 1: Rewrite a vague claim\r
\r
Replace I built a powerful AI app with a specific problem, behavior, and evidence sentence.\r
\r
**Hint:** Name who used it, what it did, and what you actually checked.\r
\r
**Check your result:** The sentence can be assessed rather than merely admired.\r
\r
### Exercise 2: Audit claims\r
\r
Label every metric in your draft as measured, estimated, or unsupported.\r
\r
**Hint:** Include the denominator and dataset for a score.\r
\r
**Check your result:** Unsupported figures are removed or clearly revised.\r
\r
### Exercise 3: Check the inspection path\r
\r
Ask a new reader to open the demo and follow the README.\r
\r
**Hint:** Verify that the linked version matches the described implementation.\r
\r
**Check your result:** The reader can inspect your core claim without private instructions.\r
\r
## Common mistakes and how to debug them\r
\r
- Presenting framework names as evidence of user value.\r
- Inventing percentages or customer impact to make a portfolio look stronger.\r
- Describing planned components as if they are already implemented.\r
\r
## The FDE connection\r
\r
An FDE regularly explains decisions to engineers, customers, and operators. A good case study practises the same skill: make the outcome, evidence, tradeoffs, and next action clear to people who did not participate in the build.\r
\r
## Build your lesson project\r
\r
**An evidence-based portfolio case study**\r
\r
Choose one completed learning project and package it for a reader who has no context. Write a concise case study, verify the repository and demo links, include a representative test report, and explain your own contribution. Use the app's portfolio tracker to keep the artifacts together and export a readable copy.\r
\r
- A problem-first case study with scope and contribution.\r
- Verified project links or a clearly documented local demo.\r
- A representative test/evaluation record and actual result.\r
- A small implementation diagram and explicit limits.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- Which claim is best supported by your evidence?\r
- What should the reader not assume about this project?\r
- What concrete feedback improved your explanation?\r
\r
## References and next steps\r
\r
- [GitHub: repository READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)\r
- [MDN: learning web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)\r
\r
[← Lesson 26](../26_Day_Client_Discovery_FDE/) · [Lesson 28 →](../28_Day_Capstone_Part1/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Concept:** Skill without proof is invisible. A **portfolio** is proof organized for a buyer: live URLs, the problem each project solved, the spec you wrote, the evals you ran, the cost model. And **getting paid** is a separate skill: where to find work, how to propose, how to price. Today you package 26 days of work into something that earns.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### The portfolio that wins work (one page per project)\r
\r
Each of your 3 projects gets a page with:\r
1. **Live URL** — clickable, working, stranger-tested.\r
2. **The problem** — one paragraph, business words not tech words.\r
3. **What I built** — architecture in one diagram + 3 bullets.\r
4. **Proof** — eval scores, the honesty test, uptime. Numbers beat adjectives.\r
5. **Cost model** — "costs $X per 100 uses" — shows you think like an owner.\r
\r
Build it as a simple site (Streamlit, GitHub Pages, or even a great README). **The portfolio itself is project #4** — it shows everything.\r
\r
### Where the work is (realistic, day-27 edition)\r
\r
- **Your network first.** Message 10 people: "I build AI tools for small businesses — here's what I shipped [link]. Know anyone drowning in repetitive questions/paperwork?" Warm intros beat cold applications 10:1.\r
- **Freelance platforms** (Upwork, local equivalents): start with small fixed-fee AI tasks; your portfolio + evals differentiate you from prompt-jockeys.\r
- **Local businesses** (day 26's discovery): walk in with the brief template, not a pitch deck.\r
- **Content**: write up one thing you learned each week (LinkedIn, blog). Teaching in public is a slow-burn client magnet.\r
\r
### The proposal (keep it to one page)\r
\r
Problem (their words) → your solution (3 bullets) → scope IN/OUT → timeline → fixed price → proof (your portfolio links). End with **one clear next step**: "Reply yes and I'll send the brief for signature." Friction kills deals.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Help me draft: 1) my portfolio homepage copy — headline, one-line bio, and 3 project summaries in business language (problem → solution → proof), 2) a one-page proposal template I can reuse, with placeholders for problem, scope IN/OUT, timeline, price, and next step, 3) 3 outreach message drafts (network contact, Upwork bid, local business walk-in) — each under 100 words, each ending with one clear next step. Critique each draft for vagueness before finalizing."\r
\r
## 3. Evaluate — be the senior\r
\r
- Read your portfolio as a skeptical business owner. Would *you* trust this person with $1,500? What's missing? Fix it.\r
- **The 10-second test:** show the portfolio to someone for 10 seconds. What do they remember? If it's not "builds AI tools that work," redesign the headline.\r
- Check every link. Every URL live? Every screenshot current? A dead link in a portfolio is an anti-credential.\r
- Price yourself on paper: your day rate, your first fixed-fee offer, your walk-away number. Write them down — deciding under pressure is how you undercharge.\r
- Ask the AI: "Quiz me — what are the 5 parts of a project page? Where does work come from, in priority order? What ends a proposal?"\r
\r
## 4. Business lens 💼\r
\r
**This whole day IS the business lens.** The uncomfortable truth: the best engineer doesn't win — the best *packaged* engineer wins. Your 26 days of real skill are the product; today is the packaging, the pricing, and the distribution. Do this day properly and day 30 isn't a hope — it's a pipeline.\r
\r
---\r
\r
## 🧠 Quick check — do you own today?\r
\r
<details>\r
<summary><b>Q1.</b> What's the difference between a project and a portfolio piece?</summary>\r
\r
A project is the thing you built; a portfolio piece is the thing *translated for a buyer* — problem in business words, proof in numbers, live URL, cost model. Translation is the work.\r
</details>\r
\r
<details>\r
<summary><b>Q2.</b> Why fixed fee over hourly for your first clients?</summary>\r
\r
Hourly punishes speed and rewards slowness — and as an AI-assisted builder you're fast. Fixed fee aligns you with the client's interest (outcome, not hours) and your speed advantage.\r
</details>\r
\r
<details>\r
<summary><b>Q3.</b> Your portfolio link is dead when a client clicks it. How bad is this?</summary>\r
\r
Catastrophic for trust — it's the one thing that was supposed to prove reliability. Check every link before every outreach. Automate it if you can (a test that pings your URLs).\r
</details>\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] Portfolio exists with 3 project pages (problem → solution → proof → cost model)\r
- [ ] It passes the 10-second test with a real human; all links live\r
- [ ] Proposal template + 3 outreach drafts written and de-vagued\r
- [ ] Your rates written down; committed to GitHub\r
\r
> 🔭 **Coming back to this:** [Phase 4, week 3](../33_Phase4_Get_Paid_Get_Hired/) rebuilds this portfolio as case studies and runs the full job-hunt funnel. Today you packaged your work. There, you'll sell it.\r
\r
## 📎 The one link\r
\r
[Patrick McKenzie — "Selling Software to Businesses"](https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/) — the classic essay on positioning yourself as a problem-solver, not a coder. Read it twice.\r
\r
---\r
\r
[← Day 26](../26_Day_Client_Discovery_FDE/) · [Day 28 →](../28_Day_Capstone_Part1/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
