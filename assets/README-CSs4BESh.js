const e=`# Day 20 — Agents, bounded workflows, and observable tool use\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** A bounded policy-research assistant. You can take several study sessions.\r
\r
**The situation:** A research assistant keeps searching because it never decides it has enough information.\r
\r
### One idea: Give a tool-using workflow a stopping rule\r
\r
A workflow follows planned steps. In an agent-style loop, a model may choose the next action based on the current information. That flexibility needs boundaries: permitted tools, a step limit, a budget, and explicit stopping conditions. For a predictable task, a fixed workflow may be easier to test. More autonomy is useful only when it helps the actual task.\r
\r
**New words:**\r
\r
- **Workflow:** An arranged sequence of actions for a task.\r
- **Agent loop:** Repeatedly choosing an action, observing its result, and deciding what to do next.\r
- **Step limit:** The maximum number of actions allowed before stopping.\r
\r
### Follow the example below\r
\r
1. The example walks through a fixed sequence of actions with a maximum number of steps.\r
2. Each step is checked before continuing. Reaching a boundary stops further actions.\r
3. This deterministic demonstration shows control flow. It is not proof of a live model's planning ability.\r
\r
### Try one small decision\r
\r
A tool keeps returning no useful evidence. What should a bounded assistant do?\r
\r
1. Stop at its limit and report what remains unresolved\r
2. Search forever until it finds any answer\r
3. Ignore permission rules for the next attempt\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Think about what happens when the happy path never arrives.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
Define a useful failure result before starting the loop.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Stop at its limit and report what remains unresolved** Yes. A controlled stop preserves the evidence and avoids endless resource use.\r
\r
</details>\r
\r
**Then practise:** Reduce the example's step limit. Run the same action plan again and inspect where it stops and what result it reports.\r
\r
**Your project's first action:** Draw a research loop with an allowed search tool, a maximum of three steps, and outcomes for enough evidence, no evidence, and tool failure.\r
\r
**How it connects:** Combine the tool boundary from Day 17 with the evidence rule from Day 19. Start with fixed steps before experimenting with model-selected actions.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
A tool-using agent observes a situation, selects an action, receives a result, and may continue toward a goal. That loop is useful only when its authority, resource limits, and stop conditions are explicit. Today you will compare a fixed workflow with an agent loop and build a bounded research assistant over a small approved knowledge collection.\r
\r
**Your project:** [A bounded policy-research assistant](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Distinguish a fixed workflow from model-directed action selection.\r
- Enforce step, time, and budget limits in application code.\r
- Record observable actions and results without depending on hidden model reasoning.\r
\r
## Understand the concept\r
\r
### Use the least complex useful workflow\r
\r
A fixed workflow follows a predefined sequence. An agent chooses some actions dynamically based on observations and a goal. If the task has a predictable structure, a fixed pipeline may be easier to test, operate, and explain. Dynamic choice adds failure possibilities such as repeated searches, invalid tools, and premature conclusions. Decide whether that flexibility improves the actual customer outcome enough to justify its cost.\r
\r
### Constraints must exist outside the prompt\r
\r
Limit steps, wall-clock time, allowed tools, and resource spending in application logic. The model should not be able to extend its own budget or approve a forbidden action. Provide clear outcomes for completed work, insufficient evidence, tool failure, and exhausted budget. Repeated failed attempts should not amplify an incident indefinitely. If a tool has side effects, authorization and idempotency are additional requirements beyond a loop counter.\r
\r
### Observable traces support investigation\r
\r
Record the proposed tool, validated arguments, accepted or rejected action, tool result category, elapsed time, and final outcome. These application-visible events are useful evidence. Do not depend on access to a model's hidden chain of thought or publish sensitive prompts and documents indiscriminately. A safe trace should let an operator reconstruct what the system did and why the application accepted it, even when the model's internal processing is unavailable.\r
\r
## A worked example, step by step\r
\r
An application-enforced step budget stops an unfinished scripted workflow.\r
\r
\`\`\`python\r
actions = ["search policy", "read evidence", "search again", "search again"]\r
max_steps = 3\r
completed = False\r
for step, action in enumerate(actions, start=1):\r
    if step > max_steps:\r
        print("Stopped: step budget exhausted")\r
        break\r
    print(f"Step {step}: {action}")\r
    if action == "finish":\r
        completed = True\r
        break\r
print("Completed:", completed)\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
Step 1: search policy\r
Step 2: read evidence\r
Step 3: search again\r
Stopped: step budget exhausted\r
Completed: False\r
\`\`\`\r
\r
enumerate supplies an explicit step number. The budget check happens before executing the next action. A completion flag distinguishes a stopped loop from a successful task. The fixture deliberately never finishes, exposing the budget outcome. In a real agent, a model adapter could propose actions, but the same application checks must remain authoritative. Add timeouts and tool validation rather than assuming a step count covers every failure.\r
\r
## Practise before building\r
\r
### Exercise 1: Compare workflow and agent\r
\r
Describe a task that only needs a fixed lookup and one that might benefit from dynamic research.\r
\r
**Hint:** Identify what decisions must vary between inputs.\r
\r
**Check your result:** The extra flexibility has a specific user benefit.\r
\r
### Exercise 2: Test each stop outcome\r
\r
Add finish, invalid-action, and failed-tool fixtures.\r
\r
**Hint:** Do not label every stopped loop completed.\r
\r
**Check your result:** Success, failure, and budget exhaustion remain distinguishable.\r
\r
### Exercise 3: Design a safe trace\r
\r
List the event fields needed to investigate tool execution without copying private document text.\r
\r
**Hint:** Use IDs, categories, timings, and validated action names.\r
\r
**Check your result:** The trace explains actions without depending on hidden reasoning.\r
\r
## Common mistakes and how to debug them\r
\r
- Adding an agent when a simpler fixed workflow solves the task.\r
- Asking the model to stop without enforcing a resource boundary in code.\r
- Treating hidden chain-of-thought access as a required operational log.\r
\r
## The FDE connection\r
\r
Customers need predictable authority and operations more than a dramatic agent demonstration. An FDE chooses the simplest effective flow, constrains its actions, and makes failures understandable to the people who will operate it.\r
\r
## Build your lesson project\r
\r
**A bounded policy-research assistant**\r
\r
A team needs a short evidence-based summary from approved fictional policy documents. Build a workflow with search, read, and finish actions, then optionally replace scripted action selection with a model adapter. Enforce resource limits, permitted tools, and no-answer behavior in code. The first version is read-only and cannot send messages or modify business records.\r
\r
- An allowed-tool contract and fixed or model-selected action interface.\r
- Application-enforced step, timeout, and budget policies.\r
- An inspectable trace of actions and result categories.\r
- Fixtures for success, tool failure, invalid action, and budget exhaustion.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- Which decisions benefit from an agent instead of a fixed flow?\r
- Who controls limits and permissions?\r
- What observable events explain a failed run?\r
\r
## References and next steps\r
\r
- [Anthropic: building effective agents](https://www.anthropic.com/engineering/building-effective-agents)\r
\r
[← Lesson 19](../19_Day_RAG/) · [Lesson 21 →](../21_Day_Project3_RAG_Chatbot/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Concept:** An **agent** = an LLM in a **loop**: *perceive* (read the goal + current state) → *think* (decide the next step) → *act* (call a tool) → *observe* the result → repeat until the goal is done or a limit hits. Tools (day 17) were single calls; agents are the model **choosing its own sequence of calls** to reach a goal. Powerful, and the hardest thing here to keep safe.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### The loop, drawn\r
\r
\`\`\`\r
Goal: "Book me the cheapest flight option summary for Friday"\r
\r
Loop (max 8 steps):\r
  1. THINK: "I need flight options → I have search_flights tool"\r
  2. ACT:   search_flights(day="Friday")\r
  3. OBSERVE: got 6 options\r
  4. THINK: "Cheapest is option 3 → summarize"\r
  5. ACT:   (no tool needed) write summary\r
  6. DONE\r
\`\`\`\r
\r
The model's "thinking" is just more token prediction — but framed as planning, it produces step-by-step behavior. The **system prompt carries the rules**: what tools exist, when to stop, what never to do.\r
\r
### The three things that make agents work\r
\r
1. **A sharp goal + stop conditions.** "Research X and summarize" works. "Do something useful" doesn't. Always: max steps, and a clear definition of done.\r
2. **Honest tools with clear descriptions** (day 17). The agent is only as capable as its tools are legible.\r
3. **Scratchpad memory.** The agent keeps its running notes ("tried X, got Y, next: Z") in the conversation — this is how multi-step plans survive.\r
\r
### The three things that make agents dangerous\r
\r
1. **No natural stop.** Without step limits, an agent can loop, burn tokens, or hammer APIs. **Always cap steps and cost.**\r
2. **Tool power = damage it can cause.** An agent with "send_email" and "delete_file" tools can do real damage from a misread instruction. Give the *minimum* tools for the goal.\r
3. **Confident wrongness compounds.** One bad tool call → the agent plans around the bad result → confidently wrong final answer. Human checkpoints on consequential actions.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Build research_agent.py: 1) a loop with max 6 steps: each step the model gets the goal, its scratchpad so far, and two tools — search_web(query) (use a simple DuckDuckGo/HTTP approach or a stub you write returning canned results for the demo) and save_note(text) (appends to notes.md), 2) system prompt: 'You are a research assistant. Work step by step. After each tool result, update your plan. Stop when you can answer the goal or hit 6 steps. Never invent tool results., 3) run it on: 'What are 3 free ways to deploy a Python web app in 2026?', 4) print every think/act/observe step."\r
\r
You specified **the loop, the cap, the honesty rule, and full traceability**. That's agent engineering.\r
\r
## 3. Evaluate — be the senior\r
\r
- Read the full trace. Did each step follow from the previous observation, or did it jump? A good agent's trace reads like a plan; a bad one's reads like guessing.\r
- **Break the stop condition:** temporarily set max steps to 2. Does it stop gracefully and report partial results, or crash? Limits must be *handled*, not just set.\r
- **Test the honesty rule:** give it a goal your stubbed search can't answer. Does it admit the gap, or invent results? (Day 19's "I don't know" — now for agents.)\r
- Count tokens used for the whole run. Multiply by your day-15 pricing. **An agent run costs 5–20× a single call** — write the number down. (This is day 23's preview: agents are expensive; the business must justify it.)\r
- Ask the AI: "Quiz me — draw the agent loop from memory. What are the 3 things that make agents work and the 3 that make them dangerous?"\r
\r
## 4. Business lens 💼\r
\r
Agents are the most **oversold** and most **misunderstood** AI capability. Clients will ask for "an AI agent that does everything." Your job (day 26) is to scope: *which* goal, *which* tools, *what* stop conditions, *whose* approval for consequential actions, *what* it costs per run. An agent with a tight goal, 3 tools, and a human checkpoint is a product. An agent with vague goals and a credit card is a liability. Knowing the difference is what makes you the engineer in the room.\r
\r
---\r
\r
## 🧠 Quick check — do you own today?\r
\r
<details>\r
<summary><b>Q1.</b> What's the difference between tool calling (day 17) and an agent?</summary>\r
\r
Tool calling: the model makes one delegated call you orchestrate. An agent: the model runs a perceive–think–act–observe loop, choosing its own sequence of tool calls until the goal is done or a limit hits.\r
</details>\r
\r
<details>\r
<summary><b>Q2.</b> Name two non-negotiable safety rules for any agent you build.</summary>\r
\r
Cap steps (and cost) with graceful stopping; give minimum-necessary tools; require human approval for consequential actions. Any two of these.\r
</details>\r
\r
<details>\r
<summary><b>Q3.</b> Your agent's trace shows it invented a tool result instead of calling the tool. What's the root cause and fix?</summary>\r
\r
The system prompt didn't enforce honesty, or the model wasn't given a way to say "I can't." Fix: explicit "never invent tool results" rule + a defined fallback (report the gap and stop).\r
</details>\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can draw the agent loop from memory and explain each part\r
- [ ] Your agent stops gracefully at the step cap with partial results\r
- [ ] You've priced a full agent run and written the number down\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[Anthropic — Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents) — the field's best practical guide; short and opinionated.\r
\r
---\r
\r
[← Day 19](../19_Day_RAG/) · [Day 21 →](../21_Day_Project3_RAG_Chatbot/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
