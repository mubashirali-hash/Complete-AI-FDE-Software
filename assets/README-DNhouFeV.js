const e=`# 📘 Day 13 — Interfaces: Turning Logic Into Something Humans Use\r
\r
![Day 13 visual](../images/days/day-13.svg)\r
\r
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
`;export{e as default};
