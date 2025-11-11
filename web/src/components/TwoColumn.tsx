import React from 'react';

export interface TwoColumnProps {
  /** 
   * Expected usage (in MDX):
   * 
   * <TwoColumn>
   *   <>
   *     Left column markdown...
   *   </>
   *   <>
   *     Right column markdown...
   *   </>
   * </TwoColumn>
   */
  children: React.ReactNode;
  /** Extra class names for the root container */
  className?: string;
  /** If true, swap left/right columns (useful for alternating layouts) */
  reverse?: boolean;
}

/**
 * Responsive Two-Column layout for MDX docs.
 * 
 * - Uses flexbox
 * - Stacks vertically on small screens
 * - Works beautifully with MDX fragments (<></>)
 */
const TwoColumn: React.FC<TwoColumnProps> = ({
  children,
  className = '',
  reverse = false,
}) => {
  const allChildren = React.Children.toArray(children).filter(Boolean);

  const left = allChildren[0] ?? null;
  const right = allChildren[1] ?? null;

  // Build root class name string
  const rootClassName = [
    'two-col',
    reverse ? 'two-col--reverse' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
    .trim();

  return (
    <div className={rootClassName}>
      <div className="two-col__col two-col__col--left">
        {left}
      </div>
      <div className="two-col__col two-col__col--right">
        {right}
      </div>
    </div>
  );
};

export default TwoColumn;
