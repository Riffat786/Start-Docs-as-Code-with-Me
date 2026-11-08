import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 'medium', showText = true, className = '' }: LogoProps): JSX.Element {
  const { colorMode } = useColorMode();

  const sizeMap = {
    small: { width: 32, height: 32, fontSize: 12 },
    medium: { width: 48, height: 48, fontSize: 16 },
    large: { width: 64, height: 64, fontSize: 20 },
  };

  const dimensions = sizeMap[size];

  // Color scheme for light and dark mode
  const colors = {
    light: {
      primary: '#2e8555',    // Green
      secondary: '#667eea',  // Blue
      accent: '#764ba2',     // Purple
      text: '#1a1a1a',
      background: '#ffffff',
    },
    dark: {
      primary: '#25c2a0',    // Light green
      secondary: '#80b3ff',  // Light blue
      accent: '#a78bfa',     // Light purple
      text: '#ffffff',
      background: '#1a1a1a',
    },
  };

  const currentColors = colors[colorMode === 'dark' ? 'dark' : 'light'];

  return (
    <div className={`${styles.logoContainer} ${className}`}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        {/* Document/Page Shape */}
        <g>
          {/* Main document background */}
          <rect
            x="12"
            y="8"
            width="32"
            height="44"
            rx="3"
            fill={currentColors.primary}
            opacity="0.15"
            stroke={currentColors.primary}
            strokeWidth="1.5"
          />

          {/* Document lines (representing text) */}
          <line
            x1="18"
            y1="16"
            x2="36"
            y2="16"
            stroke={currentColors.primary}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="18"
            y1="22"
            x2="36"
            y2="22"
            stroke={currentColors.primary}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
          <line
            x1="18"
            y1="28"
            x2="30"
            y2="28"
            stroke={currentColors.primary}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />
        </g>

        {/* Code Brackets - Left angle bracket */}
        <g>
          <path
            d="M 24 35 L 20 40 L 24 45"
            stroke={currentColors.secondary}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Code Brackets - Right angle bracket */}
        <g>
          <path
            d="M 40 35 L 44 40 L 40 45"
            stroke={currentColors.accent}
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Center dot (represents code) */}
        <circle
          cx="32"
          cy="40"
          r="2"
          fill={currentColors.secondary}
        />
      </svg>

      {/* Logo Text */}
      {showText && (
        <div className={styles.textContainer}>
          <span
            className={styles.text}
            style={{ fontSize: `${dimensions.fontSize}px`, color: currentColors.text }}
          >
            Docs-as-Code
          </span>
        </div>
      )}
    </div>
  );
}
