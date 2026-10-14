const e=`# 📘 Day 5 — Collections & Structured Data\r
\r
![Day 5 visual](../images/days/day-05.svg)\r
\r
**Concept:** Lists = **ordered** collections. Dicts = **labeled** collections. Choosing the right shape for your data — *data modeling* — is a design decision, not syntax. Get the model right and the code writes itself; get it wrong and everything fights you.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### Lists: order matters\r
\r
\`\`\`python\r
fruits = ["apple", "mango", "banana"]\r
print(fruits[0])      # "apple" — counting starts at 0!\r
fruits.append("grapes")\r
print(len(fruits))    # 4\r
\`\`\`\r
\r
Use a list when **order matters** or you have many of the same kind of thing.\r
\r
### Dictionaries: labels matter\r
\r
\`\`\`python\r
person = {\r
    "name": "Mubashir",\r
    "city": "Lahore",\r
    "role": "AI Engineer"\r
}\r
print(person["city"])       # "Lahore" — look up by LABEL, not position\r
person["role"] = "AI FDE"   # update by label\r
\`\`\`\r
\r
Use a dict when each piece of data has a **name**. A contact isn't "item 0, 1, 2" — it's name, phone, city.\r
\r
### Nesting: the real world is nested\r
\r
\`\`\`python\r
contacts = [\r
    {"name": "Ali",   "phone": "0300-1111111", "city": "Lahore"},\r
    {"name": "Sara",  "phone": "0300-2222222", "city": "Karachi"},\r
]\r
\`\`\`\r
\r
A **list of dicts**: many contacts (order), each with labeled fields. This exact shape powers half the world's business software — and it's also what JSON APIs send you (day 9).\r
\r
### The design question\r
\r
Same data, two models. Which is right?\r
\r
\`\`\`python\r
# Option A: list of dicts\r
[{"name": "Ali", "phone": "..."}, {"name": "Sara", "phone": "..."}]\r
\r
# Option B: dict of dicts, keyed by name\r
{"Ali": {"phone": "..."}, "Sara": {"phone": "..."}}\r
\`\`\`\r
\r
Option B finds "Sara" instantly; Option A keeps insertion order and allows duplicate names. **There is no universally right answer** — the right model depends on how you'll *use* the data. That judgment call is data modeling, and it's a senior skill.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
Design the model **yourself first** — on paper, in words — then spec:\r
\r
> "Build a contact book. Data model: a list of dicts, each with name, phone, city. Features: 1) add contact (reject empty name; warn on duplicate phone), 2) search by name (case-insensitive, partial match — 'ali' finds 'Ali Raza'), 3) delete by exact name, 4) list all. All data lives in memory for now (persistence is day 6). Functions only — no classes yet."\r
\r
You made three modeling decisions in that spec (list-of-dicts, duplicate rule, search behavior). The AI just typed them.\r
\r
## 3. Evaluate — be the senior\r
\r
- Test: add two contacts, search partial name, search with different case, add duplicate phone, delete non-existent name.\r
- Ask: "What happens with 10,000 contacts — which operation gets slow, and why?" (Searching a list checks each item one by one — that's fine at 100, painful at 10 million. Noticing this is engineering intuition forming.)\r
- Challenge the model: "Propose two alternative data models for this contact book and argue when each wins." Pick one — defend it in one paragraph.\r
\r
## 4. Business lens 💼\r
\r
Every business app is **a data model + operations on it**. A shop's inventory, a clinic's patients, a school's students — all lists of labeled things. When a client says "we need software to manage X," your first job is modeling X. Clients pay for the model being *right* (captures their reality) more than for the code being clever.\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
Reverse a list **without** \`.reverse()\` — specify the approach first ("build a new list, walking backwards"), then have AI implement your approach.\r
\r
### Level 2\r
Word frequency counter: "the cat sat on the mat" → \`{"the": 2, "cat": 1, ...}\`. Before AI builds: **which structure** holds the answer, and why? (Say it before you spec it.)\r
\r
### Level 3\r
Extend the contact book: add an \`"tags"\` field (a **list inside the dict** — e.g. \`["client", "lahore"]\`), plus search-by-tag. Then write the senior review: draw your final data model as nested boxes and label every level. If you can't draw it, you don't own it yet.\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can explain when to use a list vs a dict — with a reason, not a rule\r
- [ ] You designed the contact book's data model *before* AI implemented it\r
- [ ] You can defend your model against at least one alternative\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[Asabeneh — 30 Days of Python, Days 5 & 8](https://github.com/Asabeneh/30-Days-Of-Python) — lists and dictionaries deep drills.\r
\r
---\r
\r
[← Day 4](../04_Day_Functions/) · [Day 6 →](../06_Day_Files_Errors_Debugging/)\r
`;export{e as default};
