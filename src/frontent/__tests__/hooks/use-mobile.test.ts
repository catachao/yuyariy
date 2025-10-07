import { renderHook, act } from '@testing-library/react'
import { useIsMobile } from '@/hooks/use-mobile'

describe('useIsMobile', () => {
  const originalMatchMedia = window.matchMedia
  const originalInnerWidth = window.innerWidth

  beforeEach(() => {
    // Mock del window.matchMedia
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })) as any
  })

  afterEach(() => {
    // Restauramos los valores originales
    window.matchMedia = originalMatchMedia
    ;(window.innerWidth as number) = originalInnerWidth
    jest.restoreAllMocks()
  })

  it('debe retornar false si el ancho de la ventana es mayor o igual a 768px', () => {
    ;(window.innerWidth as number) = 1024

    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(false)
  })

  it('debe retornar true si el ancho de la ventana es menor a 768px', () => {
    ;(window.innerWidth as number) = 500

    const { result } = renderHook(() => useIsMobile())

    expect(result.current).toBe(true)
  })

  it('debe actualizarse cuando cambia el tamaño de la ventana (simulando change event)', () => {
    let listener: (() => void) | null = null

    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: (_event: string, cb: () => void) => {
        listener = cb
      },
      removeEventListener: jest.fn(),
    })) as any

    ;(window.innerWidth as number) = 800
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    // Simulamos un cambio de tamaño a menos de 768px
    act(() => {
      ;(window.innerWidth as number) = 600
      listener?.()
    })

    expect(result.current).toBe(true)
  })
})
