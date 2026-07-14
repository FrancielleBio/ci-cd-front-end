# Pipeline CI/CD Front-end

Projeto React com Vite desenvolvido para praticar Integração Contínua (CI) e Entrega Contínua (CD) utilizando GitHub Actions.

## Funcionalidades da pipeline

- Instala dependências com `npm ci`
- Executa análise de código com `npm run lint`
- Executa testes automatizados com `npm run test`
- Realiza o build da aplicação com `npm run build`
- Publica automaticamente a aplicação no GitHub Pages após push na branch `main`

## Tecnologias utilizadas

- React
- Vite
- GitHub Actions
- ESLint
- Vitest
- GitHub Pages

## Como executar localmente

```bash
npm install
npm run dev
```

## Comandos úteis

```bash
npm run lint
npm run test
npm run build
```

## Deploy

Aplicação publicada:

- https://franciellebio.github.io/ci-cd-front-end/

## Repositório

- https://github.com/FrancielleBio/ci-cd-front-end

## Pipeline

A pipeline é executada automaticamente em cada **push** ou **pull request** na branch `main`, realizando:

1. Instalação das dependências
2. Análise de código (ESLint)
3. Execução dos testes
4. Build da aplicação
5. Deploy automático no GitHub Pages