import { renderHook, act, waitFor } from '@testing-library/react'
import { useGroupNotices } from '@/hooks/use-notice'

// 🔧 Mock global fetch
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

describe('useGroupNotices', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('debe inicializar con data vacía y loading true al inicio', async () => {
    // @ts-ignore
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    })

    const { result } = renderHook(() => useGroupNotices())

    // Estado inicial
    expect(result.current.data).toEqual([])
    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBeNull()

    // Esperamos la actualización asincrónica
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    // Estado final esperado
    expect(result.current.data).toEqual(mockData)
    expect(result.current.error).toBeNull()
  })

  it('debe manejar errores correctamente si el fetch falla', async () => {
    // @ts-ignore
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    })

    const { result } = renderHook(() => useGroupNotices())

    // Estado inicial
    expect(result.current.data).toEqual([])
    expect(result.current.loading).toBe(true)

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.error).toContain('Error HTTP')
    expect(result.current.data).toEqual([])
  })

  it('debe permitir reintentar con refetch()', async () => {
    // 1️⃣ Primera respuesta
    // @ts-ignore
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    })

    const { result } = renderHook(() => useGroupNotices())

    // Esperamos que cargue los datos iniciales
    await waitFor(() => expect(result.current.loading).toBe(false))

    // 2️⃣ Nueva respuesta simulada
    const newMockData = [
      {
        cluster: 2,
        titulo: 'Cluster 2',
        resumen_derecha: 'Nuevo resumen',
        resumen_centro: 'Nuevo centro',
        resumen_izquierda: 'Nuevo izquierda',
        elementos: [],
        image: '/new.jpg',
      },
    ]

    // @ts-ignore
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => newMockData,
    })

    // ✅ Envolvemos refetch en act()
    await act(async () => {
      await result.current.refetch()
    })

    await waitFor(() => {
      expect(result.current.data).toEqual(newMockData)
    })
  })
})
