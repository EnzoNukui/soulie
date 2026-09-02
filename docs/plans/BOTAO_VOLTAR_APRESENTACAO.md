# Botão para voltar à apresentação

## Objetivo

Adicionar um controle visível em todas as telas que usam `ExperienceShell` para sair do protótipo e voltar à apresentação da Soulie em `/`, sem reiniciar ou apagar o progresso da sessão.

## Contexto

A experiência já permite entrar na jornada pela apresentação, mas não oferece um retorno explícito e consistente fora do contexto visual da Soul Up. O controle deve pertencer à área narrativa do protótipo, sem competir com o cabeçalho do aplicativo demonstrativo.

Documentos consultados:

- `docs/plans/DOCUMENTACAO_SOULIE.md`;
- `docs/plans/PLANO_PROTOTIPO_SITE.md`;
- `docs/plans/ARQUITETURA_REACT.md`.

## Requisitos

- aparecer em todas as páginas que usam `ExperienceShell`;
- navegar para `/` por meio do React Router;
- usar o texto “Voltar à apresentação”;
- preservar o estado atual mantido pelo `DemoProvider` e pelo `sessionStorage`;
- possuir foco visível e alvo confortável para toque;
- funcionar em desktop e mobile;
- ficar fora do cabeçalho simulado da Soul Up.

## Fora de escopo

- reiniciar a demonstração;
- alterar o estado global;
- adicionar confirmação antes de sair;
- modificar a apresentação inicial;
- adicionar dependências.

## Arquivos ou áreas envolvidas

- `src/components/experience/ExperienceShell.tsx`;
- `src/components/experience/ExperienceShell.module.css`.

## Plano de implementação

1. Adicionar o link de retorno no início da área narrativa compartilhada.
2. Criar estilo de botão secundário coerente com a identidade visual.
3. Ajustar espaçamento, largura e tamanho no mobile.
4. Executar typecheck, lint, build e validação manual das rotas.
5. Realizar revisões independentes de plano, código, UX e entrega final.

## Critérios de aceite

- [x] o botão aparece em todas as telas baseadas em `ExperienceShell`;
- [x] o botão leva para `/`;
- [x] o progresso da sessão não é apagado;
- [x] o controle não interfere na navegação interna da Soul Up;
- [x] o botão usa controle nativo e funciona por clique, toque e teclado;
- [x] o layout permanece correto em desktop e mobile;
- [x] typecheck, lint e build passam;
- [x] nenhuma regressão foi identificada.

## Riscos e observações

- o link da marca Soul Up já aponta para `/`, mas não comunica claramente que retorna à apresentação; ele não substitui este novo controle;
- no mobile, o botão ficará acima do título para continuar visível sem ocupar a tela do aplicativo demonstrativo;
- a navegação não chamará `RESET_DEMO`, preservando o progresso caso a pessoa retorne ao protótipo.

## Divergências durante a implementação

Nenhuma divergência foi necessária.

## Resultado da implementação

- link compartilhado adicionado ao início da área narrativa do `ExperienceShell`;
- cobertura confirmada nas 11 telas que usam o shell;
- navegação para `/` sem ação de reset ou mutação de estado;
- estilo responsivo, foco visível, alvo mínimo de 44 px e suporte a `prefers-reduced-motion`.

## Validações e revisões

- `npm run typecheck`: aprovado;
- `npm run lint`: aprovado;
- `npm run build`: aprovado;
- `git diff --check`: aprovado, com apenas avisos de normalização LF/CRLF;
- Plan Review: aprovado;
- Code Review: aprovado;
- UX Review: aprovado;
- Test Agent: `PASS`;
- Final Review: `READY TO MERGE`;
- limitação conhecida: o projeto ainda não possui testes automatizados ou regressão visual.

## Ajuste visual posterior — separação do título auxiliar

### Objetivo

Garantir que o botão “Voltar à apresentação” ocupe sua própria linha e mantenha distância clara do texto auxiliar (`eyebrow`) exibido logo abaixo.

### Requisitos

- preservar posição, texto, rota, acessibilidade e comportamento do botão;
- impedir que o botão e o texto auxiliar apareçam lado a lado;
- manter espaçamento coerente em desktop e mobile;
- não alterar a composição do telefone ou demais conteúdos da experiência.

### Arquivos envolvidos

- `src/components/experience/ExperienceShell.module.css`;
- `docs/plans/BOTAO_VOLTAR_APRESENTACAO.md`.

### Etapas

1. Corrigir o comportamento de layout do botão para que ele forme um bloco próprio.
2. Conferir o espaçamento com o texto auxiliar nos breakpoints existentes.
3. Executar typecheck, lint, build e revisões independentes.

### Critérios de aceite

- [x] botão e texto auxiliar não dividem a mesma linha;
- [x] o botão preserva largura ajustada ao conteúdo e alvo mínimo de toque;
- [x] o espaçamento continua adequado em desktop e mobile;
- [x] typecheck, lint e build passam;
- [x] Final Review retorna `READY TO MERGE`.

### Riscos

- alterar o tipo de caixa do botão sem preservar `width: fit-content` poderia fazê-lo ocupar toda a largura; a regra atual deve ser mantida.

### Resultado e revisões

- implementação: `.backToPresentation` alterado de `inline-flex` para `flex`, preservando `width: fit-content`;
- Plan Review: aprovado;
- Code Review: aprovado;
- UX Review: aprovado;
- Test Agent: `PASS`;
- `npm run typecheck`: aprovado;
- `npm run lint`: aprovado;
- `npm run build`: aprovado;
- Final Review: `READY TO MERGE`.
