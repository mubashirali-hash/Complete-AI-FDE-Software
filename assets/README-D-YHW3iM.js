const e=`# Day 9 — HTTP requests, API contracts, and JSON boundaries\r
\r
<!-- beginner-path:begin -->\r
## Start here — one idea at a time\r
\r
**Your goal:** Weather-service adapter with offline fixtures. You can take several study sessions.\r
\r
**The situation:** Your weather tool asks another service for information. Sometimes the reply is missing a temperature.\r
\r
### One idea: Follow a request and its response\r
\r
An API is an agreed way for programs to communicate. With HTTP, your program sends a request and the server returns a response. The response has a status and may contain JSON data. A successful network response can still contain unexpected fields. Check both the response status and the data you need before displaying a result.\r
\r
**New words:**\r
\r
- **Request:** A message asking a server to do or return something.\r
- **Response:** The server's reply to that message.\r
- **Fixture:** A saved example used to test behaviour without a live service.\r
\r
### Follow the example below\r
\r
1. The example uses a saved JSON response, so it does not call a live weather service.\r
2. It reads the data and checks the fields needed for a weather result.\r
3. The adapter converts outside data into a shape your own program understands.\r
\r
### Try one small decision\r
\r
A response says status 200 but its JSON has no temperature. What should the weather app do?\r
\r
1. Show 0 degrees without explanation\r
2. Assume success because 200 was returned\r
3. Show a clear missing-data result\r
\r
<details>\r
<summary>A small hint</summary>\r
\r
Separate delivery of a response from usefulness of its contents.\r
\r
</details>\r
\r
<details>\r
<summary>Another hint</summary>\r
\r
A missing temperature is unknown, not zero.\r
\r
</details>\r
\r
<details>\r
<summary>Answer and explanation</summary>\r
\r
**Show a clear missing-data result** Yes. Check the content as well as the HTTP status and handle missing measurements explicitly.\r
\r
</details>\r
\r
**Then practise:** Remove temperature from the saved response in the example. Run it and check whether it reports missing data clearly rather than inventing a value.\r
\r
**Your project's first action:** Draw client → request → service → response → display. Write the expected result for both a complete reply and a reply missing temperature.\r
\r
**How it connects:** Reuse your validation and error-handling skills. Offline fixtures let you test failures repeatedly before connecting a real service.\r
\r
Use the app's **Learn → Practise → Project → Record your build** flow, or continue below for the detailed explanation and worked example. The app remembers your reading step and activity in this browser.\r
\r
<!-- beginner-path:end -->\r
\r
When one program asks another for information, both sides need an agreed contract. HTTP carries the request and response; JSON is a common representation for the data inside them. Today you will trace that round trip, distinguish transport errors from invalid payloads, and build an adapter that turns an external-style weather response into a dependable internal result.\r
\r
**Your project:** [Weather-service adapter with offline fixtures](PROJECT.md). Read the lesson, run the worked example, then build the project in stages. Projects may take more than one study session.\r
\r
## What you will be able to do\r
\r
- Describe the method, URL, headers, status, and body of an HTTP exchange.\r
- Parse and validate a JSON response before using its fields.\r
- Design explicit behavior for timeouts, missing data, and service errors.\r
\r
## Understand the concept\r
\r
### Requests ask for a defined operation\r
\r
An HTTP request identifies a resource through its URL and a method such as GET or POST. Headers carry metadata, while a body can carry input data. The response includes a status code and may include a body. A successful connection does not guarantee a successful operation; inspect the status and the endpoint contract. GET generally retrieves a representation, while POST submits data for processing according to the service's definition. Know whether a retry could repeat a side effect before retrying an operation.\r
\r
### JSON is packaging, not a guarantee\r
\r
Parsing JSON converts a text representation into values. It does not establish that expected fields exist, units are correct, or the service supplied current data. Map the provider's payload into a small internal shape so the rest of your application is not coupled to every external field. Preserve an explicit unit and source timestamp when they matter. A missing temperature should remain missing; silently replacing it with zero can turn an integration failure into a plausible weather report.\r
\r
### Failure categories guide recovery\r
\r
An invalid city, a rate limit, an authentication failure, and a temporary outage call for different actions. A timeout needs a finite waiting policy. Retrying invalid input usually wastes time, while unbounded retries during an outage can worsen it. Return a useful error category to the caller and retain safe request context for diagnosis. During learning, local fixtures let you test these cases repeatably without relying on a live provider's uptime or consuming API credits.\r
\r
## A worked example, step by step\r
\r
The provider-style response uses a nested field. The adapter exposes a simpler shape with explicit units.\r
\r
\`\`\`python\r
import json\r
\r
payload = '{"city": "Lahore", "current": {"temperature_c": 28}}'\r
data = json.loads(payload)\r
temperature = data.get("current", {}).get("temperature_c")\r
if not isinstance(temperature, (int, float)):\r
    raise ValueError("Weather response is missing a numeric temperature")\r
result = {"city": data["city"], "temperature": temperature, "unit": "C"}\r
print(f"Fixture: {result['city']} {result['temperature']} {result['unit']}")\r
\`\`\`\r
\r
**Expected result**\r
\r
\`\`\`text\r
Fixture: Lahore 28 C\r
\`\`\`\r
\r
The example begins with a deliberately labelled fixture, not a real network result. loads parses it, and the adapter inspects the field it actually needs. The numeric check prevents unsupported data from entering the internal result. The mapping separates provider names from application names and retains the unit. A fuller adapter must also check object shapes before calling get, inspect HTTP status before parsing success data, and avoid accepting booleans as temperatures if its contract excludes them.\r
\r
## Practise before building\r
\r
### Exercise 1: Draw the round trip\r
\r
Label the request method, destination, response status, payload parsing, and internal mapping.\r
\r
**Hint:** Keep the network operation separate from the data conversion.\r
\r
**Check your result:** You can explain where each category of failure occurs.\r
\r
### Exercise 2: Break the response shape\r
\r
Try malformed JSON, an array instead of an object, a missing current object, and a text temperature.\r
\r
**Hint:** Validate outer shape before nested lookup.\r
\r
**Check your result:** Each invalid response produces a clear adapter failure rather than a fabricated measurement.\r
\r
### Exercise 3: Define a retry policy\r
\r
State what happens for a timeout, invalid city, and rate limit.\r
\r
**Hint:** Specify attempt count and wait limits for failures you choose to retry.\r
\r
**Check your result:** No policy retries indefinitely or treats invalid input as transient success.\r
\r
## Common mistakes and how to debug them\r
\r
- Treating any response body as successful data without checking status.\r
- Assuming parsed JSON has the right shape and units.\r
- Retrying every error indefinitely or displaying a fixture as live information.\r
\r
## The FDE connection\r
\r
An FDE often connects a customer's existing services rather than replacing them. An adapter creates a manageable boundary: provider details and failures are translated into a stable application contract that can be tested independently.\r
\r
## Build your lesson project\r
\r
**Weather-service adapter with offline fixtures**\r
\r
A travel dashboard needs a city and clearly labelled temperature, but its provider can return incomplete data or fail. Build an adapter with a fixture transport for repeatable tests and an optional live transport based on a provider's current documentation. Keep the UI independent of the provider's payload shape and distinguish offline demonstration data from live results.\r
\r
- A documented request/response and internal-result contract.\r
- Fixture cases for valid data, missing data, timeout, and service error.\r
- A validated adapter and a thin display layer.\r
- An explicit retry policy and optional live-provider setup notes.\r
\r
Open [the complete project guide](PROJECT.md) for milestones, acceptance checks, a test matrix, extension challenges, and a review rubric. The app's Project tab includes a starter-kit download and a checklist that saves your progress.\r
\r
## Explain it back\r
\r
- What is transport failure versus payload failure?\r
- Which provider details should the rest of the app not depend on?\r
- How does retrying a read differ from retrying an operation with side effects?\r
\r
## References and next steps\r
\r
- [MDN: HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)\r
- [Python: urllib.request](https://docs.python.org/3/library/urllib.request.html)\r
\r
[← Lesson 8](../08_Day_Git_GitHub/) · [Lesson 10 →](../10_Day_Environments_Packages/)\r
\r
<details>\r
<summary>Optional original workshop and alternative exercises</summary>\r
\r
<!-- original-workshop:begin -->\r
**Concept:** The internet is **programs talking to programs**. HTTP is the language they speak. An API is a **contract**: "ask me this way, I'll answer that way." JSON is the **packaging** data travels in. Learn this once and every "integration" you'll ever do is the same shape.\r
\r
**Time:** ~60–90 minutes. **Rule:** explain the concept in plain words, or the day doesn't count.\r
\r
---\r
\r
## 1. Learn — the concept\r
\r
### The conversation\r
\r
Every time software uses the internet, this happens:\r
\r
\`\`\`\r
Your program                          Their server\r
     |                                      |\r
     |---  REQUEST  ----------------------->|\r
     |     "GET /weather?city=Lahore"       |\r
     |     (plus headers: who I am)         |\r
     |                                      |\r
     |<--  RESPONSE  ------------------------|\r
     |     Status: 200 OK                   |\r
     |     Body: { "temp": 34, ... }         |\r
\`\`\`\r
\r
- **Request**: what you want, and any data the server needs.\r
- **Response**: a **status code** (did it work?) + a **body** (the data).\r
- Status codes: \`200\` = OK, \`404\` = not found, \`500\` = their server broke, \`401\` = who are you? (auth needed).\r
\r
### JSON: the packaging\r
\r
\`\`\`json\r
{\r
  "city": "Lahore",\r
  "temperature_c": 34,\r
  "conditions": "sunny",\r
  "forecast": [\r
    {"day": "Tue", "temp_c": 35},\r
    {"day": "Wed", "temp_c": 33}\r
  ]\r
}\r
\`\`\`\r
\r
Look familiar? **It's a dict containing a list of dicts** — day 5's data modeling, traveling over the network. JSON is just text formatted so every language can read it. \`requests.get(url).json()\` turns that text back into Python dicts you already know.\r
\r
### APIs: the contract\r
\r
An API says: "call *this* URL with *these* parameters, you'll get *that* shape back." The docs are the contract. Your job: **read the contract, then write code that honors it** — exactly like honoring a function contract (day 4), but across the internet.\r
\r
---\r
\r
## 2. Specify — direct the AI\r
\r
> "Build a weather CLI using the Open-Meteo API (no key needed — https://api.open-meteo.com/v1/forecast?latitude=31.57&longitude=74.36&current=temperature_2m). It should: 1) ask for a city name, 2) convert city → coordinates using their geocoding API (https://geocoding-api.open-meteo.com/v1/search?name=Lahore&count=1), 3) fetch and display current temperature + conditions, 4) handle: city not found (show 'City not found'), network failure (show 'Could not reach the weather service'), 5) print the raw JSON too, so I can see the packaging. Use the requests library."\r
\r
Two APIs chained (geocode → forecast) — that's a real integration pattern.\r
\r
## 3. Evaluate — be the senior\r
\r
- **Draw the round trip** for one city lookup: how many HTTP requests happen? What does each request contain? What does each response contain? (Answer: 2 — geocode, then forecast.)\r
- Disconnect your internet (or turn on airplane mode) and run it. Which of your error handlers fires? Is the message human-friendly?\r
- Search for a nonsense city (\`asdfgh\`). Then a real one. Compare the two responses — status codes, bodies.\r
- Ask the AI: "Quiz me — what travels in the request vs the response? What's a status code *for*? Why is JSON text and not Python dicts?"\r
\r
## 4. Business lens 💼\r
\r
Almost every paid AI product is **"our system + someone else's API"** — weather data, payments (Stripe), maps, SMS, WhatsApp. Integration work is where enormous freelance money lives, because every business needs *their* systems connected and nobody else will do it. Today you learned the universal shape of all of it: **read the contract, honor the contract, handle the failures.**\r
\r
---\r
\r
## 💻 Exercises\r
\r
### Level 1\r
Print the raw JSON of a weather response, formatted nicely (\`json.dumps(data, indent=2)\`). Point at each part and name it: "this is a dict, this is a list of dicts…"\r
\r
### Level 2\r
Add a **5-day forecast** display. Spec first: which API parameter gives daily data? (Read the Open-Meteo docs — *you* find it, that's the skill.)\r
\r
### Level 3\r
**Cache it:** if the user asks for the same city twice within 10 minutes, don't call the API again — serve the saved answer. Specify: where does the cached data live? How do you know it's stale? (This is day-6 persistence + a real production pattern. API calls cost money and time — caching is business.)\r
\r
---\r
\r
## ✅ Done when\r
\r
- [ ] You can draw and narrate the full request/response round trip without notes\r
- [ ] You can explain what status codes are *for* and name the big four\r
- [ ] Your CLI handles: unknown city, no network, garbage input — all gracefully\r
- [ ] Committed to GitHub\r
\r
## 📎 The one link\r
\r
[MDN — HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) — the clearest HTTP explainer anywhere.\r
\r
---\r
\r
[← Day 8](../08_Day_Git_GitHub/) · [Day 10 →](../10_Day_Environments_Packages/)\r
<!-- original-workshop:end -->\r
\r
</details>\r
`;export{e as default};
