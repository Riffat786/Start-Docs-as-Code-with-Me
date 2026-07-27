import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

type Props = {
  title: string;
  date: string;
  image: string;
  summary: string;
  slug: string;
  tags: string[];
};

export default function ArticleCard({
  title,
  date,
  image,
  summary,
  slug,
  tags,
}: Props) {
  return (
    <div className={styles.card}>
      <img
  src={useBaseUrl(image)}
  alt={title}
  className={styles.image}
      />

      <div className={styles.content}>
        <p className={styles.date}>{date}</p>

        <h2>{title}</h2>

        <p>{summary}</p>

        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <Link to={slug} className={styles.button}>
          Read Article →
        </Link>
      </div>
    </div>
  );
}