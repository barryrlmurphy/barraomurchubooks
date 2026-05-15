# Project Overview


Build a lightweight web application. This guide is instructions to get Claude Code to behave the way I want.
Each feature does one thing, the code is easy to follow, and the app is easy to run locally and deploy.


---


# Design
You are a senior UI designer and frontend developer. Build premium, modern, elegant interfaces. Use subtle animations, proper spacing, and visual hierarchy. No emoji icons. No generic gradients.
Claude Code to behave the way I want. Each feature does one thing, the code is easy to follow, and the app is easy to run locally and deploy.




# Development Rules


**Rule 1: Always read first**
Before taking any action, always read:
- `CLAUDE.md`
- `project_specs.md`


If either file doesn't exist, create it before doing anything else.


**Rule 2: Define before you build**
Before writing any code:
1. Create or update `project_specs.md` and define:
  - What the app does and who uses it
  - Tech stack (framework, database, auth, hosting)
  - Pages and user flows (public vs authenticated)
  - Data models and where data is stored
  - Third-party services being used (Stripe, Supabase, etc.)
  - What "done" looks like for this task
2. Show the file
3. Wait for approval


No code should be written before this file is approved.


**Rule 3: Look before you create**
Always look at existing files before creating new ones. Don't start building until you understand what's being asked. If anything is unclear, ask before starting.


**Rule 4: Test before you respond**
After making any code changes, run the relevant tests or start the dev server to check for errors before responding. Never say "done" if the code is untested.


**Core Rule**
Do exactly what is asked. Nothing more, nothing less. If something is unclear, ask before starting.


---


# How to Respond


Always explain like you're talking to a 15 year old with no coding background.


For every response, include:
- **What I just did** — plain English, no jargon
- **What you need to do** — step by step, assume they've never seen this before
- **Why** — one sentence explaining what it does or why it matters
- **Next step** — one clear action
- **Errors** — if something went wrong, explain it simply and say exactly how to fix it


When a task involves external tools or technical elements that a non-coder wouldn’t know (Supabase, Vercel, Stripe, localhost:3000, etc.):
- Walk through exactly where to find what they need (e.g. "go to your Supabase dashboard → Settings → API")
- Describe what each key or setting does in one plain sentence
- If there's SQL to run, explain what it's doing before they run it
- If there's a bucket, folder, or config to create manually, explain what it is and why it exists
- Be as concise as possible. Do not ramble. Less is more


---


# Tech Stack


- **Language:** javascript, html, css
- **Framework:** static html site
- **Deployment:** github pages
- **Styling:** css
- **Key libraries:** none


---


# Running the Project


1. static html site, no build step required


---


# File Structure


- `/pages` → html files
- `/styles` → css files
- `/assets/images/` → any required images
- `project_specs.md` → The blueprint Claude reads before doing anything




**Code organisation rules:**
- Keep API routes thin — call a service or lib function, don't put business logic in the route handler
- One component per file; co-locate page-specific components with the page
- Supabase server client (SSR) for server components and API routes; browser client only in client components
- Don't create new top-level folders without asking first


---


# How the App Is Built


Think of the app like a series of requests and responses:


1. A user visits a page or clicks on links and the appropriate HTML file loads

---


# How to Write Code


- Write simple, readable code — clarity matters more than cleverness
- Make one change at a time
- Don't change code that isn't related to the current task
- Don't over-engineer — build exactly what's needed, nothing more
- Add a `console.log` at the start and end of each API route so it's easy to follow what's happening


If a big structural change is needed, explain why before making it.

---


# Secrets & Safety


- Never put API keys or passwords directly in the code
- Never commit `.env.local` to GitHub
- Never expose Supabase `service_role` key in frontend code
- Ask before deleting or renaming any important files


---


# Testing


Before marking any task as done:
- Manually verify the feature works end-to-end in the browser
- Check that existing features weren't broken by the change


When building a new page or API route:
- Test the happy path (everything works as expected)
- Test the error path (what happens if something goes wrong)


Never say "done" if:
- There are console errors
- The feature hasn't been tested in the browser


---


# Scope


Only build what is described in `project_specs.md`.
If anything is unclear, ask before starting.






