import { Header } from "@/components/header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArticleCard } from "@/components/article-card"

const profile = {
  name: "Sarah Mitchell",
  avatar: "/professional-woman-diverse.png",
  bio: "Senior Technology Correspondent with over 15 years of experience covering innovation, sustainability, and the intersection of technology and society. Based in San Francisco.",
  email: "sarah.mitchell@chronicle.com",
  articles: [
    {
      id: "1",
      title: "The Future of Sustainable Energy: A Global Perspective",
      excerpt:
        "As nations worldwide commit to carbon neutrality, renewable energy sources are reshaping the global power landscape.",
      category: "Technology",
      date: "Mar 15, 2025",
      image: "/renewable-energy-solar-panels.png",
    },
    {
      id: "10",
      title: "Silicon Valley Startups Pivot to Climate Tech",
      excerpt:
        "A new generation of entrepreneurs is focusing on solutions to environmental challenges, attracting record venture capital.",
      category: "Technology",
      date: "Mar 8, 2025",
      image: "/startup-office-green-technology.jpg",
    },
    {
      id: "11",
      title: "The Ethics of Artificial Intelligence in Medicine",
      excerpt:
        "As AI systems take on greater roles in healthcare, questions about accountability and bias demand urgent attention.",
      category: "Technology",
      date: "Mar 1, 2025",
      image: "/ai-healthcare-ethics.jpg",
    },
  ],
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Profile Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Avatar className="h-32 w-32 md:h-40 md:w-40">
              <AvatarImage src={profile.avatar || "/placeholder.svg"} alt={profile.name} />
              <AvatarFallback className="text-3xl">SM</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl font-bold">{profile.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{profile.bio}</p>
              <a href={`mailto:${profile.email}`} className="inline-block text-primary hover:underline">
                {profile.email}
              </a>
            </div>
          </div>
        </div>

        {/* Published Articles */}
        <section className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl font-bold mb-8 pb-4 border-b border-border">Published Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {profile.articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
