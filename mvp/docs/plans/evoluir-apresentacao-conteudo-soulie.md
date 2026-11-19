# Evoluir apresentação com a proposta completa da Soulie

## Objetivo

Transformar a abertura em uma narrativa de produto mais completa, baseada nas informações do site da Soulie, sem reproduzir sua estrutura institucional e sem balão de fala na primeira tela.

## Contexto

A abertura atual apresenta a personagem e três benefícios, mas ainda não explica adequadamente o problema de recorrência, o ciclo de funcionamento, as funcionalidades e o valor gerado para usuários e empresas.

## Requisitos

- remover o balão de fala da primeira tela;
- manter a Soulie como elemento visual central;
- explicar o problema de retenção sem usar métricas não validadas;
- apresentar onboarding, missões, ofensivas, comunidade, timing, pontos e recompensas;
- mostrar a relação entre pequenas ações, recorrência e benefício prático;
- diferenciar valor para usuário e empresa;
- preservar uma chamada clara para o protótipo interativo;
- manter responsividade e movimento reduzido.

## Fora de escopo

- copiar layout, textos longos ou seções do site original;
- apresentar métricas de retenção como resultados comprovados;
- implementar novas funções dentro da demonstração;
- adicionar dependências.

## Arquivos ou áreas envolvidas

- `src/pages/PresentationPage/`;
- documentação de apresentação.

## Plano de implementação

1. reestruturar a narrativa da abertura;
2. redesenhar o hero sem balão;
3. adicionar problema, ciclo, ecossistema e impacto;
4. adicionar chamada final para a experiência;
5. validar desktop, mobile, acessibilidade e build.

## Critérios de aceite

- [x] o balão não aparece na primeira tela;
- [x] as capacidades centrais da Soulie são compreensíveis;
- [x] a apresentação usa conteúdo da proposta sem copiar o site;
- [x] o botão principal continua levando à demonstração;
- [x] desktop e mobile foram validados;
- [x] typecheck, lint e build passam.

## Riscos e observações

- a página deve permanecer escaneável apesar da ampliação de conteúdo;
- dados e resultados empresariais são apresentados como proposta, não como métricas reais.

## Divergências durante a implementação

Nenhuma.
