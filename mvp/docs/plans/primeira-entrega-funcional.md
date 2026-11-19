# Primeira entrega funcional do protótipo

## Objetivo

Inicializar a aplicação React e entregar o primeiro fluxo utilizável da Soulie: boas-vindas, escolha de interesses, recomendações de comunidades e entrada em uma trilha de missão.

## Contexto

O protótipo deve demonstrar a proposta pelo uso, sem recriar toda a Soul Up. A prioridade definida é o primeiro acesso. A Soulie deve aparecer pequena, animada e contextual, inspirada no sistema de feedback do Duolingo sem copiar sua identidade.

## Requisitos

- inicializar React + TypeScript + Vite;
- usar React Router em modo declarativo;
- criar estado centralizado com Context API + `useReducer`;
- persistir a jornada em `sessionStorage` por serviço;
- implementar uma entrada curta e responsiva;
- permitir escolher interesses e pular a personalização;
- recomendar comunidades com motivo compreensível;
- permitir entrar, ignorar ou trocar sugestões;
- apresentar a primeira missão como uma trilha de conquistas menores;
- garantir que a soma das etapas seja igual à recompensa total;
- animar a Soulie em estados de repouso, atenção, pensamento e celebração;
- respeitar `prefers-reduced-motion`;
- funcionar em desktop e mobile.

## Fora de escopo

- recriar o aplicativo completo da Soul Up;
- autenticação, backend ou IA real;
- carteira e resgates funcionais;
- notificações externas;
- catálogo completo de missões e comunidades;
- animação vetorial avançada ou sincronização de fala nesta entrega.

## Arquivos ou áreas envolvidas

- fundação Vite na raiz;
- `src/app/`;
- `src/pages/WelcomePage/` e `src/pages/OnboardingPage/`;
- `src/features/soulie/`, `onboarding/`, `recommendations/`, `communities/` e `missions/`;
- `src/components/`;
- `src/state/`, `src/data/`, `src/services/`, `src/styles/` e `src/assets/`.

## Plano de implementação

1. criar a fundação Vite/React e instalar dependências essenciais;
2. configurar rotas, provider, reducer e persistência;
3. criar tokens, estilos globais e componentes básicos;
4. implementar encontro inicial e escolha de interesses;
5. implementar recomendações e entrada em comunidades;
6. implementar resumo de integração e primeira trilha de missão;
7. adicionar estados visuais e animações acessíveis da Soulie;
8. executar lint, verificação de tipos e build;
9. validar as composições mobile e desktop.

## Critérios de aceite

- [x] aplicação inicia e compila;
- [x] usuário percorre o primeiro acesso sem explicação externa;
- [x] recomendações respondem aos interesses escolhidos;
- [x] usuário consegue entrar, ignorar ou trocar comunidades;
- [x] o fluxo pode ser pulado e reiniciado;
- [x] a trilha soma exatamente a recompensa da missão;
- [x] a Soulie não encobre ações importantes;
- [x] animações respeitam movimento reduzido;
- [x] build, lint e verificação de tipos passam;
- [x] experiência é utilizável em desktop e mobile.

## Riscos e observações

- a imagem atual da Soulie é estática; nesta entrega, o movimento será aplicado ao conjunto por CSS;
- comunidades e recomendações são dados locais claramente demonstrativos;
- validação visual deve preceder animações mais sofisticadas.

## Divergências durante a implementação

```text
Planned behavior:
Usar as versões atuais das ferramentas consultadas no registro npm.

Observed problem:
TypeScript 7.0.2 é incompatível com o peer dependency atual do typescript-eslint 8.68.0, que aceita versões anteriores a 6.1.

Required deviation:
Fixar TypeScript em 6.0.3, a versão estável mais recente dentro da faixa suportada.

Reason:
Manter uma árvore de dependências válida e verificações de lint confiáveis, sem usar --force ou ignorar peer dependencies.
```
