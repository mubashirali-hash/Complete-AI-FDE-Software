import{c as j,r as s,j as e,b as L,C as P}from"./index-CZEgIOog.js";import{R as A}from"./rotate-ccw-DTf2ffPF.js";import{T as M}from"./terminal-DClkhWns.js";const I=j("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);const T=j("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);const z=j("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);const H=j("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]),m=[{id:"hello",title:"Your first program",language:"python",day:1,task:"Change the name, add a city, and print a single welcome sentence containing both.",hint:"Create a city variable. An f-string can include variables inside braces.",code:`name = "Future engineer"
print(f"Hello, {name}! Welcome to FDE Academy.")
`},{id:"types",title:"Numbers or text?",language:"python",day:2,task:"The total prints 22. Convert the values to numbers so it prints 4. Explain why your change works.",hint:'int("2") converts the text "2" into the integer 2.',code:`first = "2"
second = "2"
print(first + second)
`},{id:"conditions",title:"The boundary case",language:"python",day:3,task:"Make exactly 10 tickets count as busy. Test 9, 10, and 11 before deciding the fix works.",hint:"> excludes equality. >= includes equality.",code:`open_tickets = 10
if open_tickets > 10:
    print("Busy")
else:
    print("Manageable")
`},{id:"functions",title:"A clear contract",language:"python",day:4,task:"Add a check that rejects negative quantities. Test zero, a normal quantity, and a negative quantity.",hint:"Raise ValueError when quantity < 0. Keep the normal return behavior.",code:`def total_cost(price, quantity):
    return price * quantity

print(total_cost(5, 3))
print(total_cost(5, 0))
`},{id:"collections",title:"Model a support queue",language:"python",day:5,task:"Add a second ticket with a different ID. Print only the IDs of tickets whose status is open.",hint:'Loop through tickets.items() and check ticket["status"].',code:`tickets = {
    "T-001": {"customer": "Ali", "status": "open"},
}
for ticket_id, ticket in tickets.items():
    print(ticket_id, ticket["status"])
`},{id:"json",title:"Read an API response",language:"python",day:9,task:"Change the payload to omit temperature. Handle the missing value with a useful message instead of a crash.",hint:'Dictionary.get("temperature") can return None. Check it before displaying a temperature.',code:`import json

payload = '{"city": "Lahore", "temperature": 28}'
data = json.loads(payload)
print(f"{data['city']}: {data['temperature']} C")
`},{id:"tests",title:"Catch a regression",language:"python",day:12,task:"The test fails. Fix the function without changing the expected result, then add a zero-quantity test.",hint:"A total is price multiplied by quantity, not price plus quantity.",code:`def total_cost(price, quantity):
    return price + quantity

assert total_cost(5, 3) == 15, "Expected a total of 15"
print("All tests passed")
`},{id:"tokens",title:"Estimate an AI budget",language:"python",day:15,task:"Using these fictional prices, include 500 output tokens per request at $4 per million. Print the total monthly estimate.",hint:"Calculate input and output costs separately, then add them. These are exercise assumptions, not current model prices.",code:`# Fictional exercise prices, not a provider quote
requests = 10000
input_tokens = 1000
input_price_per_million = 1.00
input_cost = requests * input_tokens / 1000000 * input_price_per_million
print(f"Input estimate: \${input_cost:.2f}")
`},{id:"evals",title:"Score an evaluation",language:"python",day:22,task:"Print accuracy as a percentage. Add a case where an unsupported answer should be rejected.",hint:"Count equal expected/predicted pairs, divide by the number of cases, then multiply by 100.",code:`cases = [
    {"expected": "billing", "predicted": "billing"},
    {"expected": "technical", "predicted": "billing"},
    {"expected": "general", "predicted": "general"},
]
correct = sum(case["expected"] == case["predicted"] for case in cases)
print(f"Correct: {correct}/{len(cases)}")
`},{id:"javascript",title:"Update a ticket count",language:"javascript",day:3,task:"Start with 10 tickets, add 2, then close 3. Print the final count and explain each change.",hint:"Use openTickets = openTickets - 3 to close three tickets.",code:`let openTickets = 10;
openTickets = openTickets + 2;
console.log(openTickets);
`},{id:"frontend",title:"Build a tiny interface",language:"html",day:13,task:"Add a labelled text input for the customer name. Change the button so it welcomes that customer.",hint:'Use a label with for="name" and an input with id="name". Read its value in the click handler.',code:`<!doctype html>
<html lang="en">
<head>
<style>
body { font-family: system-ui; padding: 24px; color: #254b3e; }
button { background: #254b3e; color: white; padding: 12px 20px; border: 0; border-radius: 8px; cursor: pointer; }
</style>
</head>
<body>
<h1>Your first interface</h1>
<p id="message">Ready to build something useful?</p>
<button onclick="document.getElementById('message').textContent = 'Hello, engineer!'">Say hello</button>
</body>
</html>
`}],D=i=>m.find(l=>l.day===i)||m.find(l=>l.day<=i&&l.language==="python"&&l.day===Math.max(...m.filter(r=>r.language==="python"&&r.day<=i).map(r=>r.day)))||m[0];function W({progress:i,update:l,day:r}){const[t,R]=s.useState(r?D(r):m[0]),f=i.drafts[t.id]??t.code,[w,c]=s.useState([]),[u,o]=s.useState("idle"),[b,v]=s.useState(!1),[N,k]=s.useState(""),[S,q]=s.useState(!1),g=s.useRef(null),y=s.useRef(void 0),d=s.useRef(0),x=()=>{clearTimeout(y.current),g.current?.contentWindow?.postMessage({type:"fde:stop"},"*")};s.useEffect(()=>{const n=p=>{if(p.source!==g.current?.contentWindow||p.data?.source!=="fde-runner")return;const a=p.data;if(a.type==="loaded"){q(!0);return}a.id===d.current&&(a.type==="ready"&&(o("running"),clearTimeout(y.current),y.current=setTimeout(()=>{x(),d.current++,o("error"),c(h=>[...h,"Stopped after 5 seconds. Check your loop’s stop condition."])},5e3)),a.type==="output"&&typeof a.text=="string"&&c(h=>h.length<200?[...h,a.text.slice(0,4e3)]:h),(a.type==="done"||a.type==="error")&&(clearTimeout(y.current),o(a.type==="done"?"done":"error"),a.type==="error"&&c(h=>[...h,String(a.text||"The program failed.").slice(0,6e3)]),g.current?.contentWindow?.postMessage({type:"fde:stop"},"*")))};return window.addEventListener("message",n),()=>{window.removeEventListener("message",n),clearTimeout(y.current),g.current?.contentWindow?.postMessage({type:"fde:stop"},"*")}},[]);const E=()=>{if(x(),c([]),d.current++,t.language==="html"){k(f),o("done");return}o("loading"),g.current?.contentWindow?.postMessage({type:"fde:run",id:d.current,code:f,language:t.language},"*"),y.current=setTimeout(()=>{x(),d.current++,o("error"),c(["The runtime did not load within 60 seconds. Python needs a connection to cdn.jsdelivr.net. Try JavaScript or run Python locally."])},6e4)},_=n=>{x(),d.current++,R(m.find(p=>p.id===n)),c([]),o("idle"),v(!1),k("")},C=u==="loading"||u==="running";return e.jsxs(e.Fragment,{children:[!r&&e.jsx(L,{eyebrow:"LEARN BY DOING",title:"Your practice lab",description:"Predict the result. Run it. Change one thing. Explain what happened."}),e.jsxs("div",{className:"lab-controls",children:[e.jsxs("div",{className:"select-wrap",children:[e.jsx(P,{size:17}),e.jsx("label",{className:"sr-only",htmlFor:"lab-select",children:"Choose an exercise"}),e.jsx("select",{id:"lab-select",value:t.id,onChange:n=>_(n.target.value),children:m.map(n=>e.jsxs("option",{value:n.id,children:[n.title," · ",n.language==="html"?"HTML / CSS":n.language]},n.id))}),e.jsx(I,{size:15})]}),e.jsx("span",{className:"badge",children:t.language==="html"?"HTML + CSS + JS":t.language==="python"?"Python":"JavaScript"})]}),e.jsxs("div",{className:"lab-brief",children:[e.jsx("div",{className:"eyebrow",children:"YOUR CHALLENGE"}),e.jsx("h2",{children:t.title}),e.jsx("p",{children:t.task}),e.jsxs("button",{className:"text-button",onClick:()=>v(!b),"aria-expanded":b,children:[e.jsx(T,{size:16}),b?"Hide hint":"Give me a hint"]}),b&&e.jsx("p",{className:"hint",children:t.hint})]}),e.jsxs("div",{className:"playground",children:[e.jsxs("div",{className:"editor-pane",children:[e.jsxs("div",{className:"editor-heading",children:[e.jsxs("span",{children:[e.jsx("span",{className:"window-dot"}),e.jsx("span",{className:"window-dot"}),e.jsx("span",{className:"window-dot"})]}),e.jsx("span",{children:t.language==="python"?"main.py":t.language==="html"?"index.html":"main.js"}),e.jsx("button",{"aria-label":"Reset exercise code",title:"Reset code",onClick:()=>{f!==t.code&&!window.confirm("Replace your edits with the starter code?")||(x(),d.current++,l({...i,drafts:{...i.drafts,[t.id]:t.code}}),o("idle"),c([]),k(""))},children:e.jsx(A,{size:15})})]}),e.jsx("label",{className:"sr-only",htmlFor:"code-editor",children:"Code editor"}),e.jsx("textarea",{id:"code-editor",className:"code-editor",spellCheck:!1,value:f,"aria-describedby":"code-editor-help",onChange:n=>l({...i,drafts:{...i.drafts,[t.id]:n.target.value.slice(0,5e4)}})}),e.jsxs("div",{className:"editor-footer",children:[e.jsxs("span",{children:[f.split(`
`).length," lines ",e.jsx("span",{className:"dot-divider",children:"·"})," ",t.language]}),C?e.jsxs("button",{className:"button light small",onClick:()=>{x(),d.current++,o("idle"),c(n=>[...n,"Execution stopped."])},children:[e.jsx(H,{size:13}),"Stop"]}):e.jsxs("button",{className:"button lime small",onClick:E,disabled:t.language!=="html"&&!S,children:[e.jsx(z,{size:14}),t.language==="html"?"Preview":"Run code"]})]})]}),e.jsxs("div",{className:"output-pane",children:[e.jsxs("div",{className:"output-heading",children:[e.jsxs("span",{children:[e.jsx(M,{size:15}),t.language==="html"?"Live preview":"Output"]}),e.jsx("span",{className:`runner-status ${u}`,children:u==="loading"?"Loading runtime…":u==="running"?"Running…":u==="done"?"Finished":u==="error"?"Check the error":"Ready"})]}),t.language==="html"&&N?e.jsx("iframe",{title:"Your HTML preview",className:"html-preview",srcDoc:N,sandbox:"allow-scripts"}):e.jsx("div",{className:"console-output",role:"log","aria-live":"polite",children:w.length?w.map((n,p)=>e.jsx("pre",{children:n},p)):e.jsx("p",{className:"console-placeholder",children:C?"Preparing your program…":`Your output will appear here.
Make a prediction before you press Run.`})})]})]}),e.jsxs("p",{className:"lab-note",id:"code-editor-help",children:["Use spaces for indentation; Tab moves to the next control. Execution stops after 5 seconds. Python downloads its runtime on first use; use variables instead of ",e.jsx("code",{children:"input()"}),". No model API key is needed."]}),e.jsx("iframe",{ref:g,title:"Code execution runner",src:"/Complete-AI-FDE-Software/sandbox.html",sandbox:"allow-scripts",className:"runner-frame","aria-hidden":"true",tabIndex:-1}),!r&&e.jsxs("div",{className:"callout",children:[e.jsx(T,{size:22}),e.jsxs("div",{children:[e.jsx("strong",{children:"The result is only half the exercise."}),e.jsx("p",{children:"Try a boundary case. Read an error. Explain the fix in plain words. That’s how a useful experiment becomes a skill."})]}),e.jsx("a",{href:`#/lesson/${t.day}`,className:"text-link",children:"Read the lesson"})]})]})}export{W as default};
