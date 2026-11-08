import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Logo from '@site/src/components/Logo';

export default function NavbarLogo(): JSX.Element {
  return (
    <Link
      to={useBaseUrl('/')}
      className="navbar__brand"
      title="Docs-as-Code Home"
    >
      <Logo size="medium" showText={true} />
    </Link>
  );
}
