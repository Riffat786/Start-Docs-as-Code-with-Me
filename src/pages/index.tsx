import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Hero from "@site/src/components/homepage/Hero";
import WhyCourse from '@site/src/components/homepage/WhyCourse';
import LearningJourney from '@site/src/components/homepage/LearningJourney';
import FeaturedProjects from '@site/src/components/homepage/FeaturedProjects';
import TechnologyExplorer from '@site/src/components/homepage/TechnologyExplorer';
import CallToAction from "@site/src/components/homepage/CallToAction";
import Footer from "@site/src/components/homepage/Footer";
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Hero />
      <main>
        <WhyCourse />
        <LearningJourney />
        <FeaturedProjects />
        <TechnologyExplorer />
        <CallToAction />
      </main>
      <Footer />
    </Layout>
  );
}

