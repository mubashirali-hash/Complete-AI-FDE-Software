const e=`# Day 12 — Testing, regression evidence, and reading code\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** A regression suite for the expense calculator. You can take several study sessions.\r
\r
**The situation:** You fix the expense total. How will you know a future edit has not broken it again?\r
\r
### One idea: Make a test catch a real mistake\r
\r
A test compares an actual result with an expected result for a specific case. An assertion says that a condition must be true. A regression test keeps a fixed bug from quietly returning. First see the test fail for the bug, then make the smallest fix and see it pass. If the test never notices the bug, it is not checking the behaviour you need.\r
\r
**New words:**\r
\r
- **Assertion:** A check that fails when its condition is false.\r
- **Regression:** A previously working behaviour that breaks after a change.\r
- **Expected result:** The outcome established from the requirement, before observing the code.\r
\r
### Follow the example below\r
\r
1. The example defines the calculation and a set of assertions.\r
2. Each assertion checks one known result, including a boundary case.\r
3. A passing print message comes after the assertions, so a failing assertion interrupts that normal path.\r
\r
### Try one small decision\r
\r
A test expects 5 × 3 to equal 15, but the function returns 8. What is the useful next step?\r
\r
1. Change the expected result to 8\r
2. Delete the failing assertion\r
3. Fix the calculation and rerun the test\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
The expected result comes from the requirement, not the current bug.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
8 suggests addition was used where multiplication was needed.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Fix the calculation and rerun the test** Yes. Keep the requirement stable and make the implementation satisfy it.\r
\r
</details>\r
\r
**Then practise:** In a disposable copy, deliberately change one correct arithmetic operation. Run the tests to see a failure, restore it, and check that the tests pass again.\r
\r
**Your project's first action:** Choose one expense-calculation bug. Write its smallest failing input and independently calculate the correct output.\r
\r
**How it connects:** Return to the Day 7 tracker. Your quote functions from Day 4 also give you small calculations that are easy to test.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
A passing demonstration proves that one observed path worked. Tests preserve specific expectations so you can check them again after a change. Today you will learn to choose useful assertions, test boundaries independently of the implementation, and investigate a deliberately incorrect calculation before building a regression suite.\r
\r
**Your project:** [A regression suite for the expense calculator](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Write assertions that express an external requirement.\r
- Distinguish unit checks, integration checks, and a user workflow check.\r
- Create a regression case that detects a concrete bug.\r
\r
## Understand the concept\r
\r
### Expected results must come from the requirement\r
\r
If a test calculates its expected result by calling the same faulty implementation, it may only prove that the code agrees with itself. Use a manual reference example, a defined contract, or an independent oracle. Choose cases that would fail if the intended behavior were broken. A test suite is evidence about the cases and assertions it contains, not a mathematical guarantee that every possible input is correct.\r
\r
### Test at useful boundaries\r
\r
A unit test checks a small operation, such as a quote calculation. An integration check verifies that components cooperate, such as storing and restoring an expense. A workflow check asks whether the user can complete the whole task. Keep small deterministic checks fast and isolate external services with explicit fixtures where appropriate. A mock has a narrower meaning than a real provider test: it verifies your behavior against the mock's contract, not the provider's current availability.\r
\r
### Read code with a question\r
\r
Instead of reading every file equally, trace the path for a specific input or failure. Identify where input is validated, where state changes, and where output is produced. After locating the bug, first preserve a regression example that reproduces it. Make the smallest justified fix and rerun related cases. AI can propose both code and tests, but review whether the assertions would catch the reported problem rather than accepting the number of tests as a quality measure.\r
\r
## A worked example, step by step\r
\r
The expected total is calculated manually from the written contract, not by asking the function to provide its own expected value.\r
\r
\`\`\`python\r
def total_cents(price_cents, quantity):\r
    if price_cents < 0 or quantity < 0:\r
        raise ValueError("Negative input")\r
    return price_cents * quantity\r
\r
assert total_cents(250, 3) == 750\r
assert total_cents(250, 0) == 0\r
try:\r
    total_cents(250, -1)\r
except ValueError:\r
    print("Invalid-input case passed")\r
else:\r
    raise AssertionError("Negative quantity should be rejected")\r
print("3 regression cases passed")\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
Invalid-input case passed\r
3 regression cases passed\r
\`\`\`\r
\r
The first assertion checks a manually known normal result and the second checks a zero boundary. The try/except verifies a rejected input and the else branch makes the absence of an exception a failing test. If multiplication is accidentally changed to addition, the first two assertions fail. For a real suite, move these examples into a test runner such as unittest or pytest so results and failures are collected systematically. Do not use assert as the only guard on real user input because Python can disable assertions in optimized mode.\r
\r
## Practise before building\r
\r
### Exercise 1: Prove the test can fail\r
\r
In a disposable copy, change multiplication to addition and run the regression examples.\r
\r
**Hint:** A useful test should detect a plausible wrong implementation.\r
\r
**Check your result:** The test fails for the intended reason and passes again after repair.\r
\r
### Exercise 2: Choose independent expectations\r
\r
Write a manual expected quote for two line items, zero quantity, and a delivery fee.\r
\r
**Hint:** Do not calculate expected output using the function under test.\r
\r
**Check your result:** The reference values can be reviewed without reading the implementation.\r
\r
### Exercise 3: Trace one real file\r
\r
Read an earlier project's validation path and summarise its input, state change, and output in three sentences.\r
\r
**Hint:** Follow one task rather than describing every helper function.\r
\r
**Check your result:** Your summary predicts where a malformed input should be rejected.\r
\r
## Common mistakes and how to debug them\r
\r
- Writing expectations that duplicate the implementation's mistake.\r
- Mocking every layer and then claiming a real integration was verified.\r
- Counting passing tests without inspecting whether they assert useful behavior.\r
\r
## The FDE connection\r
\r
A customer asks how you know a change is safe. An FDE answers with concrete requirements, representative checks, and known limits. A clear regression case is stronger evidence than saying an AI assistant reviewed the code and it looks correct.\r
\r
## Build your lesson project\r
\r
**A regression suite for the expense calculator**\r
\r
The expense calculator once produced an incorrect total. Build a repeatable test suite that captures that failure, normal calculations, zero values, invalid input, and a storage round trip. Keep the expected results independent and write a short report describing what the suite establishes and what still requires a workflow or provider check.\r
\r
- A test module runnable with unittest or pytest.\r
- A regression case for a documented calculation bug.\r
- Boundary, invalid-input, and storage integration cases.\r
- A report of assertions, observed results, and coverage limits.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- What requirement does each assertion establish?\r
- Which test could pass while the application is still unusable?\r
- How did you know the regression test was capable of detecting the bug?\r
\r
## References and next steps\r
\r
- [Python: unittest](https://docs.python.org/3/library/unittest.html)\r
- [pytest: getting started](https://docs.pytest.org/en/stable/getting-started.html)\r
\r
[← Lesson 11](../11_Day_OOP_Essentials/) · [Lesson 13 →](../13_Day_First_Web_App/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Concept:** A test is **executable proof** that code does what you claim. In the AI era this matters *more*, not less: AI writes fast, sounds confident, and is sometimes wrong. Your job as the senior: **prove it works, don't trust it works.** "How do you know?" is the most important question in engineering.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### What a test actually is\r
\r
\`\`\`python\r
def add(a, b):\r
    return a + b\r
\r
def test_add():\r
    assert add(2, 3) == 5          # the claim, in code\r
    assert add(-1, 1) == 0         # edge case: negatives\r
    assert add(0, 0) == 0          # edge case: zeros\r
\r
# run with: pytest\r
\`\`\`\r
\r
\`assert\` = "this MUST be true, or scream." A test file is a list of claims about your code. Run \`pytest\`, and it checks every claim in milliseconds. **Green = the claims hold. Red = something broke** — and it tells you exactly which claim.\r
\r
### The anatomy: Arrange–Act–Assert\r
\r
\`\`\`python\r
def test_withdraw_too_much():\r
    acc = BankAccount("M", 100)          # ARRANGE: set up the world\r
    result = acc.withdraw(500)           # ACT: do the thing\r
    assert result == "Insufficient funds."  # ASSERT: check the outcome\r
    assert acc.balance == 100            # ASSERT: check nothing else broke\r
\`\`\`\r
\r
Three beats. Every test you'll ever write is this rhythm.\r
\r
### What to test (the judgment)\r
\r
- **The contract**: does it do what it promises? (withdraw refuses overdraft)\r
- **The edges**: zeros, empties, negatives, duplicates — where bugs live.\r
- **The failures**: bad input → graceful message, not traceback (day 6).\r
\r
You don't test *everything* — you test **what would embarrass you if it broke in front of a client**.\r
\r
### Reading code: the other half of trust\r
\r
Half of engineering is reading *other people's* code — libraries, AI output, teammates' PRs. The method: **don't read top-to-bottom.** Find the entry point (\`main\`), then follow the calls. Ask at each function: what does it promise? Skim the how; verify the what.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "I have an expense tracker with functions: add_expense, totals_by_category, save/load. Write pytest tests for: 1) adding a valid expense increases the list, 2) totals_by_category math is correct with 3 categories, 3) adding with an empty category is rejected gracefully, 4) save then load preserves all data exactly. For each test, use arrange-act-assert and name it test_<what>_<expected>. Then run them."\r
\r
Then the twist — **you** write one more test the AI didn't think of. That's the senior move: the test suite is only as good as the imagination behind it.\r
\r
## 3. Evaluate — be the senior\r
\r
- Run \`pytest -v\`. All green? Now **break your code on purpose** (change a \`+\` to \`-\` in totals) and re-run. Does the suite catch it? A test suite that can't catch a deliberate bug is decoration.\r
- **Mutation review:** for each test, ask "what bug would slip past this test?" Write down one gap per test file. Gaps are normal — *knowing* them is the skill.\r
- Read one real file from an open-source project you use (e.g., a small function in \`requests\`). Entry point → follow calls → 3-sentence summary. Time yourself: 15 minutes max.\r
- Ask the AI: "Quiz me — what's the difference between testing the contract vs testing the insides? Why do we test edges more than happy paths?"\r
\r
## 4. Business lens 💼\r
\r
**"How do you know it works?"** — the first question any serious client asks, and the question that kills most freelancers. Your answer: *"Here's the test suite — 24 checks, all green, run on every change."* Tests are **proof you can sell**. They also let you change code fearlessly later — which is what clients pay maintenance for.\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
Test your day-2 converter: correct conversions + non-number input handled. Four tests minimum.\r
\r
### Level 2\r
**Test the AI's work:** have AI write a \`discount(price, percent)\` function. Don't read it — write tests from the *spec* first (0%, 100%, negative price, percent > 100), then run them against AI's code. Did it pass? This is how you review AI output professionally.\r
\r
### Level 3\r
**Find a real bug:** run your full expense-tracker suite, then have AI "improve" one function. Re-run. If something goes red, you just experienced *regression* — and your suite earning its keep. Write down what the suite caught that your eyes didn't.\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can explain arrange-act-assert and what makes a good test target, without notes\r
- [ ] Your suite catches a deliberately introduced bug\r
- [ ] You can summarize a stranger's code file in 3 sentences after 15 minutes\r
- [ ] Committed and pushed to GitHub\r
\r
> 🔭 **Coming back to this:** in [Phase 2, week 3](../31_Phase2_Build_Like_An_Engineer/) you'll take testing pro — 70%+ coverage, CI pipelines, tests as team practice. Today you learned to trust your code. There, you'll make *teams* trust it.\r
\r
## 📎 The one link\r
\r
[pytest — Getting Started](https://docs.pytest.org/en/stable/getting-started.html) — everything you need, nothing you don't.\r
\r
---\r
\r
[← Day 11](../11_Day_OOP_Essentials/) · [Day 13 →](../13_Day_First_Web_App/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
