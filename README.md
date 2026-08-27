# Protótipo Soulie

Experiência web responsiva que demonstra como a Soulie pode acompanhar o primeiro acesso de uma pessoa à Soul Up, recomendar comunidades e transformar uma missão em uma trilha de pequenas conquistas.

## Tecnologias

- React 19 + TypeScript;
- Vite;
- React Router em modo declarativo;
- Context API + `useReducer`;
- CSS Modules e tokens globais;
- `sessionStorage` para preservar a demonstração durante a sessão.

## Executar localmente

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run typecheck
npm run lint
npm run build
```

## Escopo atual

O primeiro fluxo funcional inclui:

1. apresentação curta da Soulie;
2. entrada no contexto visual da Soul Up;
3. seleção opcional de interesses;
4. recomendações de comunidades com explicação;
5. entrada ou recusa de uma recomendação;
6. primeira trilha de missão, dividida em 5 + 5 + 10 + 10 pontos;
7. persistência e reinício da demonstração;
8. composições próprias para desktop e mobile.

Comunidades, pontos e recomendações são dados simulados para apresentação. A Soul Up é usada somente como contexto visual.
