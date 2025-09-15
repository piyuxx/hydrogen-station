import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type TechItem = {
  id: string
  name: string
  category: "Frontend" | "Backend" | "DevOps" | "Design"
  tags: string[]
  description: string
}

const ALL_TECH: TechItem[] = [
  {
    id: "react",
    name: "React",
    category: "Frontend",
    tags: ["javascript", "ui", "spa"],
    description: "Library for building user interfaces and interactive views.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    tags: ["css", "utility", "design"],
    description: "Utility-first CSS framework for rapid UI development.",
  },
  {
    id: "shadcn",
    name: "shadcn/ui",
    category: "Frontend",
    tags: ["components", "radix", "accessible"],
    description: "Headless, accessible components composed with Tailwind CSS.",
  },
  {
    id: "node",
    name: "Node.js",
    category: "Backend",
    tags: ["javascript", "runtime"],
    description: "JavaScript runtime for building scalable network applications.",
  },
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    tags: ["containers", "deploy"],
    description: "Containerization platform for building and shipping applications.",
  },
]

const categories = ["All", "Frontend", "Backend", "DevOps", "Design"] as const

const TechSearch = () => {
  const [query, setQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All")

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ALL_TECH.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory
      const matchesQuery =
        q.length === 0 ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some((t) => t.includes(q))
      return matchesCategory && matchesQuery
    })
  }, [query, activeCategory])

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">Explore our Tech</h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-2xl">
            Search and filter technologies used across the project. Built with React, Tailwind and shadcn/ui.
          </p>
        </div>

        <Card className="border-none bg-gradient-to-b from-[rgba(217,217,217,0.12)] to-[rgba(115,115,115,0.12)] backdrop-blur">
          <CardHeader className="gap-4">
            <CardTitle className="text-base md:text-lg">Tech Search</CardTitle>
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2 rounded-xl border bg-card px-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-muted-foreground">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 4.243 11.942l3.783 3.783a.75.75 0 1 0 1.06-1.06l-3.783-3.784A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" clipRule="evenodd" />
                  </svg>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by name, tag, or description..."
                    className="w-full bg-transparent text-sm md:text-base outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto md:overflow-visible">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {results.length === 0 ? (
              <div className="text-sm text-muted-foreground">No technologies match your search.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {results.map((item) => (
                  <Card key={item.id} className="border bg-card/60">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-medium leading-tight">{item.name}</h3>
                          <p className="mt-1 text-xs text-muted-foreground">{item.category}</p>
                        </div>
                        <div className="flex gap-2">
                          {item.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-[10px] uppercase tracking-wide rounded-full border px-2 py-1 text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default TechSearch



