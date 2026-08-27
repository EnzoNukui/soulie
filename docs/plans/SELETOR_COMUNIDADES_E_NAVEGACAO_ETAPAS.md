# Seletor de comunidades e navegação pelas etapas

## Objetivo

Inserir uma tela intermediária para o usuário escolher entre as comunidades das quais participa, permitir a entrada em novas comunidades e tornar as barras de etapas clicáveis para navegação entre as áreas principais da demonstração.

## Contexto

O item “Comunidades” do menu abre atualmente uma comunidade diretamente. Isso elimina a escolha quando o usuário participa de mais de um espaço. As barras da apresentação informam progresso, mas ainda não funcionam como navegação.

## Requisitos

- fazer o menu “Comunidades” abrir primeiro o seletor de comunidades;
- listar somente comunidades já escolhidas pelo usuário;
- permitir abrir cada comunidade individualmente;
- oferecer ação clara para descobrir e entrar em outra comunidade;
- depois de adicionar outra comunidade a partir do seletor, retornar à lista de comunidades;
- preservar o primeiro fluxo do onboarding, que continua avançando para o feed;
- tornar as barras de etapas controles navegáveis e acessíveis;
- organizar as barras em seis áreas principais: encontro, onboarding, descoberta, feed, comunidades e missões;
- manter telas internas de trilha, tarefa e resultado dentro da etapa de missões;
- preservar estado, responsividade e compatibilidade com URLs antigas.

## Fora de escopo

- criação e moderação de comunidades;
- busca real ou paginação;
- tornar as barras um histórico exato de cada subtela interna;
- implementar os demais itens ilustrativos do menu inferior.

## Arquivos ou áreas envolvidas

- `src/components/experience/ExperienceShell.tsx` e estilos;
- `src/app/router.tsx`;
- `src/pages/experience/CommunitySelectorPage.tsx`;
- `src/pages/experience/CommunityHubPage.tsx`;
- `src/pages/CommunityScenePage/CommunityScenePage.tsx`;
- páginas de missões para alinhamento da etapa;
- estilos compartilhados da jornada.

## Plano de implementação

1. Criar o seletor com estados preenchido e vazio.
2. Parametrizar a rota de detalhe por comunidade.
3. Preservar a origem ao adicionar uma nova comunidade.
4. Converter o indicador de etapas em links semânticos.
5. Reorganizar a contagem das etapas principais.
6. Validar seleção, retorno, navegação pelas barras e responsividade.

## Critérios de aceite

- [ ] o menu abre a lista de comunidades antes do detalhe;
- [ ] cada comunidade escolhida pode ser aberta;
- [ ] é possível entrar em outra e voltar à lista;
- [ ] a tela de detalhe usa a comunidade selecionada na URL;
- [ ] as seis barras são clicáveis, possuem rótulos e foco visível;
- [ ] telas internas de missão continuam funcionando;
- [ ] typecheck, lint e build passam;
- [ ] nenhuma regressão relevante é identificada em desktop ou mobile.

## Riscos e observações

- sessões sem comunidades precisam de estado vazio útil;
- a navegação livre pode acessar áreas antes do onboarding, portanto as telas devem continuar usando fallbacks seguros;
- as barras representam áreas principais, não cada clique do fluxo.

## Divergências durante a implementação

Nenhuma divergência identificada antes da implementação.

## Revisão da implementação

- [x] o menu abre `/jornada/comunidade`, que lista as comunidades escolhidas antes do detalhe;
- [x] o estado vazio orienta a descoberta da primeira comunidade;
- [x] cada cartão abre `/jornada/comunidade/:communityId` e comunidades não escolhidas são recusadas;
- [x] “Entrar em outra comunidade” preserva a origem e retorna ao seletor após a entrada;
- [x] o fluxo foi validado adicionando `Eco em Ação` e `Futuro em Código` na mesma sessão;
- [x] as seis barras são links acessíveis com rótulo, foco e `aria-current`;
- [x] missões e suas subtelas foram agrupadas na sexta etapa;
- [x] o seletor foi conferido em 390 × 844 sem estouro horizontal;
- [x] `npm run typecheck`, `npm run lint` e `npm run build` foram aprovados em 27/08/2026.

## Veredito final

`READY TO MERGE` — seleção de comunidades e navegação pelas etapas concluídas sem bloqueios conhecidos.
