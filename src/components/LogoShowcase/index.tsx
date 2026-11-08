import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import Logo from '@site/src/components/Logo';
import styles from './styles.module.css';

export default function LogoShowcase(): JSX.Element {
  const { colorMode, setColorMode } = useColorMode();
  const [copiedSize, setCopiedSize] = useState<string | null>(null);

  const sizes = ['small', 'medium', 'large'] as const;

  const copyCode = (size: string) => {
    const code = `<Logo size="${size}" showText={true} />`;
    navigator.clipboard.writeText(code);
    setCopiedSize(size);
    setTimeout(() => setCopiedSize(null), 2000);
  };

  return (
    <div className={styles.showcase}>
      <div className={styles.container}>
        <h2>Docs-as-Code Logo System</h2>

        <div className={styles.modeToggle}>
          <button
            className={`${styles.modeButton} ${colorMode === 'light' ? styles.active : ''}`}
            onClick={() => setColorMode('light')}
          >
            ☀️ Light Mode
          </button>
          <button
            className={`${styles.modeButton} ${colorMode === 'dark' ? styles.active : ''}`}
            onClick={() => setColorMode('dark')}
          >
            🌙 Dark Mode
          </button>
        </div>

        <div className={styles.description}>
          <p>Modern SVG logo combining <strong>document</strong> + <strong>code symbols</strong> with adaptive light/dark mode support.</p>
        </div>

        <div className={styles.sizeGrid}>
          {sizes.map((size) => (
            <div key={size} className={styles.sizeCard}>
              <div className={styles.preview}>
                <Logo size={size} showText={true} />
              </div>
              <div className={styles.info}>
                <h4>{size.charAt(0).toUpperCase() + size.slice(1)}</h4>
                <p className={styles.details}>
                  {size === 'small' && '32x32px - Favicons, small icons'}
                  {size === 'medium' && '48x48px - Navbar, headers'}
                  {size === 'large' && '64x64px - Hero, featured sections'}
                </p>
                <button
                  className={styles.copyButton}
                  onClick={() => copyCode(size)}
                  title="Copy code"
                >
                  {copiedSize === size ? '✓ Copied!' : '📋 Copy'}
                </button>
                <code className={styles.code}>
                  &lt;Logo size="{size}" /&gt;
                </code>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.variants}>
          <h3>Variants</h3>
          <div className={styles.variantGrid}>
            <div className={styles.variantCard}>
              <div className={styles.variantPreview}>
                <Logo size="medium" showText={true} />
              </div>
              <p>With Text</p>
              <code>showText={'{true}'}</code>
            </div>
            <div className={styles.variantCard}>
              <div className={styles.variantPreview}>
                <Logo size="medium" showText={false} />
              </div>
              <p>Icon Only</p>
              <code>showText={'{false}'}</code>
            </div>
          </div>
        </div>

        <div className={styles.colorScheme}>
          <h3>Color Palette</h3>
          <div className={styles.colorGrid}>
            <div className={styles.colorItem}>
              <div className={styles.colorBox} style={{ backgroundColor: '#2e8555' }}></div>
              <p>Primary (Light)</p>
              <code>#2e8555</code>
            </div>
            <div className={styles.colorItem}>
              <div className={styles.colorBox} style={{ backgroundColor: '#25c2a0' }}></div>
              <p>Primary (Dark)</p>
              <code>#25c2a0</code>
            </div>
            <div className={styles.colorItem}>
              <div className={styles.colorBox} style={{ backgroundColor: '#667eea' }}></div>
              <p>Secondary (Light)</p>
              <code>#667eea</code>
            </div>
            <div className={styles.colorItem}>
              <div className={styles.colorBox} style={{ backgroundColor: '#80b3ff' }}></div>
              <p>Secondary (Dark)</p>
              <code>#80b3ff</code>
            </div>
            <div className={styles.colorItem}>
              <div className={styles.colorBox} style={{ backgroundColor: '#764ba2' }}></div>
              <p>Accent (Light)</p>
              <code>#764ba2</code>
            </div>
            <div className={styles.colorItem}>
              <div className={styles.colorBox} style={{ backgroundColor: '#a78bfa' }}></div>
              <p>Accent (Dark)</p>
              <code>#a78bfa</code>
            </div>
          </div>
        </div>

        <div className={styles.usageGuide}>
          <h3>Quick Usage Guide</h3>
          <pre className={styles.codeBlock}>
{`import Logo from '@site/src/components/Logo';

// Default (medium with text)
<Logo />

// Custom size
<Logo size="large" />

// Icon only
<Logo showText={false} />

// With custom CSS class
<Logo className="my-logo-class" />`}
          </pre>
        </div>
      </div>
    </div>
  );
}
