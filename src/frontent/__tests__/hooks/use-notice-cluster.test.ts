import { renderHook, waitFor } from '@testing-library/react'
import { useClusterNotices } from '@/hooks/use-notice-cluster'

// Mock global fetch
global.fetch = jest.fn()

const mockData = [
  {
    cluster: 1,
    titulo: 'Cluster 1',
    resumen_derecha: 'Resumen derecha',
    resumen_centro: 'Resumen centro',
    resumen_izquierda: 'Resumen izquierda',
    elementos: [
      { cluster: 1, link: '/link1', title: 'Noticia 1' },
      { cluster: 1, link: '/link2', title: 'Noticia 2' },
    ],
    image: '/image.jpg',
  },
]

describe('useClusterNotices', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('debe inicializar con data vacía y loading true al inicio', async () => {
    // @ts-ignore
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    })

    const { result } = renderHook(() => useClusterNotices(1))

    // ✅ Estado inicial esperado inmediatamente después del render
    expect(result.current.data).toEqual([])
    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBeNull()

    // Esperamos que el fetch se resuelva y el hook actualice su estado
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    // ✅ Estado final esperado tras el fetch exitoso
    expect(result.current.data).toEqual(mockData)
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBeNull()
  })

  it('debe manejar errores de fetch correctamente', async () => {
    // Simulamos un error HTTP
    // @ts-ignore
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    })

    const { result } = renderHook(() => useClusterNotices(2))

    // Estado inicial
    expect(result.current.data).toEqual([])
    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBeNull()

    // Esperamos la actualización tras el error
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    // ✅ Estado esperado después de error
    expect(result.current.error).toContain('Error HTTP')
    expect(result.current.data).toEqual([])
  })
})
