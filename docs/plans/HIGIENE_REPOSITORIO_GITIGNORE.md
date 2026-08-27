# Higiene do repositório e `.gitignore`

## Objetivo

Impedir o versionamento de dependências, builds, caches, logs, configurações locais e segredos, além de verificar se existem arquivos ou diretórios vazios sem função no projeto.

## Contexto

O projeto será preparado para publicação no GitHub. A revisão considera a stack React, TypeScript e Vite, preservando código, documentação, referências visuais, mídias do protótipo e o `package-lock.json`.

## Requisitos

- ampliar o `.gitignore` sem esconder arquivos necessários ao projeto;
- cobrir dependências, build, cache, relatórios de teste, logs, variáveis de ambiente, configurações locais e arquivos do sistema operacional;
- preservar um eventual `.env.example` sem segredos;
- localizar arquivos e diretórios realmente vazios fora de `node_modules` e `dist`;
- remover somente itens vazios sem finalidade comprovada.

## Fora de escopo

- apagar dependências ou o build local;
- remover mídias e referências utilizadas pelo protótipo;
- criar ou publicar um repositório Git;
- excluir arquivos apenas por serem pequenos ou atualmente pouco utilizados.

## Arquivos ou áreas envolvidas

- `.gitignore`;
- estrutura da raiz, `src/`, `docs/`, `public/` e `tests/`.

## Plano de implementação

1. Inventariar regras existentes, arquivos grandes, possíveis segredos e itens vazios.
2. Classificar o que deve ou não ser versionado.
3. Atualizar o `.gitignore` por categorias.
4. Revisar itens vazios e excluir apenas os dispensáveis.
5. Validar que arquivos essenciais não foram ignorados e registrar o resultado.

## Critérios de aceite

- [x] dependências, builds, caches e resultados locais não são versionados;
- [x] arquivos `.env` e chaves privadas ficam ignorados;
- [x] código, documentos, referências e lockfile permanecem versionáveis;
- [x] itens vazios foram revisados e somente os dispensáveis foram removidos;
- [x] nenhuma regressão identificada.

## Riscos e observações

- padrões amplos podem esconder arquivos legítimos; por isso as regras devem ser específicas;
- imagens e vídeos de referência fazem parte da documentação e não devem ser ignorados apenas pelo formato;
- o projeto ainda não possui Git inicializado, então a validação será feita por correspondência das regras e inspeção direta.

## Divergências durante a implementação

Nenhuma divergência de escopo ou arquitetura foi necessária.

## Resultado da inspeção

- nenhum arquivo de zero bytes foi encontrado fora das áreas geradas;
- foram encontrados 39 marcadores `.gitkeep` de um byte;
- 16 marcadores foram removidos porque suas pastas já possuem conteúdo real;
- 23 marcadores foram mantidos para preservar diretórios vazios previstos na arquitetura, incluindo as futuras áreas de testes;
- nenhum diretório vazio sem marcador ou finalidade foi encontrado;
- `src/`, `docs/`, `public/`, `tests/`, `package.json`, `package-lock.json` e as mídias continuam versionáveis;
- `.env.example` continuará versionável caso seja criado;
- não há Git inicializado, então as regras foram verificadas com listagem que aplica explicitamente o `.gitignore`.

## Revisão da entrega

- `node_modules/` e `dist/` deixaram de aparecer na listagem versionável;
- typecheck aprovado;
- nenhuma mídia ou referência foi removida;
- a ausência de Git limita o uso de `git status` e `git check-ignore` nesta etapa.
