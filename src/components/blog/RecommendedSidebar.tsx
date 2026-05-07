"use client";

import Link from "next/link";
import { BLOGS } from "@/app/blog/data";

interface RecommendedSidebarProps {
  currentPostSlug: string;
  currentCategory: string;
  onPostClick?: (post: any) => void;
}

export default function RecommendedSidebar({ currentPostSlug, currentCategory, onPostClick }: RecommendedSidebarProps) {
  // Filter logic: same category first, exclude current post
  const sameCategoryPosts = BLOGS.filter(
    post => post.category === currentCategory && post.slug !== currentPostSlug
  );
  
  // Get recent posts (excluding current and same category posts already selected)
  const otherPosts = BLOGS.filter(
    post => post.slug !== currentPostSlug && !sameCategoryPosts.some(same => same.id === post.id)
  ).slice(0, 5);
  
  // Combine: same category first, fill with recent if needed
  const recommendedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 5);

  return (
    <aside className="recommended-sidebar" style={{
      position: 'fixed',
      top: '100px',
      right: '20px',
      width: '320px',
      height: 'fit-content',
      maxHeight: 'calc(100vh - 200px)',
      overflowY: 'auto',
      overflowX: 'hidden',
      zIndex: 10,
      background: 'rgba(202, 255, 74, 0.02)',
      border: '1px solid rgba(202, 255, 74, 0.15)',
      borderRadius: '12px',
      padding: '24px',
      backdropFilter: 'blur(10px)'
    }}>
      {/* Header */}
      <div className="recommended-header" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '24px'
      }}>
        <div style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(to right, transparent, #CAFF4A, transparent)'
        }} />
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '15px',
          letterSpacing: '0.2em',
          color: '#CAFF4A',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          textAlign: 'center'
        }}>
          RECOMMENDED
        </div>
        <div style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(to right, transparent, #CAFF4A, transparent)'
        }} />
      </div>
      
      <p style={{
        fontSize: '16px',
        color: 'rgba(255,255,255,0.45)',
        marginBottom: '20px',
        textAlign: 'center',
        fontFamily: 'var(--font-body)'
      }}>
        Based on what you're reading
      </p>

      {/* Recommended Cards */}
      <div className="recommended-cards" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {recommendedPosts.map((post, index) => (
          <div
            key={post.id}
            className="recommended-card"
            style={{
              display: 'block',
              padding: '20px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              animation: `fadeUp 0.4s ease forwards`,
              animationDelay: `${index * 75}ms`,
              opacity: 0,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(202,255,74,0.35)';
              e.currentTarget.style.background = 'rgba(202,255,74,0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            }}
            onClick={() => onPostClick && onPostClick(post)}
          >
            {/* Category Tag */}
            <div style={{
              display: 'inline-block',
              padding: '6px 12px',
              backgroundColor: post.tagColor,
              color: '#0E0D0A',
              fontSize: '12px',
              fontWeight: '600',
              borderRadius: '4px',
              marginBottom: '12px',
              fontFamily: "'DM Mono', monospace",
              letterSpacing: '0.05em'
            }}>
              {post.category}
            </div>
            
            {/* Title */}
            <h3 style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '1.4',
              marginBottom: '12px',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontFamily: 'var(--font-body)'
            }}>
              {post.title}
            </h3>
            
            {/* Meta */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.45)',
              fontFamily: '"DM Mono", monospace'
            }}>
              <span>{post.readTime}</span>
              <span>{post.date}</span>
            </div>
            
            {/* Read Link */}
            <div style={{
              color: '#CAFF4A',
              fontSize: '16px',
              fontWeight: '500',
              marginTop: '12px',
              fontFamily: 'var(--font-body)',
              transition: 'opacity 0.2s ease'
            }}>
              Read →
            </div>
          </div>
        ))}
      </div>

      {/* More in Category Link */}
      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <Link
          href={`/blog?category=${currentCategory.toLowerCase().replace(' ', '-')}`}
          style={{
            color: '#CAFF4A',
            fontSize: '16px',
            fontFamily: "'DM Mono', monospace",
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          More {currentCategory} articles →
        </Link>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { 
            opacity: 0; 
            transform: translateY(8px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        /* Custom Lime Scrollbar */
        .recommended-sidebar::-webkit-scrollbar {
          width: 8px;
        }
        
        .recommended-sidebar::-webkit-scrollbar-track {
          background: rgba(202, 255, 74, 0.05);
          border-radius: 4px;
        }
        
        .recommended-sidebar::-webkit-scrollbar-thumb {
          background: rgba(202, 255, 74, 0.3);
          border-radius: 4px;
          transition: background 0.3s ease;
        }
        
        .recommended-sidebar::-webkit-scrollbar-thumb:hover {
          background: rgba(202, 255, 74, 0.5);
        }
        
        /* Firefox scrollbar */
        .recommended-sidebar {
          scrollbar-width: thin;
          scrollbar-color: rgba(202, 255, 74, 0.3) rgba(202, 255, 74, 0.05);
        }
        
                
        @media (max-width: 1024px) {
          .recommended-sidebar {
            display: none !important;
          }
        }
        
        @media (min-width: 1025px) {
          .recommended-sidebar {
            position: fixed !important;
            top: 100px !important;
            right: 20px !important;
            transition: all 0.3s ease !important;
          }
          
          .recommended-sidebar:hover {
            border-color: rgba(202, 255, 74, 0.35) !important;
            background: rgba(202, 255, 74, 0.04) !important;
            box-shadow: 0 0 20px rgba(202, 255, 74, 0.1) !important;
          }
        }
      `}</style>
    </aside>
  );
}
