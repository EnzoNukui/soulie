# Plano — Mini feed e trilhas de missões interativas

## Objetivo

Evoluir a demonstração funcional da Soulie para que, após a escolha de uma comunidade, o usuário passe por um mini feed inspirado no contexto visual da Soul Up e consiga descobrir, abrir e executar trilhas de missões fracionadas. A conclusão deve atualizar pontos, ofensiva, notificações e o próprio feed antes de recomendar a próxima ação.

## Contexto

O protótipo atual conduz o usuário do onboarding e da recomendação de comunidades diretamente para uma missão única e estática. Esse salto não demonstra como a Soulie surgiria naturalmente durante o uso cotidiano do aplicativo nem permite explorar diferentes trilhas.

As referências visuais desta tarefa estão em:

- `docs/referencias/telas-soul-up/`;
- `docs/referencias/midias-soulie/`;
- `docs/pesquisa/PESQUISA_DIRETORIOS_UX.md`.

As mídias recebidas são referências conceituais. As imagens de reação podem ser usadas no protótipo, enquanto a notificação será reconstruída com HTML e CSS para manter legibilidade e responsividade.

## Requisitos

- inserir um mini feed entre a escolha de comunidade e as missões;
- representar no feed carteira, ofensiva, comunidades, atividade recente e uma intervenção contextual da Soulie;
- oferecer no feed uma missão recomendada e acesso à central completa de trilhas;
- disponibilizar múltiplas trilhas clicáveis;
- permitir abrir cada trilha e visualizar suas missões menores, progresso e pontuação total;
- garantir que a soma das missões menores seja igual ao valor anunciado pela trilha;
- permitir iniciar uma missão, confirmar sua execução e concluí-la;
- impedir concessão duplicada de pontos para uma missão já concluída;
- desbloquear as missões de cada trilha em sequência;
- apresentar após a conclusão uma reação da Soulie, pontos, ofensiva, notificação simulada, impacto no feed e próxima recomendação;
- atualizar o mini feed depois de uma conclusão;
- corrigir o reinício para permanecer dentro do protótipo, sem retornar à apresentação institucional;
- preservar responsividade, navegação por teclado, foco visível e textos legíveis em mobile e desktop;
- identificar dados de comunidades, posts, pontos e progresso como simulados quando necessário.

## Fora de escopo

- reconstruir integralmente o aplicativo Soul Up;
- autenticação, backend, notificações reais ou sincronização com contas;
- upload real de evidências;
- reprodução obrigatória dos vídeos recebidos;
- métricas reais de negócio ou dados reais de usuários;
- criação de testes E2E ou inclusão de uma nova dependência de testes nesta etapa.

## Arquivos e áreas envolvidas

- `src/app/router.tsx`;
- `src/data/missions.ts` e dados de feed relacionados;
- `src/state/demo.types.ts`, `src/state/demo.reducer.ts` e `src/state/DemoProvider.tsx`;
- `src/components/experience/ExperienceShell.tsx`;
- novas páginas em `src/pages/experience/`;
- estilos CSS Modules das páginas e componentes envolvidos;
- imagens de reação em `src/assets/soulie/`;
- documentação desta tarefa.

## Etapas incrementais

1. Modelar trilhas, missões menores, estados de início/conclusão, ofensiva e último resultado.
2. Criar o mini feed e ligá-lo ao final da escolha de comunidade.
3. Criar a central com múltiplas trilhas e estados de progresso.
4. Criar o detalhe da trilha com desbloqueio sequencial de missões.
5. Criar a execução de uma missão com confirmação explícita do usuário.
6. Criar a experiência pós-missão e refletir o resultado no feed.
7. Aplicar as imagens de reação da Soulie e corrigir o comportamento de reinício.
8. Comparar a implementação com este plano, revisar código e experiência e executar as validações existentes.

## Critérios de aceite verificáveis

- ao entrar em uma comunidade, o CTA seguinte abre `/jornada/feed`;
- o feed exibe a Soulie de forma contextual e possui ações para missão recomendada e todas as trilhas;
- a central apresenta pelo menos três trilhas distintas e todas podem ser abertas;
- cada trilha informa o total de pontos e lista suas missões menores;
- a soma dos pontos listados coincide com o total da trilha;
- a primeira missão de uma trilha iniciada pode ser executada e as seguintes respeitam a ordem de desbloqueio;
- concluir uma missão uma segunda vez não soma pontos novamente;
- a conclusão mostra reação, recompensa, ofensiva e notificação simulada;
- voltar ao feed após concluir mostra a atividade recente e os valores atualizados;
- reiniciar limpa a sessão demonstrativa e abre o início da experiência, nunca `/`;
- `npm run typecheck`, `npm run lint` e `npm run build` terminam sem erro;
- a jornada principal funciona em largura mobile e desktop sem rolagem horizontal indevida.

## Riscos e decisões

- **Persistência anterior:** sessões salvas antes da mudança não possuem os novos campos. O estado carregado será combinado com os valores iniciais para manter compatibilidade.
- **Escopo da simulação:** a execução usa confirmação local explícita em vez de integrações ou comprovação real; a interface indicará o caráter demonstrativo.
- **Fidelidade à Soul Up:** carteira, feed e navegação servem como contexto visual simplificado. O foco funcional permanece na Soulie.
- **Mídias pesadas:** os vídeos ficam catalogados para avaliação futura. Nesta entrega, imagens estáticas e animações CSS preservam desempenho e controle de movimento.
- **Revisões independentes:** o ambiente desta execução não delegará agentes sem solicitação explícita. As revisões serão realizadas separadamente pelo agente principal e essa limitação será declarada no relatório final.

## Registro de divergências

Nenhuma divergência identificada antes da implementação.

## Revisão da implementação

- **Aderência ao plano:** o fluxo comunidade → feed → central → trilha → missão → resultado foi implementado; a rota legada de missão redireciona para a nova central.
- **Pontuação das trilhas:** Energia consciente = 50 pontos; Comunidade em ação = 40 pontos; Rotina sustentável = 30 pontos. Todos os totais correspondem à soma de suas missões menores.
- **Persistência:** o carregamento combina sessões antigas com o novo estado inicial; a conclusão duplicada é ignorada pelo reducer.
- **UX e responsividade:** fluxo completo percorrido no navegador; versão mobile conferida em 390 × 844 sem estouro horizontal; filtros da central são funcionais.
- **Correção durante revisão:** o primeiro teste encontrou uma disputa de navegação ao reiniciar a partir do resultado. O estado transitório de reinício foi explicitado e o novo teste confirmou destino em `/jornada/encontro` com a apresentação da Soulie visível.
- **Validações:** `npm run typecheck`, `npm run lint` e `npm run build` aprovados em 27/08/2026.
- **Limitação de revisão:** não foi possível usar histórico ou diff do Git porque a pasta não é um repositório Git. As áreas alteradas foram revisadas diretamente. Revisões independentes por papéis não foram executadas porque agentes separados não foram solicitados nesta etapa.

## Veredito final

`READY TO MERGE` — nenhum bloqueio conhecido nas validações disponíveis ou nos critérios de aceite desta tarefa.
