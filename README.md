# Pipeline CI/CD Front-end

Projeto desenvolvido com **React** e **Vite** para demonstrar a implementação de uma pipeline de **Integração Contínua (CI)** e **Entrega Contínua (CD)** utilizando **GitHub Actions** e **GitHub Pages**.

## Funcionalidades da pipeline

A pipeline automatiza as seguintes etapas:

- Instalação das dependências com `npm ci`
- Análise estática do código com `npm run lint`
- Execução dos testes automatizados com `npm run test`
- Geração do build de produção com `npm run build`
- Publicação automática da aplicação no **GitHub Pages** após alterações na branch `main`

## Tecnologias utilizadas

- React
- Vite
- GitHub Actions
- ESLint
- Vitest
- GitHub Pages

## Como executar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/FrancielleBio/ci-cd-front-end.git
```

2. Acesse a pasta do projeto:

```bash
cd ci-cd-front-end
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

## Comandos úteis

Executar análise de código:

```bash
npm run lint
```

Executar os testes:

```bash
npm run test
```

Gerar o build da aplicação:

```bash
npm run build
```

## Deploy

A aplicação está publicada no GitHub Pages e pode ser acessada em:

https://franciellebio.github.io/ci-cd-front-end/

## Repositório

Código-fonte disponível em:

https://github.com/FrancielleBio/ci-cd-front-end

## Pipeline CI/CD

A pipeline é executada automaticamente a cada **push** ou **pull request** na branch `main`, realizando as seguintes etapas:

1. Instalação das dependências (`npm ci`)
2. Análise de código com ESLint
3. Execução dos testes automatizados
4. Build da aplicação
5. Deploy automático no GitHub Pages

## Objetivo

Este projeto foi desenvolvido como atividade prática da **EBAC** para aplicar os conceitos de **Integração Contínua (CI)** e **Entrega Contínua (CD)**, automatizando os processos de instalação de dependências, análise de código, execução de testes, build e deploy utilizando **GitHub Actions** e **GitHub Pages**.