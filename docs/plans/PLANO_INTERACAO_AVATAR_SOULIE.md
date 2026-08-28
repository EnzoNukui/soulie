# Interação com o avatar da Soulie

## Objetivo

Definir o que acontece quando a pessoa toca ou clica no avatar flutuante da Soulie, transformando-o em um ponto de ajuda contextual, orientação e continuidade da jornada sem criar um chatbot genérico ou prometer uma IA real.

## Contexto

Hoje o avatar aparece flutuando no feed, na seleção de comunidades e dentro de uma comunidade, mas funciona somente como elemento visual. A documentação arquitetural já prevê `SoulieLauncher`, `SouliePanel`, mensagens, recomendações e explicação do motivo de cada sugestão.

O protótipo não possui backend ou IA. Portanto, a interação deve ser determinística, repetível e baseada no estado real da demonstração: pontos, ofensiva, comunidades escolhidas, missões e progresso.

A pesquisa de UX recomenda painel expansível ou bottom sheet no mobile. A referência do Duolingo reforça que a personagem deve refletir o produto, reagir ao contexto e conduzir para uma ação concreta, em vez de existir apenas como decoração. Para acessibilidade, um painel com comportamento de diálogo precisa de nome, foco previsível, fechamento por teclado e retorno do foco ao avatar.

## Ideias consideradas

| Opção | Experiência | Complexidade | Decisão |
|---|---|---:|---|
| Painel contextual | Resume o momento e oferece ações úteis | Média | Base recomendada |
| Conversa guiada | Respostas rápidas geram pequenas ramificações | Média | Combinar com o painel |
| Check-in diário | Pergunta como a pessoa quer avançar hoje | Média | Evolução futura |
| Menu rápido animado | Abre atalhos ao redor do avatar | Baixa | Útil, mas pouco expressivo sozinho |
| Chat livre simulado | Campo para qualquer pergunta | Alta | Não usar nesta fase |

## Direção recomendada

Criar um **painel conversacional contextual da Soulie**.

Ele terá aparência de uma conversa curta, mas começará com perguntas prontas e ações ligadas à tela atual. A primeira versão não terá campo de texto livre.

Ao abrir, a pessoa verá:

1. avatar, nome e estado emocional da Soulie;
2. mensagem contextual de uma ou duas linhas;
3. resumo útil de progresso, missão ou comunidade;
4. duas respostas rápidas na abertura;
5. uma ação principal que leva a um fluxo já existente;
6. opção “Por que você está sugerindo isso?” depois da primeira escolha;
7. indicação discreta de que as respostas são simuladas.

### Exemplo de abertura no feed

> Você está com 4 dias de ofensiva. Quer continuar uma missão curta ou visitar uma comunidade ativa?

Respostas rápidas:

- O que faço agora?
- Ver meu progresso

Depois da primeira escolha, a resposta poderá oferecer “Por que esta sugestão?”.

### Exemplo dentro de uma comunidade

> Esta comunidade está perto da meta. Posso mostrar uma contribuição que leva menos de três minutos.

Respostas rápidas:

- Como posso ajudar?
- Por que agora?

## Contextos da primeira entrega

Cada contexto terá **uma única recomendação principal**. As respostas rápidas servem para entender ou seguir essa recomendação, e não para transformar a Soulie em um menu com muitos atalhos.

### Feed

Informações usadas:

- ofensiva atual;
- pontos;
- última missão concluída;
- trilha recomendada;
- comunidades escolhidas.

Ações possíveis:

- continuar ou abrir uma trilha;
- ver todas as missões;
- abrir uma comunidade;
- entender o motivo da recomendação.

### Seleção de comunidades

Informações usadas:

- comunidades já escolhidas;
- interesses do onboarding;
- novas comunidades disponíveis.

Ações possíveis:

- escolher em qual comunidade entrar;
- descobrir outra comunidade;
- entender por que uma comunidade combina com a pessoa.

### Comunidade aberta

Informações usadas:

- atividade da comunidade;
- desafio coletivo;
- contribuição já realizada ou pendente;
- recompensa em pontos.

Ações possíveis:

- aprender como contribuir;
- ver o desafio;
- entender por que a Soulie sugeriu a ação;
- reconhecer a contribuição já concluída.

### Expansão posterior para missões

Depois de validar o componente nos três contextos existentes, o avatar poderá aparecer no centro e no detalhe das missões para:

- indicar a próxima conquista da trilha;
- explicar a divisão dos pontos;
- retomar uma missão iniciada;
- explicar o impacto simulado da ação.

## Matriz contextual e fallbacks

As regras serão avaliadas de cima para baixo. A primeira condição compatível define a recomendação principal.

| Contexto | Prioridade/condição | Mensagem principal | Ações | Fallback |
|---|---|---|---|---|
| Feed | todas as missões estão concluídas | Reconhecer o marco e sugerir participação coletiva | Abrir comunidade escolhida | Descobrir comunidades |
| Feed | existe missão iniciada e não concluída | Retomar a conquista em andamento | Navegar para a missão; explicar progresso | Abrir centro de missões |
| Feed | não há comunidade escolhida | Convidar para encontrar um espaço compatível | Descobrir comunidades; explicar motivo | Abrir recomendações iniciais |
| Feed | existe última missão concluída e ainda há missões incompletas | Usar a conclusão como contexto e recomendar a próxima trilha incompleta | Abrir próxima trilha; explicar continuidade | Abrir centro de missões |
| Feed | estado padrão | Recomendar a primeira trilha compatível | Abrir trilha; explicar recomendação | Abrir centro de missões |
| Seletor | todas as comunidades foram escolhidas | Reconhecer que a rede está completa | Visitar uma comunidade; fechar painel | Não prometer novas opções |
| Seletor | existem comunidades escolhidas | Ajudar a escolher uma das comunidades atuais | Abrir primeira comunidade ativa; ver outras | Descobrir novas comunidades |
| Seletor | nenhuma comunidade foi escolhida | Explicar o valor de entrar em uma comunidade | Abrir descoberta; explicar personalização | Recomendação genérica quando não houver interesses |
| Comunidade | contribuição já concluída | Reconhecer a contribuição e explicar seu efeito simulado na meta | Focar desafio; entender o resultado | Fechar painel |
| Comunidade | contribuição pendente | Sugerir uma ação de menos de três minutos | Revelar passos locais; explicar “por que agora” | Focar desafio coletivo |

Regras adicionais:

- onboarding pulado ou interesses vazios usam texto genérico e nunca alegam personalização;
- ausência de dados compatíveis produz uma ação segura para o centro correspondente;
- o motor nunca recomenda missão concluída como pendente;
- a celebração transitória de uma missão acontece somente em `MissionResultPage`;
- no feed, `lastCompletedMissionId` não significa que a conclusão acabou de acontecer: serve apenas para contextualizar e recomendar uma próxima trilha incompleta;
- uma comunidade já escolhida não aparece como descoberta nova;
- nenhuma regra depende de horário ou atividade real: esses sinais são identificados como simulados.

## Fluxo da interação

```text
Avatar fechado
→ toque, clique, Enter ou Espaço
→ painel contextual aberto
→ uma recomendação principal + duas respostas rápidas
→ pessoa escolhe uma intenção
→ Soulie responde e apresenta uma ação
→ pessoa navega, volta às opções ou fecha
→ foco retorna ao avatar
```

Estados locais:

- `closed`;
- `overview`;
- `answering-intent`;
- `showing-action`.

Depois de uma resposta, “Voltar às opções” restaura `overview`. A ação principal fecha o painel antes de navegar ou devolver o controle para uma ação local da página.

Abrir, responder ou fechar não altera pontos, ofensiva ou progresso. Somente ações já existentes na jornada podem produzir alterações por meio do reducer atual.

## Comportamento visual

### Avatar fechado

- continuar pequeno e encostado à borda direita;
- tornar-se um botão real com alvo mínimo de 44 × 44 px;
- manter animação leve de flutuação;
- usar brilho ou pequeno indicador apenas quando existir uma ação pendente derivada do estado;
- não exibir balão permanente sobre o feed.

O indicador não significará “não lido”, pois a primeira versão não persiste leitura. Quando houver uma recomendação acionável, o rótulo será “Soulie tem uma sugestão. Abrir ajuda guiada”. No estado neutro, será “Abrir ajuda guiada da Soulie”.

### Mobile

- abrir como diálogo modal em formato de bottom sheet;
- ocupar somente o espaço necessário;
- possuir rolagem própria quando o conteúdo crescer;
- considerar `env(safe-area-inset-bottom)`;
- manter a barra inferior visualmente atrás do backdrop e indisponível enquanto o painel estiver aberto;
- evitar rolagem simultânea do painel e da página;
- fechar apenas por botão visível ou tecla `Escape` nesta primeira versão.

### Desktop

- abrir como diálogo modal compacto visualmente associado ao telefone demonstrativo;
- preservar o conteúdo explicativo à esquerda;
- não ocupar a página inteira;
- compartilhar mensagens, ações e estado com o mobile, alterando somente a composição.

Como um `<dialog>` aberto com `showModal()` é renderizado na camada superior do navegador, seu posicionamento não poderá depender do wrapper ancestral do telefone. O próprio diálogo terá uma composição responsiva capaz de alinhá-lo visualmente ao aparelho demonstrativo no desktop.

### Decisão de diálogo

O painel será **modal** nos dois formatos. A implementação deverá preferir o elemento HTML `<dialog>` com `showModal()` para tornar o restante da página inerte, conter o foco e oferecer fechamento por `Escape` com suporte nativo.

- foco inicial no título estático do painel, com `tabindex="-1"`;
- `aria-labelledby` aponta para o título visível “Ajuda guiada da Soulie”;
- subtítulo visível e acessível: “Demonstração com respostas prontas”;
- `Tab` e `Shift + Tab` permanecem dentro do diálogo;
- fechar devolve o foco ao launcher;
- toque no backdrop não fecha na primeira versão;
- somente a nova resposta usa `aria-live="polite"`, evitando reler o painel inteiro.

## Personalidade e linguagem

- frases curtas, calorosas e específicas;
- humor leve sem infantilizar o contexto corporativo;
- urgência gentil, nunca culpa;
- celebração proporcional à conquista;
- nenhuma resposta deve fingir que a Soulie sabe algo que o estado local não contém;
- expressão, animação e texto devem comunicar o mesmo estado;
- a Soulie oferece escolhas e aceita “Agora não”.

## Arquitetura proposta

```text
src/features/soulie/
├─ components/
│  ├─ SoulieAssistant.tsx
│  ├─ SoulieLauncher.tsx
│  ├─ SouliePanel.tsx
│  └─ SoulieAssistant.module.css
├─ soulie.interactions.ts
├─ soulie.engine.ts
└─ soulie.types.ts
```

### Responsabilidades

- `SoulieAssistant`: coordena launcher, painel e intenção selecionada;
- `SoulieLauncher`: botão acessível que contém o avatar;
- `SouliePanel`: apresenta mensagem, respostas rápidas e ação;
- `soulie.interactions.ts`: textos e cenários simulados fora do JSX;
- `soulie.engine.ts`: função pura que combina contexto e `DemoState`;
- `soulie.types.ts`: contratos de contexto, intenção, resposta e ação.

O `ExperienceShell` continuará responsável apenas pelo posicionamento visual. Ele deverá receber uma área ou componente de assistente, sem conhecer as regras da Soulie.

## Arquivos ou áreas envolvidas

### Novos

- `src/features/soulie/components/SoulieAssistant.tsx`;
- `src/features/soulie/components/SoulieLauncher.tsx`;
- `src/features/soulie/components/SouliePanel.tsx`;
- `src/features/soulie/components/SoulieAssistant.module.css`;
- `src/features/soulie/soulie.interactions.ts`;
- `src/features/soulie/soulie.engine.ts`;
- `src/features/soulie/soulie.types.ts`.

### Integrações existentes

- `src/components/experience/ExperienceShell.tsx` e módulo CSS: substituir a imagem flutuante por um slot interativo sem levar regras para o shell;
- `src/pages/experience/FeedPage.tsx`: contexto do feed e destinos de missão/comunidade;
- `src/pages/experience/CommunitySelectorPage.tsx`: contexto das comunidades escolhidas;
- `src/pages/experience/CommunityHubPage.tsx`: contexto da comunidade e callbacks para revelar/focar o desafio;
- `src/pages/experience/Journey.module.css`: remover responsabilidades do avatar antigo quando o componente assumir a apresentação;
- `src/data/missions.ts`, `src/data/communities.ts` e `src/data/community-experience.ts`: somente leitura pelo motor;
- `src/state/demo.types.ts`: somente leitura de `DemoState`; não há novo estado global planejado.

Migração do shell:

- substituir `floatingAction?: ReactNode` por um slot semanticamente nomeado, como `assistant?: ReactNode`;
- manter o wrapper com `pointer-events: none` apenas como camada de posicionamento;
- o `SoulieLauncher` recebe `pointer-events: auto` e alvo mínimo de 44 × 44 px;
- remover as imagens `soulieFab` duplicadas das páginas após cada integração.

### Tipos conceituais

```ts
type SoulieAssistantContext =
  | { kind: 'feed' }
  | { kind: 'community-selector' }
  | { kind: 'community'; communityId: string }

type SoulieIntent = {
  id: string
  label: string
  response: string
  mood: SoulieMood
  action?: SoulieAction
}

type SoulieAction =
  | { kind: 'navigate'; label: string; to: string }
  | { kind: 'page-event'; label: string; event: 'show-community-contribution' | 'focus-community-challenge' }
  | { kind: 'panel'; label: string; command: 'reset' | 'close' }
```

Eventos locais serão executados por callbacks tipados fornecidos pela página. O motor apenas devolve descrições de ação; ele não importa componentes, hooks de navegação ou funções da página.

### Mapa de destinos e ações

| Origem | Ação | Contrato |
|---|---|---|
| Feed | abrir trilha recomendada | `navigate` → `/jornada/missoes/:trailId` |
| Feed | retomar missão iniciada | `navigate` → `/jornada/missoes/:trailId/:missionId` |
| Feed | ver todas as missões | `navigate` → `/jornada/missoes` |
| Feed | abrir comunidade escolhida | `navigate` → `/jornada/comunidade/:communityId` |
| Feed | descobrir comunidades | `navigate` → `/jornada/comunidades` |
| Seletor | descobrir outras comunidades | `navigate` → `/jornada/comunidades?origem=minhas` |
| Seletor | abrir comunidade | `navigate` → `/jornada/comunidade/:communityId` |
| Comunidade | mostrar como ajudar | `page-event` → `show-community-contribution` |
| Comunidade | ver desafio | `page-event` → `focus-community-challenge` |
| Painel | voltar às opções | `panel` → `reset` |
| Painel | agora não | `panel` → `close` |

## Estado e persistência

Na primeira versão:

- painel aberto e intenção selecionada ficam em estado local;
- não existe histórico de conversa;
- o painel fecha ao navegar para outra rota;
- nenhum clique é salvo no `sessionStorage`;
- `soulieMood` pode definir a expressão inicial;
- humores selecionados durante respostas são locais ao painel e não disparam `SET_SOULIE_MOOD`;
- nenhum novo estado global será criado sem necessidade comprovada.

## Acessibilidade

- avatar implementado como `<button>`, não como imagem com `onClick`;
- `aria-label="Soulie tem uma sugestão. Abrir ajuda guiada"` quando houver recomendação acionável;
- `aria-label="Abrir ajuda guiada da Soulie"` no estado neutro;
- `aria-expanded` e `aria-controls` conectando launcher e painel;
- `<dialog>` modal com título visível e indicação de demonstração;
- foco movido para o painel ao abrir e devolvido ao avatar ao fechar;
- fechamento por botão e `Escape`;
- respostas rápidas acessíveis por teclado;
- nenhuma informação depende apenas de cor, expressão ou movimento;
- animações respeitam `prefers-reduced-motion`;
- conteúdo e ações continuam legíveis em 320 px de largura.
- zoom de 200% não corta título, respostas ou botão fechar;
- orientação horizontal mantém rolagem interna utilizável;
- respostas novas são anunciadas sem repetir todo o conteúdo.

## Requisitos

- tornar clicáveis todos os avatares flutuantes existentes;
- exibir conteúdo diferente e coerente no feed, seletor e comunidade;
- usar apenas dados existentes ou simulados explicitamente;
- oferecer duas respostas rápidas na abertura e no máximo três após uma escolha;
- conduzir para ações e rotas já existentes;
- explicar o motivo de recomendações;
- permitir fechar ou ignorar sem consequência;
- preservar pontos, progresso e ofensiva ao apenas conversar;
- manter a Soul Up como contexto visual, sem reconstruir seu chat.

## Fora de escopo

- campo de texto livre;
- modelo de IA ou chamadas a API;
- backend;
- chat entre usuários;
- histórico persistente;
- áudio ou reconhecimento de voz;
- notificações enviadas pelo painel;
- geração aleatória de respostas;
- alteração direta de pontos pela conversa.

## Plano de implementação executado

1. [x] Finalizar e revisar este plano.
2. [x] Criar tipos, conteúdo contextual e motor determinístico.
3. [x] Criar launcher acessível e painel compartilhado.
4. [x] Integrar primeiro ao feed.
5. [x] Integrar ao seletor e à comunidade aberta.
6. [x] Conectar respostas rápidas às rotas e ações locais existentes.
7. [x] Validar foco, teclado, toque, rolagem e movimento reduzido.
8. [x] Validar mobile em 320 e 390 px, orientação horizontal e desktop. O Safari mobile real permanece como validação futura documentada.
9. [x] Executar Plan Review, UX Review, Code Review, validações e Final Review independentes.

## Critérios de aceite verificados

- [x] avatar funciona por toque, clique, Enter e Espaço por meio de botão nativo;
- [x] painel abre com mensagem adequada ao contexto atual;
- [x] feed, seletor e comunidade exibem opções distintas;
- [x] ações levam a rotas existentes e corretas;
- [x] “Por que esta sugestão?” explica sinais existentes no estado;
- [x] abrir, responder e fechar não alteram pontos ou progresso;
- [x] painel fecha por botão e `Escape` e devolve o foco ao avatar;
- [x] `Tab` e `Shift + Tab` permanecem dentro do diálogo aberto;
- [x] conteúdo atrás do modal fica inerte;
- [x] painel não cobre a barra inferior ou ações críticas;
- [x] respostas são identificadas como simuladas;
- [x] não existe campo que prometa conversa livre;
- [x] movimento reduzido é respeitado;
- [x] experiência funciona em 320 px, 390 px e desktop;
- [x] orientação horizontal preserva leitura, rolagem interna e fechamento; 320 px também cobriu o principal risco de ampliação e corte;
- [x] “Voltar às opções” restaura a visão inicial e o foco da primeira resposta;
- [x] typecheck, lint e build passam;
- [x] nenhuma regressão foi identificada nas rotas e estados percorridos.

## Riscos e decisões

- **Expectativa de IA real:** não usar campo livre e identificar a demonstração;
- **Conteúdo desatualizado:** derivar mensagens do estado atual por função pura;
- **Sobreposição no mobile:** limitar altura e posicionar acima da navegação;
- **Duplicação de regra:** manter pontos e progresso somente no reducer existente;
- **Perda de foco:** testar abertura, fechamento e retorno ao launcher;
- **Avatar cobrindo conteúdo:** preservar tamanho pequeno e revisar cada contexto;
- **Excesso de opções:** limitar a duas intenções na abertura e no máximo três depois da primeira escolha;
- **Variações do `<dialog>` no Safari mobile:** validar abertura, foco, rolagem interna, `Escape` quando disponível e fechamento pelo botão visível em dispositivo ou emulação Safari antes da entrega.

## Matriz de validação futura

| Cenário | Mobile 320 | Mobile 390 | Desktop | Teclado/foco | Resultado esperado |
|---|---:|---:|---:|---:|---|
| Feed sem comunidade | Sim | Sim | Sim | Sim | descoberta genérica sem alegar personalização |
| Feed com missão iniciada | Sim | Sim | Sim | Sim | retomar missão correta |
| Feed com última missão concluída e missões restantes | Sim | Sim | Sim | Sim | recomendar próxima trilha incompleta, sem repetir a celebração |
| Feed com missões concluídas | Sim | Sim | Sim | Sim | reconhecer o marco e sugerir comunidade, sem repetir a celebração |
| Seletor vazio | Sim | Sim | Sim | Sim | abrir descoberta |
| Todas as comunidades escolhidas | Sim | Sim | Sim | Sim | visitar existente, sem sugerir nova |
| Comunidade pendente | Sim | Sim | Sim | Sim | revelar passos locais |
| Comunidade concluída | Sim | Sim | Sim | Sim | reconhecer contribuição sem pontuar novamente |
| Fechar por `Escape` | Sim | Sim | Sim | Sim | foco retorna ao launcher |
| Movimento reduzido | Sim | Sim | Sim | N/A | nenhuma animação contínua |
| Zoom 200% / horizontal | Sim | Sim | Sim | Sim | sem corte e com rolagem interna única |
| Safari mobile com teclado | Sim | Sim | N/A | Sim | diálogo abre, rola, responde ao teclado disponível e devolve o foco ao launcher |
| Safari mobile somente por toque | Sim | Sim | N/A | N/A | diálogo abre, rola e fecha pelo botão visível sem bloquear a página |

## Evoluções futuras

- check-in diário com escolha de energia ou tempo disponível;
- retomada gentil após inatividade;
- variações de expressão conforme o contexto;
- histórico curto somente se trouxer valor comprovado;
- entrada de texto apenas quando existir capacidade real, limites claros e tratamento seguro de perguntas não reconhecidas.

## Revisões desta estruturação

- **Plan Review:** aprovado sem bloqueios;
- **Revisão arquitetural inicial:** `READY TO IMPLEMENT`;
- **Code Review:** aprovado após a correção do fluxo de foco e da região `aria-live`;
- **UX Review:** aprovado após a contenção explícita de `Tab`/`Shift + Tab` e o tratamento de `Escape`;
- **Test Agent:** `PASS`, com typecheck, lint, build, `git diff --check` e validação manual;
- **Final Review:** `READY TO MERGE`, sem bloqueios conhecidos;
- **Implementação:** concluída no feed, seletor de comunidades e comunidade aberta.

## Validações executadas

- `npm run typecheck`: aprovado;
- `npm run lint`: aprovado;
- `npm run build`: aprovado;
- `git diff --check`: aprovado, com apenas avisos de normalização LF/CRLF;
- navegador local: feed, seletor, comunidade, respostas, motivo da sugestão, rotas, ações locais e retorno de foco;
- responsividade: 320 px, 390 px, desktop e orientação horizontal;
- limitações conhecidas: o projeto ainda não possui testes automatizados e o Safari mobile real não estava disponível.

## Divergências durante a implementação

Planned behavior:

Usar o comportamento modal nativo de `<dialog>` para conter o foco e fechar por `Escape`, mantendo o wrapper de posicionamento do assistente sem eventos de ponteiro.

Observed problem:

O wrapper também impedia cliques dentro do diálogo. Além disso, variações do navegador permitiram que o foco alcançasse o `body` e não fecharam o painel por `Escape` de forma confiável.

Required deviation:

Aplicar `pointer-events: auto` ao diálogo, conter explicitamente `Tab` e `Shift + Tab`, tratar `Escape` em `onKeyDown`/`onCancel` e diferenciar o retorno de foco entre fechamento comum, navegação e ação local da página.

Reason:

Preservar os critérios de interação e acessibilidade aprovados em todos os navegadores testados, sem adicionar dependências ou alterar a arquitetura planejada.
