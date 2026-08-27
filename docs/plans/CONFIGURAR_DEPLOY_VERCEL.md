# Configurar deploy da SPA na Vercel

## Objetivo

Preparar o protótipo Vite para que rotas internas do React Router funcionem ao serem abertas ou atualizadas diretamente na Vercel.

## Contexto

A aplicação é uma SPA com roteamento no cliente. A Vercel recomenda um rewrite para `index.html` em projetos Vite SPA, evitando respostas 404 em caminhos como `/jornada/notificacoes`.

## Requisitos

- criar `vercel.json` na raiz;
- usar o schema oficial da Vercel;
- reescrever todos os caminhos para `/index.html`;
- preservar o build atual do Vite sem comandos personalizados desnecessários.

## Fora de escopo

- publicar o projeto;
- criar ou conectar uma conta da Vercel;
- alterar domínio, variáveis de ambiente ou configurações de produção.

## Arquivos ou áreas envolvidas

- `vercel.json`.

## Plano de implementação

1. Criar a configuração mínima recomendada para SPA.
2. Validar a sintaxe JSON.
3. Executar as validações existentes e revisar o escopo.

## Critérios de aceite

- [x] `vercel.json` possui JSON válido;
- [x] todas as rotas são reescritas para `/index.html`;
- [x] o build continua aprovado;
- [x] nenhuma configuração desnecessária foi adicionada.

## Riscos e observações

- o rewrite é necessário porque o React Router funciona no navegador e a Vercel precisa entregar a entrada da SPA para rotas profundas;
- a configuração não substitui a validação posterior em uma URL de preview da Vercel.

## Divergências durante a implementação

Nenhuma divergência de escopo ou arquitetura foi necessária.

## Resultado da validação

- o JSON foi interpretado com sucesso;
- foi confirmado um único rewrite de `/(.*)` para `/index.html`;
- `npm run typecheck`, `npm run lint` e `npm run build` foram aprovados;
- a confirmação definitiva de uma rota profunda será feita em uma URL de preview após a publicação, fora do escopo desta tarefa.
