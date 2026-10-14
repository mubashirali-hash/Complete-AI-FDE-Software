import{c as j,j as e,b as v,F as d,f as m,o as x,A as c,u as l,g as k,P as g,m as y}from"./index-CZEgIOog.js";import{D as N}from"./download-CQyjFtfN.js";import{C as b}from"./circle-check-Dmb4-iLe.js";const $=j("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);function R({progress:a,update:p}){const t=(s,n)=>p({...a,projects:{...a.projects,[s]:n}}),u=()=>{const s=m.map(n=>{const o=a.projects[n.id]||x();return`## ${n.title}

${n.description}

Demo: ${o.demo||"Not recorded"}
Repository: ${o.repo||"Not recorded"}

### Evidence and reflection

${o.notes||"Not recorded"}

### Self-assessment

${n.checks.map((i,r)=>`- [${o.checks[r]?"x":" "}] ${i}`).join(`
`)}`});y("fde-portfolio.md",`# ${a.name?`${a.name} — `:""}FDE Learning Portfolio

Self-reported learning evidence. Links and results have not been independently verified.

${s.join(`

---

`)}`,"text/markdown")};return e.jsxs(e.Fragment,{children:[e.jsx(v,{eyebrow:"PROOF OF WORK",title:"Build a portfolio with evidence.",description:"Show the problem, your decisions, what you tested, and what actually happened.",action:e.jsxs("button",{className:"button light",onClick:u,children:[e.jsx(N,{size:16}),"Export portfolio"]})}),e.jsxs("div",{className:"portfolio-intro",children:[e.jsx(d,{size:24}),e.jsxs("div",{children:[e.jsx("strong",{children:"Your project is the story. Evidence makes it credible."}),e.jsx("p",{children:"Record a demo, repository, and honest reflection. Checks are your own assessment; the app does not verify links or certify readiness."})]})]}),e.jsx("div",{className:"portfolio-grid",children:m.map(s=>{const n=a.projects[s.id]||x(),o=n.checks.filter(Boolean).length;return e.jsxs("section",{className:"project-card",children:[e.jsxs("div",{className:"project-heading",children:[e.jsxs("div",{children:[e.jsx("p",{className:"eyebrow",children:s.type}),e.jsx("h2",{children:s.title})]}),e.jsx("span",{className:"project-symbol",children:e.jsx(d,{size:22})})]}),e.jsx("p",{className:"muted",children:s.description}),e.jsxs("a",{href:`#/lesson/${s.day}`,className:"text-link small-text",children:["Open lesson ",s.day,e.jsx(c,{size:14})]}),e.jsx("label",{className:"form-label",htmlFor:`${s.id}-demo`,children:"Live demo URL"}),e.jsxs("div",{className:"url-input",children:[e.jsx($,{size:15}),e.jsx("input",{id:`${s.id}-demo`,type:"url",value:n.demo,placeholder:"https://your-demo.example",maxLength:2e3,onChange:i=>t(s.id,{...n,demo:i.target.value})})]}),n.demo&&!l(n.demo)&&e.jsx("p",{className:"inline-warning",children:"Use a complete http:// or https:// URL."}),e.jsx("label",{className:"form-label",htmlFor:`${s.id}-repo`,children:"Repository URL"}),e.jsxs("div",{className:"url-input",children:[e.jsx(d,{size:15}),e.jsx("input",{id:`${s.id}-repo`,type:"url",value:n.repo,placeholder:"https://github.com/you/project",maxLength:2e3,onChange:i=>t(s.id,{...n,repo:i.target.value})})]}),n.repo&&!l(n.repo)&&e.jsx("p",{className:"inline-warning",children:"Use a complete http:// or https:// URL."}),e.jsx("label",{className:"form-label",htmlFor:`${s.id}-notes`,children:"Decisions, tests & results"}),e.jsx("textarea",{id:`${s.id}-notes`,className:"notes-field",rows:4,maxLength:1e4,value:n.notes,placeholder:"The problem was… I chose… I tested… The result was…",onChange:i=>t(s.id,{...n,notes:i.target.value})}),e.jsx("div",{className:"project-checks",children:s.checks.map((i,r)=>e.jsx(k,{checked:n.checks[r]||!1,onChange:f=>{const h=[...n.checks];h[r]=f,t(s.id,{...n,checks:h})},children:i},i))}),e.jsx(g,{value:o/s.checks.length*100,label:`${s.title} self-assessment`}),e.jsxs("div",{className:"project-footer",children:[e.jsxs("span",{children:[e.jsx(b,{size:14}),o," / ",s.checks.length," checks recorded"]}),e.jsxs("div",{children:[l(n.demo)&&e.jsxs("a",{href:l(n.demo),target:"_blank",rel:"noopener noreferrer",children:["Demo",e.jsx(c,{size:13})]}),l(n.repo)&&e.jsxs("a",{href:l(n.repo),target:"_blank",rel:"noopener noreferrer",children:["Code",e.jsx(c,{size:13})]})]})]})]},s.id)})})]})}export{R as default};
