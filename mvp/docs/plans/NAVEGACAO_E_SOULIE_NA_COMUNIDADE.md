# Navegação funcional e atuação da Soulie na comunidade

## Objetivo

Tornar os acessos de início e comunidades do menu inferior funcionais, elevar a posição do avatar flutuante e criar uma cena de comunidade em que a Soulie ajude o usuário a entender o momento do grupo e contribuir para um desafio coletivo.

## Contexto

O menu inferior atual é apenas ilustrativo. O protótipo já demonstra descoberta de comunidades, feed e missões, mas ainda não mostra como a Soulie atuaria dentro de uma comunidade após a entrada do usuário.

O fluxo C do documento-base define: recomendação contextual, abertura do feed temático, interação, contribuição coletiva e retorno visual. A implementação deve representar esse ciclo sem reconstruir toda a Soul Up.

## Requisitos

- elevar discretamente o avatar flutuante do feed;
- tornar “Início” um link para `/jornada/feed`;
- tornar “Comunidades” um link para `/jornada/comunidade`;
- indicar visualmente o item ativo;
- criar uma cena de comunidade usando a comunidade escolhida pelo usuário ou um exemplo seguro quando não houver escolha salva;
- apresentar atividade recente, desafio coletivo e motivo da intervenção da Soulie;
- permitir que a Soulie explique uma contribuição curta antes da confirmação;
- permitir confirmar uma contribuição simulada apenas uma vez;
- atualizar pontos, progresso coletivo simulado e reação da Soulie;
- preservar persistência, responsividade, acessibilidade e redução de movimento.

## Fora de escopo

- comentários livres, upload de imagens, moderação ou backend;
- reconstrução completa da área de comunidades da Soul Up;
- chat real, ranking real ou cálculo científico de impacto;
- funcionamento dos demais ícones ilustrativos do menu inferior.

## Arquivos ou áreas envolvidas

- `src/components/experience/ExperienceShell.tsx` e estilos;
- `src/app/router.tsx`;
- `src/data/community-experience.ts`;
- `src/state/`;
- nova página em `src/pages/experience/`;
- estilos compartilhados da jornada.

## Plano de implementação

1. Modelar a contribuição comunitária no estado persistido.
2. Transformar início e comunidades em links reais com estado ativo.
3. Criar dados simulados do desafio e das publicações.
4. Construir a cena da comunidade e a orientação contextual da Soulie.
5. Implementar explicação, confirmação, recompensa e atualização visual.
6. Validar navegação, duplicidade, desktop e mobile.

## Critérios de aceite

- [ ] o avatar do feed aparece mais alto;
- [ ] início e comunidades navegam corretamente e mostram estado ativo;
- [ ] a comunidade escolhida aparece na nova cena;
- [ ] a Soulie explica por que está sugerindo a contribuição;
- [ ] a contribuição atualiza pontos e progresso apenas uma vez;
- [ ] dados simulados são identificados;
- [ ] typecheck, lint e build passam;
- [ ] nenhuma regressão relevante é identificada em desktop ou mobile.

## Riscos e observações

- sessões antigas não possuem contribuições comunitárias; o merge com o estado inicial continuará garantindo compatibilidade;
- a meta coletiva é simulada e deve ser apresentada como demonstração;
- itens ainda ilustrativos do menu não devem parecer links ativos.

## Divergências durante a implementação

Nenhuma divergência identificada antes da implementação.

## Revisão da implementação

- [x] o avatar flutuante foi elevado e deslocado para a borda direita sem criar rolagem horizontal;
- [x] “Início” abre `/jornada/feed` e “Comunidades” abre `/jornada/comunidade`;
- [x] o item correspondente recebe estado ativo e foco visível;
- [x] a cena usa a comunidade escolhida ou `Eco em Ação` como fallback demonstrativo;
- [x] a Soulie explica o contexto, apresenta três passos e permite confirmar uma contribuição;
- [x] a contribuição altera o desafio de 68 para 69 ações e concede 5 pontos apenas uma vez;
- [x] o estado persistiu ao navegar para o início e retornar à comunidade;
- [x] a versão mobile foi conferida em 390 × 844 sem estouro horizontal;
- [x] `npm run typecheck`, `npm run lint` e `npm run build` foram aprovados em 27/08/2026.

## Veredito final

`READY TO MERGE` — navegação e primeiro ciclo funcional da Soulie na comunidade concluídos sem bloqueios conhecidos.
