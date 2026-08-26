import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = ({ onSelectProject }) => {
  const { projects } = portfolioData;
  const [viewAll, setViewAll] = useState(false);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <h2 className="section-title">
              <span className="dim">My</span> <span>Projects</span>
            </h2>
            <p className="section-subtitle">
              A showcase of my recent work - from e-commerce platforms to SaaS applications. Each project is built with modern <strong>technologies</strong> and attention to user experience.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              onClick={() => setViewAll(!viewAll)}
              className="btn-secondary"
              style={{
                fontSize: '0.875rem',
                padding: '0.5rem 1.15rem',
                gap: '0.4rem'
              }}
            >
              <span>{viewAll ? 'Carousel View' : 'View all projects'}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div style={{ position: 'relative' }}>
          
          {/* Left / Right Carousel Controls (shown when not viewAll) */}
          {!viewAll && (
            <>
              <button
                onClick={() => scroll('left')}
                className="carousel-control-btn left"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="carousel-control-btn right"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Cards List / Slider */}
          <div
            ref={scrollRef}
            className={`projects-track ${viewAll ? 'grid-view' : 'slider-view'}`}
          >
            {projects.map((project) => (
              <div key={project.id} className="project-card glass-card">
                
                {/* Screenshot Area */}
                <div className="project-card-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-img"
                  />
                  {/* Number Badge */}
                  <div className="project-number-badge">
                    {project.number}
                  </div>
                </div>

                {/* Content Area */}
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-subtitle">{project.subtitle}</p>
                  
                  <p className="project-card-desc">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="project-card-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div style={{ marginTop: 'auto', paddingTop: '1.25rem' }}>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="btn-secondary project-view-btn"
                    >
                      <span>View Case Study</span>
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        /* Carousel Track */
        .projects-track.slider-view {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 0.5rem 0.25rem 1.5rem 0.25rem;
          scrollbar-width: none;
        }

        .projects-track.slider-view::-webkit-scrollbar {
          display: none;
        }

        .projects-track.grid-view {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.75rem;
        }

        /* Carousel Navigation Buttons */
        .carousel-control-btn {
          position: absolute;
          top: 45%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: var(--transition-smooth);
          backdrop-filter: blur(10px);
          box-shadow: var(--glass-shadow);
        }

        .carousel-control-btn:hover {
          background: var(--bg-card-hover);
          border-color: var(--border-focus);
          color: var(--accent-purple);
          transform: translateY(-50%) scale(1.08);
        }

        .carousel-control-btn.left {
          left: -22px;
        }

        .carousel-control-btn.right {
          right: -22px;
        }

        /* Card Styling */
        .project-card {
          flex: 0 0 285px;
          max-width: 320px;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          border-radius: 18px;
          overflow: hidden;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--glass-shadow);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .grid-view .project-card {
          flex: 1 1 280px;
          max-width: 100%;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-focus);
          box-shadow: var(--glow-shadow);
        }

        /* Image Wrap */
        .project-card-image-wrap {
          position: relative;
          width: 100%;
          height: 165px;
          background: var(--image-bg);
          overflow: hidden;
          border-bottom: 1px solid var(--border-subtle);
        }

        .project-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-card-img {
          transform: scale(1.05);
        }

        .project-number-badge {
          position: absolute;
          bottom: 10px;
          left: 12px;
          background: var(--accent-purple);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          box-shadow: 0 4px 10px rgba(124, 58, 237, 0.4);
        }

        /* Card Body */
        .project-card-body {
          padding: 1.25rem 1.25rem 1.4rem 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin-bottom: 0.2rem;
        }

        .project-card-subtitle {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 0.85rem;
        }

        .project-card-desc {
          font-size: 0.865rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin-bottom: 1.1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Tags */
        .project-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .project-tag {
          font-size: 0.72rem;
          font-weight: 500;
          background: var(--bg-pill);
          color: var(--text-secondary);
          border: 1px solid var(--border-subtle);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
        }

        .project-view-btn {
          width: 100%;
          justify-content: center;
          font-size: 0.825rem;
          padding: 0.5rem 1rem;
          background: var(--bg-pill);
          color: var(--text-primary);
          border: 1px solid var(--border-subtle);
        }

        .project-view-btn:hover {
          background: var(--bg-pill-hover);
          border-color: var(--border-focus);
          color: var(--accent-purple);
        }

        @media (max-width: 768px) {
          .carousel-control-btn {
            display: none;
          }
          .project-card {
            flex: 0 0 85%;
          }
        }
      `}</style>
    </section>
  );
};
