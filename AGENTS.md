# Instruções para agentes — Soulie

## Contexto do projeto

Este repositório contém o planejamento e, futuramente, a implementação de um site-experiência responsivo que demonstra como a assistente gamificada Soulie funcionaria dentro de contextos visuais da Soul Up.

A experiência deve permitir onboarding, recomendação de missão, conclusão, pontos, ofensiva, comunidade e resumo de impacto. A Soul Up é somente contexto visual; não deve ser reconstruída integralmente.

## Estado atual

- fase: primeira entrega funcional em desenvolvimento;
- stack: React 19, TypeScript 6 e Vite 8;
- rotas: React Router 8 em modo declarativo;
- aplicação: inicializada e navegável;
- `package.json`: disponível na raiz;
- código-fonte: fluxo inicial implementado em `src/`;
- testes automatizados: ainda inexistentes;
- validações disponíveis: typecheck, lint e build;
- Git: não inicializado nesta pasta no momento da criação deste arquivo.

Não invente comandos. Consulte sempre os scripts reais do `package.json`.

## Estrutura relevante

```text
docs/
├─ plans/        # contexto, arquitetura e planos de tarefas
├─ agents/       # prompts específicos dos papéis
├─ pesquisa/     # pesquisa e decisões de UX
└─ referencias/  # telas, conceitos e ativos visuais
```

Documentos obrigatórios antes de planejar ou implementar:

- `docs/plans/DOCUMENTACAO_SOULIE.md`;
- `docs/plans/PLANO_PROTOTIPO_SITE.md`;
- `docs/plans/ARQUITETURA_REACT.md`;
- plano específico da tarefa em `docs/plans/`;
- referências ou pesquisas relacionadas à tarefa.

## Arquitetura planejada

Enquanto não houver implementação, a arquitetura aprovada é a descrita em `docs/plans/ARQUITETURA_REACT.md`:

- SPA responsiva;
- React Router declarativo;
- Context API + `useReducer`;
- dados locais tipados;
- `sessionStorage` abstraído por serviço;
- tokens CSS globais + CSS Modules;
- lógica da Soulie separada dos contextos visuais da Soul Up;
- nenhuma dependência externa sem necessidade comprovada.

Alterações nessa direção exigem atualização explícita do plano e justificativa.

## Regras de desenvolvimento

- respeite a arquitetura e os documentos-base;
- não implemente funcionalidades fora do escopo solicitado;
- mantenha alterações pequenas, incrementais e rastreáveis;
- não modifique arquivos não relacionados sem justificativa;
- evite duplicação e reutilize componentes existentes quando apropriado;
- não adicione dependências sem necessidade concreta e registrada no plano;
- não altere a arquitetura apenas por preferência pessoal;
- preserve a compatibilidade com comportamentos já existentes;
- não remova validações para fazer testes passarem;
- não remova ou enfraqueça testes para obter build verde;
- não esconda divergências entre plano e implementação;
- mantenha dados simulados identificados como simulados;
- preserve acessibilidade e responsividade em desktop e mobile;
- não trate imagens conceituais como conteúdo textual ou métrica final;
- não reconstrua recursos completos da Soul Up que servem somente como contexto.

## Planos de tarefa

Toda feature ou alteração relevante deve ter um plano próprio em `docs/plans/`, criado a partir de `docs/plans/TEMPLATE.md`.

O plano precisa definir:

- objetivo;
- contexto;
- requisitos;
- fora de escopo;
- arquivos ou áreas envolvidas;
- etapas incrementais;
- critérios de aceite verificáveis;
- riscos e decisões.

O Planner finaliza e revisa o plano antes da implementação começar.

## Fluxo obrigatório

1. entender a tarefa;
2. investigar o código e a documentação relacionados;
3. criar ou atualizar o plano da tarefa;
4. revisar o plano;
5. implementar incrementalmente;
6. comparar a implementação com o plano;
7. executar Plan Review independente;
8. executar Code Review independente;
9. executar testes e validações disponíveis;
10. revisar critérios de aceite;
11. executar Final Review independente.

Uma tarefa relevante só está concluída quando não houver bloqueio conhecido no Plan Review, Code Review, testes e Final Review.

## Divergências do plano

O Implementer não pode assumir silenciosamente uma mudança. Registre no plano:

```text
Planned behavior:
...

Observed problem:
...

Required deviation:
...

Reason:
...
```

Se a divergência alterar escopo, comportamento ou arquitetura, interrompa a implementação e solicite revisão do plano.

## Independência dos papéis

Quando o ambiente permitir agentes independentes:

- Implementer implementa;
- UI Designer cria e estiliza a interface conforme o plano e as referências;
- UX Reviewer valida de forma independente a experiência, a responsividade e a aderência à intenção do usuário;
- Plan Reviewer verifica aderência ao plano;
- Code Reviewer avalia qualidade técnica;
- Test Agent executa e analisa validações;
- Final Reviewer decide se a tarefa está pronta.

O autor da implementação ou da estilização não aprova sozinho o próprio trabalho. O UX Reviewer deve ser independente do UI Designer.

Prompts específicos ficam em `docs/agents/`.

## Git e working tree

Quando Git estiver disponível:

- registre o estado inicial com `git status --short`;
- use `git diff`, `git diff --stat` e `git diff --name-only` como fontes principais de revisão;
- diferencie alterações da tarefa de mudanças preexistentes do usuário;
- não reverta alterações preexistentes;
- não faça commit automaticamente.

Enquanto Git não estiver disponível, declare essa limitação no relatório e revise a lista de arquivos e o conteúdo diretamente.

## Testes e comandos

Descubra os comandos reais no `package.json` antes de executar ou documentar build, lint e testes.

Comandos disponíveis no estado atual:

- instalação: `npm install`;
- desenvolvimento: `npm run dev`;
- verificação de tipos: `npm run typecheck`;
- lint: `npm run lint`;
- build: `npm run build`;
- pré-visualização do build: `npm run preview`.

Ainda não existem scripts de testes unitários ou E2E. Não documente nem execute comandos fictícios para eles.

## Critério geral de conclusão

- requisitos atendidos;
- plano seguido ou divergência aprovada;
- nenhuma alteração relevante fora de escopo;
- code review aprovado;
- validações disponíveis executadas;
- critérios de aceite conferidos;
- documentação atualizada quando necessário;
- Final Review com veredito `READY TO MERGE`.
