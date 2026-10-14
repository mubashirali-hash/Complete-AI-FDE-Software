const e=`# 📘 Day 14 — 🛠 Project 2: Deployment — Your First Live URL\r
\r
![Day 14 visual](../images/days/day-14.svg)\r
\r
**Concept:** **Deployment** is moving software from your laptop to a computer that serves strangers, 24/7. It's where "my project" becomes "a product." Everything changes at this boundary: secrets can't live in code, paths differ, versions must be pinned, and *you* can't be there to restart it. Deployment is the professional threshold — cross it today.\r
\r
**Time:** ~90 minutes. **Rule:** done = the URL works on your phone, on mobile data, logged out.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### What deployment actually is\r
\r
Your laptop → their server:\r
\r
| Your laptop | Production server |\r
|---|---|\r
| You restart things by hand | It must **recover by itself** |\r
| Secrets in \`.env\` on disk | Secrets in the platform's **secret manager** |\r
| "Works on my machine" | Must work on **their** machine — hence day 10's recipe |\r
| You are the only user | **Strangers**, with strange inputs, at 3 AM |\r
\r
The deployment checklist (memorize the shape of it):\r
1. **Recipe complete?** \`requirements.txt\` pinned, builds from zero (day 10).\r
2. **Secrets out of code?** API keys in the platform's secrets, never in the repo (check: \`git log\` must contain zero keys — ever).\r
3. **Entry point declared?** The platform needs to know how to start your app (\`streamlit run app.py\`).\r
4. **Smoke test from outside:** open the URL on your phone, logged out, on mobile data. If it works there, it works.\r
\r
### The mindset shift\r
\r
Deployed software is **observed, not debugged**. You can't \`print()\` on a server you don't own — you read logs. You can't ask the user what they clicked — you watch behavior. Days 24–25 make this rigorous; today, feel the shift.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Walk me through deploying my Streamlit expense tracker to Streamlit Community Cloud: 1) what files the platform needs and why, 2) how to connect my GitHub repo, 3) where secrets go (I have none yet — explain what I'd do when I do), 4) the exact smoke test after deploy. Explain each step BEFORE I do it — I need to understand the machinery, not just click through."\r
\r
Then deploy. For real. Today.\r
\r
## 3. Evaluate — be the senior\r
\r
- **The phone test:** open the URL on your phone, mobile data, logged out, in a private browser tab. Every condition matters: it proves strangers can reach it.\r
- **Break the boundary:** what's different between laptop and cloud? Write down 3 differences you actually observed (paths? versions? speed?).\r
- **The secret audit:** \`git log --all -p | grep -i "key\\|secret\\|token"\` — verify zero secrets ever touched the repo. (If one did: rotate it immediately, then learn why \`.gitignore\` + secret managers exist.)\r
- **First production bug:** something *will* differ. Find it, fix it, redeploy. That loop — deploy → observe → fix → redeploy — is the professional heartbeat. Feel it.\r
- Ask the AI: "Quiz me — why can't I just email someone my .py file instead of deploying? What does the platform actually do with my repo?"\r
\r
## 4. Business lens 💼\r
\r
A live URL **changes every conversation you'll ever have about your work**:\r
\r
- "I built an expense tracker" → polite nod.\r
- "Here — try it: [link]" → they *use* it. Ten seconds of use beats ten minutes of description.\r
\r
This is why deployment is a business skill, not a technical chore. Freelancers win contracts with live demos. Founders raise interest with live products. Job seekers stand out with live portfolios. **Deployed > described**, always. Share your URL with 3 people today — and watch what they do, silently (day 7's user test, now at internet scale).\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
Custom page title + icon + a one-line description on the deployed app. Details signal care.\r
\r
### Level 2\r
**The redeploy drill:** change one visible thing, commit, push, watch it redeploy. Time the loop: commit → live. That number is your **iteration speed** — the most important productivity metric in software.\r
\r
### Level 3\r
Add a tiny **feedback form** to the app ("What confused you?") that appends to a file. Read the first 3 responses. You now have a **production feedback loop** — the smallest version of what every serious product runs.\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] The URL works on your phone, on mobile data, logged out, private tab\r
- [ ] You can explain what the platform does with your repo, without notes\r
- [ ] Zero secrets in git history (audited, not assumed)\r
- [ ] 3 real humans have opened it; README has the live link\r
\r
## 📎 The one link\r
\r
[Streamlit — Deploy your app](https://docs.streamlit.io/deploy) — the exact path you just walked.\r
\r
---\r
\r
🎉 **Week 2 complete.** You now think like an engineer: versioned, reproducible, tested, interfaced, and **deployed**. Week 3 is where it gets magical — AI engineering: how the models actually work, and how to build with them.\r
\r
[← Day 13](../13_Day_First_Web_App/) · [Day 15 →](../15_Day_LLMs_How_They_Work/)\r
`;export{e as default};
