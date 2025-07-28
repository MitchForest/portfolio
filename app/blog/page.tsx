import { blogPosts } from '@/lib/data'

export default function BlogPage() {
  // Filter only published posts
  const publishedPosts = blogPosts.filter(post => post.published)
  
  return (
    <div className="container-custom py-24">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="grid gap-8 max-w-3xl">
        {publishedPosts.map((post) => (
          <article key={post.slug} className="card-custom">
            <h2 className="text-2xl font-semibold mb-2">
              <a href={`/blog/${post.slug}`} className="hover:text-accent-orange transition-colors">
                {post.title}
              </a>
            </h2>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <time>{new Date(post.date).toLocaleDateString()}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="flex gap-2 mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}