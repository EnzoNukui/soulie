# Redesign da conclusão de missão

## Objetivo

Transformar a tela de resultado em uma celebração clara e memorável, inspirada na energia das conclusões diárias do Duolingo, usando uma imagem realmente transparente da Soulie e preservando a identidade visual do protótipo.

## Contexto

A tela atual usa `soulie-oculos.png`, que possui fundo visível, repete a personagem na notificação e organiza a recompensa como um resumo comum. A referência enviada pede um momento mais próximo da conclusão de uma missão diária: personagem em destaque, recompensa imediata, progresso legível e continuidade simples.

Referências oficiais consultadas: artigos do Duolingo sobre celebração de ofensivas, missões diárias e clareza do sistema visual.

## Requisitos

- substituir o ativo com fundo por `soulie.png`, que possui transparência real;
- criar uma composição celebrativa com elementos decorativos leves;
- destacar missão diária concluída e pontos recebidos;
- mostrar conclusão da meta diária, saldo, ofensiva e progresso dentro da trilha;
- oferecer uma ação primária de continuidade e acesso secundário ao impacto no feed;
- manter a possibilidade de reiniciar a demonstração;
- respeitar movimento reduzido, contraste, textos alternativos e responsividade;
- manter os cálculos derivados do estado real da demonstração.

## Fora de escopo

- copiar cores, mascote, tipografia ou ilustrações proprietárias do Duolingo;
- adicionar sons, vibração, biblioteca de animação ou novos ativos;
- alterar regras de pontuação ou conclusão.

## Arquivos ou áreas envolvidas

- `src/pages/experience/MissionResultPage.tsx`;
- `src/pages/experience/Journey.module.css`;
- `src/assets/soulie/soulie.png` apenas como ativo reutilizado.

## Plano de implementação

1. Reestruturar o cabeçalho celebrativo e trocar o ativo.
2. Criar cartões de meta diária e progresso da trilha.
3. Reorganizar as ações em hierarquia primária e secundária.
4. Adicionar animações CSS com alternativa de movimento reduzido.
5. Validar resultado, próxima missão, feed, reinício, desktop e mobile.

## Critérios de aceite

- [ ] nenhuma imagem com fundo aparece na conclusão;
- [ ] a tela comunica claramente missão diária concluída e recompensa;
- [ ] meta diária, saldo, ofensiva e trilha usam valores coerentes;
- [ ] a próxima ação fica evidente;
- [ ] reinício continua funcionando;
- [ ] typecheck, lint e build passam;
- [ ] nenhuma regressão relevante é identificada em desktop ou mobile.

## Riscos e observações

- excesso de confetes e animação pode prejudicar legibilidade; os elementos serão limitados e decorativos;
- a tela deve ser inspirada no ritmo de celebração, não reproduzir a marca Duolingo;
- sessões antigas permanecem compatíveis pelo estado inicial mesclado.

## Divergências durante a implementação

Nenhuma divergência identificada antes da implementação.

## Revisão da implementação

- [x] `soulie-oculos.png` foi removida da tela e do bundle; a celebração usa apenas `soulie.png` transparente;
- [x] o cabeçalho apresenta meta diária, personagem, confetes leves e recompensa animada;
- [x] meta diária, saldo, ofensiva e progresso da trilha são derivados do estado atual;
- [x] movimento reduzido desativa personagem, brilho, recompensa, confetes e preenchimento animado;
- [x] a ação primária desbloqueou e abriu a próxima missão durante o teste;
- [x] o reinício continuou abrindo `/jornada/encontro`;
- [x] a versão mobile foi conferida em 390 × 844 sem estouro horizontal;
- [x] `npm run typecheck`, `npm run lint` e `npm run build` foram aprovados em 27/08/2026.

## Veredito final

`READY TO MERGE` — celebração diária redesenhada e validada sem bloqueios conhecidos.
