import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import LearnIcon from '@site/static/img/homepage/learn-by-building.png';
import ModernIcon from '@site/static/img/homepage/modern-documentation.png';
import PortfolioIcon from '@site/static/img/homepage/build-portfolio.png';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '📚 Learn by Building',
    image: LearnIcon,
    description: (
      <>
        Create a real Docs-as-Code project while learning modern documentation
        practices from beginner to advanced.
      </>
    ),
  },
  {
    title: '⚙️ Modern Documentation',
    image: ModernIcon,
    description: (
      <>
      Master Markdown, Git, GitHub, APIs, Docusaurus, AI, automation,
        and modern documentation workflows.
      </>
    ),
  },
  {
    title: '🚀 Build Your Portfolio',
    image: PortfolioIcon,
    description: (
      <>
        Publish your documentation website on GitHub Pages and build
        a portfolio that showcases real-world Docs-as-Code skills.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
