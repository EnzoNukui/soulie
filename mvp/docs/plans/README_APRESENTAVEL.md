# README apresentável do protótipo

## Objetivo

Reescrever o `README.md` da raiz para apresentar a Soulie e o protótipo de forma clara, visual e confiável para visitantes do GitHub, avaliadores e representantes da empresa.

## Contexto

O README atual registra somente uma descrição curta, tecnologias, comandos e o escopo inicial. O projeto já evoluiu e agora possui apresentação, onboarding, recomendações de comunidades, feed, trilhas de missões, conclusão, notificações e assistência contextual da Soulie.

Documentos consultados:

- `docs/plans/DOCUMENTACAO_SOULIE.md`;
- `docs/plans/PLANO_PROTOTIPO_SITE.md`;
- `docs/plans/ARQUITETURA_REACT.md`;
- planos das funcionalidades concluídas;
- referências visuais em `docs/referencias/`.

## Requisitos

- explicar de forma breve o que são Soulie e Soul Up;
- destacar a demonstração publicada na Vercel;
- apresentar o fluxo e as funcionalidades implementadas;
- incluir prévias visuais já versionadas no repositório;
- informar stack, arquitetura, comandos reais e estrutura principal;
- diferenciar comportamentos funcionais de dados e integrações simulados;
- apontar para a documentação detalhada;
- usar português claro e formatação adequada ao GitHub;
- não afirmar que recursos futuros já estão implementados.
- usar as três capturas reais fornecidas pelo usuário no lugar dos conceitos antigos;
- evitar HTML de alinhamento no README para impedir que tags como `div` apareçam como texto em alguns renderizadores.

## Fora de escopo

- alterar código da aplicação;
- gerar novas capturas ou imagens;
- criar documentação de API inexistente;
- prometer integração real com Soul Up, IA, notificações externas ou pagamentos;
- adicionar dependências.

## Arquivos ou áreas envolvidas

- `README.md`;
- `docs/referencias/capturas-readme/`;
- `docs/plans/README_APRESENTAVEL.md`.

Capturas fornecidas e destinos definidos:

- `Captura de tela 2026-09-02 114635.png` → `docs/referencias/capturas-readme/apresentacao-soulie.png`;
- `Captura de tela 2026-09-02 114651.png` → `docs/referencias/capturas-readme/personalidade-soulie.png`;
- `Captura de tela 2026-09-02 114737.png` → `docs/referencias/capturas-readme/prototipo-feed.png`.

## Plano de implementação

1. Organizar a narrativa do projeto e os links principais.
2. Copiar e adicionar as três capturas reais fornecidas pelo usuário.
3. Documentar experiência, arquitetura e escopo real.
4. Conferir links, comandos e aderência à implementação.
5. Executar revisões independentes de conteúdo, técnica e entrega final.

## Critérios de aceite

- [x] o README comunica a proposta nos primeiros blocos;
- [x] a demonstração publicada possui link destacado;
- [x] funcionalidades listadas correspondem ao código atual;
- [x] imagens usam caminhos válidos dentro do repositório;
- [x] comandos correspondem aos scripts do `package.json`;
- [x] dados simulados e limitações estão explícitos;
- [x] documentação detalhada está acessível;
- [x] Markdown está legível e sem links locais absolutos;
- [x] nenhuma alteração fora da documentação é realizada.
- [x] as três capturas reais aparecem no README e estão versionáveis dentro do repositório;
- [x] o README não depende de tags HTML de contêiner para apresentação.

## Riscos e observações

- as capturas precisam permanecer legíveis no GitHub sem criar uma página excessivamente pesada;
- os arquivos devem ser copiados para o repositório com nomes estáveis, sem depender da pasta pessoal do usuário;
- o README deve ser atraente sem virar um documento extenso demais;
- badges externos serão evitados para reduzir dependência visual de serviços terceiros.

## Divergências durante a implementação

### Atualização visual solicitada após a primeira versão

```text
Planned behavior:
Usar duas imagens conceituais existentes em uma tabela de direção visual.

Observed problem:
O usuário preferiu três capturas reais da interface e relatou que algumas tags div estavam aparecendo no README.

Required deviation:
Substituir os conceitos pelas capturas reais e remover os contêineres HTML usados para centralização.

Reason:
Representar com fidelidade o protótipo atual e manter compatibilidade entre renderizadores Markdown.
```

## Resultado e revisões da primeira versão

- README reescrito com apresentação visual, CTA para a Vercel, funcionalidades, fluxo, arquitetura, execução local e limites do protótipo;
- imagens conceituais identificadas explicitamente como direção visual;
- caminhos relativos e imagens: validados;
- comandos: conferidos contra o `package.json`;
- `git diff --check`: aprovado, com apenas aviso de normalização LF/CRLF;
- Plan Review: aprovado;
- Content Review: aprovado após explicitar a relação entre Soul Up e Soulie;
- Technical Review: aprovado;
- Test Agent: `PASS`;
- Final Review: `READY TO MERGE`;
- limitação conhecida: não há renderizador ou linter Markdown configurado e as URLs externas não foram consultadas durante a validação.

## Status da atualização visual

- implementação: concluída;
- Plan Review: aprovado após correção dos pontos levantados;
- Content Review: aprovado;
- Technical Review: aprovado;
- Test Agent: `PASS` — PNGs válidos, caminhos existentes, Markdown balanceado e `git diff --check` sem erros;
- Final Review: `READY TO MERGE`.
