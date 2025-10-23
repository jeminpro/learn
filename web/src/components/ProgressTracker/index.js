import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import './styles.css';

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
      case 'mastered':
        return {
          ...baseStyles,
          backgroundColor: 'var(--ifm-color-success-contrast-background)',
          color: 'var(--ifm-color-success-contrast-foreground)',
          borderColor: 'var(--ifm-color-success)',
        };
      case 'completed':
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
    case 'mastered':
      return <span style={getStyles()} title="Mastered">🏆 Mastered</span>;
    case 'completed':
      return <span style={getStyles()} title="Completed">🙂 Completed</span>;
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
  
  // Check if the topic has notes
  const hasNotes = topic.notes && topic.notes.trim() !== '';
  
  // Handle expand all/collapse all effects
  React.useEffect(() => {
    // Only process expand/collapse events if there are notes
    if (!hasNotes) return;
    
    if (expandAll && !isExpandedState) {
      setIsExpandedState(true);
      onExpand(topic.name);
    } else if (collapseAll && isExpandedState) {
      setIsExpandedState(false);
      onCollapse(topic.name);
    }
  }, [expandAll, collapseAll, topic.name, isExpandedState, onExpand, onCollapse, hasNotes]);
  
  // Only allow expanding/collapsing on the client
  const toggleExpand = () => {
    if (isBrowser && hasNotes) {
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
    <div className="topic-item" style={{ 
      marginBottom: '10px',
      border: hasNotes ? `1px solid ${isExpandedState ? 'var(--ifm-color-emphasis-300)' : 'transparent'}` : 'none',
      borderRadius: '5px',
      transition: 'border-color 0.3s ease',
      overflow: 'hidden'
    }}>
      <div
        onClick={toggleExpand}
        role={hasNotes ? "button" : undefined}
        tabIndex={hasNotes ? 0 : undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyDown={(e) => {
          if (hasNotes && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            toggleExpand();
          }
        }}
        style={{
          cursor: hasNotes ? 'pointer' : 'default',
          display: 'flex',
          alignItems: 'center',
          padding: '8px 12px',
          borderRadius: isExpandedState && hasNotes ? '5px 5px 0 0' : '5px',
          backgroundColor: isHovered 
            ? 'var(--ifm-menu-color-background-hover)' 
            : isExpandedState 
              ? 'var(--ifm-menu-color-background-active)'
              : 'var(--ifm-color-emphasis-100)',
          fontSize: 'var(--ifm-menu-font-size)',
          fontWeight: 'normal',
          color: 'var(--ifm-font-color-base)',
          transition: 'all 0.2s ease-in-out',
          borderBottom: isExpandedState && hasNotes ? '1px solid var(--ifm-color-emphasis-200)' : 'none',
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
            transition: 'transform 0.2s ease-in-out',
            visibility: hasNotes ? 'visible' : 'hidden'
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

      {hasNotes && (
        <div 
          style={{
            maxHeight: isExpandedState ? '1000px' : '0',
            overflow: 'hidden',
            padding: isExpandedState ? '12px 15px 12px 36px' : '0 15px 0 36px',
            backgroundColor: 'var(--ifm-color-emphasis-50)',
            borderRadius: '0',
            fontSize: 'calc(var(--ifm-menu-font-size) * 0.95)',
            color: 'var(--ifm-color-emphasis-800)',
            transition: 'max-height 0.3s ease, padding 0.3s ease',
            boxSizing: 'border-box',
            opacity: isExpandedState ? 1 : 0,
            marginTop: '0',
          }}
        >
          <div className="topic-notes" style={{ margin: '4px 0' }}>
            <div className="markdown-notes">
              <Markdown
                remarkPlugins={[remarkGfm]} // Supports tables, strikethrough, etc.
                rehypePlugins={[rehypeRaw, rehypeHighlight]} // Supports HTML in markdown and code highlighting
                components={{
                  // Define custom renderers for markdown elements
                  a: ({node, ...props}) => <a {...props} target="_blank" rel="noopener noreferrer" />,                  
                }}
              >
                {topic.notes}
              </Markdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main component for the Progress Tracker
export default function ProgressTracker({ data }) {
  const isBrowser = useIsBrowser();
  const [expandAllTrigger, setExpandAllTrigger] = React.useState(false);
  const [collapseAllTrigger, setCollapseAllTrigger] = React.useState(false);
  const [expandedTopics, setExpandedTopics] = React.useState(new Set());
  const [allExpanded, setAllExpanded] = React.useState(false);
  
  // Calculate statistics about progress
  const stats = React.useMemo(() => {
    let totalTopics = 0;
    let mastered = 0;
    let completed = 0;
    let needsPractice = 0;
    let notStarted = 0;
    
    data.sections.forEach(section => {
      section.topics.forEach(topic => {
        totalTopics++;
        switch(topic.level) {
          case 'mastered': mastered++; break;
          case 'completed': completed++; break;
          case 'needs_practice': needsPractice++; break;
          default: notStarted++;
        }
      });
    });
    
    const completionPercentage = Math.round((mastered + completed) / totalTopics * 100) || 0;
    
    return {
      totalTopics,
      mastered,
      completed,
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
  
  // Update the toggle state when topics are manually expanded/collapsed
  React.useEffect(() => {
    // If there are no expandable topics, don't try to track state
    const hasExpandableTopics = data.sections.some(section => 
      section.topics.some(topic => topic.notes && topic.notes.trim() !== '')
    );
    
    if (!hasExpandableTopics) return;
    
    // Count total expandable topics and compare to expanded count
    let totalExpandableTopics = 0;
    data.sections.forEach(section => {
      section.topics.forEach(topic => {
        if (topic.notes && topic.notes.trim() !== '') {
          totalExpandableTopics++;
        }
      });
    });
    
    // Only update when we have a real difference in state (avoid loops)
    const shouldBeExpanded = expandedTopics.size === totalExpandableTopics && totalExpandableTopics > 0;
    if (shouldBeExpanded !== allExpanded) {
      setAllExpanded(shouldBeExpanded);
    }
  }, [expandedTopics, data, allExpanded]);
  
  const handleToggleAll = () => {
    if (isBrowser) {
      if (allExpanded) {
        setCollapseAllTrigger(true);
      } else {
        setExpandAllTrigger(true);
      }
      setAllExpanded(!allExpanded);
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
        backgroundColor: 'var(--ifm-background-surface-color)',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        border: '1px solid var(--ifm-color-emphasis-200)',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{
          padding: '12px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--ifm-color-emphasis-200)',
        }}>
          <h2 style={{ 
            fontSize: '1.1rem',
            fontWeight: '600',
            margin: 0,
            color: 'var(--ifm-heading-color)'
          }}>
            Progress Summary
          </h2>
          
          {/* Percentage badge */}
          <div style={{
            fontSize: '0.9rem',
            fontWeight: 'bold',
            padding: '4px 10px',
            borderRadius: '20px',
            backgroundColor: stats.completionPercentage >= 70 
              ? 'var(--ifm-color-success-contrast-background)' 
              : stats.completionPercentage >= 40 
                ? 'var(--ifm-color-info-contrast-background)' 
                : 'var(--ifm-color-warning-contrast-background)',
            color: stats.completionPercentage >= 70 
              ? 'var(--ifm-color-success)' 
              : stats.completionPercentage >= 40 
                ? 'var(--ifm-color-info)' 
                : 'var(--ifm-color-warning)',
            border: `1px solid ${
              stats.completionPercentage >= 70 
                ? 'var(--ifm-color-success)' 
                : stats.completionPercentage >= 40 
                  ? 'var(--ifm-color-info)' 
                  : 'var(--ifm-color-warning)'
            }`,
          }}>
            {stats.completionPercentage}% Complete
          </div>
        </div>
        
        {/* Progress bar */}
        <div style={{ 
          height: '3px',
          backgroundColor: 'var(--ifm-color-emphasis-200)',
          display: 'flex',
        }}>
          <div style={{ 
            width: `${(stats.mastered / stats.totalTopics) * 100}%`,
            backgroundColor: 'var(--ifm-color-success)',
            height: '100%',
            transition: 'width 0.5s ease-in-out'
          }}></div>
          <div style={{ 
            width: `${(stats.completed / stats.totalTopics) * 100}%`,
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
        
        {/* Stats grid - more compressed layout */}
        <div style={{
          padding: '12px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
        }}>
          {/* Topics */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px 12px',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            borderRadius: '5px',
            minWidth: '80px',
            flex: '1 0 auto',
            maxWidth: '120px',
            border: '1px solid var(--ifm-color-emphasis-200)',
          }}>
            <span style={{ 
              fontSize: '1.6rem', 
              fontWeight: 'bold',
              color: 'var(--ifm-heading-color)',
              lineHeight: '1.2',
            }}>
              {stats.totalTopics}
            </span>
            <span style={{ 
              fontSize: '0.75rem',
              color: 'var(--ifm-color-emphasis-700)',
              marginTop: '2px',
            }}>
              Topics
            </span>
          </div>
          
          {/* Not Started */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px 12px',
            backgroundColor: 'var(--ifm-color-emphasis-100)',
            borderRadius: '5px',
            minWidth: '80px',
            flex: '1 0 auto',
            maxWidth: '120px',
            border: '1px solid var(--ifm-color-emphasis-200)',
          }}>
            <span style={{ 
              fontSize: '1.6rem', 
              fontWeight: 'bold',
              color: 'var(--ifm-color-emphasis-600)',
              lineHeight: '1.2',
            }}>
              {stats.notStarted}
            </span>
            <span style={{ 
              fontSize: '0.75rem',
              color: 'var(--ifm-color-emphasis-700)',
              marginTop: '2px',
            }}>
              Not Started
            </span>
          </div>
          
          {/* Completed */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px 12px',
            backgroundColor: 'var(--ifm-color-info-contrast-background)',
            borderRadius: '5px',
            minWidth: '80px',
            flex: '1 0 auto',
            maxWidth: '120px',
            border: '1px solid var(--ifm-color-info)',
          }}>
            <span style={{ 
              fontSize: '1.6rem', 
              fontWeight: 'bold',
              color: 'var(--ifm-color-info)',
              lineHeight: '1.2',
            }}>
              {stats.completed}
            </span>
            <span style={{ 
              fontSize: '0.75rem',
              color: 'var(--ifm-color-emphasis-700)',
              marginTop: '2px',
            }}>
              Completed
            </span>
          </div>
          
          {/* Mastered */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px 12px',
            backgroundColor: 'var(--ifm-color-success-contrast-background)',
            borderRadius: '5px',
            minWidth: '80px',
            flex: '1 0 auto',
            maxWidth: '120px',
            border: '1px solid var(--ifm-color-success)',
          }}>
            <span style={{ 
              fontSize: '1.6rem', 
              fontWeight: 'bold',
              color: 'var(--ifm-color-success)',
              lineHeight: '1.2',
            }}>
              {stats.mastered}
            </span>
            <span style={{ 
              fontSize: '0.75rem',
              color: 'var(--ifm-color-emphasis-700)',
              marginTop: '2px',
            }}>
              Mastered
            </span>
          </div>
          
          {/* Needs Practice */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px 12px',
            backgroundColor: 'var(--ifm-color-warning-contrast-background)',
            borderRadius: '5px',
            minWidth: '80px',
            flex: '1 0 auto',
            maxWidth: '120px',
            border: '1px solid var(--ifm-color-warning)',
          }}>
            <span style={{ 
              fontSize: '1.6rem', 
              fontWeight: 'bold',
              color: 'var(--ifm-color-warning)',
              lineHeight: '1.2',
            }}>
              {stats.needsPractice}
            </span>
            <span style={{ 
              fontSize: '0.75rem',
              color: 'var(--ifm-color-emphasis-700)',
              marginTop: '2px',
            }}>
              Needs Practice
            </span>
          </div>
        </div>
        
        {/* Legend */}
        <div style={{
          padding: '8px 16px 12px',
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          fontSize: '0.7rem',
          color: 'var(--ifm-color-emphasis-600)',
          flexWrap: 'wrap',
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
            <span>Completed</span>
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
          <ButtonWithHover 
            onClick={handleToggleAll}
            style={{
              minWidth: '110px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {allExpanded ? (
              <>
                Collapse All
              </>
            ) : (
              <>
                Expand All
              </>
            )}
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