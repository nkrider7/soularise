import React from 'react';

interface ShinyProps {
  /** Disable the shine entirely */
  disabled?: boolean;
  /** Seconds it takes the sweep to cross the element */
  speed?: number;
  /** Extra classes for sizing, fonts, etc. */
  className?: string;
  /** Angle of the shining beam (deg) */
  angle?: number;
  children: React.ReactNode;
}

/**
 * Wrap any content you like with <Shiny> … </Shiny>
 * The gradient is added by a ::after pseudo-element so it works for
 * both text and images.
 */
const Shiny: React.FC<ShinyProps> = ({
  children,
  disabled = false,
  speed = 5,
  className = '',
  angle = 120,
}) => {
  return (
    <span
      className={`relative inline-block ${disabled ? '' : 'shiny'} ${className}`}
      style={
        disabled
          ? undefined
          : ({
              // Tailwind can read custom properties in JIT mode
              '--shiny-duration': `${speed}s`,
              '--shiny-angle': `${angle}deg`,
            } as React.CSSProperties)
      }
    >
      {children}
    </span>
  );
};

export default Shiny;
