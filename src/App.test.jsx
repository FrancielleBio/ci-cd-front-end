import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom/vitest'
import App from './App.jsx'

describe('App', () => {
  it('renderiza o título principal', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /pipeline ci\/cd front-end/i })).toBeInTheDocument()
  })

  it('renderiza as etapas principais do pipeline', () => {
    render(<App />)
    expect(screen.getByText('Lint')).toBeInTheDocument()
    expect(screen.getByText('Testes')).toBeInTheDocument()
    expect(screen.getByText('Build')).toBeInTheDocument()
    expect(screen.getByText('Deploy')).toBeInTheDocument()
  })
})
