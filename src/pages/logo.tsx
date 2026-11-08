import React from 'react';
import Layout from '@theme/Layout';
import LogoShowcase from '@site/src/components/LogoShowcase';

export default function LogoPage(): JSX.Element {
  return (
    <Layout title="Logo" description="Docs-as-Code logo system">
      <LogoShowcase />
    </Layout>
  );
}
