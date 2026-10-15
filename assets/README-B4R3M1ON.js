const e=`# Day 13 — Frontend fundamentals and a usable web interface\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** Responsive expense dashboard. You can take several study sessions.\r
\r
**The situation:** Your expense tracker works in a terminal. A user wants a labelled form and a visible total instead.\r
\r
### One idea: Connect a screen to an action\r
\r
HTML describes the parts of a web page. CSS controls their appearance. JavaScript responds to actions such as submitting a form. Follow one event from start to finish: the user enters an amount, the program validates it, adds a record, and updates the displayed total. A clear label and a useful error message are part of making the program work for people.\r
\r
**New words:**\r
\r
- **HTML:** Markup describing the structure and meaning of page elements.\r
- **Event:** An action the page can respond to, such as a click or form submission.\r
- **DOM:** The browser's representation of the page, which JavaScript can read and change.\r
\r
### Follow the example below\r
\r
1. The HTML creates a labelled form and a place to display results.\r
2. The JavaScript listens for submission, reads the value, and prevents the default page reload.\r
3. Valid input changes the displayed state. This browser example does not add a server or database.\r
\r
### Try one small decision\r
\r
A user submits an empty expense amount. Which response helps them continue?\r
\r
1. Silently add a zero expense\r
2. Show a clear message beside the labelled field and keep their input\r
3. Show only a red border\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Help the person understand what went wrong and what to do next.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
Keep the form usable with a keyboard and explain errors using text.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Show a clear message beside the labelled field and keep their input** Yes. Explain the fix without making the user restart the task.\r
\r
</details>\r
\r
**Then practise:** Preview the example. Submit a normal value, then an empty value. Change one label to make the required input clearer and preview again.\r
\r
**Your project's first action:** Sketch an empty expense dashboard: a labelled form, an empty-list message, and a total. Then trace what changes after adding one expense.\r
\r
**How it connects:** Give the expense tracker from Days 7 and 12 a web interface. Keep its calculation rules even though the way users interact is changing.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
An interface translates a person's intent into operations they can understand. Today you will learn the different responsibilities of HTML, CSS, and JavaScript, connect a form to a calculation, and build a small expense dashboard. A framework can help later, but it should not hide the browser concepts you need to inspect and debug.\r
\r
**Your project:** [Responsive expense dashboard](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Explain how HTML structure, CSS presentation, and JavaScript behavior cooperate.\r
- Handle a form submission with validation and visible feedback.\r
- Test an interface with keyboard input, a narrow screen, and a new user.\r
\r
## Understand the concept\r
\r
### Structure communicates meaning\r
\r
HTML describes the document and its controls. A heading introduces a section; a label identifies an input; a button performs an action. Use those elements instead of treating every part of the interface as a clickable box. The browser and assistive technology can then expose useful behavior and names. A placeholder is a temporary hint, not a reliable replacement for a visible label. Start with a semantic interface that works before adding decorative styling.\r
\r
### Presentation should support the task\r
\r
CSS controls layout, spacing, typography, and visual states. A readable interface has a clear order, adequate contrast, and enough room for its controls. Test a narrow viewport rather than assuming a desktop layout shrinks automatically. Avoid conveying an error only through colour: provide a message. Focus indicators help keyboard users see which control will receive the next action. Small, consistent styling decisions are usually more useful than several unrelated visual effects.\r
\r
### Behavior connects events to state\r
\r
JavaScript handles events such as submitting a form. The handler reads input, validates it, updates state, and renders feedback. Python and JavaScript use different syntax, but the input → process → output pattern remains. Browser validation improves usability, yet a future backend must validate its own inputs because browser controls can be bypassed. A localStorage demo persists data in one browser; it is not a shared server database or an authenticated account.\r
\r
## A worked example, step by step\r
\r
A labelled form updates a total in integer cents. The JavaScript checks the value again before changing state.\r
\r
\`\`\`html\r
<!doctype html>\r
<html lang="en">\r
<meta charset="utf-8">\r
<meta name="viewport" content="width=device-width, initial-scale=1">\r
<title>Expense dashboard</title>\r
<style>body{font-family:system-ui;max-width:600px;margin:40px auto;padding:20px}input,button{padding:12px}label{display:block;margin-bottom:8px}</style>\r
<h1>Expense dashboard</h1>\r
<form id="expense-form">\r
  <label for="amount">Amount in cents</label>\r
  <input id="amount" type="number" min="0" step="1" required>\r
  <button type="submit">Add expense</button>\r
</form>\r
<p id="result" role="status">Total: 0 cents</p>\r
<script>\r
let total = 0;\r
document.getElementById('expense-form').addEventListener('submit', event => {\r
  event.preventDefault();\r
  const raw = document.getElementById('amount').value;\r
  const amount = Number(raw);\r
  if (raw.trim() === '' || !Number.isInteger(amount) || amount < 0) {\r
    document.getElementById('result').textContent = 'Enter a non-negative integer amount';\r
    return;\r
  }\r
  total += amount;\r
  document.getElementById('result').textContent = \`Total: \${total} cents\`;\r
});\r
<\/script>\r
</html>\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
The initial screen shows Total: 0 cents.\r
Submitting 250 shows Total: 250 cents.\r
Submitting another 100 shows Total: 350 cents.\r
\`\`\`\r
\r
The label and input are connected by matching for and id values. The submit handler prevents a normal page navigation, reads the input as text, and converts it deliberately. Validation occurs before changing total. textContent displays a text value without interpreting it as HTML. The status region provides feedback. This starter has only an accumulated in-memory total; your project will add named records, an empty state, persistence, and useful recovery.\r
\r
## Practise before building\r
\r
### Exercise 1: Trace an event\r
\r
Explain what happens between pressing the button and seeing the new total.\r
\r
**Hint:** Name the event, input boundary, validation, state change, and render step.\r
\r
**Check your result:** You can predict the result for two consecutive submissions.\r
\r
### Exercise 2: Use a keyboard\r
\r
Complete the form using Tab and Enter, then inspect the focus indicator.\r
\r
**Hint:** Native controls provide much of the basic keyboard behavior.\r
\r
**Check your result:** The task is possible without a mouse and the input has a useful name.\r
\r
### Exercise 3: Test a small screen\r
\r
Inspect the page at a 375px viewport and with longer labels or expense names.\r
\r
**Hint:** Look for clipped controls and page-wide horizontal scrolling.\r
\r
**Check your result:** The primary task remains readable and usable.\r
\r
## Common mistakes and how to debug them\r
\r
- Using placeholder text as the only input label.\r
- Treating client-side validation as a future backend security boundary.\r
- Confusing a one-browser localStorage record with a shared customer database.\r
\r
## The FDE connection\r
\r
A customer experiences the workflow, not the internal class names. An FDE watches whether intended users can complete the task, understand feedback, and recover from mistakes. Accessibility and error states are part of that task, not optional polish added after the demo.\r
\r
## Build your lesson project\r
\r
**Responsive expense dashboard**\r
\r
A freelancer wants to add labelled expenses, see a list and total, remove a mistaken record, and return to the data later in the same browser. Build a semantic HTML/CSS/JavaScript interface using fictional data. Document that browser-local persistence is a learning constraint and does not provide shared accounts or server-side authorization.\r
\r
- A responsive form, expense list, total, and empty state.\r
- Clear labels, keyboard behavior, and validation messages.\r
- Browser-local persistence with useful handling of damaged saved data.\r
- A usability and narrow-viewport test report.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- Which responsibilities belong to HTML, CSS, and JavaScript?\r
- What behavior does your local persistence guarantee?\r
- What changed after watching another person use the interface?\r
\r
## References and next steps\r
\r
- [MDN: learning web development](https://developer.mozilla.org/en-US/docs/Learn_web_development)\r
- [MDN: client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)\r
\r
[← Lesson 12](../12_Day_Testing_Clean_Code/) · [Lesson 14 →](../14_Day_Project2_Deployed_Web_App/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Concept:** Logic without an interface is **invisible**. A UI is just a translation layer: human intent in (clicks, typing), function calls out. Buttons call functions. Forms collect arguments. Charts display return values. Once you see this, every app demystifies: it's your day-4 functions wearing clothes.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### The translation layer\r
\r
Your expense tracker has \`add_expense(amount, category, note)\`. A web UI for it is:\r
\r
- **Text box** → collects \`amount\` (an argument)\r
- **Dropdown** → collects \`category\` (an argument)\r
- **Button "Add"** → calls \`add_expense(...)\` with those arguments\r
- **Table/chart** → displays what the functions return\r
\r
That's it. No new programming universe — **the same functions, new clothes.**\r
\r
### Streamlit: Python → web page in minutes\r
\r
\`\`\`python\r
import streamlit as st\r
\r
st.title("Expense Tracker")\r
\r
amount = st.number_input("Amount", min_value=0.0)\r
category = st.selectbox("Category", ["Food", "Transport", "Bills", "Other"])\r
note = st.text_input("Note")\r
\r
if st.button("Add expense"):\r
    add_expense(amount, category, note)   # YOUR day-7 function, unchanged\r
    st.success("Added!")\r
\r
st.bar_chart(totals_by_category())       # YOUR function, visualized\r
\`\`\`\r
\r
Every \`st.something\` is a widget that **collects input or displays output**. Rerun model: when the user interacts, the script re-runs top to bottom with the new values. Simple mental model, enormously productive.\r
\r
### The design insight\r
\r
Good UI = **fewer decisions for the user**. Dropdown instead of free text (no typos in categories). Sensible defaults. One primary button. You'll evaluate your UI the same way you evaluate code: *watch a human use it*.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Build a Streamlit app (app.py) for my expense tracker. Reuse my existing functions — do NOT rewrite the logic, only the interface. Screens: 1) Add expense form (amount, category dropdown, note, date defaults today), 2) table of all expenses, 3) bar chart of totals by category. Rules: category must be a dropdown (no free text), amount can't be negative, show a success message on add. Keep logic and UI in separate sections of the file."\r
\r
"Reuse my functions, don't rewrite the logic" — you're enforcing **separation of concerns**, a professional architecture instinct.\r
\r
## 3. Evaluate — be the senior\r
\r
- Run \`streamlit run app.py\`. Add an expense through the UI, then check: did it hit the *same* functions (and file) as the CLI? Two interfaces, one logic — verify it.\r
- **The silent user test:** hand it to a non-technical person. Zero explanation from you. Note every hesitation — each is a UI bug.\r
- Break it: negative amount, empty note, 100-character category via devtools (or just ask: what *can't* the UI prevent?). Where does validation live — UI, function, or both? (Answer: **both**. UI for kindness, functions for truth — because functions can be called from anywhere.)\r
- Ask the AI: "Quiz me — in this app, which parts are interface and which are logic? If I wanted a mobile app tomorrow, what would I reuse?"\r
\r
## 4. Business lens 💼\r
\r
**Clients don't buy code; they buy interfaces.** To a shop owner, your Python functions don't exist — the *screen* is the product. This is why "it works in the terminal" never closes a deal but "here, click around" does. The UI is also where **first impressions** form: a clean, working interface signals a professional builder before a word is spoken.\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
Add a **date picker** to the form (default: today). Verify the date flows into your existing function unchanged.\r
\r
### Level 2\r
Add **CSV import**: upload a file of expenses, parse it, add each row. (Day-6 file skills + day-9 "data travels as text" — composition!)\r
\r
### Level 3\r
**Two interfaces, one truth:** make the CLI and the web app share *one* functions file (import it in both). Prove it: add via CLI, see it in the web app. Then write the architecture in one paragraph: where does logic live, where does interface live, and why?\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can explain "UI = translation layer: widgets collect arguments, displays show return values" without notes\r
- [ ] A non-technical human used it with zero help from you\r
- [ ] Logic is shared between CLI and web (not duplicated)\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[Streamlit docs — Get Started](https://docs.streamlit.io/) — excellent, example-driven.\r
\r
---\r
\r
[← Day 12](../12_Day_Testing_Clean_Code/) · [Day 14 →](../14_Day_Project2_Deployed_Web_App/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
