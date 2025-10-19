import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

// Reusable button component with hover effects
const ButtonWithHover = ({ onClick, children, style = {} }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        fontSize: '0.8rem',
        padding: '4px 8px',
        backgroundColor: isHovered 
          ? 'var(--ifm-color-emphasis-300)' 
          : 'var(--ifm-color-emphasis-200)',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        color: isHovered
          ? 'var(--ifm-color-emphasis-900)'
          : 'var(--ifm-color-emphasis-800)',
        fontWeight: '500',
        transition: 'all 0.2s ease',
        boxShadow: isHovered ? '0 1px 2px rgba(0, 0, 0, 0.1)' : 'none',
        outline: 'none',
        ...style
      }}
    >
      {children}
    </button>
  );
};

// Component for displaying the level indicator
export const LevelEmoji = ({ level }) => {
  const getStyles = () => {
    const baseStyles = {
      padding: '2px 6px',
      borderRadius: '12px',
      fontSize: '0.7rem',
      fontWeight: '600',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '3px',
      whiteSpace: 'nowrap',
      border: '1px solid transparent',
    };
    
    switch (level) {
      case 'master':
        return {
          ...baseStyles,
          backgroundColor: 'var(--ifm-color-success-contrast-background)',
          color: 'var(--ifm-color-success-contrast-foreground)',
          borderColor: 'var(--ifm-color-success)',
        };
      case 'good':
        return {
          ...baseStyles,
          backgroundColor: 'var(--ifm-color-info-contrast-background)',
          color: 'var(--ifm-color-info-contrast-foreground)',
          borderColor: 'var(--ifm-color-info)',
        };
      case 'needs_practice':
        return {
          ...baseStyles,
          backgroundColor: 'var(--ifm-color-warning-contrast-background)',
          color: 'var(--ifm-color-warning-contrast-foreground)',
          borderColor: 'var(--ifm-color-warning)',
        };
      default:
        return {
          ...baseStyles,
          backgroundColor: 'var(--ifm-color-secondary-contrast-background)',
          color: 'var(--ifm-color-secondary-contrast-foreground)',
          borderColor: 'var(--ifm-color-secondary)',
        };
    }
  };
  
  switch (level) {
    case 'master':
      return <span style={getStyles()} title="Master">🏆 Master</span>;
    case 'good':
      return <span style={getStyles()} title="Good">🙂 Good</span>;
    case 'needs_practice':
      return <span style={getStyles()} title="Needs Practice">💀 Needs Practice</span>;
    default:
      return <span style={getStyles()} title="Not Started">❔ Not Started</span>;
  }
};

// Component for displaying a topic with expandable details
export const TopicItem = ({ 
  topic, 
  expandAll = false, 
  collapseAll = false,
  onExpand = () => {}, 
  onCollapse = () => {} 
}) => {
  // We'll use a client-side state and a server-side default (closed state)
  const isBrowser = useIsBrowser();
  const [isExpandedState, setIsExpandedState] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  
  // Handle expand all/collapse all effects
  React.useEffect(() => {
    if (expandAll && !isExpandedState) {
      setIsExpandedState(true);
      onExpand(topic.name);
    } else if (collapseAll && isExpandedState) {
      setIsExpandedState(false);
      onCollapse(topic.name);
    }
  }, [expandAll, collapseAll, topic.name, isExpandedState, onExpand, onCollapse]);
  
  // Only allow expanding/collapsing on the client
  const toggleExpand = () => {
    if (isBrowser) {
      const newState = !isExpandedState;
      setIsExpandedState(newState);
      if (newState) {
        onExpand(topic.name);
      } else {
        onCollapse(topic.name);
      }
    }
  };
  
  return (
    <div className="topic-item" style={{ marginBottom: '6px' }}>
      <div
        onClick={toggleExpand}
        role="button"
        tabIndex={0}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand();
          }
        }}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          padding: '6px 10px',
          borderRadius: '4px',
          backgroundColor: isHovered 
            ? 'var(--ifm-menu-color-background-hover)' 
            : isExpandedState 
              ? 'var(--ifm-menu-color-background-active)'
              : 'var(--ifm-color-emphasis-100)',
          fontSize: 'var(--ifm-menu-font-size)',
          fontWeight: 'normal',
          color: 'var(--ifm-font-color-base)',
          transition: 'all 0.2s ease-in-out'
        }}
      >
        <span 
          style={{ 
            marginRight: '8px',
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isExpandedState ? 'rotate(90deg)' : 'rotate(0)',
            transition: 'transform 0.2s ease-in-out'
          }}
        >
          <svg
            width="16"
            height="16"
            aria-hidden="true"
            style={{
              fill: 'var(--ifm-menu-color)',
              opacity: '0.8'
            }}
          >
            <path
              fillRule="evenodd"
              d="M6.793 7.5L2.146 2.854a.5.5 0 11.708-.708l5 5a.5.5 0 010 .708l-5 5a.5.5 0 01-.708-.708L6.793 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span style={{ flex: 1 }}>{topic.name}</span>
        <LevelEmoji level={topic.level} />
      </div>

      <div 
        style={{
          maxHeight: isExpandedState ? '200px' : '0',
          overflow: 'hidden',
          padding: isExpandedState ? '8px 8px 8px 22px' : '0 8px 0 36px',
          backgroundColor: 'var(--ifm-color-emphasis-50)',
          borderRadius: '0 0 4px 4px',
          fontSize: 'calc(var(--ifm-menu-font-size) * 0.95)',
          color: 'var(--ifm-color-emphasis-800)',
          marginLeft: '10px',
          transition: 'max-height 0.3s ease, padding 0.3s ease',
          boxSizing: 'border-box',
          opacity: isExpandedState ? 1 : 0,
        }}
      >
        <p style={{ margin: '4px 0' }}>
          {topic.notes && (
            <>
              <strong>Notes:</strong>
              <br /> 
              {topic.notes || "No notes yet"}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

// Main component for the Progress Tracker
export default function ProgressTracker({ data }) {
  const isBrowser = useIsBrowser();
  const [expandAllTrigger, setExpandAllTrigger] = React.useState(false);
  const [collapseAllTrigger, setCollapseAllTrigger] = React.useState(false);
  const [expandedTopics, setExpandedTopics] = React.useState(new Set());
  
  // Calculate statistics about progress
  const stats = React.useMemo(() => {
    let totalTopics = 0;
    let mastered = 0;
    let good = 0;
    let needsPractice = 0;
    let notStarted = 0;
    
    data.sections.forEach(section => {
      section.topics.forEach(topic => {
        totalTopics++;
        switch(topic.level) {
          case 'master': mastered++; break;
          case 'good': good++; break;
          case 'needs_practice': needsPractice++; break;
          default: notStarted++;
        }
      });
    });
    
    const completionPercentage = Math.round((mastered + good) / totalTopics * 100) || 0;
    
    return {
      totalTopics,
      mastered,
      good,
      needsPractice,
      notStarted,
      completionPercentage
    };
  }, [data]);
  
  // Reset the triggers after they've been processed
  React.useEffect(() => {
    if (expandAllTrigger) {
      setTimeout(() => setExpandAllTrigger(false), 100);
    }
    if (collapseAllTrigger) {
      setTimeout(() => setCollapseAllTrigger(false), 100);
    }
  }, [expandAllTrigger, collapseAllTrigger]);
  
  const handleExpandAll = () => {
    if (isBrowser) {
      setExpandAllTrigger(true);
    }
  };
  
  const handleCollapseAll = () => {
    if (isBrowser) {
      setCollapseAllTrigger(true);
    }
  };
  
  const handleTopicExpand = (topicName) => {
    setExpandedTopics(prev => new Set(prev).add(topicName));
  };
  
  const handleTopicCollapse = (topicName) => {
    setExpandedTopics(prev => {
      const newSet = new Set(prev);
      newSet.delete(topicName);
      return newSet;
    });
  };
  
  return (
    <div className="progress-tracker">
      <div style={{
        marginBottom: '20px',
        padding: '16px',
        backgroundColor: 'rgb(76, 175, 153, 0.15)', // Mint green with opacity
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(76, 175, 153, 0.3)',
      }}>
        <h2 style={{ 
          fontSize: '1.3rem',
          fontWeight: '600',
          marginBottom: '12px',
          color: 'var(--ifm-heading-color)'
        }}>
          Progress Summary
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          gap: '16px',
          marginBottom: '16px'
        }}>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--ifm-color-content)' }}>
              Overall Completion
            </div>
            <div style={{ 
              fontSize: '1.8rem', 
              fontWeight: 'bold',
              color: stats.completionPercentage >= 70 
                ? 'var(--ifm-color-success)' 
                : stats.completionPercentage >= 40 
                  ? 'var(--ifm-color-info)' 
                  : 'var(--ifm-color-warning)'
            }}>
              {stats.completionPercentage}%
            </div>
          </div>
          
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--ifm-color-content)' }}>
              Topics
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--ifm-heading-color)' }}>
              {stats.totalTopics}
            </div>
          </div>
          
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--ifm-color-content)' }}>
              Mastered
            </div>
            <div style={{ 
              fontSize: '1.2rem', 
              fontWeight: 'bold', 
              color: 'var(--ifm-color-success)'
            }}>
              {stats.mastered}
            </div>
          </div>
          
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--ifm-color-content)' }}>
              Good
            </div>
            <div style={{ 
              fontSize: '1.2rem', 
              fontWeight: 'bold', 
              color: 'var(--ifm-color-info)'
            }}>
              {stats.good}
            </div>
          </div>
          
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--ifm-color-content)' }}>
              Needs Practice
            </div>
            <div style={{ 
              fontSize: '1.2rem', 
              fontWeight: 'bold', 
              color: 'var(--ifm-color-warning)'
            }}>
              {stats.needsPractice}
            </div>
          </div>
          
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--ifm-color-content)' }}>
              Not Started
            </div>
            <div style={{ 
              fontSize: '1.2rem', 
              fontWeight: 'bold', 
              color: 'var(--ifm-color-content-secondary)'
            }}>
              {stats.notStarted}
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div style={{ 
          height: '8px', 
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white works in both modes
          borderRadius: '4px',
          overflow: 'hidden',
          display: 'flex',
          marginBottom: '8px',
          border: '1px solid rgba(76, 175, 153, 0.3)',
        }}>
          <div style={{ 
            width: `${(stats.mastered / stats.totalTopics) * 100}%`,
            backgroundColor: 'var(--ifm-color-success)',
            height: '100%',
            transition: 'width 0.5s ease-in-out'
          }}></div>
          <div style={{ 
            width: `${(stats.good / stats.totalTopics) * 100}%`,
            backgroundColor: 'var(--ifm-color-info)',
            height: '100%',
            transition: 'width 0.5s ease-in-out'
          }}></div>
          <div style={{ 
            width: `${(stats.needsPractice / stats.totalTopics) * 100}%`,
            backgroundColor: 'var(--ifm-color-warning)',
            height: '100%',
            transition: 'width 0.5s ease-in-out'
          }}></div>
        </div>
        
        {/* Legend for progress bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          fontSize: '0.7rem',
          color: 'var(--ifm-color-content)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              backgroundColor: 'var(--ifm-color-success)',
              borderRadius: '50%' 
            }}></div>
            <span>Mastered</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              backgroundColor: 'var(--ifm-color-info)',
              borderRadius: '50%' 
            }}></div>
            <span>Good</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              backgroundColor: 'var(--ifm-color-warning)',
              borderRadius: '50%' 
            }}></div>
            <span>Needs Practice</span>
          </div>
        </div>
      </div>
            
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
      }}>
        <div></div>
        <div style={{
          display: 'flex',
          gap: '8px',
        }}>
          <ButtonWithHover onClick={handleExpandAll}>
            Expand All
          </ButtonWithHover>
          <ButtonWithHover onClick={handleCollapseAll}>
            Collapse All
          </ButtonWithHover>
        </div>
      </div>

      {data.sections.map((section, idx) => (
        <div key={idx} className="section" style={{ 
          marginBottom: '24px',
          paddingLeft: '8px'
        }}>
          <h3 
            style={{ 
              fontFamily: 'var(--ifm-font-family-base)',
              color: 'var(--ifm-color-primary)',
              fontWeight: '700', 
              fontSize: '1.2rem',
              marginBottom: '16px',
              paddingLeft: '6px',
              paddingBottom: '8px',
              borderBottom: '1px solid var(--ifm-color-emphasis-200)',
              position: 'relative'
            }}
          >
            {section.name}
          </h3>
          <div className="topics-list">
            {section.topics.map((topic, topicIdx) => (
              <TopicItem 
                key={topicIdx} 
                topic={topic}
                expandAll={expandAllTrigger}
                collapseAll={collapseAllTrigger}
                onExpand={handleTopicExpand}
                onCollapse={handleTopicCollapse}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}