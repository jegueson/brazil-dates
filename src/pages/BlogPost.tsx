import { useParams, Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { SITE_URL } from "@/lib/site-config";
import { ArticleLayout } from "@/components/content/ArticleLayout";
import { SchemaScript } from "@/components/content/SchemaScript";
import { getBlogPost } from "@/data/blog-posts";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) return <NotFound />;

  const canonical = `${SITE_URL}/blog/${post.slug}`;

  useSEO({
    title: `${post.title} | Blog Calendário Brasileiro`,
    description: post.description,
    canonical,
    ogType: "article",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { "@type": "Person", name: post.author },
      publisher: {
        "@type": "Organization",
        name: "Calendário Brasileiro",
        url: SITE_URL,
      },
      url: canonical,
    },
  });

  return (
    <>
      <SchemaScript
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          author: { "@type": "Person", name: post.author },
          url: canonical,
        }}
      />
      <ArticleLayout
        title={post.title}
        subtitle={post.description}
        breadcrumbs={[{ title: "Blog", href: "/blog" }, { title: post.title }]}
      >
        {post.content.map((paragraph, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
        <p className="mt-8">
          <Link to="/blog" className="text-primary hover:underline">
            ← Voltar ao blog
          </Link>
        </p>
      </ArticleLayout>
    </>
  );
};

export default BlogPost;
