# Arquitetura React do protótipo da Soulie

> Planejamento técnico da primeira versão do site-protótipo.
>
> Este documento define estrutura, responsabilidades e sequência de implementação. Ele não inicia a aplicação.

## 1. Decisões principais

| Tema | Decisão |
|---|---|
| Aplicação | SPA responsiva para desktop e mobile. |
| Base | React + TypeScript + Vite. |
| Rotas | React Router em modo declarativo. |
| Estado | Context API + `useReducer`. |
| Dados | Arquivos locais tipados e estado em memória. |
| Persistência | `sessionStorage`, com opção de reiniciar a demonstração. |
| Estilos | CSS global para tokens + CSS Modules para componentes. |
| Animações | CSS e Web Animations somente quando necessário. |
| Backend | Não existirá na primeira versão. |
| IA | Recomendações determinísticas simulando o comportamento inteligente. |
| Soul Up | Apenas contexto visual; não será reconstruída. |
| Entrada | A rota inicial apresenta brevemente a Soulie e leva diretamente à jornada; não existe landing page institucional longa. |
| Testes | Unidade para regras, componentes para interações e E2E para a jornada guiada. |

## 2. Por que essa arquitetura

O protótipo precisa:

- funcionar de maneira confiável durante uma apresentação;
- manter pontos, ofensiva, preferências e estado da Soulie coerentes;
- possuir URLs claras para apresentação e cenários;
- adaptar a composição para desktop e mobile;
- permitir evolução futura sem criar complexidade antecipada;
- separar a lógica da Soulie das telas utilizadas como contexto da Soul Up.
- permitir que a proposta seja compreendida pelo uso, sem depender de uma apresentação longa.

O modo declarativo do React Router oferece navegação, URLs e layouts aninhados sem exigir loaders, actions ou servidor. A própria documentação o posiciona como a opção mais simples quando o projeto possui sua própria camada de dados, que neste caso será local.

Fontes: [React com TypeScript](https://react.dev/learn/typescript), [Vite](https://vite.dev/guide/) e [modos do React Router](https://reactrouter.com/start/modes).

## 3. Visão das camadas

```text
Páginas e rotas
      ↓
Composição da apresentação e dos cenários
      ↓
Funcionalidades da Soulie
      ↓
Estado global da demonstração
      ↓
Dados locais tipados e persistência da sessão
```

### Camada de páginas

Define URLs e organiza seções completas. Não contém regras de pontos, missões ou emoções.

### Camada de composição

Combina componentes da apresentação, cenários visuais da Soul Up e componentes da Soulie.

### Camada de funcionalidades

Contém onboarding, recomendações, missões, ofensiva e respostas da Soulie.

### Camada de estado

Centraliza a jornada demonstrativa e garante que uma ação produza efeitos coerentes em outras telas.

### Camada de dados

Fornece conteúdo, exemplos, missões, mensagens e métricas simuladas.

## 4. Estrutura de pastas proposta

```text
prototipo-soulie/
├─ public/
│  ├─ favicon.svg
│  └─ manifest.webmanifest
├─ src/
│  ├─ app/
│  │  ├─ App.tsx
│  │  ├─ main.tsx
│  │  ├─ router.tsx
│  │  ├─ providers/
│  │  │  └─ DemoProvider.tsx
│  │  └─ layouts/
│  │     ├─ SiteLayout.tsx
│  │     └─ DemoLayout.tsx
│  │
│  ├─ pages/
│  │  ├─ PresentationPage/
│  │  ├─ WelcomePage/
│  │  ├─ OnboardingPage/
│  │  ├─ HomeScenePage/
│  │  ├─ MissionScenePage/
│  │  ├─ RecurrenceScenePage/
│  │  ├─ CommunityScenePage/
│  │  ├─ JourneyResultPage/
│  │  ├─ ScenariosPage/
│  │  ├─ AboutPage/
│  │  └─ NotFoundPage/
│  │
│  ├─ features/
│  │  ├─ soulie/
│  │  │  ├─ components/
│  │  │  ├─ soulie.engine.ts
│  │  │  ├─ soulie.messages.ts
│  │  │  └─ soulie.types.ts
│  │  ├─ onboarding/
│  │  ├─ missions/
│  │  ├─ streak/
│  │  ├─ recommendations/
│  │  └─ guided-demo/
│  │
│  ├─ components/
│  │  ├─ ui/
│  │  ├─ layout/
│  │  ├─ experience/
│  │  ├─ project-info/
│  │  └─ soulup-context/
│  │
│  ├─ state/
│  │  ├─ demo.reducer.ts
│  │  ├─ demo.actions.ts
│  │  ├─ demo.initial-state.ts
│  │  ├─ demo.selectors.ts
│  │  └─ demo.types.ts
│  │
│  ├─ data/
│  │  ├─ demo-user.ts
│  │  ├─ missions.ts
│  │  ├─ communities.ts
│  │  ├─ rewards.ts
│  │  ├─ presentation.ts
│  │  └─ metrics.ts
│  │
│  ├─ services/
│  │  └─ session-storage.ts
│  │
│  ├─ hooks/
│  │  ├─ useDemo.ts
│  │  ├─ useResponsiveScene.ts
│  │  └─ useReducedMotion.ts
│  │
│  ├─ styles/
│  │  ├─ tokens.css
│  │  ├─ reset.css
│  │  ├─ global.css
│  │  └─ utilities.css
│  │
│  ├─ assets/
│  │  ├─ brand/
│  │  ├─ soulie/
│  │  ├─ soulup-context/
│  │  └─ illustrations/
│  │
│  ├─ types/
│  └─ utils/
│
├─ tests/
│  ├─ unit/
│  ├─ components/
│  └─ e2e/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
```

## 5. Regras para organização

### `pages/`

Cada página representa uma rota. Ela combina funcionalidades e componentes, mas não implementa regras de negócio.

Exemplo:

```text
MissionScenePage/
├─ MissionScenePage.tsx
├─ MissionScenePage.module.css
└─ index.ts
```

### `features/`

Cada pasta representa um comportamento da Soulie. Pode possuir componentes, tipos e regras próprias.

Um componente deve permanecer dentro de uma feature quando somente aquela funcionalidade o utiliza.

### `components/ui/`

Contém componentes genéricos e sem conhecimento da Soulie:

- `Button`;
- `IconButton`;
- `ProgressBar`;
- `Modal`;
- `BottomSheet`;
- `Stepper`;
- `Tabs`;
- `VisuallyHidden`.

### `components/soulup-context/`

Contém apenas as partes visuais da Soul Up necessárias para contextualizar a Soulie:

- `SoulUpHeader`;
- `SoulUpBottomNavigation`;
- `WalletContextCard`;
- `MissionContextList`;
- `CommunityContextCard`;
- `PhoneFrame`.

Esses componentes não terão regras financeiras, feed real, chat ou navegação completa.

### `data/`

Somente dados de demonstração. Nenhum componente deve conter listas grandes ou textos institucionais escritos diretamente no JSX.

### `state/`

Contém a única fonte de verdade para a demonstração.

## 6. Rotas

```text
/
├─ /jornada/encontro
├─ /jornada/onboarding
├─ /jornada/inicio
├─ /jornada/missao
├─ /jornada/recorrencia
├─ /jornada/comunidades
├─ /jornada/resultado
├─ /cenarios
└─ /sobre
```

### Responsabilidades

| Rota | Responsabilidade |
|---|---|
| `/` | Apresentar brevemente a Soulie e oferecer entrada imediata na experiência. |
| `/jornada/encontro` | Iniciar o encontro com a Soulie dentro do contexto visual da Soul Up. |
| `/jornada/onboarding` | Coletar preferências e preparar a recomendação. |
| `/jornada/inicio` | Exibir a Soulie integrada à tela inicial. |
| `/jornada/missao` | Recomendar e concluir a missão principal. |
| `/jornada/recorrencia` | Demonstrar ofensiva, pontos e timing. |
| `/jornada/comunidades` | Recomendar comunidades e permitir a primeira entrada. |
| `/jornada/resultado` | Resumir a experiência e o impacto simulado. |
| `/cenarios` | Acessar diretamente estados específicos da Soulie. |
| `/sobre` | Disponibilizar explicação opcional, FAQ e equipe. |

### Parâmetros de demonstração

O modo pode ser representado por query string:

```text
/jornada/inicio?modo=guiado
/jornada/inicio?modo=cenario
```

O caminho identifica a cena. A query string altera somente os controles de apresentação.

## 7. Estado da demonstração

### Estrutura conceitual

```ts
type DemoState = {
  mode: 'guided' | 'scenes'
  currentScene: DemoScene
  profile: DemoProfile
  mission: DemoMissionState
  streak: DemoStreak
  points: number
  community: DemoCommunityState
  soulie: SoulieState
  completedSteps: DemoScene[]
}
```

### Estado da Soulie

```ts
type SoulieMood =
  | 'timida'
  | 'alegre'
  | 'confiante'
  | 'empolgada'
  | 'radiante'
  | 'com-pressa'
  | 'triste'
  | 'entediada'

type SoulieState = {
  mood: SoulieMood
  messageId: string
  isExpanded: boolean
  recommendationId?: string
}
```

### Ações principais

```ts
type DemoAction =
  | { type: 'START_DEMO'; mode: DemoMode }
  | { type: 'SAVE_ONBOARDING'; profile: DemoProfile }
  | { type: 'EXPAND_SOULIE' }
  | { type: 'MINIMIZE_SOULIE' }
  | { type: 'ACCEPT_MISSION'; missionId: string }
  | { type: 'COMPLETE_MISSION'; missionId: string }
  | { type: 'ADVANCE_STREAK' }
  | { type: 'OPEN_COMMUNITY'; communityId: string }
  | { type: 'GO_TO_SCENE'; scene: DemoScene }
  | { type: 'RESET_DEMO' }
```

### Fluxo de efeitos

```text
COMPLETE_MISSION
├─ marca missão como concluída
├─ adiciona pontos
├─ avança ofensiva
├─ altera Soulie para “radiante”
├─ seleciona mensagem comemorativa
└─ libera a próxima cena guiada
```

Uma única ação deve produzir todos esses efeitos no reducer. Isso evita saldos, mensagens e progresso divergentes.

## 8. Motor de comportamento da Soulie

O arquivo `soulie.engine.ts` recebe contexto e devolve a reação apropriada.

```ts
type SoulieContext = {
  event: DemoEvent
  profile: DemoProfile
  mission: DemoMissionState
  streak: DemoStreak
  localHour: number
}

type SoulieReaction = {
  mood: SoulieMood
  messageId: string
  recommendedAction?: RecommendedAction
}
```

### Exemplo de regras

| Contexto | Reação |
|---|---|
| Primeiro acesso | Tímida e acolhedora. |
| Onboarding concluído | Confiante e personalizada. |
| Missão disponível | Empolgada. |
| Missão concluída | Radiante. |
| Ofensiva em risco | Com pressa. |
| Sequência interrompida | Triste, mas não punitiva. |
| Comunidade ativa | Alegre e convidativa. |

O motor não usará IA real. As regras determinísticas tornam a demonstração repetível e testável.

## 9. Componentes da Soulie

### Essenciais

```text
SoulieAvatar
SoulieLauncher
SouliePanel
SoulieMessage
SoulieRecommendation
SoulieReaction
SoulieReason
```

### Responsabilidades

| Componente | Responsabilidade |
|---|---|
| `SoulieAvatar` | Exibir imagem, estado e alternativa textual. |
| `SoulieLauncher` | Abrir a assistente sem cobrir ações críticas. |
| `SouliePanel` | Organizar mensagem, recomendação e ações. |
| `SoulieMessage` | Exibir texto correspondente ao estado. |
| `SoulieRecommendation` | Mostrar missão ou comunidade sugerida. |
| `SoulieReaction` | Exibir feedback após uma ação. |
| `SoulieReason` | Explicar por que a recomendação apareceu. |

### Composição responsiva

- desktop: `SouliePanel` ao lado ou sobre o telefone demonstrativo;
- mobile: `SouliePanel` como bottom sheet ou card expansível;
- o conteúdo e as ações permanecem iguais;
- somente o componente de apresentação muda conforme o espaço.

## 10. Design system

### Tokens globais

O arquivo `tokens.css` definirá:

- cores da Soul Up e da Soulie;
- tipografia;
- escala de espaçamento;
- raios de borda;
- sombras;
- durações de movimento;
- larguras máximas de conteúdo;
- camadas de sobreposição.

### CSS Modules

Cada componente visual possui seu próprio arquivo `.module.css`. Regras globais ficam restritas a reset, tokens, tipografia base e utilidades de acessibilidade.

### Responsividade

- utilizar CSS para mudanças de layout;
- não duplicar páginas para desktop e mobile;
- evitar condicionar conteúdo com JavaScript baseado em largura;
- usar container queries em componentes que precisem responder ao espaço disponível;
- usar media queries somente para decisões de composição global;
- remover a moldura pesada de telefone no mobile.

## 11. Dados simulados

### Usuário

- nome fictício;
- interesses;
- objetivos;
- horário preferido;
- comunidade favorita.

### Missões

- uma missão principal para a apresentação;
- duas alternativas para exploração;
- recompensa, prazo, categoria e impacto estimado;
- textos externos ao componente.

### Pontos e ofensiva

- saldo inicial coerente com a apresentação;
- ganho da missão refletido no saldo;
- sequência inicial preparada;
- atualização controlada pelo reducer.

### Métricas

Dados claramente identificados como simulados. Nenhuma métrica será gerada aleatoriamente durante a apresentação.

## 12. Persistência

O estado será salvo em `sessionStorage`.

### Motivos

- mantém a jornada durante recarregamentos da mesma sessão;
- reduz o risco de uma demonstração antiga reaparecer em outro dia;
- permite reiniciar com facilidade;
- não exige banco de dados.

O serviço deve fornecer:

```ts
loadDemoState()
saveDemoState(state)
clearDemoState()
```

O restante da aplicação não acessa `sessionStorage` diretamente.

## 13. Estratégia de testes

### Unidade

- reducer;
- motor da Soulie;
- cálculo de pontos;
- avanço da ofensiva;
- seleção de recomendação;
- serialização do estado.

### Componentes

- onboarding;
- abertura e fechamento do painel;
- conclusão de missão;
- explicação da recomendação;
- reinício da demonstração;
- foco após abrir modal ou bottom sheet.

### Ponta a ponta

Fluxo obrigatório:

```text
Home
→ iniciar demonstração guiada
→ onboarding
→ abrir Soulie
→ aceitar missão
→ concluir missão
→ conferir pontos e ofensiva
→ abrir recomendação de comunidade
→ resultados
→ reiniciar
```

Executar esse fluxo em viewport de desktop e mobile.

## 14. Acessibilidade

- HTML semântico;
- controles nativos;
- foco visível;
- modais e bottom sheets com foco gerenciado;
- textos alternativos para estados da Soulie;
- mensagens dinâmicas em regiões apropriadas;
- suporte a teclado;
- contraste adequado;
- movimento reduzido;
- nenhuma ação dependente apenas de hover;
- nenhuma informação comunicada somente pela expressão ou cor.

## 15. Dependências

### Necessárias na fundação

- `react`;
- `react-dom`;
- `react-router`;
- TypeScript;
- Vite;
- ESLint.

### Adicionadas durante os testes

- Vitest;
- React Testing Library;
- Playwright.

### Não adicionar inicialmente

- biblioteca externa de estado;
- framework CSS;
- biblioteca de componentes genérica;
- biblioteca de animação;
- cliente HTTP;
- SDK de IA;
- biblioteca de gráficos complexa.

Essas dependências só devem entrar se uma necessidade concreta aparecer.

## 16. Ordem de implementação

### Etapa 1 — Fundação

- criar o projeto Vite com React e TypeScript;
- configurar lint e aliases;
- criar estilos globais e tokens;
- configurar rotas e layouts;
- criar páginas vazias navegáveis.

### Etapa 2 — Estado e dados

- definir tipos;
- implementar estado inicial;
- implementar reducer;
- criar provider e hook;
- preparar dados simulados;
- criar persistência e reinício.

### Etapa 3 — Componentes-base

- botões;
- progressos;
- modal;
- bottom sheet;
- stepper;
- layouts responsivos;
- moldura de telefone para desktop.

### Etapa 4 — Soulie

- avatar e estados;
- painel;
- mensagens;
- recomendações;
- motor de reação.

### Etapa 5 — Jornada principal

- onboarding;
- cena inicial;
- missão;
- ofensiva e pontos;
- comunidade;
- resultados.

### Etapa 6 — Entrada e conteúdo opcional

- encontro inicial com a Soulie;
- escolha entre iniciar jornada e explorar cenários;
- encerramento com resumo vivido;
- área secundária sobre o projeto;
- FAQ e equipe fora do fluxo principal.

### Etapa 7 — Qualidade

- responsividade;
- acessibilidade;
- testes;
- otimização de imagens;
- roteiro da demonstração;
- publicação.

## 17. Critérios arquiteturais de aceite

- nenhuma regra de negócio fica dentro das páginas;
- nenhuma lista de conteúdo extensa fica escrita diretamente no JSX;
- componentes da Soul Up não controlam o estado da Soulie;
- desktop e mobile compartilham as mesmas páginas e dados;
- concluir uma missão atualiza todos os valores em uma única ação;
- recarregar a página preserva a sessão;
- reiniciar restaura o estado inicial;
- cada cena possui URL própria;
- a jornada guiada funciona sem backend;
- os testes cobrem o fluxo principal;
- dados simulados são claramente identificados;
- nenhum componente depende de uma integração externa para funcionar.

## 18. Decisões registradas

### ADR-001 — SPA com Vite

O protótipo será entregue como aplicação cliente, sem SSR ou backend inicial.

### ADR-002 — React Router declarativo

Usaremos rotas declarativas porque os dados são locais e não precisamos da camada de loaders e actions.

### ADR-003 — Context + reducer

O estado é pequeno, previsível e centrado em uma jornada. Uma biblioteca externa de estado não se justifica inicialmente.

### ADR-004 — CSS Modules

A interface precisa preservar identidade própria. CSS Modules oferece isolamento sem impor o visual de um framework.

### ADR-005 — Soul Up como contexto

Componentes relacionados à Soul Up serão visuais e limitados às cenas necessárias.

### ADR-006 — Comportamento determinístico

A inteligência da Soulie será representada por regras testáveis para garantir estabilidade durante a apresentação.

---

**Direção arquitetural:** manter a fundação pequena, separar a inteligência da Soulie de sua apresentação e garantir que o mesmo estado produza uma experiência coerente em desktop e mobile.
