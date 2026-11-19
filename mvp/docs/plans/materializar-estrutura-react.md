# Materializar estrutura de diretórios React

## Objetivo

Criar no projeto a árvore de diretórios aprovada em `ARQUITETURA_REACT.md`, preparando o espaço de trabalho para a futura implementação do protótipo.

## Contexto

A aplicação ainda não foi inicializada. Esta tarefa materializa somente a organização prevista para páginas, funcionalidades, componentes, estado, dados, serviços, estilos, ativos e testes.

## Requisitos

- criar a estrutura planejada de `public/`, `src/` e `tests/`;
- reservar áreas específicas para onboarding, comunidades, recomendações, missões, trilhas e comportamentos da Soulie;
- separar componentes da Soulie do contexto visual da Soul Up;
- manter áreas de testes unitários, componentes e ponta a ponta;
- documentar brevemente a responsabilidade das pastas.

## Fora de escopo

- inicializar Vite ou React;
- criar `package.json` ou arquivos de configuração;
- implementar componentes, rotas, estilos ou testes;
- instalar dependências;
- mover referências de pesquisa para a aplicação.

## Arquivos ou áreas envolvidas

- `public/`;
- `src/`;
- `tests/`;
- `AGENTS.md`.

## Plano de implementação

1. criar os diretórios de aplicação e infraestrutura;
2. criar os diretórios das funcionalidades prioritárias;
3. criar os diretórios de componentes e ativos;
4. criar a estrutura de testes;
5. documentar a árvore criada e validar seu escopo.

## Critérios de aceite

- [x] a estrutura de diretórios corresponde à arquitetura aprovada;
- [x] onboarding, comunidades, trilhas de missões e Soulie possuem áreas claras;
- [x] componentes da Soul Up permanecem separados da Soulie;
- [x] testes possuem áreas unitária, de componentes e E2E;
- [x] nenhum código ou dependência foi criado.

## Riscos e observações

- os arquivos reais serão adicionados somente durante a fundação React;
- marcadores `.gitkeep` poderão ser removidos quando cada pasta receber conteúdo.

## Divergências durante a implementação

Foi criada a subpasta `features/missions/trails/` para refletir a decisão posterior de representar cada missão como uma trilha de conquistas menores.

