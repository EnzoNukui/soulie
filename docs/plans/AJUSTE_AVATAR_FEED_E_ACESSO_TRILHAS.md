# Ajuste do avatar no feed e do acesso às trilhas

## Objetivo

Refinar o mini feed para que a Soulie apareça como um avatar transparente flutuante integrado à interface e tornar o acesso a todas as trilhas mais bonito, claro e coerente com a hierarquia visual do protótipo.

## Contexto

O primeiro mini feed utiliza uma imagem da Soulie com fundo dentro da notificação e apresenta “Todas as trilhas” como um botão secundário dentro do card recomendado. A referência fornecida mostra a personagem pequena, sem fundo e parcialmente sobreposta à lateral dos elementos do aplicativo.

Documentos consultados: `DOCUMENTACAO_SOULIE.md`, `PLANO_PROTOTIPO_SITE.md`, `ARQUITETURA_REACT.md`, `FLUXO_FEED_TRILHAS_INTERATIVAS.md` e as referências visuais da Soul Up.

## Requisitos

- remover do feed a imagem da Soulie que possui fundo;
- usar somente o ativo transparente já disponível em `src/assets/soulie/soulie.png`;
- posicionar a Soulie como avatar flutuante independente no canto direito do aplicativo, sem bloquear conteúdo;
- preservar texto alternativo, legibilidade e redução de movimento;
- manter os acessos à trilha recomendada e a todas as trilhas lado a lado no mesmo card, com aparência mais leve;
- manter as rotas e comportamentos atuais.

## Fora de escopo

- implementar o funcionamento da Soulie dentro das comunidades;
- alterar regras de missões, pontos ou progresso;
- gerar novas imagens ou adicionar dependências.

## Arquivos ou áreas envolvidas

- `src/pages/experience/FeedPage.tsx`;
- `src/pages/experience/Journey.module.css`;
- `src/assets/soulie/soulie.png` apenas como ativo reutilizado.

## Plano de implementação

1. Separar a presença flutuante da Soulie do componente de notificação.
2. Ancorar o avatar no canto direito da área do aplicativo.
3. Manter as duas ações lado a lado e clarear o card recomendado.
4. Validar desktop, mobile, foco, redução de movimento e ausência de regressões.

## Critérios de aceite

- [ ] nenhuma imagem da Soulie com fundo aparece no mini feed;
- [ ] o avatar transparente flutua no canto direito sem cobrir textos ou ações;
- [ ] “Ver trilha” e “Todas as trilhas” permanecem lado a lado;
- [ ] o card recomendado usa uma aparência clara e abre `/jornada/missoes` pela ação secundária;
- [ ] a missão recomendada continua abrindo sua trilha;
- [ ] typecheck, lint e build passam;
- [ ] nenhuma regressão visual relevante é identificada em desktop ou mobile.

## Riscos e observações

- a sobreposição pode encobrir controles em telas estreitas; o avatar será ancorado acima da navegação inferior e terá tamanho responsivo;
- a animação será sutil e desativada quando o sistema solicitar movimento reduzido;
- o ativo transparente principal tem tamanho maior que o necessário, mas já está no pacote e não adiciona novo download ao projeto.

## Divergências durante a implementação

```text
Planned behavior:
Avatar integrado à notificação pela lateral esquerda e acesso a todas as trilhas em card separado.

Observed problem:
A interpretação não correspondia à intenção do usuário: o avatar deveria funcionar como elemento flutuante independente no canto direito, e os botões deveriam permanecer juntos.

Required deviation:
Mover o avatar para uma camada flutuante do aplicativo e recolocar as duas ações lado a lado em um card mais claro.

Reason:
Correção explícita do usuário após a primeira revisão visual.
```

## Revisão da implementação

- [x] a imagem com fundo foi removida do mini feed e não aparece no bundle final;
- [x] o avatar usa `soulie.png`, possui transparência, fica flutuante à direita e não bloqueia a mensagem;
- [x] a animação é discreta e desativada por `prefers-reduced-motion`;
- [x] os dois acessos permanecem lado a lado dentro do card recomendado mais claro;
- [x] a missão recomendada continua com ação primária própria;
- [x] desktop e mobile em 390 × 844 foram conferidos sem rolagem horizontal indevida;
- [x] `npm run typecheck`, `npm run lint` e `npm run build` foram aprovados em 27/08/2026.

## Veredito final

`READY TO MERGE` — direção corrigida conforme a intenção esclarecida pelo usuário. A verificação mobile confirmou que o avatar flutuante não se sobrepõe aos dois botões; typecheck, lint e build foram aprovados novamente em 27/08/2026.
