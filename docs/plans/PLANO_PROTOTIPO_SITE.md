# Plano do site-protótipo da Soulie

> Planejamento de uma experiência web responsiva na qual a pessoa vivencia a proposta da Soulie dentro de cenários da Soul Up.
>
> Referências: `DOCUMENTACAO_SOULIE.md` e `docs/referencias/telas-soulup/`.

## 1. Objetivo

Criar um site-experiência que permita à pessoa:

1. conhecer a Soulie por meio da própria interação;
2. personalizar interesses e objetivos;
3. receber uma missão relevante;
4. concluir uma ação demonstrativa;
5. ganhar pontos e avançar uma ofensiva;
6. receber uma recomendação de comunidade;
7. compreender o impacto da jornada pelo resultado vivido.

O site não será institucional. Ele será uma **experiência interativa da Soulie**, construída para que a proposta seja entendida enquanto a pessoa usa o protótipo. A Soul Up continuará sendo apenas o contexto visual necessário.

### Decisões já confirmadas

- o protótipo será um site;
- funcionará em desktop e mobile;
- utilizará React, TypeScript e Vite;
- a Soul Up será contexto visual, não produto a ser reconstruído;
- a interatividade estará concentrada na Soulie e nos efeitos provocados por ela;
- a rota inicial levará diretamente à experiência;
- explicações institucionais serão opcionais e secundárias;
- integrações financeiras, inteligência real e comunicação externa serão simuladas;
- o resultado será preparado para uma apresentação à empresa.

## 2. Conceito recomendado

O produto será uma jornada única, curta e interativa. A explicação acontece dentro das ações e respostas da Soulie.

### Experiência principal

1. Soulie recebe a pessoa;
2. pergunta interesses e objetivos;
3. monta uma recomendação;
4. aparece no contexto da Soul Up;
5. oferece uma missão;
6. reage à conclusão;
7. atualiza pontos e ofensiva;
8. recomenda uma comunidade;
9. apresenta o impacto da jornada.

### Formas de uso

1. **Jornada guiada:** fluxo padrão e principal, apropriado para apresentação e uso individual.
2. **Cenários:** atalho secundário para rever estados específicos da Soulie.

### Explicações opcionais

Informações sobre problema, solução, equipe e FAQ existirão em uma área `Sobre o projeto`, acessível pelo menu. Elas não interromperão a experiência principal.

## 3. Estrutura geral do site-experiência

### Tela inicial — encontro com a Soulie

- Soulie em destaque;
- saudação curta;
- pergunta inicial sobre o objetivo da pessoa;
- botão `Começar minha jornada`;
- link discreto `Explorar cenários`;
- acesso secundário a `Sobre o projeto`.

Não haverá uma longa página de rolagem antes da interação.

### Onboarding

- interesses;
- hábitos;
- objetivo principal;
- preferência de frequência;
- confirmação feita pela Soulie.

### Experiência dentro da Soul Up

- cenário reconhecível da tela inicial;
- Soulie integrada ao cartão;
- painel expansível;
- recomendação personalizada;
- missão e explicação do motivo da escolha.

### Ação e feedback

- início da missão;
- conclusão demonstrativa;
- reação emocional;
- ganho de pontos;
- atualização da ofensiva;
- indicação do impacto estimado.

### Comunidade

- recomendação baseada nos interesses;
- desafio coletivo preparado;
- contribuição individual simulada;
- incentivo para continuar a jornada.

### Encerramento da experiência

- resumo do que aconteceu;
- pontos e sequência conquistados;
- papel exercido pela Soulie em cada etapa;
- impacto individual e coletivo simulado;
- opções `Recomeçar` e `Ver outros cenários`;
- link secundário `Entender o projeto`.

## 4. Cenários da Soulie dentro da Soul Up

Esta seção não descreve uma reconstrução da Soul Up. Cada cenário usará somente os elementos visuais necessários para a pessoa reconhecer o aplicativo e compreender a intervenção da Soulie.

### Regra de escopo dos cenários

- elementos da Soul Up que não participam da história podem ser estáticos;
- somente ações relacionadas à Soulie precisam funcionar;
- não serão recriados feed completo, chat, Clipz, pagamentos, publicação ou gestão de comunidades;
- mudanças de pontos, progresso e atividade serão respostas visuais simuladas;
- todas as cenas devem compartilhar o mesmo estado para manter a demonstração coerente;
- o cenário precisa se parecer com a Soul Up, mas não fingir ser o aplicativo oficial.

### Navegação contextual

A navegação inferior real deve aparecer para reconhecimento visual:

- início/feed;
- comunidades;
- ação principal central;
- Clipz ou conteúdo em vídeo;
- conversas.

Ela não precisa abrir réplicas completas dessas áreas. Os passos da demonstração podem usar atalhos do cabeçalho, cards, destaques guiados e transições controladas.

### Cena 1 — Primeiro acesso

- apresentação da Soulie;
- explicação curta da proposta;
- início do onboarding;
- opção de pular para a seleção de cenários.

### Cena 2 — Onboarding inteligente

- seleção de interesses;
- escolha de objetivos sustentáveis;
- hábitos atuais;
- frequência de interação;
- melhor horário para lembretes;
- comunidades de interesse;
- resumo das preferências escolhidas.

Ao finalizar, o protótipo deve realmente alterar as missões e recomendações apresentadas.

### Cena 3 — Soulie na tela inicial

Base visual: `01-home-carteira-feed.png`.

Elementos:

- saldo de pontos;
- acesso à carteira;
- busca, ofensiva e perfil;
- cartão da Soulie;
- atalhos para pontos, Vale-Energia e conta de luz;
- stories ou destaques;
- publicações do feed;
- navegação inferior.

### Cena 4 — Soulie expandida

Ao tocar na Soulie, abrir um painel ou cartão expandido com:

- saudação contextual;
- estado emocional atual;
- resumo da ofensiva;
- missão recomendada;
- comunidade ativa;
- pontos próximos de serem conquistados;
- ações rápidas;
- explicação de por que a recomendação apareceu.

### Cena 5 — Recomendação de missão

Base visual: `03-missoes.png`.

Elementos:

- filtros `Todas`, `Disponíveis` e `Em progresso`;
- quantidade de pontos por missão;
- progresso;
- botão para começar;
- missões concluídas;
- categorias sustentáveis;
- recomendação da Soulie.

Missões iniciais sugeridas:

- utilizar uma garrafa reutilizável;
- descartar um eletrônico corretamente;
- reduzir consumo de energia;
- participar de uma comunidade sustentável;
- publicar uma ação positiva;
- completar o primeiro login;
- manter uma sequência de três dias.

### Cena 6 — Conclusão de missão

- objetivo;
- instruções;
- prazo;
- pontos;
- impacto estimado;
- critério de conclusão;
- ação para registrar conclusão;
- confirmação;
- atualização da carteira;
- reação comemorativa da Soulie.

### Cena 7 — Ofensiva semanal

- calendário da semana;
- dias completos;
- sequência atual;
- recorde;
- risco de interrupção;
- pequena recompensa por consistência;
- orientação de retomada quando houver falha.

### Cena 8 — Comunidade recomendada

Base visual: `02-comunidades.png`.

Elementos:

- busca;
- criação e acesso às comunidades;
- ranking Top 10;
- comunidades recomendadas;
- comunidade sustentável em destaque;
- desafios coletivos;
- indicador de atividade recente.

### Cena 9 — Desafio coletivo

- descrição e participantes;
- feed temático;
- meta coletiva;
- contribuição do usuário;
- prazo;
- recompensa;
- publicação de conquista;
- incentivo contextual da Soulie.

### Cena 10 — Reflexo na carteira

- saldo de Pontos Soul;
- equivalência demonstrativa;
- histórico de movimentações;
- pontos recebidos por missões;
- pontos utilizados;
- ações para PIX, Vale-Energia e conta de luz;
- identificação clara de que o resgate é simulado.

### Cena 11 — Recompensa demonstrativa

- catálogo de recompensas;
- custo em pontos;
- saldo antes e depois;
- regras;
- confirmação;
- comprovante simulado;
- celebração da Soulie.

### Cena 12 — Notificação contextual

- recomendações recentes;
- motivo de cada recomendação;
- horário preferido;
- frequência;
- temas permitidos;
- ativar ou desativar categorias;
- exemplo de comunicação contextual.

### Cena 13 — Resumo de progresso

- interesses;
- objetivos;
- missões concluídas;
- ofensiva atual e recorde;
- medalhas;
- impacto estimado;
- comunidades;
- preferências da Soulie.

### Cena 14 — Resumo empresarial

Uma seção resumida da apresentação, e não um sistema administrativo completo, mostra dados demonstrativos:

- usuários ativos;
- retenção;
- onboarding concluído;
- missões iniciadas e concluídas;
- ofensiva média;
- atividade nas comunidades;
- pontos distribuídos e resgatados;
- categorias com maior adesão;
- comparação antes e depois da Soulie.

Os dados devem ser apresentados como simulados e não como resultados reais.

### Recorte da primeira versão

As 14 cenas acima representam a visão completa. A primeira versão deve concentrar a implementação em sete momentos:

1. apresentação e onboarding;
2. Soulie integrada à tela inicial;
3. Soulie expandida com recomendação;
4. conclusão de uma missão;
5. atualização de ofensiva e pontos;
6. recomendação de comunidade;
7. resumo dos efeitos esperados.

Carteira detalhada, resgate, perfil, múltiplas missões e desafio coletivo podem aparecer de forma resumida ou ser aprofundados depois que essa sequência estiver aprovada.

## 5. Papel da Soulie no protótipo

A Soulie deve ser uma camada transversal, não uma tela isolada.

Ela aparecerá:

- durante o onboarding;
- no cartão da tela inicial;
- ao recomendar missões;
- quando uma ofensiva estiver em risco;
- ao concluir uma ação;
- ao ganhar pontos;
- ao entrar em uma comunidade;
- ao resgatar uma recompensa;
- em mensagens e notificações;
- na demonstração guiada.

### Eventos e estados sugeridos

| Evento | Estado da Soulie | Comportamento |
|---|---|---|
| Primeiro acesso | Tímida/Alegre | Apresenta-se e convida para o onboarding. |
| Perfil configurado | Confiante | Confirma que já pode personalizar a jornada. |
| Nova missão disponível | Empolgada | Destaca benefício e esforço necessário. |
| Missão concluída | Radiante | Celebra, atualiza pontos e mostra impacto. |
| Ofensiva em risco | Com pressa | Faz um alerta curto e oferece uma ação simples. |
| Sequência interrompida | Triste | Evita culpa e propõe uma retomada. |
| Longo período inativo | Entediada | Faz um convite leve e bem-humorado. |
| Comunidade ativa | Alegre | Recomenda uma conversa ou desafio coletivo. |
| Grande conquista | Radiante | Apresenta medalha, marco e próxima meta. |

O estado zangado não deve ser prioridade no primeiro protótipo, pois pode transmitir julgamento. Caso seja usado, deve ficar restrito a situações leves e claramente bem-humoradas.

## 6. Jornada principal da demonstração

A apresentação guiada deve durar aproximadamente de cinco a oito minutos.

1. visitante conhece a Soul Up;
2. entende o problema de retenção;
3. conhece a Soulie;
4. entra no aplicativo demonstrável;
5. realiza onboarding;
6. recebe uma missão personalizada;
7. conclui a missão;
8. ganha pontos e avança a ofensiva;
9. recebe uma reação da Soulie;
10. participa de uma comunidade;
11. abre a carteira;
12. realiza um resgate simulado;
13. visualiza o resumo empresarial;
14. retorna ao resumo dos resultados esperados.

Essa jornada precisa funcionar de ponta a ponta antes de recursos secundários serem adicionados.

## 7. Matriz de cobertura das promessas

| Promessa apresentada | Como será demonstrada |
|---|---|
| Onboarding inteligente | Preferências escolhidas alteram a missão e a recomendação inicial. |
| Missões dinâmicas | A Soulie recomenda uma missão e conduz sua conclusão em uma cena controlada. |
| Streaks/ofensivas | O resumo semanal da Soulie atualiza após a conclusão. |
| Recompensas práticas | A intervenção da Soulie resulta em pontos e apresenta um benefício simulado. |
| Feed vivo | A Soulie estimula uma publicação ou destaca atividade já preparada. |
| Comunidades ativas | A Soulie recomenda uma comunidade e apresenta um desafio coletivo preparado. |
| Timing inteligente | Recomendação contextual explicada com base em horário e interesse. |
| Personalização | Conteúdo muda conforme respostas do onboarding. |
| Estados do avatar | Expressão e mensagem mudam conforme eventos da jornada. |
| Impacto mensurável | Missão mostra estimativa e painel agrega resultados simulados. |
| Retenção | Ofensivas, rituais e painel ilustram a estratégia de recorrência. |
| Visão empresarial | Um resumo da apresentação mostra métricas simuladas, sem recriar um painel administrativo. |

## 8. Dados e comportamento do protótipo

### Estratégia inicial

O primeiro protótipo não precisa de servidor. Os dados podem ser locais e determinísticos para garantir uma demonstração estável.

O estado deve manter:

- perfil escolhido;
- interesses;
- missão recomendada e conclusão demonstrativa;
- ofensiva;
- saldo;
- alteração visual do saldo;
- comunidade recomendada;
- notificações;
- estado atual da Soulie;
- etapa da demonstração guiada.

O navegador pode preservar esse estado localmente e oferecer um botão `Reiniciar demonstração`.

### Dados demonstrativos recomendados

- um usuário fictício;
- saldo inicial de 220 Pontos Soul;
- três missões preparadas, com uma principal para a jornada guiada;
- uma missão em andamento e uma concluída;
- uma comunidade recomendada;
- um desafio coletivo preparado;
- duas ou três publicações estáticas como contexto;
- uma ofensiva de três dias;
- uma recompensa principal e uma alternativa;
- uma sequência de eventos preparada para a apresentação.

Todos os valores precisam ser coerentes: os pontos ganhos devem aparecer no saldo e no histórico, e os pontos usados devem ser descontados.

## 9. Direção visual

### Identidade da Soul Up

Com base nas telas fornecidas:

- azul e roxo como cores principais;
- gradientes em cards estratégicos;
- fundo muito claro;
- cartões grandes e arredondados;
- botões em formato de cápsula;
- ícones lineares;
- navegação inferior persistente;
- forte uso de espaços em branco;
- amarelo ou dourado associado a pontos e recompensas.

### Integração da Soulie

A montagem `04-conceito-soulie-no-feed.png` será referência de posicionamento, não de solução final.

Recomendação inicial:

- Soulie parcialmente visível na borda do cartão;
- toque abre um painel maior;
- balão de mensagem curto e opcional;
- animações discretas;
- nunca cobrir ações financeiras importantes;
- manter expressão acompanhada por texto acessível;
- permitir fechar ou minimizar.

### Site em desktop e mobile

- a apresentação deve ser projetada primeiro como uma experiência responsiva, e não como duas versões independentes;
- no desktop, narrativa e telefone virtual podem aparecer lado a lado;
- no tablet, a composição pode alternar entre duas colunas e blocos empilhados;
- no celular, a apresentação ocupa toda a largura e as cenas da Soulie usam a própria tela como área do aplicativo;
- no desktop, o telefone pode permanecer fixo enquanto o texto da apresentação avança por cenários;
- no mobile, cada cenário deve abrir em tela cheia ou em uma seção claramente separada;
- controles importantes devem permanecer acessíveis por toque e teclado;
- textos, botões e balões da Soulie não podem depender de hover;
- animações precisam respeitar preferência por movimento reduzido;
- nenhuma informação deve existir apenas dentro da moldura decorativa do aparelho.

### Comportamento por faixa de tela

| Contexto | Apresentação | Demonstração da Soulie |
|---|---|---|
| Desktop amplo | Texto e telefone lado a lado; navegação completa. | Telefone virtual centralizado ou fixo, com controles de cenário ao lado. |
| Notebook/tablet | Blocos mais compactos e alternância entre uma e duas colunas. | Telefone centralizado e controles abaixo. |
| Mobile | Conteúdo em coluna única e navegação reduzida. | Cena ocupa a largura disponível, sem moldura pesada de aparelho. |

### Testes responsivos mínimos

- celular estreito;
- celular grande;
- tablet em retrato;
- notebook;
- desktop amplo;
- zoom de navegador em 200%;
- orientação paisagem em celular.

## 10. Tecnologia recomendada

### Base

- **React:** adequado para dividir a apresentação e o aplicativo em componentes reutilizáveis e manter interfaces que mudam conforme o estado.
- **TypeScript:** reduz inconsistências entre missões, carteira, eventos e estados da Soulie.
- **Vite:** oferece uma base leve para um protótipo web interativo e possui modelo oficial para React com TypeScript.
- **CSS organizado por tokens e componentes:** permite reproduzir a identidade visual sem depender de um kit genérico que descaracterize a Soul Up.

Fontes técnicas oficiais: [React com TypeScript](https://react.dev/learn/typescript) e [guia do Vite](https://vite.dev/guide/).

### Decisões técnicas sugeridas

- aplicação web de página única com rotas internas;
- abordagem mobile-first com expansão progressiva para desktop;
- estado local centralizado;
- dados simulados em arquivos TypeScript ou JSON;
- persistência opcional no armazenamento local do navegador;
- animações prioritariamente em CSS;
- resumo visual simples para métricas, sem construir um dashboard completo;
- nenhuma integração externa na primeira entrega;
- estrutura preparada para substituir dados simulados por API futuramente;
- componentes da Soulie desacoplados dos cenários visuais da Soul Up.

### Rotas sugeridas

- `/` — apresentação curta da Soulie;
- `/jornada/encontro` — encontro inicial dentro do contexto da Soul Up;
- `/jornada/onboarding` — personalização;
- `/jornada/inicio` — Soulie integrada à Soul Up;
- `/jornada/missao` — recomendação, conclusão e reação;
- `/jornada/recorrencia` — ofensiva, pontos e timing;
- `/jornada/comunidades` — recomendação e entrada em comunidade;
- `/jornada/resultado` — resumo da experiência e impacto;
- `/cenarios` — acesso direto aos estados demonstrativos;
- `/sobre` — explicação opcional, FAQ e equipe.

## 11. Estrutura conceitual do código

```text
src/
  app/
    rotas/
    estado/
    dados/
  componentes/
    apresentacao/
    cenarios-soulup/
    soulie/
    compartilhados/
  paginas/
    Encontro/
    Jornada/
    Cenarios/
    Resultado/
    Sobre/
  estilos/
    tokens.css
    global.css
  assets/
    marca/
    soulie/
    demonstracao/
```

Essa estrutura é uma proposta e deve ser confirmada quando a implementação começar.

## 12. O que será real e o que será simulado

### Funcional no protótipo

- navegação do site;
- seleção entre modo guiado e cenários;
- abertura, minimização e expansão da Soulie;
- onboarding conduzido pela Soulie;
- personalização baseada em escolhas;
- recomendação e conclusão de uma missão demonstrativa;
- mudança de estado emocional da Soulie;
- atualização visual de pontos e ofensiva;
- convite contextual para uma comunidade;
- recompensa demonstrativa;
- explicação do motivo de uma recomendação;
- estados da Soulie;
- resumo empresarial com dados coerentes;
- reinício completo da demonstração;
- responsividade em desktop e mobile.

### Simulado

- inteligência artificial real;
- aprendizado de comportamento ao longo de semanas;
- autenticação;
- envio de notificações externas;
- PIX;
- pagamento de conta de luz;
- validação de ações ambientais;
- transações financeiras;
- integração com a Soul Up;
- cálculo científico de impacto;
- dados empresariais reais.
- navegação completa da Soul Up;
- feed social real;
- criação e moderação de comunidades;
- chat e Clipz;
- painel administrativo completo.

## 13. Fases de desenvolvimento

### Fase 1 — Definição da experiência

- aprovar este plano;
- definir público da apresentação;
- selecionar a jornada principal;
- confirmar nomenclatura de pontos;
- definir quais dados serão simulados;
- escolher estados prioritários da Soulie.

**Saída:** escopo fechado da primeira versão.

### Fase 2 — Sistema visual

- extrair cores, tipografia, espaçamentos e raios das referências;
- organizar ativos oficiais;
- selecionar ilustrações da Soulie;
- criar componentes-base;
- desenhar wireframes das telas.

**Saída:** guia visual e wireframes aprovados.

### Fase 3 — Fundação técnica

- iniciar aplicação;
- criar rotas;
- criar tokens de estilo;
- montar layout responsivo;
- preparar dados e estado da demonstração;
- implementar reinício da experiência.

**Saída:** estrutura navegável sem acabamento completo.

### Fase 4 — Entrada da experiência

- construir encontro inicial com a Soulie;
- criar saudação e escolha de objetivo;
- oferecer início imediato da jornada;
- adicionar acesso secundário aos cenários e ao conteúdo explicativo.

**Saída:** entrada curta que leva diretamente à interação.

### Fase 5 — Contextos visuais da Soul Up

- criar uma cena simplificada da tela inicial;
- criar os recortes necessários de missões, comunidades e carteira;
- manter a linguagem visual das referências;
- definir quais elementos são estáticos;
- garantir que nenhuma cena pareça uma reconstrução integral do aplicativo.

**Saída:** palcos visuais reconhecíveis para as interações da Soulie.

### Fase 6 — Jornada da Soulie

- onboarding;
- recomendações;
- estados emocionais;
- conclusão de missão;
- ofensiva;
- recompensa;
- mensagens contextuais.

**Saída:** jornada principal funcionando de ponta a ponta.

### Fase 7 — Demonstração guiada e resultados

- criar roteiro guiado;
- destacar elementos durante a apresentação;
- adicionar resumo empresarial;
- preparar dados antes/depois;
- criar transição entre narrativa e protótipo.

**Saída:** demonstração pronta para reunião.

### Fase 8 — Qualidade e entrega

- testar desktop e celular;
- testar fluxos e consistência de pontos;
- revisar acessibilidade;
- otimizar imagens;
- revisar textos;
- validar com a equipe;
- publicar uma versão de demonstração.

**Saída:** link estável do protótipo.

## 14. Prioridades

### Prioridade 1 — Precisa funcionar primeiro

- apresentação inicial;
- contexto visual da tela inicial da Soul Up;
- Soulie integrada;
- onboarding;
- missão personalizada;
- conclusão e pontos;
- ofensiva;
- reflexo visual dos pontos;
- modo guiado.

### Prioridade 2 — Fortalece a história

- recomendação de comunidade;
- desafio coletivo demonstrativo;
- contexto estático de feed;
- notificações;
- perfil e medalhas;
- resumo empresarial.

### Prioridade 3 — Expansão

- novos cenários da Soulie;
- mais reações e estados do avatar;
- variações de mensagens por perfil;
- mais recompensas;
- múltiplos perfis;
- cenários alternativos;
- animações avançadas.

## 15. Decisões necessárias antes de desenvolver

1. O site será apresentado apenas para a Soul Up ou também ficará público?
2. O público principal é executivo, equipe de produto, tecnologia ou usuário final?
3. Qual é o nome oficial atual dos pontos?
4. Qual conversão de pontos deve aparecer?
5. Quais imagens da Soulie podem ser usadas no protótipo?
6. Haverá identidade visual oficial além das capturas?
7. A apresentação deve incluir dados sensíveis de retenção?
8. Quais métricas precisam aparecer no resumo empresarial?
9. A jornada deve usar um usuário fictício ou um perfil da equipe?
10. O protótipo será somente em português?
11. Haverá prazo ou data de apresentação?
12. Onde o site deverá ser publicado?
13. No desktop, a demonstração avançará por rolagem narrativa ou por botões de próximo/anterior?
14. Quais estados e imagens da Soulie já estão aprovados para uso?

## 16. Próximas etapas recomendadas

### Próxima etapa imediata

Criar o **mapa visual do site e da jornada**, seguido por wireframes responsivos. Cada etapa principal deverá ter uma composição para desktop e uma para mobile antes de escrever código.

### Depois

1. aprovar o mapa de navegação;
2. definir a jornada guiada e os cenários exploráveis;
3. extrair o sistema visual das imagens;
4. organizar os ativos da Soulie;
5. criar wireframes de baixa fidelidade para desktop e mobile;
6. validar os wireframes e evoluir somente as cenas principais para alta fidelidade;
7. confirmar escopo e conteúdo;
8. iniciar a fundação técnica;
9. implementar primeiro o fluxo principal;
10. testar com a equipe;
11. preparar a apresentação para a empresa.

## 17. Critério para considerar a primeira versão pronta

A primeira versão estará pronta quando uma pessoa puder abrir o link e, sem explicações externas:

1. entender o que é a Soul Up;
2. entender o problema que a Soulie resolve;
3. entrar na demonstração;
4. configurar um perfil;
5. receber e concluir uma missão;
6. ver pontos e ofensiva atualizados;
7. interagir com a Soulie;
8. visualizar uma recompensa;
9. compreender como a solução busca aumentar a retenção;
10. utilizar a mesma jornada em desktop e mobile;
11. distinguir a Soulie demonstrável do contexto visual da Soul Up;
12. reiniciar a experiência para uma nova apresentação.

---

**Direção recomendada:** construir uma história curta e completa da Soulie, usando apenas o mínimo necessário da Soul Up como contexto. A força da demonstração virá da qualidade das interações da personagem, da coerência entre os estados e da experiência igualmente clara em desktop e mobile.
