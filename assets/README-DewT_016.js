const e=`# 📘 Day 9 — How the Internet Works: Programs Talking to Programs\r
\r
![Day 9 visual](../images/days/day-09.svg)\r
\r
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
`;export{e as default};
