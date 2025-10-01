import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ArticleCardProps {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  image: string
  featured?: boolean
}

export function ArticleCard({ id, title, excerpt, category, date, image, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={`/article/${id}`} className="group block">
        <article className="space-y-4">
          <div className="relative aspect-[16/9] overflow-hidden bg-muted">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <span>{category}</span>
              <span>•</span>
              <time dateTime={date}>{date}</time>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-balance group-hover:text-primary transition-colors">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{excerpt}</p>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              Read more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/article/${id}`} className="group block">
      <article className="space-y-3">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <span>{category}</span>
            <span>•</span>
            <time dateTime={date}>{date}</time>
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-bold leading-tight text-balance group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{excerpt}</p>
        </div>
      </article>
    </Link>
  )
}
