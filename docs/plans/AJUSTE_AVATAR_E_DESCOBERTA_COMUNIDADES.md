# Ajuste do avatar e da descoberta de comunidades

## Objetivo

Elevar o avatar flutuante e garantir que a área de descoberta apresente somente comunidades novas, excluindo aquelas em que o usuário já entrou.

## Contexto

O avatar ainda aparece abaixo da posição desejada. A descoberta ordena recomendações, mas não remove comunidades já escolhidas antes de limitar a lista, fazendo com que espaços existentes ocupem as vagas destinadas a novas sugestões.

## Requisitos

- elevar o avatar flutuante mantendo-o na borda direita;
- remover comunidades já escolhidas da lista de descoberta;
- preservar comunidades dispensadas fora das sugestões;
- atualizar a mensagem da Soulie conforme existam ou não novas opções;
- tratar o estado em que todas as comunidades já foram escolhidas;
- manter o retorno para “Minhas comunidades”.

## Fora de escopo

- criar novas comunidades;
- busca real, paginação ou backend;
- implementar a notificação inteligente planejada separadamente.

## Arquivos ou áreas envolvidas

- `src/components/experience/ExperienceShell.module.css`;
- `src/pages/CommunityScenePage/CommunityScenePage.tsx`;
- estilos do estado vazio, se necessário.

## Plano de implementação

1. Ajustar a posição vertical do avatar.
2. Filtrar comunidades escolhidas antes de limitar recomendações.
3. Revisar mensagens e estado vazio.
4. Validar retorno, mobile e desktop.

## Critérios de aceite

- [ ] o avatar aparece mais alto sem sair da moldura;
- [ ] nenhuma comunidade já escolhida aparece como recomendação de entrada;
- [ ] novas comunidades continuam podendo ser escolhidas;
- [ ] o estado sem novas opções é compreensível;
- [ ] typecheck, lint e build passam.

## Riscos e observações

- o avatar é uma camada flutuante e pode cruzar conteúdo durante a rolagem; o deslocamento deve preservar as ações principais;
- o catálogo atual contém apenas quatro comunidades simuladas.

## Divergências durante a implementação

Nenhuma divergência identificada antes da implementação.

## Revisão da implementação

- [x] o avatar foi elevado em 62 px e permanece encostado à borda direita;
- [x] o mobile foi conferido em 390 × 844 sem estouro horizontal;
- [x] comunidades escolhidas e dispensadas são filtradas antes do limite de recomendações;
- [x] após entrar em `Eco em Ação`, a descoberta exibiu somente as outras três comunidades;
- [x] a comunidade escolhida apareceu corretamente em “Minhas comunidades”;
- [x] o estado vazio diferencia opções dispensadas de catálogo totalmente escolhido;
- [x] restaurar sugestões não apaga pontos, missões ou comunidades;
- [x] `npm run typecheck`, `npm run lint` e `npm run build` foram aprovados em 27/08/2026.

## Veredito final

`READY TO MERGE` — ajuste visual e descoberta de novas comunidades concluídos sem bloqueios conhecidos.
