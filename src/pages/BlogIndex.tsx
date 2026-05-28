import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { BLOG_POSTS } from "@/data/blog-posts";

const BlogIndex = () => {
  useSEO({
    title: "Blog — Calendário Brasileiro | Cultura e Feriados",
    description: "Artigos sobre feriados, tradições brasileiras, Carnaval, Festas Juninas e planejamento.",
    canonical: `${SITE_URL}/blog`,
  });

  return (
    <ArticleLayout
      title="Blog"
      subtitle="Cultura, feriados e planejamento"
      breadcrumbs={[{ title: "Blog" }]}
    >
      <ul className="space-y-6">
        {BLOG_POSTS.map((post) => (
          <li key={post.slug} className="border-b pb-6">
            <Link to={`/blog/${post.slug}`} className="group">
              <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground mt-2">{post.description}</p>
              <p className="text-xs text-muted-foreground mt-2">
                {new Date(post.publishedAt).toLocaleDateString("pt-BR")} · {post.author}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </ArticleLayout>
  );
};

export default BlogIndex;
