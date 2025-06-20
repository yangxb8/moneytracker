# project_config.md

Last-Updated: 2025-06-08

## Project Goal

This is an money tracker app built using Expo. It's inspired by [QianJi](https://qianjiapp.com/) with some AI features.

## Tech Stack

- **Language(s):** TypeScript 5
- **Framework(s):** Expo 53
- **Backend:** Supabase
- **Build / Tooling:** Expo

## Critical Patterns & Conventions

- Expo app best practice.
- Local-first design, but sync changes from/to DB in Supabase to support multi-users usage.
- All AI feature should be API call to supabase edge function. Mock up API call if you need.

## Constraints

- Constraint AI usage as much as possible.

## Tokenization Settings

- Estimated chars-per-token: 3.5
- Max tokens per message: 8 000
- Plan for summary when **workflow_state.md** exceeds ~12 K chars.

---

## Changelog
<!-- The agent prepends the latest summary here as a new list item after each VALIDATE phase -->
