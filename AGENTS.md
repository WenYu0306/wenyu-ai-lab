# AI Engineering Rules

## 1. Core Principles

- Keep responses short, structured, and useful.
- Prefer minimal diffs and small, reviewable changes.
- Change only what is directly related to the request.
- Do not refactor unrelated code while implementing a feature.
- Prefer simple, readable code over clever code.
- Avoid overengineering.
- Keep projects easy to understand and easy to ship.
- Prioritize working MVPs, user-visible value, and fast iteration.

## 2. Workflow

For normal tasks:

1. Understand the requirement.
2. Inspect only the files needed for the task.
3. Make a short plan before meaningful edits.
4. Edit only necessary files.
5. Run the fastest relevant verification.
6. Summarize changes and any verification limits.

For tiny tasks, keep the plan and summary brief.

## 3. Token Control

- Never scan the whole project unless explicitly asked.
- Never read unrelated files.
- Never read node_modules, dist, build, .next, coverage, or lock files unless explicitly asked.
- Never output large unchanged code blocks.
- Show only changed parts when code output is needed.
- Summarize long outputs.
- Avoid repeating old context.
- Keep active context focused on current files.
- Compress long discussions into short bullet summaries.

## 4. Safety Rules

- Never expose secrets, tokens, API keys, private URLs, or credentials.
- Never modify .env files without permission.
- Ask before installing dependencies.
- Ask before deleting files.
- Ask before changing package managers.
- Ask before changing project architecture.
- Do not run dangerous terminal commands.
- Do not commit automatically unless asked.

## 5. Coding Style

- Write clear and maintainable code.
- Use meaningful names.
- Keep functions small.
- Avoid unnecessary dependencies.
- Prefer native browser APIs for simple projects.
- Use TypeScript when the project already uses TypeScript or when it clearly improves maintainability.
- Keep folder structures clean.
- Separate UI, logic, and data when the project size justifies it.
- Prefer composition over large abstractions.
- For simple frontend projects, keep HTML, CSS, and JavaScript separated unless told otherwise.

## 6. Verification And Review

Before finishing, check:

- Does the result match the requirement?
- Are there unnecessary files or changes?
- Is the implementation simpler than the problem requires?
- Did we avoid wasting tokens?
- Is the project still easy to understand?
- Does the page or feature actually work?

If verification cannot run, explain why briefly.

For frontend MVPs, ensure:

- The page loads.
- The primary action works.
- The layout is usable on mobile.

## 7. AI Model Routing

### GPT-5.5

Best for:
- Fast coding
- Frontend UI generation
- HTML/CSS/JavaScript projects
- Small bug fixes
- Refactoring
- MVP building
- Rapid iteration

Avoid when:
- Huge codebase analysis is required
- Deep architectural reasoning is required

### Claude

Best for:
- Large architecture planning
- Long-context understanding
- Complex reasoning
- Multi-file analysis
- PRD or spec writing
- Deep code review
- Refactor strategy

Avoid when:
- Simple UI tweaks
- Small rapid edits
- Fast prototyping

### Codex

Best for:
- Direct project execution
- Editing files
- Local project workflows
- Controlled engineering tasks
- Running iterative development

Avoid when:
- Pure brainstorming
- Very abstract product discussions

## 8. Engineering Philosophy

- MVP first.
- Ship fast.
- Prefer working software over perfect abstractions.
- AI should assist execution, not create unnecessary complexity.
