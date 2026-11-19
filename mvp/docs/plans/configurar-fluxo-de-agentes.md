# Configurar fluxo de planejamento e revisão

## Objetivo

Preparar a infraestrutura documental para que futuras tarefas sigam um fluxo verificável de planejamento, implementação, revisão, testes e aprovação final.

## Contexto

O projeto ainda está em fase de planejamento. Não existem aplicação React, dependências, scripts, testes ou repositório Git nesta pasta. Já existem documentos de produto, UX, arquitetura e referências visuais.

## Requisitos

- organizar documentos-base em `docs/plans/`;
- criar `AGENTS.md` adaptado ao estado real do projeto;
- criar template reutilizável de plano;
- criar prompts curtos para os papéis dos agentes;
- documentar comandos como indisponíveis enquanto a aplicação não existir;
- preservar as referências visuais e a pesquisa de UX.

## Fora de escopo

- criar o projeto React/Vite;
- instalar dependências;
- implementar funcionalidades;
- inicializar ou alterar Git;
- criar testes fictícios;
- definir comandos que ainda não existem.

## Arquivos ou áreas envolvidas

- `AGENTS.md`;
- `docs/plans/`;
- `docs/agents/`;
- documentos Markdown existentes na raiz.

## Plano de implementação

1. confirmar o estado do diretório;
2. organizar os documentos-base;
3. criar instruções globais;
4. criar prompts por papel;
5. validar estrutura e conteúdo;
6. registrar limitações do estado atual.

## Critérios de aceite

- [x] documentos-base estão em `docs/plans/`;
- [x] `AGENTS.md` descreve apenas ferramentas existentes ou planejadas com identificação clara;
- [x] todos os papéis possuem instrução reutilizável;
- [x] o template de plano está disponível;
- [x] nenhuma dependência ou funcionalidade foi adicionada;
- [x] nenhuma referência visual foi perdida;
- [x] estrutura final foi verificada;

## Riscos e observações

- como Git não está inicializado, `git diff` não pode ser utilizado nesta execução;
- comandos de build, lint e testes só poderão ser documentados após a criação da aplicação;
- o `AGENTS.md` deverá ser atualizado quando scripts reais forem adicionados.
