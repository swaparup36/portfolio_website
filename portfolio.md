# Portfolio Content: Swaparup Mukherjee

> **For the agent building the site:** this file is the only source of facts. Use only what's written here and don't invent numbers, employers, testimonials or skill levels. Keep each project's links exactly as given. Sections are listed in a suggested page order. The "Site notes" section at the end covers tone, layout ideas and what to leave out.

---

## 1. Hero / About

- **Name:** Swaparup Mukherjee
- **Title:** Backend & Web3 Engineer
- **Tagline options (pick one):**
  - "I build backends that don't sleep: distributed systems, real-time infrastructure and on-chain apps."
  - "Backend and distributed systems engineer, building scalable APIs, real-time infra and smart contracts."
  - Web3 (EVM) angle: "Web3 full-stack developer building EVM-based dApps and smart contracts: DeFi automation, oracle-driven execution and permissionless on-chain systems."
  - Web3 (Solana) angle: "Web3 full-stack developer building Solana-native dApps: Anchor (Rust) programs, wallet integrations and scalable blockchain backends."
- **Status:** Final-year B.Tech student at NIT Agartala (graduating 2027). Google Summer of Code 2026 contributor.
- **Location:** Kolkata, India. Open to remote work and to relocating.
- **Availability:** Open to internships and new-grad roles from January 2027.
- **Short bio (about 60 words):**
  > I build applications that start with a real problem. I spot something broken, tiring or missing in everyday life, plan a solution around it, and build it. Complicated problems pull me in, and so does any manual task a system could do instead. I like coming at things from a different angle, and ideas that look impossible to build usually become my late-night research subjects.
- **Focus areas:** backend and distributed systems · real-time infrastructure · Solana (Anchor) and EVM smart contracts · DeFi / SocialFi · compilers and developer tooling

---

## 2. Experience

### Google Summer of Code 2026 Contributor at BRL-CAD
- **Dates:** May 2026 to Aug 2026 · Remote
- **Certificate:** https://drive.google.com/file/d/1b_XeHHhXarNhGfsIgCk1gXu6oc88IQut/view?usp=sharing
- **One-liner:** Built an OpenSCAD-to-JavaScript compiler using ManifoldCAD, so OpenSCAD models run natively in the browser.
- **What I did:**
  - Developed the OpenSCAD **parsing and semantic analysis** stages, which process source programs and validate their structure and meaning.
  - Implemented the **JavaScript code generation pipeline**.
  - Abstracted file I/O, process and path operations behind environment-independent interfaces, so the compiler runs in both **Node.js and the browser**.
  - Wrote **test suites and performance benchmarks** covering parsing, compilation and generated-code performance.
- **Tags:** Compilers · TypeScript · JavaScript · ManifoldCAD · Open source · Testing

---

## 3. Projects

### Probso (featured)
- **Live:** https://probso.live/
- **Code:** https://github.com/swaparup36/probso
- **One-liner:** A distributed SaaS I designed, built and launched, with real-time job processing.
- **Architecture:** five services: Go API server, Go WebSocket server, web app, worker and scheduled worker.
- **Highlights:**
  - Async job processing with **Go and Redis queues + pub/sub**; job status streams back to users live over **WebSockets**.
  - **Docker-based CI/CD on VMs:** automated build, push, pull and fresh container deployments.
  - **Clerk** authentication, **Dodo Payments** subscriptions, **PostgreSQL** and **Redis**.
- **Stack:** Go · TypeScript · Next.js · Redis · PostgreSQL · WebSockets · Docker · CI/CD
- **Diagram idea:** Web App → API Server → Redis Queue → Worker / Scheduled Worker → Redis pub/sub → WebSocket Server → User

### Agent Layer (featured; team project)
- **Live:** https://agentlayerai.vercel.app/
- **Code:** https://github.com/krishshaw418/Agent_Layer (team repository)
- **One-liner:** A decentralized AI execution network that routes inference jobs on-chain to distributed node operators.
- **Highlights:**
  - **Solidity smart contracts on Base Sepolia** for bidding, job assignment, escrow and payments.
  - **WebSocket gateway** for real-time communication between SDKs and node operators.
  - **TypeScript SDK**, node software and GitHub workflows for AI inference execution and automation.
- **Stack:** Solidity · Base (EVM) · TypeScript · WebSockets · Node.js
- **Note for the site:** label this as a team project.

### Trender (featured)
- **Live:** https://trender-app.vercel.app/
- **Code:** https://github.com/swaparup36/trender
- **One-liner:** A decentralized SocialFi platform on Solana where social posts are traded through AMM-based liquidity pools.
- **Highlights:**
  - **Anchor (Rust) smart contracts** for on-chain trading, treasury management and event emission.
  - **Next.js frontend** integrated with **Solana wallets** for on-chain interactions.
  - **Real-time trade indexing and OHLC charts** using **Helius webhooks**.
- **Stack:** Solana · Anchor (Rust) · Next.js · TypeScript · Helius · Solana wallet adapters
- **Visual idea:** show a screenshot of a post's OHLC price chart.

### ydrop (8th rank, 100xDevs Solana Mini Hackathon)
- **Live:** https://ydrop.vercel.app/
- **Code:** https://github.com/swaparup36/ydrop
- **Award:** 8th rank at the 100xDevs Solana Mini Hackathon. Proof: https://superteam.fun/earn/listing/100xdevs-solana-mini-hackathon-lfg (show it as a badge on the card).
- **One-liner:** An airdrop platform that lets YouTubers launch token airdrops for their subscribers and channel members.
- **Highlights:**
  - Claims are gated by **subscription duration**, with **Solana token verification**.
  - **Scalable asynchronous backend** for transaction verification.
- **Stack:** Next.js · Solana Web3.js · PostgreSQL · Redis · Auth.js

### ZYNC
- **Live:** https://www.zync.foo/
- **Code:** https://github.com/swaparup36/ZYNC
- **One-liner:** A non-custodial DeFi automation vault: strategies execute on-chain when conditions are met.
- **Highlights:**
  - **Oracle-driven condition engine** on price, gas and APR, with on-chain validation.
  - **Secure execution layer:** function-selector validation, allowlists and a permissionless CLI executor.
  - **Guardrails:** max limits, cooldowns, expiry and failure-based auto-pause.
- **Stack:** Solidity · EVM · Oracles · DeFi · Smart-contract security

### Decentralized Freelancing Platform (hackathon)
- **Context:** Tryst'25 IIT Delhi Code Hive India Hackathon (finalist)
- **Stack:** Hive blockchain

---

## 4. Achievements

| Achievement | Details | Proof |
|---|---|---|
| **Google Summer of Code 2026** | Contributor, BRL-CAD (OpenSCAD-to-JS compiler) | https://drive.google.com/file/d/1b_XeHHhXarNhGfsIgCk1gXu6oc88IQut/view?usp=sharing |
| **100xDevs Solana Mini Hackathon: 8th rank** | Built **ydrop**, a token airdrop platform for YouTubers (Next.js, Solana, Web3.js, Redis) | https://superteam.fun/earn/listing/100xdevs-solana-mini-hackathon-lfg |
| **Tryst'25 IIT Delhi Code Hive India Hackathon: Finalist** | Built a decentralized freelancing platform on the Hive blockchain | https://drive.google.com/file/d/1DTNsxFBT8hlgGy23Oyt5eEr9srvuw7vk/view?usp=sharing |

---

## 5. Skills

- **Languages:** Go · TypeScript · JavaScript · Python · Rust · C++ · Solidity
- **Frameworks & libraries:** Node.js · Express.js · Next.js · React · Django · Web3.js · Anchor
- **Databases & messaging:** PostgreSQL · Redis (queues, pub/sub) · MongoDB · MySQL
- **DevOps & cloud:** Docker · CI/CD · AWS · Kubernetes (basic) · Prometheus · Grafana
- **Blockchain:** Solana · Anchor (Rust) · Helius (webhooks, indexing) · Solana wallet integration · Ethereum / EVM · Base · Solidity smart contracts · AMMs / liquidity pools
- **Auth & payments:** Auth.js · Clerk · Dodo Payments
- **Concepts:** Distributed systems · Async job processing · WebSockets / real-time systems · Compilers (parsing, semantic analysis, code generation) · SaaS auth and payments
- **Coursework:** Data Structures & Algorithms · Object-Oriented Programming · Operating Systems · DBMS · Computer Networks

> Show skills as grouped chips or tags. Don't use percentage bars or star ratings, since none are measured here.

---

## 6. Education

### National Institute of Technology (NIT) Agartala
- **Degree:** B.Tech, Electronics and Instrumentation Engineering
- **Years:** 2023 to 2027
- **CGPA:** 8.26 / 10

---

## 7. Contact

- **Email:** swaparup36@gmail.com
- **GitHub:** https://github.com/swaparup36
- **LinkedIn:** https://www.linkedin.com/in/swaparup-mukherjee-508001280/
- **X:** https://x.com/Swaparup36
- **Location:** Kolkata, India (remote / open to relocate)
- **Phone:** +91 6290779098. *Optional: leave this off the public site to avoid spam, unless the owner says otherwise.*
- **Call to action:** "Open to internships and new-grad roles from January 2027. Let's talk."
- **Resume download:** link a PDF compiled from the owner's LaTeX resume. The owner will supply the file.

---

## 8. Site notes for the agent

- **Tone:** direct and technical, first person, with no buzzword stacks ("passionate", "synergy", "rockstar").
- **Lead with proof:** each project card shows the one-liner, 2 or 3 highlights, stack tags, and Live + Code buttons.
- **Featured order:** Probso, Agent Layer, Trender, then ydrop, ZYNC and the Hive hackathon project. A "Backend" / "Web3" filter on the projects grid works well, since the work splits that way.
- **Nice touches that fit this profile:** a small architecture diagram for Probso, "Live" badges on deployed projects, and a GSoC badge in the hero.
- **Don't add:** fake metrics (users, uptime, GitHub stars), testimonials, a blog with placeholder posts, or skills not listed here.
- **SEO:** title "Swaparup Mukherjee | Backend & Web3 Engineer". Meta description: "Final-year NIT Agartala student and GSoC 2026 contributor building distributed backends, real-time systems and EVM smart contracts."
- **Updating:** when the owner adds a project, skill or achievement, update this file first and then the site.
