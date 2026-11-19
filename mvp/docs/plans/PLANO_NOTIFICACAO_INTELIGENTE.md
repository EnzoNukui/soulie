# Plano — Demonstração de notificação inteligente

## Objetivo

Demonstrar como a Soulie identifica um momento relevante, pede consentimento de forma contextual, apresenta uma notificação compreensível e conduz o usuário diretamente à ação correspondente dentro do protótipo.

## Contexto

A proposta da Soulie prevê notificações personalizadas por interesses, atividade de comunidades, progresso, ofensiva e horário habitual. A demonstração não enviará uma notificação real: simulará o ciclo completo para explicar o comportamento e permitir interação segura no navegador.

Diretrizes oficiais de Apple e Android recomendam pedir permissão no contexto, explicar o benefício, manter mensagens concisas, respeitar horários e não exagerar a urgência.

## Escopo desta entrega

Esta primeira entrega será acessada por um ícone de sino no cabeçalho do feed, ao lado dos controles ilustrativos de pesquisa e favoritos. O sino abrirá a rota única `/jornada/notificacoes`, que combina:

- configuração demonstrativa de consentimento, temas, frequência e horário;
- persistência das preferências durante a sessão;
- prévia visual de uma notificação da Soulie;
- abertura do exemplo no contexto de uma comunidade já escolhida ou, na ausência dela, na descoberta de comunidades;
- identificação explícita de que nenhum push real será enviado.

Os estados completos de entrega, dispensa, limite diário e histórico de eventos continuam planejados para uma evolução posterior. Eles não são necessários para validar o ponto de acesso, o controle do usuário e o exemplo desta entrega incremental.

## Cenário principal recomendado

**Comunidade ativa no horário habitual**

1. O usuário visualiza uma cena curta de retorno ao aplicativo.
2. A interface explica que a comunidade escolhida está ativa e que há uma contribuição de menos de três minutos.
3. O usuário escolhe ativar ou não lembretes desse tipo.
4. O protótipo simula uma notificação de sistema da Soulie.
5. A notificação informa comunidade, motivo, ação e recompensa sem expor dados sensíveis.
6. Ao abrir, o usuário é levado diretamente ao desafio da comunidade, não ao feed genérico.
7. A Soulie mostra “Por que recebi isso?”: interesse correspondente, comunidade ativa e horário preferido simulado.
8. O usuário contribui ou dispensa.
9. O sistema registra abertura, ação ou dispensa e apresenta o impacto.

## Cenários secundários

- **Ofensiva em risco:** lembrete acolhedor, sem culpa, próximo ao horário habitual;
- **Nova missão compatível:** recomendação passiva baseada nos interesses escolhidos;
- **Resultado disponível:** retorno não urgente após uma ação coletiva atingir um marco.

## Requisitos da visão completa

Os itens abaixo orientam a evolução posterior do ciclo inteligente. Nesta entrega incremental, valem somente os requisitos explicitados em **Escopo desta entrega** e nos critérios de aceite atuais.

- usar notificações simuladas, claramente identificadas;
- solicitar consentimento apenas depois de explicar valor e tipos de lembrete;
- oferecer “Agora não” com o mesmo peso de decisão;
- permitir frequência, horário e temas demonstrativos;
- explicar por que cada notificação foi selecionada;
- usar deep link para comunidade, desafio ou missão específicos;
- representar estados `scheduled`, `delivered`, `opened`, `dismissed` e `acted`;
- impedir notificações duplicadas para o mesmo evento;
- respeitar horário silencioso e limite diário simulado;
- não usar nível urgente para promoções ou incentivos comuns;
- evitar dados pessoais ou sensíveis na prévia;
- oferecer desativação e revisão das preferências.

## Fora de escopo

- Push API, APNs, Firebase Cloud Messaging ou service worker;
- pedido real de permissão do navegador ou sistema operacional;
- coleta real de horários e padrões comportamentais;
- inteligência artificial ou agendamento em backend.

## Telas e estados propostos

### 1. Preparação contextual

Card dentro da comunidade: “Quer que eu avise quando este grupo estiver mais ativo?”. Explica benefício, exemplos e controle do usuário.

### 2. Preferências rápidas

- tema: comunidade, missões e ofensiva;
- frequência: no máximo uma por dia ou resumo;
- horário preferido;
- horário silencioso;
- ação “Ativar demonstração”.

### 3. Cena fora do aplicativo

Mock visual de tela bloqueada ou central de notificações, inspirado na referência recebida, usando apenas avatar transparente e texto HTML/CSS.

### 4. Abertura contextual

Deep link para `/jornada/comunidade/:communityId?origem=notificacao`, com painel “Por que agora?” aberto.

### 5. Resultado

Contribuição, pontos e meta coletiva atualizados, além do registro visual “Notificação útil” ou “Não quero receber este tipo”.

## Dados e estado planejados

- `notificationPreferences`: consentimento, temas, frequência, horário e silêncio;
- `notificationEvents`: id, gatilho, destino, motivo, horário e estado;
- `activeNotificationId`;
- ações do reducer para configurar, entregar, abrir, dispensar e concluir;
- regras determinísticas em `src/features/soulie/notification-engine.ts`;
- textos e cenários simulados em `src/data/notifications.ts`.

## Rotas propostas

- `/jornada/notificacoes`, reunindo preferências e demonstração nesta entrega;
- deep links para as rotas existentes de comunidade e missão.

## Plano de implementação futuro

1. Modelar preferências, eventos e regras determinísticas.
2. Criar preparação contextual e preferências rápidas.
3. Criar cena de notificação simulada.
4. Implementar abertura por deep link e justificativa.
5. Conectar ação ao desafio coletivo ou missão.
6. Implementar dispensa, limite diário e prevenção de duplicidade.
7. Validar acessibilidade, responsividade, persistência e reinício.

## Critérios de aceite

- [x] o sino aparece apenas no cabeçalho do feed e abre a configuração;
- [x] o usuário entende o benefício antes de consentir;
- [x] ativar ou desativar funciona sem bloquear a jornada;
- [x] a prévia mostra motivo e destino claros;
- [x] abrir o exemplo leva ao contexto disponível mais específico;
- [x] as preferências ficam preservadas durante a sessão;
- [x] dados e envio são identificados como simulados;
- [x] movimento reduzido e navegação por teclado são preservados.

## Riscos e decisões

- **Confusão com envio real:** usar selo permanente “Demonstração” na cena externa;
- **Sensação de vigilância:** mostrar apenas sinais escolhidos pelo usuário e permitir desligar cada tema;
- **Fadiga:** limite padrão de uma notificação diária e opção de resumo;
- **Urgência artificial:** comunidade e missão usam nível passivo/normal; ofensiva nunca deve romper horário silencioso;
- **Privacidade visual:** não exibir nome completo, empresa, saldo ou comportamento detalhado na tela bloqueada.

## Arquivos ou áreas envolvidas

- `src/components/experience/ExperienceShell.tsx` e estilos do cabeçalho;
- `src/pages/experience/NotificationSettingsPage.tsx` e estilos da jornada;
- `src/state/` para preferências persistidas;
- `src/app/router.tsx` para a nova rota.

## Divergências durante a implementação

Nenhuma divergência de escopo ou arquitetura foi necessária.

## Revisão da entrega

- Plan Review independente: 100%, sem bloqueios;
- Code Review independente: aprovado, sem achados P0, P1 ou P2;
- validações: `typecheck`, `lint` e `build` aprovados;
- revisão visual: fluxo conferido em desktop e mobile, sem rolagem horizontal ou erros no console;
- casos conferidos: comunidade escolhida, descoberta de comunidade, missão, somente ofensiva e ausência de temas;
- limitação conhecida: o projeto ainda não possui suíte automatizada, portanto a matriz de preferências foi validada manualmente.
