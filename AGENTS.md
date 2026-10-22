# Prototype Instructions

## Portfolio decisions

- Use the first selected design: white, single column, centered introduction, blue text links, thin gray dividers, resume-like typography. Keep it responsive.
- Present software/data engineering experience and deeper ML study at Georgia Tech.
- Selected experience: OVERDARE (Data Engineer, May–Oct 2024), NHN DATA, NHN, NHN PAYCO. Include OVERDARE with concise, source-supported responsibilities; the user does not recall exact details, so do not expand claims beyond supplied resume and LinkedIn text.
- Selected projects, in order: Speed Camera Map, AI Pre-Visit Assistant, Precipitation Nowcasting, Trend Feed. AI Pre-Visit Assistant is a Georgia Tech team project (Feb–Apr 2026); personal contributions are supported by the HEALTH resume. Link its YouTube presentation and demo. No DoRA for now.
- Use the SWE, ML, and HEALTH resumes as primary wording sources for the corresponding projects. Keep all project descriptions consistent: concise paragraphs with action verbs describing personal contributions, followed by a technology line. No one-off project bullet lists. Trend Feed uses its project documentation because it is not listed in those resumes.
- Never add the source Google Slides portfolio URL or deck to this repository or website.
- Host on GitHub Pages at portfolio.mschoi.com. Keep HTML noindex; do not describe it as access control.
- Do not publish or push unless requested.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
