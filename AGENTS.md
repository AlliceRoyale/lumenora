# \ud83d\udcda Stack & Conven\u00e7\u00f5es para o Codex

- **Stack**\u2009Node 20 + TypeScript estrito  
- **Commits**\u2009Conventional Commits (feat:, fix:, chore:, docs: \u2026)  
- **Fluxo**\u2009branch `codex/<tarefa>` \u2192 Pull Request \u2192 CI verde \u2192 merge em `main`  
- **CI**\u2009lint + test; n\u00e3o rode `npm install` no sandbox (o runner do GitHub j\u00e1 instala)  
- **Pastas padr\u00e3o**
 
src/ # c\u00f3digo
tests/ # testes Jest
dist/ # sa\u00edda do tsc (git-ignored)

- **Estilo**\u2009ESLint 8 + Prettier; regras extras j\u00e1 no .eslintrc.json  
