import React from 'react';
import { usePlatform } from '../../hooks/usePlatform';

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
  };
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  className = '',
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = { mobile: '1rem', tablet: '1.5rem', desktop: '2rem' }
}) => {
  const platform = usePlatform();

  const getGridColumns = () => {
    if (platform.isMobile) return columns.mobile || 1;
    if (platform.isTablet) return columns.tablet || 2;
    return columns.desktop || 3;
  };

  const getGridGap = () => {
    if (platform.isMobile) return gap.mobile || '1rem';
    if (platform.isTablet) return gap.tablet || '1.5rem';
    return gap.desktop || '2rem';
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${getGridColumns()}, 1fr)`,
    gap: getGridGap(),
    width: '100%'
  };

  return (
    <div 
      className={`responsive-grid ${className}`}
      style={gridStyle}
    >
      {children}
    </div>
  );
};

export default ResponsiveGrid;