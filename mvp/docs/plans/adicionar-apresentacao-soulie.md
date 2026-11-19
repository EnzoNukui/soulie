# Adicionar apresentação da Soulie

## Objetivo

Criar uma tela de abertura dedicada à Soulie antes da demonstração no contexto visual da Soul Up.

## Contexto

A primeira versão inicia diretamente em uma cena que imita o contexto do aplicativo. O usuário solicitou conhecer melhor a Soulie antes de clicar em um botão e entrar nessa experiência.

## Requisitos

- apresentar a Soulie, sua personalidade e seu papel;
- manter a apresentação curta e visual, sem repetir o site institucional;
- usar a personagem em destaque e com animação leve;
- oferecer uma ação clara para entrar na tela já aprovada;
- adaptar a composição para desktop e mobile;
- manter o fluxo atual e seu progresso inalterados.

## Fora de escopo

- criar uma landing page institucional completa;
- alterar onboarding, comunidades, pontos ou trilha;
- adicionar dependências ou novos tipos de animação.

## Arquivos ou áreas envolvidas

- `src/pages/PresentationPage/`;
- `src/app/router.tsx`;
- links de retorno ao início;
- documentação do fluxo.

## Plano de implementação

1. criar a apresentação visual da Soulie;
2. mover o encontro atual para `/jornada/encontro`;
3. usar `/` como entrada da apresentação;
4. revisar chamadas para ação e retornos ao início;
5. validar desktop, mobile, navegação e build.

## Critérios de aceite

- [x] `/` apresenta a Soulie antes do contexto da Soul Up;
- [x] o botão principal abre a tela anteriormente aprovada;
- [x] a apresentação é curta, interativa e não institucional;
- [x] o restante da jornada continua funcionando;
- [x] desktop e mobile foram validados;
- [x] typecheck, lint e build passam.

## Riscos e observações

- a Soulie pode aparecer maior nesta apresentação; dentro do aplicativo continuará pequena e contextual;
- a animação respeitará a preferência por movimento reduzido já aplicada globalmente.

## Divergências durante a implementação

Nenhuma.
