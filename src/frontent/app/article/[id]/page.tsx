'use client'

import { Header } from "@/components/header"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useClusterNotices } from "@/hooks/use-notice-cluster"
import * as Tabs from "@radix-ui/react-tabs"
import * as Separator from "@radix-ui/react-separator"

export default function ArticlePage() {
  const { id } = useParams()
  const { data: articles, loading, error } = useClusterNotices(id as string)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading article...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load article: {error}</p>
      </div>
    )
  }

  const article = articles[0]

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">No article found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="hover:text-foreground transition-colors">Politica</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium line-clamp-1">
            {article.titulo}
          </span>
        </nav>

        {/* Article Header */}
        <header className="mb-10 space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            {article.titulo}
          </h1>
           <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
            {article.resumen_centro}
          </p>
        </header>

        {/* Featured Image */}
        {article.image && (
          <div className="relative aspect-[16/9] mb-12 overflow-hidden bg-muted">
            <img
              src={article.image}
              alt={article.titulo}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Tabs Section - Resúmenes */}
        <Tabs.Root defaultValue="centro" className="w-full">
          <Tabs.List className="flex border-b border-border mb-6">
            <Tabs.Trigger
              value="izquierda"
              className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Izquierda
            </Tabs.Trigger>
            <Tabs.Trigger
              value="centro"
              className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Centro
            </Tabs.Trigger>
            <Tabs.Trigger
              value="derecha"
              className="px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Derecha
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="izquierda" className="prose prose-lg max-w-none">
            <p>{article.resumen_izquierda}</p>
          </Tabs.Content>

          <Tabs.Content value="centro" className="prose prose-lg max-w-none">
            <p>{article.resumen_centro}</p>
          </Tabs.Content>

          <Tabs.Content value="derecha" className="prose prose-lg max-w-none">
            <p>{article.resumen_derecha}</p>
          </Tabs.Content>
        </Tabs.Root>

        {/* Separator */}
        <Separator.Root
          decorative
          className="my-10 h-px w-full bg-border"
        />

        {/* Related Cluster News */}
        <section>
          <h2 className="text-2xl mb-4 font-medium text-foreground">Diarios que mostraron esta noticia</h2>

          <Tabs.Root defaultValue="all" className="w-full">
            {/* Tabs de filtros */}
            <Tabs.List className="flex gap-4 border-b border-border mb-6">
              <Tabs.Trigger
                value="all"
                className="px-3 py-1 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                Todas
              </Tabs.Trigger>
            </Tabs.List>

            {/* Contenido de cada tab */}
            <Tabs.Content value="all" className="space-y-6">
              {articles.map((notice, idx) => (
                <div key={idx} className="space-y-4">
                  {notice.elementos?.map((el, i) => (
                    <div
                      key={i}
                      className="p-4 border rounded-lg bg-card shadow-sm flex flex-col gap-2"
                    >
                      {/* Diario */}
                      <p>{new URL(el.link).hostname}</p>

                      {/* Título */}
                      <h3 className="text-lg font-semibold">{el.title.replace(/-/g, " ")}</h3>

                      {/* Resumen central por defecto */}
                      <p className="text-muted-foreground text-sm">
                        2025-10-01
                      </p>

                      {/* Link */}
                      <a
                        href={el.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline"
                      >
                        Leer artículo completo
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </Tabs.Content>

          </Tabs.Root>
        </section>
      </article>
    </div>
  )
}
