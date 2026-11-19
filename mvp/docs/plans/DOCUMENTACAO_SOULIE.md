# Soulie — Documento-base do protótipo

> Documento de referência para evolução, desenvolvimento e demonstração do protótipo da Soulie.
>
> Fonte principal: [site de apresentação da Soulie](https://soulie-omega.vercel.app/index.html), consultado em 24 de agosto de 2026.

## 1. Visão geral

A **Soulie** é a representação gamificada da plataforma **SoulUp**. Ela atua como avatar inteligente e assistente virtual, acompanhando os usuários em sua jornada dentro da plataforma e convertendo objetivos de sustentabilidade em ações cotidianas simples, recorrentes e mensuráveis.

Sua função não é ser apenas um mascote visual. A Soulie deve ser o principal ponto de contato entre o usuário e a experiência da SoulUp: acolher, orientar, recomendar ações, apresentar missões, reagir ao progresso, estimular a comunidade e ajudar a transformar comportamentos sustentáveis em hábitos duradouros.

A ideia do avatar foi inspirada no personagem **“22”**, da obra *Soul*, e evoluiu até assumir identidade, personalidade e estados emocionais próprios.

### Definição curta

> A Soulie é a assistente gamificada da SoulUp que usa missões, inteligência, recompensas e interação social para transformar práticas sustentáveis em hábitos recorrentes.

### Relação entre Soulie e SoulUp

- **SoulUp:** plataforma completa de engajamento e sustentabilidade.
- **Soulie:** avatar, guia e camada de inteligência que conduz a experiência do usuário dentro da SoulUp.

## 2. Problema que o projeto resolve

O problema central apresentado é a **baixa retenção dos usuários em plataformas de sustentabilidade**. Essas soluções podem despertar curiosidade no primeiro contato, mas frequentemente não oferecem razões suficientes para o usuário retornar e incorporar a plataforma à rotina.

O material de apresentação destaca os seguintes indicadores:

- aproximadamente **60% dos aplicativos no Brasil seriam desinstalados nos primeiros 30 dias**;
- a SoulUp teria passado de **3.738 usuários ativos em março para 720 em abril**;
- essa variação representa uma queda aproximada de **80,7% em um mês**.

Esses números fazem parte da narrativa do site de apresentação. Antes de serem utilizados em materiais públicos, apresentações executivas ou decisões de negócio, suas fontes, período, método de medição e contexto devem ser validados.

### Causas identificadas

1. **Feed com pouca movimentação:** poucos conteúdos novos transmitem a sensação de uma plataforma parada ou abandonada.
2. **Sistema de recompensa lento:** quando o benefício demora a aparecer, o usuário perde a percepção de progresso e valor.
3. **Ausência de gatilhos de recorrência:** sem estímulos diários e semanais, as práticas ecológicas não se transformam em hábitos.
4. **Comunicação pouco contextual:** mensagens genéricas ou disparadas em momentos inadequados tendem a ser percebidas como spam.

## 3. Proposta de valor

A Soulie propõe substituir interações monótonas por um ecossistema vivo, personalizado e recompensador. A plataforma deve fazer com que pequenas atitudes sustentáveis sejam fáceis de compreender, executar, registrar e repetir.

O valor entregue se organiza em quatro frentes:

- **para o usuário:** orientação, motivação, progresso visível, recompensas reais e senso de pertencimento;
- **para a comunidade:** feed ativo, colaboração e desafios coletivos;
- **para a empresa:** maior adesão, retenção, cultura sustentável e indicadores de engajamento;
- **para o meio ambiente:** incentivo contínuo a comportamentos com impacto positivo e mensurável.

## 4. Propósito, missão e princípios

### Propósito

Transformar sustentabilidade em impacto real por meio de experiências capazes de gerar recorrência e hábitos duradouros.

### Missão

Promover práticas sustentáveis contínuas no cotidiano com apoio de tecnologia, gamificação e recompensas.

### Pilares

#### Sustentabilidade

Incentivar, entre outras práticas:

- redução do consumo de plásticos;
- descarte adequado de resíduos eletroeletrônicos;
- gestão eficiente de recursos naturais essenciais;
- participação em ações ambientais individuais e coletivas.

#### Tecnologia

Conectar o usuário a um sistema inteligente que processa dados e entrega respostas, recomendações e estímulos contextuais em tempo real.

#### Gamificação

Recompensar ações positivas por meio de pontos, medalhas, conquistas, ofensivas, trilhas e benefícios práticos.

#### Comunidade

Unir pessoas com interesses e causas semelhantes, estimular publicações e manter o ecossistema ativo por meio da participação dos próprios usuários.

## 5. Público e contexto de uso

O site alterna referências a “usuários” e “colaboradores”, indicando um cenário prioritariamente **corporativo**, no qual empresas utilizam a SoulUp para engajar seus times em hábitos sustentáveis. O protótipo deve considerar ao menos dois perfis.

### Colaborador/usuário

Pessoa que realiza o onboarding, recebe recomendações, cumpre missões, mantém ofensivas, interage com a comunidade, acumula pontos e resgata recompensas.

### Gestor/empresa

Pessoa ou organização que acompanha adesão, engajamento, recorrência, evolução dos hábitos e participação da comunidade por meio de indicadores consolidados.

### Perfil administrativo — necessidade de projeto

Embora não esteja detalhado no site, a operação completa precisará de um perfil responsável por cadastrar e moderar missões, recompensas, conteúdos, comunidades e regras de pontuação. Para o protótipo, esse perfil pode ser simulado por dados previamente configurados.

## 6. Como a experiência funciona

### 6.1 Onboarding inteligente

A Soulie recebe o usuário, explica a plataforma e coleta preferências e informações iniciais sobre sua rotina. A experiência deve adaptar o perfil e as primeiras recomendações com base nessas respostas.

Possíveis informações do onboarding:

- nome ou forma de tratamento;
- temas e causas de interesse;
- hábitos sustentáveis atuais;
- objetivos que deseja desenvolver;
- horários preferidos para interação;
- frequência desejada de lembretes;
- comunidades de interesse.

### 6.2 Missões dinâmicas

O usuário recebe missões e desafios personalizados, especialmente em ciclos semanais. As atividades devem ser pequenas, claras e viáveis, sem sobrecarregar sua rotina.

Cada missão deve informar, no mínimo:

- título e descrição;
- categoria ambiental;
- ação esperada;
- duração ou prazo;
- quantidade de pontos;
- critério de conclusão;
- progresso atual;
- impacto gerado, quando mensurável.

### 6.3 Ofensivas e recorrência

A Soulie utiliza **streaks**, ou ofensivas, para representar a quantidade de dias consecutivos em que o usuário mantém hábitos ou interage com suas metas. O calendário semanal apresentado no site utiliza os dias **S, T, Q, Q, S, S e D**.

O mecanismo deve:

- registrar dias concluídos;
- destacar a sequência atual;
- celebrar novos recordes;
- avisar quando a sequência estiver em risco;
- evitar punições desproporcionais que desmotivem o retorno;
- permitir uma retomada clara quando a sequência for interrompida.

### 6.4 Pontos e recompensas

As missões concedem pontos a uma carteira digital. O site apresenta como principal benefício a possibilidade de converter pontos em **desconto na conta de energia** e mostra, como exemplo de interface, um saldo de **220 pontos** pronto para resgate.

O protótipo deve demonstrar:

- saldo atual;
- histórico de entradas e resgates;
- pontos disponíveis e pendentes;
- catálogo de recompensas;
- regra de elegibilidade;
- confirmação visual do resgate.

A integração real com empresas de energia, regras financeiras, validade dos pontos e parceiros comerciais ainda não estão definidas no site e não devem ser tratadas como prontas.

### 6.5 Feed e comunidades

A experiência deve conectar usuários por interesses e causas, com exemplos como **Cinema**, **Finanças** e **Sustentabilidade**. O objetivo é fazer com que a própria comunidade mantenha o feed relevante e ativo.

Funcionalidades esperadas:

- visualização de publicações recentes;
- publicação de conquistas ou ações;
- participação em comunidades temáticas;
- desafios coletivos;
- reações e interações sociais;
- recomendações de comunidades ativas;
- incentivo contextual para publicar ou participar.

### 6.6 Recomendações e notificações inteligentes

A Soulie deve aprender padrões de atividade e preferências para interagir no momento mais útil. Em vez de disparos em massa, a proposta é enviar mensagens personalizadas com base no contexto e no horário em que o usuário costuma agir.

Exemplo apresentado no site:

> “João, sua comunidade de Finanças está ativa agora. Complete sua meta e garanta +30 Pts!”

O protótipo deve permitir configurar notificações e demonstrar por que determinada recomendação foi enviada. O usuário deve conseguir controlar temas, frequência, horários e canal de comunicação.

### 6.7 Painel de dados

Para a empresa, a Soulie deve traduzir participação e adoção de hábitos em indicadores simples. O site propõe acompanhamento em tempo real da adesão aos desafios e do ritmo de adoção de novos hábitos.

Indicadores recomendados para o protótipo:

- usuários ativos diários, semanais e mensais;
- retenção após 7 e 30 dias;
- taxa de conclusão do onboarding;
- missões iniciadas e concluídas;
- taxa de conclusão por categoria;
- média e recorde de ofensivas;
- participação em comunidades;
- publicações e interações no feed;
- pontos emitidos e resgatados;
- recompensas mais utilizadas;
- ativação e resposta às notificações;
- estimativa de impacto ambiental por ação.

## 7. Personalidade e estados da Soulie

A Soulie deve ter uma personalidade acolhedora, curiosa, leve, motivadora e não punitiva. Seu comportamento precisa combinar utilidade com emoção: ela reconhece o contexto, reage ao progresso e ajuda o usuário a retomar a jornada sem gerar culpa.

O site apresenta nove estados do avatar:

1. **Confiante** — ao orientar ou reforçar que uma meta é possível.
2. **Zangada** — em alertas relevantes; deve ser usada com cuidado para não constranger o usuário.
3. **Radiante** — em grandes conquistas, marcos e recordes.
4. **Entediada** — em períodos de inatividade, preferencialmente de forma bem-humorada.
5. **Alegre** — em interações positivas do cotidiano.
6. **Com pressa** — diante de prazos ou ofensivas próximas de expirar.
7. **Empolgada** — ao apresentar novidades, desafios ou oportunidades.
8. **Triste** — em sequências interrompidas ou metas não concluídas, sem culpabilização.
9. **Tímida** — em convites leves, primeiros contatos ou sugestões opcionais.

### Regras de tom de voz

- usar linguagem simples, curta e positiva;
- explicar claramente a ação esperada;
- comunicar benefício e impacto;
- evitar alarmismo, culpa ou competição tóxica;
- respeitar preferências e frequência escolhidas pelo usuário;
- celebrar progresso real, inclusive pequenos avanços;
- oferecer caminhos de retomada após falhas;
- manter coerência entre texto, expressão do avatar e contexto.

## 8. Rituais de engajamento

O FAQ descreve uma abordagem de **engenharia de rotina**, com eventos previsíveis que ajudam o usuário a criar o hábito de retornar. Exemplos apresentados:

- desafio especial toda segunda-feira;
- recompensa toda sexta-feira;
- metas e acompanhamento durante a semana;
- mensagens enviadas próximo ao horário habitual de uso.

Esses rituais devem ser configuráveis e testados para evitar fadiga. A previsibilidade deve criar familiaridade, enquanto o conteúdo das missões preserva variedade.

## 9. Fluxos principais do protótipo

### Fluxo A — Primeiro acesso

1. Usuário abre a plataforma.
2. Soulie se apresenta e explica sua função.
3. Usuário escolhe interesses, objetivos e preferências.
4. Soulie cria um perfil inicial.
5. Plataforma recomenda a primeira missão.
6. Usuário aceita a missão e vê a recompensa prevista.

### Fluxo B — Retorno diário

1. Usuário recebe ou visualiza um estímulo contextual.
2. Soulie apresenta o progresso da semana.
3. Usuário registra uma ação sustentável.
4. Sistema valida a conclusão.
5. Ofensiva e pontos são atualizados.
6. Soulie reage e recomenda a próxima ação.

### Fluxo C — Comunidade

1. Soulie indica uma comunidade ativa ou desafio coletivo.
2. Usuário abre o feed temático.
3. Usuário reage, comenta ou publica uma conquista.
4. A atividade contribui para o desafio coletivo.
5. Usuário recebe retorno visual sobre sua contribuição.

### Fluxo D — Resgate de recompensa

1. Usuário abre a carteira.
2. Consulta saldo e opções disponíveis.
3. Seleciona uma recompensa elegível.
4. Confere custo, benefício e regras.
5. Confirma o resgate.
6. Saldo e histórico são atualizados.

### Fluxo E — Acompanhamento empresarial

1. Gestor acessa o painel.
2. Visualiza adesão e retenção geral.
3. Compara missões, comunidades e períodos.
4. Identifica queda ou crescimento de engajamento.
5. Obtém informações para ajustar campanhas e desafios.

## 10. Telas recomendadas

Para demonstrar o funcionamento de ponta a ponta, o protótipo deve priorizar:

1. entrada, cadastro ou seleção de perfil demonstrativo;
2. onboarding conduzido pela Soulie;
3. início com resumo do dia, ofensiva, missão e saldo;
4. lista e detalhe de missões;
5. registro ou conclusão de uma ação;
6. calendário de ofensiva semanal;
7. carteira, catálogo e resgate de recompensa;
8. feed e comunidades;
9. perfil, preferências e notificações;
10. painel empresarial com métricas;
11. estados e reações do avatar;
12. demonstração de recomendação personalizada.

## 11. Escopo sugerido para a primeira demonstração

### Essencial

- perfil demonstrativo de usuário;
- onboarding com preferências;
- tela inicial personalizada;
- três ou mais missões de categorias diferentes;
- conclusão de missão com atualização de pontos;
- ofensiva semanal funcional;
- carteira e resgate simulado;
- feed com conteúdos simulados;
- ao menos uma comunidade e um desafio coletivo;
- recomendações contextuais simuladas;
- estados visuais da Soulie vinculados às ações;
- painel empresarial com dados de demonstração.

### Pode ser simulado inicialmente

- autenticação real;
- inteligência artificial e aprendizado de padrões;
- envio efetivo de notificações;
- validação externa de ações ambientais;
- integração com a SoulUp;
- integração com empresas de energia;
- transações financeiras;
- moderação automatizada;
- cálculo científico de impacto ambiental.

O protótipo deve deixar claro quando um resultado é simulado para não transmitir que integrações ainda inexistentes estão em produção.

## 12. Requisitos funcionais

| ID | Requisito |
|---|---|
| RF-01 | O sistema deve apresentar a Soulie e conduzir o onboarding. |
| RF-02 | O usuário deve selecionar preferências, interesses e objetivos. |
| RF-03 | O sistema deve recomendar missões com base no perfil. |
| RF-04 | O usuário deve visualizar, aceitar e concluir missões. |
| RF-05 | O sistema deve atualizar progresso, ofensiva e pontos após uma conclusão válida. |
| RF-06 | O usuário deve visualizar seu calendário de recorrência. |
| RF-07 | O usuário deve consultar saldo e histórico de pontos. |
| RF-08 | O usuário deve consultar e resgatar recompensas elegíveis. |
| RF-09 | O usuário deve acessar comunidades e um feed de atividades. |
| RF-10 | O usuário deve participar de desafios individuais e coletivos. |
| RF-11 | A Soulie deve exibir mensagens e estados emocionais coerentes com o contexto. |
| RF-12 | O usuário deve configurar preferências de notificação. |
| RF-13 | O sistema deve exibir recomendações personalizadas ou simuladas. |
| RF-14 | O gestor deve visualizar indicadores de adesão, recorrência e participação. |
| RF-15 | O protótipo deve disponibilizar dados de demonstração consistentes entre as telas. |

## 13. Regras de negócio iniciais

As regras abaixo organizam o protótipo, mas precisam de validação antes de uma versão real:

- uma missão só concede pontos uma vez por ciclo;
- a ofensiva avança quando o usuário conclui ao menos uma ação válida no dia;
- pontos só podem ser resgatados quando o saldo cobre o custo da recompensa;
- toda movimentação da carteira deve gerar histórico;
- notificações devem respeitar consentimento, frequência e horário definidos;
- recomendações devem estar relacionadas aos interesses ou comportamentos do usuário;
- desafios coletivos devem mostrar meta, prazo e contribuição individual;
- o estado da Soulie deve resultar de um evento identificável;
- dados simulados devem ser identificados na demonstração;
- métricas de impacto ambiental não devem ser apresentadas como científicas sem metodologia validada.

## 14. Modelo conceitual de dados

Entidades mínimas esperadas:

- **Usuário:** identificação, perfil, empresa, preferências, consentimentos e horários.
- **Interesse:** tema selecionado durante o onboarding.
- **Missão:** categoria, descrição, prazo, pontos, critério e status.
- **Progresso:** avanço do usuário em uma missão ou meta.
- **Ofensiva:** sequência atual, recorde e datas válidas.
- **Carteira:** saldo e movimentações.
- **Recompensa:** custo, disponibilidade, parceiro e regras.
- **Resgate:** recompensa, data, status e valor utilizado.
- **Comunidade:** tema, membros e desafios vinculados.
- **Publicação:** autor, conteúdo, data e interações.
- **Desafio coletivo:** meta, prazo, participantes e progresso agregado.
- **Notificação:** conteúdo, motivo, horário, canal, entrega e interação.
- **Estado da Soulie:** emoção, evento de origem, mensagem e ativo visual.
- **Evento analítico:** ação, usuário, data, origem e metadados necessários.

## 15. Requisitos não funcionais

### Usabilidade e acessibilidade

- interface responsiva e compreensível em dispositivos móveis;
- navegação por teclado;
- foco visível;
- textos alternativos para imagens e estados da Soulie;
- contraste adequado;
- mensagens que não dependam somente de cor ou expressão visual;
- feedback imediato após ações importantes.

### Privacidade e transparência

- coletar somente dados necessários;
- explicar quais dados alimentam recomendações;
- permitir alteração e revogação de preferências;
- respeitar consentimento para notificações e personalização;
- aplicar proteção compatível com a LGPD;
- evitar exposição indevida de desempenho individual em painéis empresariais.

### Confiabilidade

- impedir duplicidade de pontos;
- manter saldo consistente com o histórico;
- registrar eventos importantes da demonstração;
- tratar estados vazios, falhas e carregamento;
- preservar o progresso ao navegar entre telas.

### Desempenho

- priorizar carregamento rápido da tela inicial;
- otimizar imagens e animações do avatar;
- evitar que efeitos visuais prejudiquem a interação;
- oferecer alternativas para usuários que preferem movimento reduzido.

## 16. Critérios de sucesso da demonstração

A demonstração será convincente se uma pessoa conseguir:

1. entender a relação entre Soulie e SoulUp rapidamente;
2. identificar o problema de retenção que está sendo atacado;
3. concluir uma jornada completa, do onboarding à recompensa;
4. perceber personalização nas missões ou recomendações;
5. visualizar como a ofensiva estimula recorrência;
6. entender como comunidade e feed evitam a sensação de abandono;
7. ver os pontos se transformarem em benefício prático;
8. compreender quais dados a empresa poderá acompanhar;
9. distinguir funcionalidades reais de simulações do protótipo;
10. reconhecer a Soulie como uma assistente ativa, e não apenas como decoração.

## 17. Perguntas frequentes do site

### O que é a Soulie e qual sua relação com a SoulUp?

A SoulUp é a plataforma de engajamento. A Soulie é o avatar e a inteligência virtual que orienta os usuários dentro dela, utilizando dinâmicas gamificadas para tornar a jornada mais humana, leve e divertida.

### As notificações vão incomodar os colaboradores?

A proposta é evitar disparos genéricos. A Soulie considera hábitos individuais e procura interagir no melhor momento para cada pessoa. Preferências e consentimento devem continuar sob controle do usuário.

### Como evitar que o aplicativo seja abandonado?

Por meio de rituais previsíveis e recorrentes, como desafios semanais, recompensas, missões adaptadas, ofensivas e uma comunidade ativa. A consistência ajuda o acesso a se transformar em hábito.

### Como a empresa mede retorno e impacto?

Por um painel que apresenta participação, adesão aos desafios, recorrência e ritmo de adoção de hábitos. O site associa esses indicadores ao fortalecimento da cultura interna e à melhoria do clima de trabalho, hipóteses que devem ser validadas com pesquisa e dados reais.

## 18. Informações da equipe apresentadas no site

| Integrante | RM | Turma | GitHub | LinkedIn |
|---|---:|---|---|---|
| Arthur Carvalho Brito Martins | 572325 | 1TDSPH | [arthurmartinss](https://github.com/arthurmartinss) | [Perfil](https://www.linkedin.com/in/arthur-martinss/) |
| Diego Soares Trujillo | 570147 | 1TDSPH | [diegotrujillo011](https://github.com/diegotrujillo011) | [Perfil](https://www.linkedin.com/in/diego-trujillo-3441b9380/) |
| Enzo Nukui da Silva | 569770 | 1TDSPH | [EnzoNukui](https://github.com/EnzoNukui) | [Perfil](https://www.linkedin.com/in/enzo-nukui/) |
| Leticia Cardoso de Almeida | 569415 | 1TDSPH | [lehalmeidafc0](https://github.com/lehalmeidafc0) | [Perfil](https://www.linkedin.com/in/let%C3%ADcia-almeida-70b851294/) |
| Leticia Dias Araujo Felix Moratori | 569138 | 1TDSPH | [LeticiaFelix18](https://github.com/LeticiaFelix18) | [Perfil](https://www.linkedin.com/in/leticia-felix-660253286) |

## 19. Decisões ainda em aberto

O site apresenta a visão do produto, mas não define todos os detalhes necessários para implementação. As seguintes decisões devem ser registradas à medida que o projeto evoluir:

- tecnologia e arquitetura do protótipo;
- identidade visual oficial, tokens e biblioteca de componentes;
- origem e licença de todos os ativos do avatar;
- regras exatas de pontuação e ofensivas;
- processo de validação de uma ação sustentável;
- catálogo, parceiros e validade das recompensas;
- integração com a SoulUp e sistemas empresariais;
- estratégia de autenticação e perfis de acesso;
- uso real de IA, dados de treinamento e explicabilidade;
- canais e frequência de notificações;
- política de moderação da comunidade;
- metodologia para cálculo de impacto ambiental;
- fontes oficiais das métricas usadas na apresentação;
- metas quantitativas de retenção e engajamento;
- tratamento de privacidade, consentimento e LGPD;
- escopo exato do painel administrativo e empresarial.

## 20. Diretrizes para evolução deste documento

Este arquivo deve funcionar como a fonte de contexto do projeto. Toda nova decisão relevante deve ser adicionada aqui ou vinculada a uma documentação específica.

Ao atualizar o protótipo:

1. registre a decisão e seu motivo;
2. diferencie fatos confirmados, hipóteses e simulações;
3. atualize fluxos, requisitos e regras afetadas;
4. mantenha os dados de demonstração coerentes;
5. valide a experiência com usuários e representantes da empresa;
6. transforme aprendizados da demonstração em critérios para a próxima versão.

---

**Resumo final:** a Soulie deve demonstrar como a combinação de avatar inteligente, personalização, missões, ofensivas, comunidade e recompensas pode aumentar a recorrência da SoulUp e converter engajamento digital em hábitos sustentáveis observáveis.
