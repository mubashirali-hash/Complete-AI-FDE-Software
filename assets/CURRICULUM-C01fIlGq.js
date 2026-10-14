const e=`# 📖 Full Curriculum — 30 Days: Concepts, Engineering, Business\r
\r
**Expanded teaching and projects:** each lesson now has a deeper guide and its own project with milestones, acceptance checks, test cases, and a starter kit. See [the complete project index](PROJECTS.md). The index is the active project path; earlier workshop build suggestions below remain useful alternatives.\r
\r
**Premise:** AI writes the code. Your job is the three things AI can't do for you: **understand concepts 100%, engineer systems with judgment, and turn software into business value.**\r
\r
**The promise:** a normal person with zero knowledge — 30 days later — walks into a business, fixes a real problem with AI software, and gets paid for it. Learning is lifelong; earning starts on day 30.\r
\r
**Time per day:** 60–90 minutes. **Rule:** a day isn't done until you can explain the concept in plain words *and* something runs.\r
\r
**The daily loop:** Learn the concept → Specify it to AI → Evaluate what AI built → Business lens → Commit.\r
\r
---\r
\r
## WEEK 1 — How software actually works\r
\r
*Theme: the concepts underneath every program ever written. Get these to 100% and everything later is just composition.*\r
\r
### Day 1: Your toolchain + what a program IS\r
- **Concept:** A program is instructions + data. The toolchain (editor, interpreter, terminal, AI assistant) is just how instructions reach the machine.\r
- **Specify → AI builds:** You describe a greeting program; AI drafts it; you read every line.\r
- **Evaluate:** Ask the AI to quiz you line by line. Explain what \`input\`, variables, and \`print\` do — out loud.\r
- **💼 Business lens:** Every tool you installed is free. Your total startup cost: zero. That's why software businesses scale.\r
- **The one link:** [Python official tutorial](https://docs.python.org/3/tutorial/)\r
- **Done when:** It runs, you can explain each line, it's committed.\r
\r
### Day 2: Data — types, variables, representation\r
- **Concept:** Everything is data with a *type*, and types decide what operations mean. \`"2" + "2"\` vs \`2 + 2\` is the whole lesson.\r
- **Specify → AI builds:** A unit converter. You specify the conversions and edge cases; AI drafts.\r
- **Evaluate:** Feed it garbage input. Does it crash? Make it not crash — and understand *why* your fix works.\r
- **💼 Business lens:** Wrong types cause real money bugs (currencies, quantities). Data modeling is a billable skill.\r
- **The one link:** [Asabeneh — 30 Days of Python, Day 2](https://github.com/Asabeneh/30-Days-Of-Python)\r
- **Done when:** You can explain every variable's type and why it matters.\r
\r
### Day 3: Decisions & repetition — the logic of all software\r
- **Concept:** \`if\` = decisions, loops = repetition. Every app on earth is these two ideas composed.\r
- **Specify → AI builds:** A guessing game. *You* write the rules as a spec first ("the program picks 1–100, says higher/lower, counts tries") — then AI builds to your spec.\r
- **Evaluate:** Play it. Find a rule the AI got wrong. Fix the spec, not just the code.\r
- **💼 Business lens:** Writing a clear spec before building is literally what clients pay engineers for.\r
- **The one link:** [Asabeneh — 30 Days of Python, Days 9–10](https://github.com/Asabeneh/30-Days-Of-Python)\r
- **Done when:** You can explain every branch, and your spec produced the game you imagined.\r
\r
### Day 4: Abstraction — the most important idea in software\r
- **Concept:** A function hides *how* and exposes *what*. Abstraction is how humans manage complexity — the single most valuable concept in the repo.\r
- **Specify → AI builds:** Have AI refactor your week-1 code into functions. Then *you* judge: which abstractions are good, which hide too much?\r
- **Evaluate:** For each function, answer: what does it hide, what does it expose, what would break if I changed it?\r
- **💼 Business lens:** Good abstractions = cheaper changes = cheaper maintenance. Clients pay for software that can evolve.\r
- **The one link:** [Corey Schafer — Python functions (YouTube)](https://www.youtube.com/@coreyms)\r
- **Done when:** You can explain abstraction with a non-code example (a car dashboard, a restaurant menu).\r
\r
### Day 5: Collections & structured data\r
- **Concept:** Lists = ordered collections, dicts = labeled collections. Data *modeling* — choosing the right shape — is a design decision, not syntax.\r
- **Specify → AI builds:** A contact book. You design the data model first (what fields? what structure?); AI implements your model.\r
- **Evaluate:** Ask: what happens with 10,000 contacts? With duplicate names? Change the model and see what breaks.\r
- **💼 Business lens:** Every business app is a data model + operations. Modeling is the billable part; typing it is not.\r
- **The one link:** [Asabeneh — 30 Days of Python, Days 5 & 8](https://github.com/Asabeneh/30-Days-Of-Python)\r
- **Done when:** You can defend your data model choices in plain words.\r
\r
### Day 6: State, persistence & failure\r
- **Concept:** Programs forget everything when they stop — unless state is persisted. And *everything fails*: files vanish, networks drop, users type nonsense. Engineering = expecting failure.\r
- **Specify → AI builds:** Contact book that saves/loads from a file. Specify the failure cases first ("file missing", "corrupted file").\r
- **Evaluate:** Delete the file. Corrupt it. Read every traceback top-to-bottom and point to the failing line.\r
- **💼 Business lens:** Downtime costs money. "What happens when it fails?" is the question that separates hobbyists from professionals.\r
- **The one link:** [Python docs — errors and exceptions](https://docs.python.org/3/tutorial/errors.html)\r
- **Done when:** You can read any traceback and name the exact failing line and why.\r
\r
### Day 7: 🛠 Project 1 — scope & ship a complete tool\r
- **Concept:** Scoping: deciding what's in and what's out. A finished small thing beats an unfinished big thing — always.\r
- **Specify → AI builds:** A CLI expense tracker. Write a one-paragraph spec *before* touching AI. Build only what's in the spec.\r
- **Evaluate:** Give it to a friend (your first "client"). Watch silently. Note every confusion — that's your bug list.\r
- **💼 Business lens:** Watching a real user struggle with your software teaches more business than any course. Write down what surprised you.\r
- **The one link:** Your days 1–6 code — reuse it. Reference: [Asabeneh Day 30](https://github.com/Asabeneh/30-Days-Of-Python)\r
- **Done when:** A stranger can clone it and run it from your README alone.\r
\r
---\r
\r
## WEEK 2 — Engineering: the discipline around the code\r
\r
*Theme: AI writes drafts. Engineers make them trustworthy, reproducible, and usable.*\r
\r
### Day 8: Version control — time travel for software\r
- **Concept:** Git = a timeline of every decision. Branches = parallel universes. This is how teams (and your future self) stay sane.\r
- **Specify → AI builds:** Ask AI to explain what each of your past commits did — then rewrite them as a clean, professional history.\r
- **Evaluate:** Break something on a branch, merge a fix, read the diff. You should *see* the story.\r
- **💼 Business lens:** Clients and employers read your GitHub history. A clean history says "professional" before you say a word.\r
- **The one link:** [Pro Git book (free)](https://git-scm.com/book/en/v2)\r
- **Done when:** Your repo history reads like a story a stranger could follow.\r
\r
### Day 9: How the internet works — requests, APIs, JSON\r
- **Concept:** The internet is programs talking to programs. HTTP = the language, APIs = the contracts, JSON = the packaging.\r
- **Specify → AI builds:** A weather CLI using a real API. You specify: what endpoint, what to display, what to do when the city doesn't exist.\r
- **Evaluate:** Draw the round trip: your code → request → server → response → your code. Explain each hop.\r
- **💼 Business lens:** Almost every paid AI product is "our system + someone else's API." Integration is where the money is.\r
- **The one link:** [MDN — HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)\r
- **Done when:** You can explain the full request/response round trip without notes.\r
\r
### Day 10: Reproducibility — "works on my machine" is a bug\r
- **Concept:** Software must run *elsewhere*, not just on your laptop. Environments, dependencies, versions — the unglamorous stuff that decides whether software is real.\r
- **Specify → AI builds:** Have AI write a \`setup.sh\` that recreates your project from zero. Then test it in a fresh folder.\r
- **Evaluate:** Delete your venv and rebuild from your instructions. If it fails, your instructions were the bug.\r
- **💼 Business lens:** A client can't use what they can't install. Reproducibility is professionalism.\r
- **The one link:** [Python docs — venv](https://docs.python.org/3/tutorial/venv.html)\r
- **Done when:** Fresh clone + your steps = working program. No exceptions.\r
\r
### Day 11: Modeling reality — objects (just enough)\r
- **Concept:** Classes model things with *state + behavior*. The key judgment: when does a class earn its existence vs. a simple function or dict?\r
- **Specify → AI builds:** Refactor the expense tracker into classes. Then argue *against* each class — could it be simpler?\r
- **Evaluate:** For every class, answer: what state does it own? What would break if it were a dict instead?\r
- **💼 Business lens:** Over-engineering costs clients money. The judgment of "just enough" is senior-level thinking.\r
- **The one link:** [Corey Schafer — Python OOP (YouTube)](https://www.youtube.com/@coreyms)\r
- **Done when:** You can defend every class — and name one you deleted.\r
\r
### Day 12: Trust — testing & reading code\r
- **Concept:** Tests are *executable proof* that code does what you claim. In the AI era this matters more, not less: AI is confident and sometimes wrong.\r
- **Specify → AI builds:** Have AI write code with a subtle bug. Write the test that catches it. (Then fix the bug.)\r
- **Evaluate:** Read one file of a real open-source project. Summarize what it does in 3 sentences.\r
- **💼 Business lens:** "How do you know it works?" — the first question any serious client asks. Tests are your answer.\r
- **The one link:** [pytest — getting started](https://docs.pytest.org/en/stable/getting-started.html)\r
- **Done when:** \`pytest\` passes and you can explain what each test proves.\r
\r
### Day 13: Interfaces — logic humans can use\r
- **Concept:** Logic without an interface is invisible. A UI translates human intent into function calls — that's all it is.\r
- **Specify → AI builds:** Your expense tracker as a Streamlit web app. Specify the screens first, in words.\r
- **Evaluate:** Watch a non-technical person use it without your help. Every hesitation is a design flaw.\r
- **💼 Business lens:** Clients don't buy code; they buy interfaces. The UI *is* the product to them.\r
- **The one link:** [Streamlit docs](https://docs.streamlit.io/)\r
- **Done when:** A non-coder can use it with zero explanation from you.\r
\r
### Day 14: 🛠 Project 2 — deployment: your first live URL\r
- **Concept:** Deployed software lives on someone else's computer, serving strangers. Deployment is where "my project" becomes "a product."\r
- **Specify → AI builds:** Deploy your app to Streamlit Cloud. Specify what could differ from your laptop (secrets, paths, versions).\r
- **Evaluate:** Open it on your phone, on mobile data, logged out. Fix the first production-only bug.\r
- **💼 Business lens:** A live URL changes every conversation: "here, try it" beats any slide deck. Share it with 3 people.\r
- **The one link:** [Streamlit — deploy](https://docs.streamlit.io/deploy)\r
- **Done when:** It works for strangers, and your README has the live link.\r
\r
---\r
\r
## WEEK 3 — AI engineering: concepts behind the magic\r
\r
*Theme: how AI systems actually work — deeply enough to design, evaluate, and debug them.*\r
\r
### Day 15: How LLMs actually work (practical)\r
- **Concept:** Next-token prediction at scale. Tokens = the unit of thought *and* money. Context window = working memory. Temperature = randomness dial.\r
- **Specify → AI builds:** Your first API call. Specify the model, max tokens, temperature — and predict the cost before running.\r
- **Evaluate:** Run the same prompt at temperature 0 vs 1. Explain the difference. Calculate the cost of 10,000 users.\r
- **💼 Business lens:** Tokens are money. Every AI business is token economics: cost per user vs. price per user. Do the math.\r
- **The one link:** [OpenAI API quickstart](https://platform.openai.com/docs/quickstart) (or Google AI Studio — free)\r
- **Done when:** You can explain tokens, context, and temperature to a non-technical friend.\r
\r
### Day 16: Specification — prompts as engineering\r
- **Concept:** A prompt is a *specification* given to a guessing machine. Vague specs → random output. Precise specs → reliable behavior.\r
- **Specify → AI builds:** A ticket classifier that outputs JSON, right 10/10 times. Improve the *spec* step by step, not the code.\r
- **Evaluate:** 10 test tickets. Score it. Find the one it gets wrong and fix the specification.\r
- **💼 Business lens:** "Make it behave reliably" is what businesses pay for. Reliability is the product.\r
- **The one link:** [Anthropic — prompt engineering](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)\r
- **Done when:** 10/10 correct, and you can say *why* each spec sentence exists.\r
\r
### Day 17: Connecting models to code — tools\r
- **Concept:** Tool calling = the model decides *what* to do, your code does *how*. The contract between them (the schema) is the engineering.\r
- **Specify → AI builds:** A natural-language calculator: model calls your \`calculate()\`. You define the tool contract.\r
- **Evaluate:** Draw the full loop: user → model → tool call → your code → model → answer. Break one link; observe.\r
- **💼 Business lens:** Tools are how AI touches real business systems (databases, bookings, payments). This is the integration money from day 9, supercharged.\r
- **The one link:** [OpenAI — function calling](https://platform.openai.com/docs/guides/function-calling)\r
- **Done when:** You can draw the loop from memory and explain each arrow.\r
\r
### Day 18: Meaning as math — embeddings\r
- **Concept:** Embeddings turn meaning into coordinates. Similar meaning = nearby coordinates. This single idea powers search, RAG, and recommendations.\r
- **Specify → AI builds:** Semantic search over 50 FAQs. Specify: what should match that keyword search would miss?\r
- **Evaluate:** Write the example where keyword search fails and semantic wins. Explain *why* in plain words.\r
- **💼 Business lens:** "Search that understands what I mean" is a feature businesses pay for. You now know the 10-line version of it.\r
- **The one link:** [OpenAI — embeddings guide](https://platform.openai.com/docs/guides/embeddings)\r
- **Done when:** You can explain embeddings with the king−man+woman intuition, correctly.\r
\r
### Day 19: RAG — grounding AI in real documents\r
- **Concept:** Models hallucinate; documents don't. RAG = retrieve the facts, then generate *from* them, with citations.\r
- **Specify → AI builds:** A Q&A bot over a real PDF. Specify chunking, and what "I don't know" looks like.\r
- **Evaluate:** 5 questions. Check every answer against the source. Try one question the docs can't answer — it must admit ignorance.\r
- **💼 Business lens:** "Chat with our documents" is the #1 requested AI feature in businesses. You can now scope and price it.\r
- **The one link:** [LangChain — RAG concepts](https://python.langchain.com/docs/concepts/rag/)\r
- **Done when:** Cited answers, plus one honest "I don't know."\r
\r
### Day 20: Agents — goals, tools, and loops\r
- **Concept:** An agent = a goal + tools + a loop (reason → act → observe → repeat). Powerful and dangerous: loops can spiral.\r
- **Specify → AI builds:** A research agent. Specify the goal, the tools, the max steps, and the stop conditions.\r
- **Evaluate:** Read its full thought/action log. Narrate *why* it did each step. Find one dumb decision and fix the spec.\r
- **💼 Business lens:** Agents are sold as magic and fail as magic. The business value is in *constrained* agents with clear stop rules — that's your edge.\r
- **The one link:** [Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)\r
- **Done when:** You can narrate its decisions and it always stops cleanly.\r
\r
### Day 21: 🛠 Project 3 — a live AI product\r
- **Concept:** Composition: everything from week 3 as one working system.\r
- **Specify → AI builds:** Deploy a RAG chatbot over real documents. Spec first: what it knows, what it refuses, what success looks like.\r
- **Evaluate:** Stranger-test it. Collect the confusing moments. Add "try these questions" prompts.\r
- **💼 Business lens:** This is a demo you can show a paying client next week. Price it in your head: what would you charge to build this for a business?\r
- **The one link:** [Streamlit — deploy](https://docs.streamlit.io/deploy)\r
- **Done when:** A stranger uses it unaided and understands what it does.\r
\r
---\r
\r
## WEEK 4 — Ship like a Forward Deployed Engineer\r
\r
*Theme: the FDE is where engineering meets business — deployed systems, real clients, real money.*\r
\r
### Day 22: Proof — evaluating AI systems\r
- **Concept:** AI output is guess-based, so "it worked once" proves nothing. Evals = a fixed test set you re-run — your regression safety net.\r
- **Specify → AI builds:** A 20-question eval set for your chatbot, with a scoring rubric. AI can help *draft* questions; you approve each one.\r
- **Evaluate:** Run it. Record the score: "my bot scores X/40." Change your prompt, re-run, prove improvement (or catch regression).\r
- **💼 Business lens:** Evals are how you *sell* reliability: "we test every change against 40 cases" is a sentence clients pay for.\r
- **The one link:** [OpenAI cookbook — evaluation](https://cookbook.openai.com/)\r
- **Done when:** You have a number, a re-runnable suite, and both are committed.\r
\r
### Day 23: Production reality — safety, attacks & cost\r
- **Concept:** Production AI = guardrails + threat modeling + unit economics. The model is 20%; everything around it is 80%.\r
- **Specify → AI builds:** Attack your own bot (5 prompt injections). Specify the guardrails, rate limits, and token budget.\r
- **Evaluate:** Every attack must fail gracefully. Compute cost per 1,000 users. Set a budget that pages you.\r
- **💼 Business lens:** Do the full unit economics: cost per user per month vs. price. If the math doesn't work, the product doesn't work.\r
- **The one link:** [Anthropic — Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)\r
- **Done when:** It survives your attacks and you know its cost per 1,000 users.\r
\r
### Day 24: Backends — APIs & persistence\r
- **Concept:** Frontends are faces; backends are the business. An API is a *contract* other software builds on. Databases are memory that outlives the process.\r
- **Specify → AI builds:** A FastAPI backend for your chatbot: \`POST /ask\`, feedback storage, stats. Spec the endpoints first.\r
- **Evaluate:** Hit it with \`curl\`. Break the contract (wrong fields) — does it reject cleanly?\r
- **💼 Business lens:** APIs are products too — many AI businesses *are* APIs. Contracts, versioning, and uptime are the business model.\r
- **The one link:** [FastAPI — first steps](https://fastapi.tiangolo.com/tutorial/first-steps/)\r
- **Done when:** \`curl\` returns a real RAG answer and every Q/A is stored.\r
\r
### Day 25: Operations — logging, tracing & runbooks\r
- **Concept:** You can't fix what you can't see. Observability = the system telling you its story: what happened, how slow, at what cost.\r
- **Specify → AI builds:** Request IDs, latency + token + cost logging, a simple dashboard. Specify the 5 questions your logs must answer.\r
- **Evaluate:** Answer "what happened yesterday at 3pm?" from your logs. Write the runbook: "if the bot is slow, check these 5 things in order."\r
- **💼 Business lens:** Uptime is a promise you sell. Runbooks are how a one-person operation keeps promises like a team.\r
- **The one link:** [FastAPI — middleware](https://fastapi.tiangolo.com/tutorial/middleware/)\r
- **Done when:** Your logs answer the 5 questions and the runbook is committed.\r
\r
### Day 26: 💼 Discovery — turning human problems into specs\r
- **Concept:** The most valuable skill in the repo: *discovery*. Clients describe pains, not specs. Your job: listen, ask, and translate pain into a buildable, priced scope.\r
- **Specify → AI builds:** Interview a real small business for 20 minutes (AI helps you *prepare* questions, not conduct it). Write a one-page brief: problem, users, in-scope, out-of-scope, price.\r
- **Evaluate:** Is the brief so clear a stranger could build v1? What's deliberately excluded — and why?\r
- **💼 Business lens:** This IS the business. Discovery → scoped brief → price → build → deploy. The FDE loop in one day.\r
- **The one link:** [The Mom Test — official site](https://www.momtest.com/) (short book on asking honest questions; library has it)\r
- **Done when:** The brief exists as \`CLIENT_BRIEF.md\` — clear enough for a stranger to build from.\r
\r
### Day 27: 💼 Packaging — portfolio & getting paid\r
- **Concept:** Skill that can't be *seen* can't be *bought*. Packaging = making your work legible to non-technical buyers in 60 seconds.\r
- **Specify → AI builds:** AI drafts your GitHub profile README and project READMEs; you rewrite every line until a non-technical friend "gets it."\r
- **Evaluate:** The 60-second test: show your profile to someone non-technical. Can they say what you do and why it matters?\r
- **💼 Business lens:** List 10 companies hiring AI/FDE roles. Read what they actually ask for. Map your 3 projects to their requirements — that's your pitch.\r
- **The one link:** Your own repos, read as a hiring manager: [github.com/MubashirLahori97](https://github.com/MubashirLahori97)\r
- **Done when:** A stranger understands your value in 60 seconds, and you have a target list.\r
\r
### Day 28: 🏁 Capstone, part 1 — build a client-grade system\r
- **Concept:** Everything composed under a deadline: RAG + API + guardrails + evals + database — specified, evaluated, and tested by you.\r
- **Specify → AI builds:** Take your day-26 brief (or invent a client). Write the full spec *before* AI writes a line. Build to the spec.\r
- **Evaluate:** Eval suite passes at your bar. A second human tests it; fix what confuses them.\r
- **💼 Business lens:** Write the proposal you'd send the client: scope, timeline, price. Even if fictional, the exercise is the skill.\r
- **The one link:** Everything you've built — you're the resource now.\r
- **Done when:** It works for someone who isn't you, with evals to prove it.\r
\r
### Day 29: 🏁 Capstone, part 2 — deploy it live\r
- **Concept:** Shipping = the entire deployment checklist + monitoring + telling the world. Undeployed work has zero business value.\r
- **Specify → AI builds:** Deploy with a checklist (AI drafts it; you verify each item). Write the launch post: problem, what you built, demo link, lessons learned.\r
- **Evaluate:** 5 real humans try it. Collect feedback. Fix the top complaint within the day.\r
- **💼 Business lens:** The launch post IS marketing. Founders and freelancers get clients from posts exactly like this one.\r
- **The one link:** [Render — deploy a Python app](https://render.com/docs)\r
- **Done when:** The link works, 5 humans tried it, the post is published.\r
\r
### Day 30: 💼 Ship it — demo, retrospective, next 90 days\r
- **Concept:** The story of the work is part of the work. Retrospectives turn experience into judgment.\r
- **Specify → AI builds:** A 3-minute demo video (you present; AI helps script it) + written retrospective + next-90-day plan.\r
- **Evaluate:** The retrospective must name: what broke, what you'd do differently, which concept was hardest and why.\r
- **💼 Business lens:** Your next 90 days: pick ONE depth area and ONE way to get paid (freelance FDE work, a job, a micro-product). Write it down. Commit to it publicly.\r
- **The one link:** Your commit history — 30 days of proof: [the repo](https://github.com/MubashirLahori97/Complete-AI-FDE-Software)\r
- **Done when:** Anyone can see: 30 days ago I couldn't build software; today I ship AI systems and understand them.\r
\r
---\r
\r
## After day 30\r
\r
You have what AI can't give you: **concepts at 100%, engineering judgment, and business sense.** The next 90 days: go deep in one area, build one serious thing in it, and start charging — freelance, employment, or your own product. Your edge as an FDE: you speak both languages, the client's problem and the engineer's solution.\r
\r
**Want the full path, not just the next 90 days?** [ROADMAP.md](ROADMAP.md) continues from day 31 to day 90 — three dense phases that turn a 30-day builder into a complete, hire-ready software engineer: engineering depth (databases, APIs, testing), real products with real users, and getting paid + hired. Three months total, at sprint pace.\r
\r
*AI writes the code. You do everything that matters around it. Fork this repo, do it in public, and show your work.*\r
`;export{e as default};
