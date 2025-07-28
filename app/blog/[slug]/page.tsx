import { blogPosts } from '@/lib/data'
import { notFound } from 'next/navigation'

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post || !post.published) {
    notFound()
  }
  
  return (
    <article className="container-custom py-24 max-w-3xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <time>{new Date(post.date).toLocaleDateString()}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <div className="flex gap-2 mt-4">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-muted rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </header>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl text-muted-foreground">{post.excerpt}</p>
        <p className="mt-8">
          This is a placeholder for the blog post content. In a real implementation, 
          this would be loaded from MDX files or a CMS.
        </p>
      </div>
    </article>
  )
}

export async function generateStaticParams() {
  return blogPosts
    .filter(post => post.published)
    .map((post) => ({
      slug: post.slug,
    }))
}