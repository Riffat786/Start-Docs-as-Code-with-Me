import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import ArticleCard from "@site/src/components/ArticleCard";
import FeaturedArticle from "@site/src/components/FeaturedArticle";
import { articles } from "@site/src/data/articles";
import styles from "./styles.module.css";

export default function InsightsPage() {
  const featuredArticle = articles.find((article) => article.featured);
  console.log("Articles:", articles);
console.log("Featured:", featuredArticle);
  const regularArticles = articles.filter((article) => !article.featured);
  return (
    <Layout
      title="Insights & Articles"
      description="Thoughts, tutorials, and practical guides on Docs-as-Code, AI, and Technical Writing."
    >
      <main className={styles.container}>
        <section className={styles.hero}>
          <Heading as="h1">Insights & Articles</Heading>

          <p className={styles.subtitle}>
            Practical insights, lessons learned, and real-world experiences in
            Docs-as-Code, AI, Technical Writing, and Documentation Engineering.
          </p>
        </section>

        {featuredArticle && (
  <FeaturedArticle {...featuredArticle} />
)}

<Heading as="h2" className={styles.sectionTitle}>
  Latest Articles
</Heading>

<section className={styles.grid}>
  {regularArticles.map((article) => (
    <ArticleCard key={article.slug} {...article} />
  ))}
</section>
      </main>
    </Layout>
  );
}