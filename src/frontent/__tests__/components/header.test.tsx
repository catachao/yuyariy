import { render, screen } from '@testing-library/react'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'

// 🧱 Mocks básicos
jest.mock('next/link', () => {
  return ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  )
})

// Mock de los componentes UI (no necesitamos su lógica interna)
jest.mock('@/components/ui/button', () => ({
  Button: ({ children, ...rest }: any) => <button {...rest}>{children}</button>,
}))

jest.mock('@/components/ui/sheet', () => ({
  Sheet: ({ children }: any) => <div data-testid="sheet">{children}</div>,
  SheetTrigger: ({ children }: any) => <div data-testid="sheet-trigger">{children}</div>,
  SheetContent: ({ children }: any) => <div data-testid="sheet-content">{children}</div>,
}))

jest.mock('lucide-react', () => ({
  Menu: () => <svg data-testid="menu-icon" />,
}))

describe('Header Component', () => {
  it('renderiza el título principal con enlace a la página de inicio', () => {
    render(<Header />)
    const title = screen.getByText('Yuyariy')
    expect(title).toBeInTheDocument()
    expect(title).toHaveAttribute('href', '/')
  })

  it('renderiza las categorías de navegación en desktop', () => {
    render(<Header />)

    const categories = ['Mundo', 'Politica', 'Economia']

    categories.forEach((category) => {
      const link = screen.getAllByText(category)[0] // primer match (desktop)
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', `/category/${category.toLowerCase()}`)
    })
  })

  it('renderiza el botón de menú móvil y su contenido', () => {
    render(<Header />)

    // Verifica que el ícono y botón existen
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()

    // Verifica estructura de Sheet (mockeada)
    expect(screen.getByTestId('sheet')).toBeInTheDocument()
    expect(screen.getByTestId('sheet-trigger')).toBeInTheDocument()
    expect(screen.getByTestId('sheet-content')).toBeInTheDocument()
  })
})
