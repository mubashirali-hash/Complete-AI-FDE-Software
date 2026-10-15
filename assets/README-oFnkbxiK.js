const e=`# Day 26 — Customer discovery and measurable project briefs\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** A discovery interview and customer brief. You can take several study sessions.\r
\r
**The situation:** A shop owner says, 'We need AI.' You still do not know which task is causing trouble.\r
\r
### One idea: Understand the customer's work first\r
\r
Discovery means learning how people do their work, where it becomes difficult, and what a useful improvement would look like. Ask about a recent concrete example before suggesting a solution. Find the user, the current steps, the exceptions, and the constraints. A customer may need a better search box or a simpler form; AI is one possible approach after the problem is understood.\r
\r
**New words:**\r
\r
- **Discovery:** Investigating the real user problem and working context.\r
- **Constraint:** A limit the solution must respect, such as data access or time.\r
- **Success measure:** An observable result used to judge whether a change helped.\r
\r
### Follow the example below\r
\r
1. The example brief names a user and describes the current workflow.\r
2. It records a concrete problem and the constraints affecting a solution.\r
3. Its success criteria need observed evidence later. An interview estimate is not a measured improvement.\r
\r
### Try one small decision\r
\r
A customer says, 'Build us an AI chatbot.' What is the most useful first question?\r
\r
1. Can you walk me through the last time this problem happened?\r
2. Which animation should the chatbot use?\r
3. Can we skip discovery and deploy today?\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Ask for a real event rather than a preferred technology.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
Explore what happened, who was involved, and what made it difficult.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Can you walk me through the last time this problem happened?** Yes. A recent example reveals the actual workflow before you choose a solution.\r
\r
</details>\r
\r
**Then practise:** Use the example brief as a template. Write a user, a recent problem, current steps, one constraint, and one observable success measure.\r
\r
**Your project's first action:** Roleplay a short interview with a fictional shop owner. Ask for the last failed task, then write their current steps before proposing features.\r
\r
**How it connects:** Use what you learned while building the assistant to ask better questions. Today's brief becomes the starting point for your capstone; it may justify changing the solution.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
A customer's request for AI is often a starting hypothesis, not a complete problem statement. Discovery turns a workflow, its constraints, and its cost into a reviewable project brief. Today you will practise asking concrete questions, distinguishing estimates from measurements, and choosing a useful pilot before promising an implementation.\r
\r
**Your project:** [A discovery interview and customer brief](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Investigate a real or fictional workflow using specific recent examples.\r
- Identify users, data ownership, constraints, and operational responsibility.\r
- Write a scoped brief with a baseline, target, evaluation method, and explicit assumptions.\r
\r
## Understand the concept\r
\r
### Ask about behavior before pitching\r
\r
Ask the customer to walk through the last time the problem occurred. Who performed each step, which system did they use, and where did they wait or repeat work? Concrete examples reveal constraints better than asking whether they like an imagined feature. Do not treat politeness or interest as proof that the workflow matters enough to change. Inspect what the team has already tried and why it did not solve the problem.\r
\r
### Quantify with honest assumptions\r
\r
A statement such as eight people spend twenty minutes a day can guide an initial estimate, but it is not automatically a measured baseline. Record the source and uncertainty of the number. Plan how to measure a sample of actual tasks and distinguish total elapsed time from active handling time. The target should also include quality and access guardrails, because a faster wrong answer may make the workflow worse.\r
\r
### A brief creates a shared decision\r
\r
Name the problem, users, in-scope tasks, excluded tasks, data access, acceptance criteria, timeline assumptions, operating owner, and risks. Compare a simple lookup or workflow fix with an AI-based option instead of assuming AI is required. The customer should understand the outcome and tradeoffs without knowing every framework. If a constraint changes, revisit the brief visibly rather than silently absorbing an unlimited new scope.\r
\r
## A worked example, step by step\r
\r
The retailer numbers below are fictional interview estimates that require validation.\r
\r
\`\`\`markdown\r
# Discovery notes: stock lookup pilot\r
Observed workflow: staff consult three spreadsheets for a stock question\r
Interview estimate: 8 staff x 20 minutes/day = 160 staff-minutes/day\r
Not yet measured: actual handling time, error rate, and query frequency\r
Constraint: one shop; read-only access; purchase prices restricted\r
Candidate pilot: timestamped stock lookup from an agreed source\r
Out of scope: automated purchasing, external messaging, multi-shop rollout\r
Next step: measure representative lookups and agree on acceptance criteria\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
A useful discovery note separates an observed workflow, an interview estimate, constraints, and the next evidence-gathering step.\r
It does not claim measured savings from a fictional scenario.\r
\`\`\`\r
\r
The current workflow is described before selecting technology. The arithmetic quantifies an interview estimate and labels its status. The constraints identify allowed data and actions. The pilot is narrow enough to evaluate, and the excluded list avoids a hidden expansion into purchasing. The next step specifies what evidence is still missing instead of treating the estimate as proof of ROI.\r
\r
## Practise before building\r
\r
### Exercise 1: Ask concrete questions\r
\r
Write five questions about a recent workflow, time spent, existing attempts, affected users, and desired change.\r
\r
**Hint:** Ask for an example instead of asking whether the customer wants AI.\r
\r
**Check your result:** Each question can reveal a decision or constraint.\r
\r
### Exercise 2: Separate estimates from observations\r
\r
Label every number in a fictional interview as measured, estimated, or unknown.\r
\r
**Hint:** Record who supplied the estimate and how it could be verified.\r
\r
**Check your result:** Your brief cannot accidentally report assumed savings as proven impact.\r
\r
### Exercise 3: Compare alternatives\r
\r
Propose one simple non-model option and one AI-assisted option for the same workflow.\r
\r
**Hint:** Compare user benefit, data requirements, operating cost, and failure modes.\r
\r
**Check your result:** The chosen pilot is justified by the problem rather than the technology name.\r
\r
## Common mistakes and how to debug them\r
\r
- Pitching a model before understanding the actual workflow.\r
- Turning an interview estimate into a claimed measured baseline.\r
- Omitting data access, operating ownership, or excluded actions from the scope.\r
\r
## The FDE connection\r
\r
This is central FDE work: learn the context, make tradeoffs legible, agree on a measurable pilot, and leave the customer with a reviewable decision. Technical depth helps, but the first useful deliverable may be a better problem statement.\r
\r
## Build your lesson project\r
\r
**A discovery interview and customer brief**\r
\r
Use the retailer scenario in the app or another clearly fictional business workflow. Conduct a structured roleplay, record evidence and assumptions, compare implementation alternatives, and produce a one-page brief. A real interview is optional and requires authorization from the people involved; the learning project can be completed entirely with fictional data.\r
\r
- A discovery-question plan and notes from two roleplays or authorized interviews.\r
- A one-page problem, scope, constraints, and success brief.\r
- A baseline-measurement and evaluation plan.\r
- An alternatives comparison and a risk/owner list.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- What did discovery change about your initial idea?\r
- Which important number is still an assumption?\r
- Why is the selected pilot preferable to the alternative for this scope?\r
\r
## References and next steps\r
\r
- [Palantir: forward deployed engineering approach](https://www.palantir.com/docs/foundry/architecture-center/)\r
- [Atlassian: the forward deployed engineer](https://www.atlassian.com/blog/how-we-build/meet-the-forward-deployed-engineer)\r
\r
[← Lesson 25](../25_Day_Observability_Debugging/) · [Lesson 27 →](../27_Day_Portfolio_Getting_Hired/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Concept:** The FDE's superpower isn't code — it's **discovery**: walking into a business, finding the problem worth solving, and turning human complaints into a **scoped, priced, buildable spec**. Most "AI projects" fail here, before a line is written: wrong problem, vague scope, no buyer. Today you learn the conversation that prevents all three.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### The discovery conversation (45 minutes, 5 questions)\r
\r
You're not selling. You're diagnosing. Ask:\r
\r
1. **"Walk me through your week. Where does time go?"** — Find the pain in *their* words. Listen for repetition: "every Monday I…", "we always have to…"\r
2. **"What does that cost you?"** — Time × people × frequency. "3 hours every day" = the budget for your solution. No cost = no project.\r
3. **"What have you tried?"** — Respects their effort; reveals constraints ("we tried software X, too complicated").\r
4. **"Who else feels this pain?"** — One person annoyed = favor. A team slowed = budget.\r
5. **"If this were fixed, what would change?"** — The success metric, in their words. This becomes your eval (day 22).\r
\r
**Never pitch in the discovery meeting.** Diagnose, quantify, leave. The proposal comes later — and it's 10× stronger for it.\r
\r
### The business brief (one page, your deliverable)\r
\r
\`\`\`markdown\r
# Business Brief: [Client] — [Problem]\r
Problem: [one paragraph, their words]\r
Cost of problem: [hours/week × people = $/month]\r
Proposed solution: [2-3 sentences, no jargon]\r
Scope: [what's IN — 3 bullets] / [what's OUT — 3 bullets]\r
Success metric: [measurable, their words from Q5]\r
Timeline: [e.g., 2 weeks]   Price: [fixed fee]\r
Risks: [what could go wrong, honestly]\r
\`\`\`\r
\r
The **OUT list** is the most important part — it's where scope creep goes to die.\r
\r
### Pricing (the honest starter model)\r
\r
- **Fixed fee for the build** (not hourly — hourly punishes your speed).\r
- Price = (your days × your day rate) + token/infra buffer + 30% margin.\r
- Your day rate on day 26: whatever the local market pays a junior developer, and raise it every project. The brief's "cost of problem" is your negotiation anchor: if the problem costs them $2,000/month, a $1,500 fix is obviously worth it.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Roleplay as a difficult small-business owner (a pharmacy owner drowning in inventory questions from staff). I will conduct a 15-minute discovery conversation. Rules: be vague at first, mention 3 different pains, only reveal the real cost when I ask directly, and at the end score my discovery: did I find the quantified pain? Did I avoid pitching? Give me 3 specific improvements."\r
\r
Practicing on a simulated difficult client beats theorizing. Do it twice.\r
\r
## 3. Evaluate — be the senior\r
\r
- After the roleplay: did you leave with a **quantified** problem (hours × people × frequency)? If not, you chatted — you didn't discover.\r
- Write the full one-page business brief for the pharmacy scenario. Is the OUT list specific? Is the success metric measurable? Would *you* sign it?\r
- **The red-team test:** list 3 ways this project could go wrong (client won't give data access, problem was misdiagnosed, scope creep). Each needs a mitigation in the brief's Risks section.\r
- Ask the AI: "Quiz me — what are the 5 discovery questions and what does each reveal? Why never pitch in discovery? What's the most important part of the brief?"\r
\r
## 4. Business lens 💼\r
\r
**This is the whole game.** Code is abundant now; *correctly-scoped problems with willing buyers* are scarce. The FDE who can walk into any business and leave with a signed one-page brief will never lack for work — because they sell certainty, not code. Everything before today was building your capability; today is building your *livelihood*. Days 27–30 are packaging and proving it.\r
\r
---\r
\r
## 🧠 Quick check — do you own today?\r
\r
<details>\r
<summary><b>Q1.</b> The owner says "I need AI." What's your first response?</summary>\r
\r
Not a solution — a question: "Walk me through your week." You don't sell AI; you diagnose problems. "I need AI" is a request for magic; your job is to find the real pain underneath.\r
</details>\r
\r
<details>\r
<summary><b>Q2.</b> Why is the OUT list the most important part of the brief?</summary>\r
\r
Because scope creep kills fixed-fee projects. The OUT list is the written agreement of what you're NOT building — it's what you point to when "just one more thing" appears.\r
</details>\r
\r
<details>\r
<summary><b>Q3.</b> The problem costs the client $200/month. You want to charge $2,000. What do you do?</summary>\r
\r
You don't take it — or you re-scope to something worth 10× less effort. Price must relate to problem cost; a $2,000 fix for a $200 problem is a story that ends with an unhappy client.\r
</details>\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can run the 5-question discovery from memory\r
- [ ] Two roleplays done; scores improved the second time\r
- [ ] A complete one-page brief exists with specific OUT list and measurable success metric\r
- [ ] Committed to GitHub\r
\r
> 🔭 **Coming back to this:** [Phase 4, week 2](../33_Phase4_Get_Paid_Get_Hired/) turns discovery into money — scoping, contracts, pricing, and a real paid engagement. Today you learned the questions. There, you'll get paid for the answers.\r
\r
## 📎 The one link\r
\r
[The Mom Test — summary](https://www.momtest.com/) — the short book on asking questions that get honest answers instead of compliments. Read the summary; apply it forever.\r
\r
---\r
\r
[← Day 25](../25_Day_Observability_Debugging/) · [Day 27 →](../27_Day_Portfolio_Getting_Hired/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
