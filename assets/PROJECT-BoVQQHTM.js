const e=`# Lesson 11 project — Support-ticket domain model\r
\r
<!-- beginner-path:begin -->\r
## Your first action\r
\r
Draw the allowed ticket states and arrows between them. Decide what closing an already closed ticket should do.\r
\r
The download is a worked example to extend, not the finished project. Follow one milestone at a time, test the behaviour, and use the five acceptance checks as your done checklist. Those checks record your observations; ticking them does not run tests.\r
\r
**Use the kit:** extract the ZIP into its own folder, open that folder in your editor, and read the example file \`ticket.py\`. Run python ticket.py. dataclasses is part of the standard library.\r
\r
This revisits the support queue from Day 3. You are now putting its rules around each ticket's state.\r
\r
<!-- beginner-path:end -->\r
\r
## The customer problem\r
\r
A help desk needs tickets with stable IDs, readable titles, and controlled status changes. Build a small domain model with create, close, and optional reopen operations. Test invalid creation and repeated transitions. Compare your object-based design with a simpler alternative and explain which one you would use for this scope.\r
\r
**Learning goal:** Identify an object's identity, state, and related behavior. Keep domain rules in a clear place rather than spreading them across callers. Compare a class with a simpler representation using actual change scenarios.\r
\r
**Scope:** build the core version first. The starter is a worked example, not a finished solution to the full project. Use fictional or public sample data.\r
\r
## What to deliver\r
\r
- A ticket model and a written state-transition policy.\r
- Validation for required identity and title fields.\r
- Tests for normal, invalid, and repeated operations.\r
- A short class-versus-functions design comparison.\r
\r
Include a short README with the purpose, setup steps, example use, known limitations, and the evidence from your test cases. A reviewer should be able to tell which parts you implemented and which parts are demonstrations or mocks.\r
\r
## Build it in milestones\r
\r
### Milestone 1: Model the rules\r
\r
- Write the state-transition table and field constraints.\r
- Choose the policy for closing an already closed ticket.\r
\r
**Stop and check:** The expected outcome is clear before methods are implemented.\r
\r
### Milestone 2: Implement behavior\r
\r
- Keep transition validation together with the relevant operation.\r
- Decide how public field updates interact with your validation boundaries.\r
\r
**Stop and check:** The model's guarantees and limitations are stated accurately.\r
\r
### Milestone 3: Test and compare\r
\r
- Run the transition tests and inspect object identity.\r
- Compare the effort of adding one new rule in a simpler representation.\r
\r
**Stop and check:** Your design choice is supported by a concrete change example.\r
\r
## Acceptance checks\r
\r
- [ ] Tickets have stable IDs and validated non-blank titles.\r
- [ ] Supported states and transitions are documented.\r
- [ ] Closing an open ticket preserves identity and changes state correctly.\r
- [ ] Repeated or invalid transitions follow an explicit policy.\r
- [ ] Tests and a simpler-design comparison support the chosen model.\r
\r
These are the same checks shown in the app. Record the actual result and relevant evidence, rather than checking a box because the code looks plausible.\r
\r
## Test matrix\r
\r
| Case | Action or input | Expected behavior |\r
| --- | --- | --- |\r
| 1 | Create and close an open ticket | Same ID, closed status |\r
| 2 | Create a blank title | Clear validation failure |\r
| 3 | Close the same ticket twice | Documented rejection or idempotent result |\r
| 4 | Attempt an unsupported transition | No silently invalid state |\r
\r
Run the normal path and the failure paths. Keep a failed result visible in your notes until you understand and fix it. Re-run earlier passing cases after a change to catch regressions.\r
\r
## Starter and how to use it\r
\r
The download contains this brief, a small worked example named \`ticket.py\`, and its expected output. Run python ticket.py. dataclasses is part of the standard library.\r
\r
Read the example before extending it. Keep your own project in a separate working directory or repository. Do not store secrets, real customer information, or private documents in a public learning repository.\r
\r
## Stretch challenges\r
\r
- Add an append-only transition history with timestamps.\r
- Introduce reopen only after documenting who may use it and which states permit it.\r
\r
Choose an extension only after the acceptance checks pass. Describe what the extension changes in the data model, user flow, tests, or operating cost.\r
\r
## Review rubric and reflection\r
\r
- Which rule does the object own?\r
- What invariant can still be bypassed in your design?\r
- When would a dictionary and functions be clearer than this class?\r
\r
Score yourself on four areas: correctness against the brief, clarity of the implementation, useful failure handling, and strength of the evidence. For each area, record one thing that works and one thing you would improve. A polished screenshot alone does not establish that the project works.\r
\r
Finish with a short case study: **Problem → Approach → Tests → Results → Limitations → Next step.** Distinguish measured results from estimates. Record your evidence in the app's Record your build tab and keep a link to the project.\r
\r
## References\r
\r
- [Python: classes](https://docs.python.org/3/tutorial/classes.html)\r
- [Python: dataclasses](https://docs.python.org/3/library/dataclasses.html)\r
\r
[Return to lesson 11](README.md)\r
`;export{e as default};
