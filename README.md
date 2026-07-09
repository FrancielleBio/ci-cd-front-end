# Pipeline CI/CD Front-end

Projeto React com Vite criado para praticar CI/CD com GitHub Actions.

## Funcionalidades da pipeline

- Instala dependências com `npm ci`
- Roda análise de código com `npm run lint`
- Roda testes automatizados com `npm run test`
- Faz build da aplicação com `npm run build`
- Publica automaticamente no GitHub Pages após push na branch `main`

## Como rodar localmente

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

Link do site publicado:

> Depois de subir no GitHub e ativar o GitHub Pages, cole aqui o link gerado.

Exemplo:

```text
https://seu-usuario.github.io/nome-do-repositorio/
```

## Como entregar

1. Suba este projeto para um repositório público no GitHub.
2. Vá em **Settings > Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions**.
4. Faça um push na branch `main`.
5. Abra a aba **Actions** e confira se todos os jobs passaram.
6. Copie o link publicado no GitHub Pages e coloque neste README.
