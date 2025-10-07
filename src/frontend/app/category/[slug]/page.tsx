import { Header } from "@/components/header"
import { ArticleCard } from "@/components/article-card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const categoryArticles = {
  technology: [
    {
      id: "3",
      title: "AI Revolution Transforms Healthcare Industry",
      excerpt:
        "Machine learning algorithms are now assisting doctors in diagnosing diseases with unprecedented accuracy, marking a new era in medical technology.",
      category: "Technology",
      date: "Mar 14, 2025",
      image: "/medical-technology-ai.jpg",
    },
    {
      id: "7",
      title: "Tech Giants Face New Regulatory Challenges",
      excerpt:
        "Governments worldwide propose stricter oversight of data privacy and market competition in the rapidly evolving digital age.",
      category: "Technology",
      date: "Mar 12, 2025",
      image: "/technology-office-modern.jpg",
    },
    {
      id: "8",
      title: "Quantum Computing Breakthrough Announced",
      excerpt:
        "Researchers achieve major milestone in quantum error correction, bringing practical quantum computers closer to reality.",
      category: "Technology",
      date: "Mar 11, 2025",
      image: "/quantum-computer-lab.jpg",
    },
    {
      id: "9",
      title: "Cybersecurity Threats Evolve in 2025",
      excerpt:
        "Security experts warn of sophisticated new attack vectors as organizations rush to strengthen their digital defenses.",
      category: "Technology",
      date: "Mar 10, 2025",
      image: "/cybersecurity-network.jpg",
    },
  ],
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
  const articles = categoryArticles[params.slug as keyof typeof categoryArticles] || []

  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{categoryName}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">{categoryName}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Mantente informado con las últimas noticias, análisis y perspectivas de {categoryName.toLowerCase()} a nivel global.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </main>
    </div>
  )
}
