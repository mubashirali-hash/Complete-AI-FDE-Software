const e=`# Day 5 — Collections and data modelling\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** Customer contact directory. You can take several study sessions.\r
\r
**The situation:** Two customers have the same name. Your contact directory must keep both records.\r
\r
### One idea: Choose how to organise your data\r
\r
A list stores a sequence of values. A dictionary connects keys to values, like looking up a contact by an ID. A person's name can change and two people can share it, so a name makes a poor unique key. Give each contact a stable ID and keep the name inside the record. Searching should find records without removing the others.\r
\r
**New words:**\r
\r
- **List:** An ordered collection of values.\r
- **Dictionary:** A collection where a key lets you find its value.\r
- **ID:** A value chosen to identify one record reliably.\r
\r
### Follow the example below\r
\r
1. Two contacts named Ali have different dictionary keys, so neither overwrites the other.\r
2. The loop displays each ID, name, and city.\r
3. get looks up C003. Because it is missing, the example displays Contact not found.\r
\r
### Try one small decision\r
\r
You add another customer named Ali. Which approach keeps both customers safely?\r
\r
1. Give them different IDs and keep Ali as each display name\r
2. Use Ali as the key for both records\r
3. Delete the first Ali before adding the next\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Ask which field identifies a person and which field only describes them.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
A unique ID can be C-001 or C-002 even when both display names are Ali.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Give them different IDs and keep Ali as each display name** Yes. Stable unique IDs distinguish records even when names match.\r
\r
</details>\r
\r
**Then practise:** Add a contact with a new ID and a duplicate display name. Run the example and check that the original record still exists.\r
\r
**Your project's first action:** Draw two contact records with different IDs but the same name. Add a city to each and decide which fields are required.\r
\r
**How it connects:** Your queue already held several tickets. Now you are choosing a deliberate data structure; tomorrow you will save records between runs.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
Real applications usually operate on many records rather than one value. Choosing the shape of those records determines which operations are clear, safe, and efficient enough for the task. Today you will model contacts with stable identifiers, distinguish ordered collections from keyed lookup, and build a contact directory that handles duplicate names deliberately.\r
\r
**Your project:** [Customer contact directory](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Choose between a list and a dictionary for a specific operation.\r
- Model records with stable IDs rather than ambiguous display names.\r
- Explain mutation, missing keys, and duplicate-record behavior.\r
\r
## Understand the concept\r
\r
### Lists preserve a sequence\r
\r
A list represents an ordered collection. It is useful when display order or visiting each item matters. Indexes describe positions, not permanent identities: removing an earlier item changes later positions. A customer ID therefore should not be inferred from a list index. When you filter a list, decide whether you are producing a new view or deleting records. That distinction becomes important when a UI lets a user search without intending to remove data.\r
\r
### Dictionaries support named lookup\r
\r
A dictionary associates a key with a value. A stable contact ID can map to a dictionary containing that contact's fields. Looking up a known ID is clearer than searching for a name that may be shared by multiple people. Accessing a missing key with square brackets raises KeyError. get can return a default, but choose a default that preserves meaning: a missing contact is not the same thing as an empty contact record.\r
\r
### A model contains decisions, not just fields\r
\r
Decide what must be present, what can be missing, and what makes a record unique. Two contacts may share a display name while having different IDs. Updating a contact should preserve its identity. Lists and dictionaries are mutable, so two names can refer to the same object; a change through one reference can be visible through the other. Use an explicit copy when you need an independent record, and understand whether a shallow copy also shares nested objects.\r
\r
## A worked example, step by step\r
\r
Two people share a name, so the program uses IDs for lookup and names only for display.\r
\r
\`\`\`python\r
contacts = {\r
    "C001": {"name": "Ali", "city": "Lahore"},\r
    "C002": {"name": "Ali", "city": "Karachi"},\r
}\r
for contact_id, contact in contacts.items():\r
    print(contact_id, contact["name"], contact["city"])\r
\r
match = contacts.get("C003")\r
print("Found" if match is not None else "Contact not found")\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
C001 Ali Lahore\r
C002 Ali Karachi\r
Contact not found\r
\`\`\`\r
\r
The outer dictionary maps unique IDs to records. Each inner dictionary labels the fields of one contact. items supplies both the identifier and record to each loop iteration. The shared name does not overwrite a record because it is not used as the key. get returns None for the missing ID, which the caller converts into a helpful message. The example's insertion order makes the displayed order predictable, but it is not a substitute for an explicit sort when the product requires alphabetical output.\r
\r
## Practise before building\r
\r
### Exercise 1: Search without deleting\r
\r
Produce a list of contacts whose city matches a query while keeping the original directory unchanged.\r
\r
**Hint:** Append matching records to a separate list.\r
\r
**Check your result:** Searching for an unknown city returns no matches without removing contacts.\r
\r
### Exercise 2: Update by identity\r
\r
Change the city of C002 while preserving its ID and the other contact.\r
\r
**Hint:** Look up the ID before updating its fields.\r
\r
**Check your result:** Only the selected record changes.\r
\r
### Exercise 3: Observe shared state\r
\r
Assign one contact record to another variable, change its city, and inspect the original.\r
\r
**Hint:** Assignment does not automatically create a deep copy.\r
\r
**Check your result:** You can explain why the update is visible through both references.\r
\r
## Common mistakes and how to debug them\r
\r
- Using names as unique keys: duplicate names can overwrite valid people.\r
- Treating a position as a stable ID: positions change when records are inserted or deleted.\r
- Hiding missing records behind empty defaults: an explicit not-found result is easier to diagnose.\r
\r
## The FDE connection\r
\r
A customer data export may contain duplicates, optional fields, and inconsistent identifiers. An FDE asks how records are matched across systems before building an integration. A data model should preserve useful distinctions instead of deleting them to make the code convenient.\r
\r
## Build your lesson project\r
\r
**Customer contact directory**\r
\r
A small team needs to add, find, update, and list contacts. Build an in-memory directory keyed by stable IDs. Allow duplicate display names, validate required fields, and make a missing ID understandable. Persistence is intentionally left for the next lesson, so today you can concentrate on data shape and operations.\r
\r
- A contact model with ID, name, city, and optional email.\r
- Operations to add, look up, update, search, and list records.\r
- A sample dataset containing duplicate names and missing optional values.\r
- An explanation of identity, validation, and ordering decisions.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- Why is an ID different from a display name?\r
- Which operations benefit from keyed lookup?\r
- What did you choose to do with missing and duplicate data?\r
\r
## References and next steps\r
\r
- [Python: data structures](https://docs.python.org/3/tutorial/datastructures.html)\r
\r
[← Lesson 4](../04_Day_Functions/) · [Lesson 6 →](../06_Day_Files_Errors_Debugging/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
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
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
