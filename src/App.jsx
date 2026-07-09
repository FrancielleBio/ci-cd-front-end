const etapas = [
  { titulo: 'Lint', texto: 'Valida a qualidade do código com ESLint.' },
  { titulo: 'Testes', texto: 'Executa testes automatizados antes do deploy.' },
  { titulo: 'Build', texto: 'Compila o projeto para produção.' },
  { titulo: 'Deploy', texto: 'Publica automaticamente no GitHub Pages.' },
]

function App() {
  return (
    <main className="page">
      <section className="hero">
        <span className="badge">GitHub Actions</span>
        <h1>Pipeline CI/CD Front-end</h1>
        <p>
          Projeto React com Vite configurado para rodar lint, testes, build e deploy automático no GitHub Pages.
        </p>
        <a className="button" href="https://github.com/" target="_blank" rel="noreferrer">
          Ver repositório
        </a>
      </section>

      <section className="cards" aria-label="Etapas do pipeline">
        {etapas.map((etapa) => (
          <article className="card" key={etapa.titulo}>
            <h2>{etapa.titulo}</h2>
            <p>{etapa.texto}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
