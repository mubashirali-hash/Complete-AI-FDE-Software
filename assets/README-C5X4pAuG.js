const e=`# Day 14 — Deployment, configuration, and your first public application

<!-- beginner-path:begin -->
## Start here — one idea at a time

**Your goal:** A verified public expense dashboard. You can take several study sessions.

**The situation:** The dashboard works on your laptop. You publish it, but a friend sees a blank page.

### One idea: Check the app someone else receives

Deployment means making a particular version of your app available in its target environment. A successful build does not prove the published app works. The public page may use a different path, old assets, or different settings. Test the actual public URL in a fresh session and on a small screen. Record the source version so you know what you are checking.

**New words:**

- **Build:** Preparing source files into the files used to run or publish the app.
- **Deployment:** Making a version available in a target environment.
- **Smoke test:** A short check that the main user journey works.

### Follow the example below

1. The release example names the source and destination of a release.
2. It lists checks for the public URL, assets, and the main task.
3. These lines are a checklist, not proof that a deployment has passed. Attach your observed results.

### Try one small decision

The build command passed. What is still needed before calling the dashboard release verified?

1. Test the published URL and its main workflow in a fresh session
2. Only inspect the source code
3. Assume every device works

<details>
<summary>A small hint</summary>

Test the thing another person receives.

</details>

<details>
<summary>Another hint</summary>

Open the public address, load its assets, submit the form, and refresh.

</details>

<details>
<summary>Answer and explanation</summary>

**Test the published URL and its main workflow in a fresh session** Yes. Verify the actual delivery, including assets and behaviour outside your existing session.

</details>

**Then practise:** Use your release checklist to test the real public URL in a fresh browser session. Record observed results instead of marking planned checks as passed.

**Your project's first action:** Write the version and target URL for the Day 13 dashboard. List three smoke checks before starting the release.

**How it connects:** Publish the expense interface you already built. Today's project produces a verified release record rather than another unrelated app.

Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.

<!-- beginner-path:end -->

Deployment places a reproducible version of your application where its intended users can access it. That changes the environment, not just the URL. Today you will publish your expense dashboard, verify the actual hosted result, and document how to recover from an incorrect release.

**Your project:** [A verified public expense dashboard](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.

## What you will be able to do

- Distinguish development source, a deployable artifact, and a running hosted version.
- Verify assets, routes, and core behavior on the real deployment.
- Document release identity, configuration ownership, and recovery.

## Understand the concept

### An artifact is the version you deploy

A static site can consist of HTML, CSS, JavaScript, and data assets. A framework may transform source files into a build directory before hosting. Keep track of which commit produced the artifact, because an edited working file is not automatically the version served to users. Paths also matter: an asset reference that works at a root URL may fail under a repository subpath. Inspect the deployed network requests instead of assuming a successful upload proves the page is usable.

### Hosted users have different conditions

A new user's browser does not contain your local storage, cached files, or development configuration. Test logged out or in a clean browser context, with a direct route and a reload. A localhost URL refers to the user's own device, not your development computer. A static frontend's code and configuration are visible to its visitors, so a future model API credential must stay on a trusted backend rather than being embedded in browser JavaScript.

### A release needs an operating story

Document how the site is built, how a release is identified, and which checks establish successful startup. A simple rollback might redeploy a previous artifact, but stateful systems also require data compatibility considerations. Keep the recovery steps practical for the person who will operate the system. A public URL alone does not verify permissions, invalid input, or every route. Record the checks you actually performed and the limitations that remain.

## A worked example, step by step

A release record connects the source version to a real URL and observed behavior rather than a screenshot alone.

\`\`\`markdown
# Release record
Source commit: fill in the actual commit ID
Artifact: directory containing index.html and its assets
Public URL: fill in the verified hosted URL
Checks:
- Clean browser can open the home page
- Form validation and add/remove workflow work
- Asset requests succeed
- Narrow viewport remains usable
- Reload preserves only the documented browser-local data
Recovery: redeploy the previously verified artifact
Known limits: browser-local data; no shared accounts
\`\`\`

**Expected result**

\`\`\`text
A completed release record contains an actual commit, hosted URL, observed check results, and a practical recovery step.
Placeholders are not evidence of a deployed application.
\`\`\`

The commit identifies the reviewed source. The artifact identifies what the host receives. The public URL must be checked after deployment, not invented from an expected naming pattern. Each check should contain a result and relevant evidence. Recovery points to a previously verified version. This record prevents you from confusing local success with hosted success and makes a handoff understandable to someone who did not perform the deployment.

## Practise before building

### Exercise 1: Inspect an asset path

Compare a relative asset URL with a root-relative URL under a repository subpath.

**Hint:** A leading slash refers to the origin root, not automatically the application's folder.

**Check your result:** You can explain why one path can work locally and fail after hosting.

### Exercise 2: Test as a new user

Open the hosted dashboard in a clean browser and complete its core task.

**Hint:** Do not depend on your existing saved demo records.

**Check your result:** The first-use and empty states are understandable.

### Exercise 3: Write a recovery sequence

Describe how to return to a known good static artifact and how to verify it.

**Hint:** Name the version and the checks, not merely a generic undo instruction.

**Check your result:** Another person could follow the steps without guessing which release to use.

## Common mistakes and how to debug them

- Sharing localhost as if it were a public application URL.
- Embedding API secrets in a static frontend's source or build settings.
- Assuming upload success verifies routes, assets, and user behavior.

## The FDE connection

An FDE owns delivery beyond a local demonstration. Release identity, hosted checks, configuration responsibility, and recovery connect the implementation to the customer's operational reality. Even a small static dashboard should have a clear handoff.

## Build your lesson project

**A verified public expense dashboard**

Publish the dashboard from lesson 13 in your own learner project repository or chosen static host. Verify the deployed site in a clean browser, test a narrow viewport and reload, and record the release identity. Keep setup and recovery instructions alongside the project. Do not change the academy's hosting configuration as part of your learner exercise.

- A verified public URL and the source commit that produced it.
- Build or publishing instructions for the chosen host.
- A completed hosted verification checklist.
- A release note, known limits, and recovery steps.

Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.

## Explain it back

- Which artifact is actually hosted?
- What differed from your local environment?
- What information would an operator need if the latest release failed?

## References and next steps

- [GitHub Pages: publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [MDN: publishing your website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website)

[← Lesson 13](../13_Day_First_Web_App/) · [Lesson 15 →](../15_Day_LLMs_How_They_Work/)

<details>
<summary>Optional original workshop and alternative exercises</summary>

<!-- original-workshop:begin -->
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
[← Day 13](../13_Day_First_Web_App/) · [Day 15 →](../15_Day_LLMs_How_They_Work/)
<!-- original-workshop:end -->

</details>
`;export{e as default};
