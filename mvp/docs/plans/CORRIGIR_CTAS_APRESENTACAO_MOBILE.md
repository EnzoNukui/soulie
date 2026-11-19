# Corrigir CTAs da apresentação no mobile

## Objetivo

Restaurar o funcionamento dos botões “Experimentar a Soulie” e “Entender a proposta” na apresentação em telas móveis.

## Contexto

No breakpoint mobile, `.copy` usa `display: contents` e deixa de criar a caixa que aplicava `z-index: 3`. O pseudo-elemento decorativo `.hero::before` passa a ficar sobre os links e captura os toques. A inspeção em viewport de 390 × 844 confirmou que o centro dos dois CTAs atingia a seção do hero em vez dos próprios links.

## Requisitos

- impedir que camadas decorativas capturem cliques ou toques;
- garantir que os CTAs permaneçam acima da composição visual;
- manter “Experimentar a Soulie” navegando para `/jornada/encontro`;
- manter “Entender a proposta” navegando para `#como-funciona`;
- oferecer alvo de toque adequado no botão secundário;
- preservar desktop, responsividade e movimento reduzido.

## Fora de escopo

- redesenhar a apresentação;
- alterar textos ou destinos dos CTAs;
- modificar o fluxo da jornada após a navegação.

## Arquivos ou áreas envolvidas

- `src/pages/PresentationPage/PresentationPage.module.css`.

## Plano de implementação

1. Tornar o pseudo-elemento decorativo transparente a eventos de ponteiro.
2. Criar uma camada explícita para o grupo de ações.
3. Ampliar o alvo de toque do botão secundário no mobile.
4. Validar ambos os destinos em mobile e desktop.
5. Executar typecheck, lint e build.

## Critérios de aceite

- [x] o centro visual dos dois CTAs atinge o próprio link;
- [x] o CTA principal abre `/jornada/encontro`;
- [x] o CTA secundário leva à seção `#como-funciona`;
- [x] o alvo secundário possui pelo menos 44 px no mobile;
- [x] não existe regressão visual ou horizontal em mobile e desktop;
- [x] typecheck, lint e build passam.

## Riscos e observações

- `display: contents` altera a participação do elemento no empilhamento; a correção não deve depender apenas do `z-index` de `.copy`;
- camadas exclusivamente decorativas devem permanecer com `pointer-events: none`.

## Divergências durante a implementação

Nenhuma divergência de escopo ou arquitetura foi necessária.

## Resultado da validação

- antes da correção, `elementFromPoint` retornava a seção do hero no centro dos dois links;
- após a correção, o mesmo teste retorna o elemento `a` em ambos os CTAs;
- “Experimentar a Soulie” navegou para `/jornada/encontro`;
- “Entender a proposta” navegou para `/#como-funciona`;
- o alvo secundário passou de 16 px para 44 px de altura no mobile;
- desktop e mobile permaneceram sem rolagem horizontal;
- `npm run typecheck`, `npm run lint` e `npm run build` foram aprovados.
