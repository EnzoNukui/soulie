# Criar agentes de interface e validação de UX

## Objetivo

Adicionar dois papéis independentes ao fluxo: um para criar e estilizar a interface da Soulie e outro para validar se a experiência corresponde às decisões do projeto e à intenção do usuário.

## Contexto

O protótipo será responsivo e demonstrará a Soulie dentro do contexto visual da Soul Up. As prioridades atuais são o primeiro acesso, recomendações de comunidades, trilhas de missões fracionadas e uma Soulie pequena, animada e contextual.

## Requisitos

- criar um agente responsável por UI e estilização;
- criar um agente independente para revisão de UX;
- exigir consulta aos documentos e referências do projeto;
- contemplar desktop, mobile, acessibilidade e estados da experiência;
- impedir que o revisor aprove a própria implementação.

## Fora de escopo

- implementar telas ou estilos;
- gerar novos mockups;
- alterar a arquitetura React;
- instalar ferramentas ou dependências.

## Arquivos ou áreas envolvidas

- `AGENTS.md`;
- `docs/agents/ui-designer.md`;
- `docs/agents/ux-reviewer.md`.

## Plano de implementação

1. definir responsabilidades e limites do UI Designer;
2. definir critérios e relatório do UX Reviewer;
3. integrar os papéis ao fluxo descrito em `AGENTS.md`;
4. conferir independência e cobertura das decisões atuais.

## Critérios de aceite

- [x] o UI Designer possui instruções reutilizáveis;
- [x] o UX Reviewer possui critérios verificáveis e veredito explícito;
- [x] os dois papéis foram registrados em `AGENTS.md`;
- [x] nenhuma interface ou dependência foi implementada.

## Riscos e observações

- as medidas e animações finais deverão ser definidas e validadas durante a implementação;
- referências do Duolingo devem inspirar comportamento e feedback, sem copiar sua identidade visual.

## Divergências durante a implementação

Nenhuma.

