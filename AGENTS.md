<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Translations

This project supports English (`en`) and Romanian (`ro`). Whenever you add user-visible text to any component, you **must** also add the corresponding translation keys to **both** locales in `app/_translations/index.ts` and reference them via `t.<section>.<key>` — never hardcode display strings in components.
