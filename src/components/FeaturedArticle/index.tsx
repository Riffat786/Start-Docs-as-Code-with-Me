import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

type Props = {
  title: string;
  date: string;
  image: string;
  summary: string;
  slug: string;
};

export default function FeaturedArticle({
  title,
  date,
  image,
  summary,
  slug,
}: Props) {
  return (
    <section className={styles.featured}>
      <div className={styles.imageContainer}>
        <img
  src={useBaseUrl(image)}
  alt={title}
  className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>⭐ Featured Article</span>

        <h2>{title}</h2>

        <p className={styles.date}>{date}</p>

        <p>{summary}</p>

        <Link className="button button--primary button--lg" to={slug}>
          Read Article →
        </Link>
      </div>
    </section>
  );
}