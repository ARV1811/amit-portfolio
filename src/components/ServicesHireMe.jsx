import React, { useState } from 'react';
import {
  Layers, Server, Database, Wrench, Network,
  ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Clock,
  ShieldCheck, Check, Copy, Send, Calendar, Users2,
  Cpu, FolderGit2, LifeBuoy, Phone, Mail, ExternalLink,
  ChevronRight, AlertCircle, Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const ServicesHireMe = ({ onOpenContact, onShowToast }) => {
  const { services, workflowSteps, whyWorkWithMe, personal } = portfolioData;

  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);
  const [selectedServiceId, setSelectedServiceId] = useState(services[0]?.id || 'custom-apps');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceId: services[0]?.id || 'custom-apps',
    projectScope: 'New Custom Application',
    timeline: 'Within 1 Month',
    budget: '$1,000 - $3,000',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const getServiceIcon = (name, size = 22) => {
    switch (name) {
      case 'Layers': return <Layers size={size} />;
      case 'Server': return <Server size={size} />;
      case 'Database': return <Database size={size} />;
      case 'Wrench': return <Wrench size={size} />;
      case 'Network': return <Network size={size} />;
      default: return <Layers size={size} />;
    }
  };

  const getPillarIcon = (name) => {
    switch (name) {
      case 'Users2': return <Users2 size={22} />;
      case 'Cpu': return <Cpu size={22} />;
      case 'ShieldCheck': return <ShieldCheck size={22} />;
      case 'FolderGit2': return <FolderGit2 size={22} />;
      case 'LifeBuoy': return <LifeBuoy size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  const handleSelectServiceForForm = (serviceId) => {
    setSelectedServiceId(serviceId);
    setFormData((prev) => ({ ...prev, serviceId }));
    
    // Smooth scroll down to enquiry form
    const formEl = document.getElementById('project-enquiry-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name or organization.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errors.email = 'Please provide a valid email address so I can respond.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errors.message = 'Please provide a brief description of what you are looking to build (minimum 15 characters).';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Confetti celebration
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#a855f7', '#10b981', '#38bdf8', '#f59e0b', '#ec4899']
    });

    setFormSubmitted(true);
    onShowToast?.('Project enquiry prepared successfully!');
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
    onShowToast?.('Email address copied to clipboard!');
  };

  const generateMailtoUrl = () => {
    const serviceObj = services.find((s) => s.id === formData.serviceId);
    const serviceName = serviceObj ? serviceObj.title : formData.serviceId;
    const subject = encodeURIComponent(`Project Inquiry: ${serviceName} - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Amit,\n\nI have a project opportunity and would like to discuss it with you.\n\n` +
      `• Project Type: ${serviceName}\n` +
      `• Scope: ${formData.projectScope}\n` +
      `• Desired Timeline: ${formData.timeline}\n` +
      `• Estimated Budget: ${formData.budget}\n` +
      `• Client Name: ${formData.name}\n` +
      `• Client Email: ${formData.email}\n\n` +
      `Project Brief:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    return `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const activeWorkflow = workflowSteps[activeWorkflowIndex] || workflowSteps[0];

  return (
    <section id="services" className="services-hire-section" style={{ position: 'relative' }}>
      {/* Anchor for both #services and #hire-me */}
      <div id="hire-me" style={{ position: 'absolute', top: '-90px' }} />

      {/* Ambient background glows */}
      <div className="services-ambient-glow" />

      <div className="container">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER: CLIENT-FOCUSED VALUE PROPOSITION */}
        {/* ========================================================================= */}
        <div className="section-header services-section-header">
          <div className="freelance-badge-pill" data-cursor-label="FREELANCE">
            <span className="live-status-dot" />
            <span>Available for Freelance & Contract Projects</span>
          </div>

          <h2 className="section-title">
            What I Can Build <span className="gradient-text-purple">For Your Business</span>
          </h2>

          <p className="section-subtitle services-lead-text">
            I partner directly with founders, business owners, and tech leads to architect, build, and scale
            resilient software—from enterprise business management portals to high-throughput ASP.NET Core APIs
            and mission-critical SQL Server databases.
          </p>

          {/* Quick value trust bar */}
          <div className="services-trust-row">
            <div className="trust-pill">
              <Zap size={14} className="text-emerald-400" />
              <span>Direct Developer Communication</span>
            </div>
            <div className="trust-pill">
              <ShieldCheck size={14} className="text-purple-400" />
              <span>100% Code & IP Ownership</span>
            </div>
            <div className="trust-pill">
              <Clock size={14} className="text-blue-400" />
              <span>Milestone Delivery & Staging Previews</span>
            </div>
            <div className="trust-pill">
              <LifeBuoy size={14} className="text-amber-400" />
              <span>30-Day Post-Launch Warranty</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. SERVICES GRID: 5 CORE PROBLEM-SOLVING SPECIALTIES */}
        {/* ========================================================================= */}
        <div className="services-grid-wrapper">
          <div className="services-grid">
            {services.map((service, index) => {
              const isSelected = selectedServiceId === service.id;
              return (
                <TiltCard key={service.id} maxTilt={6} className="service-tilt-card">
                  <div
                    className={`service-card glass-card ${isSelected ? 'service-card-selected' : ''}`}
                    onClick={() => setSelectedServiceId(service.id)}
                    data-cursor-label="SERVICE"
                  >
                    {/* Top Meta Bar */}
                    <div className="service-card-header">
                      <div className="service-icon-box" style={{ color: service.color, background: `${service.color}15`, borderColor: `${service.color}40` }}>
                        {getServiceIcon(service.icon)}
                      </div>
                      <div className="service-badge-tag" style={{ borderColor: `${service.color}35`, color: service.color }}>
                        {service.badge}
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-subtitle">{service.subtitle}</p>

                    {/* Problem vs Solution Split */}
                    <div className="service-problem-solution-box">
                      <div className="sps-row sps-problem">
                        <span className="sps-tag sps-tag-problem">The Challenge</span>
                        <p className="sps-text">{service.problem}</p>
                      </div>
                      <div className="sps-row sps-solution">
                        <span className="sps-tag sps-tag-solution">The Solution</span>
                        <p className="sps-text">{service.solution}</p>
                      </div>
                    </div>

                    {/* Concrete Client Deliverables */}
                    <div className="service-deliverables">
                      <span className="deliverables-heading">Key Deliverables:</span>
                      <ul className="deliverables-list">
                        {service.deliverables.map((item, dIndex) => (
                          <li key={dIndex} className="deliverable-item">
                            <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" style={{ marginTop: '3px' }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="service-tech-tags">
                      {service.techStack.map((tech) => (
                        <span key={tech} className="service-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="service-action-wrap">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectServiceForForm(service.id);
                        }}
                        className="service-select-btn"
                        data-cursor-label="START"
                      >
                        <span>Start this project</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>

                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE HOW I WORK FLOW: DISCOVER -> PLAN -> DEVELOP -> TEST -> DEPLOY -> SUPPORT */}
        {/* ========================================================================= */}
        <div className="workflow-section-container">
          <div className="section-header-compact">
            <span className="workflow-eyebrow">PREDICTABLE & TRANSPARENT PROCESS</span>
            <h3 className="workflow-title">
              How I Work: <span className="gradient-text-purple">From Concept to Deployment</span>
            </h3>
            <p className="workflow-sub">
              No black boxes. You get full visibility with iterative milestones, private staging links,
              and direct communication every step of the way.
            </p>
          </div>

          {/* Stepper Tabs Bar */}
          <div className="workflow-stepper-bar">
            {workflowSteps.map((step, idx) => {
              const isActive = activeWorkflowIndex === idx;
              const isPassed = activeWorkflowIndex > idx;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveWorkflowIndex(idx)}
                  className={`workflow-step-btn ${isActive ? 'step-active' : ''} ${isPassed ? 'step-passed' : ''}`}
                >
                  <div className="step-number-ring">
                    {isPassed ? <Check size={12} className="step-check-icon" /> : <span>{step.step}</span>}
                  </div>
                  <span className="step-label">{step.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Spotlight Card */}
          <div className="workflow-active-card glass-card">
            <div className="active-stage-header">
              <div className="active-stage-title-wrap">
                <span className="active-stage-pill">
                  Stage {activeWorkflow.step} of 06 · {activeWorkflow.name}
                </span>
                <h4 className="active-stage-heading">{activeWorkflow.title}</h4>
                <p className="active-stage-tagline">{activeWorkflow.tagline}</p>
              </div>

              <div className="active-stage-meta-badges">
                <div className="stage-meta-badge">
                  <Clock size={13} className="text-purple-400" />
                  <span>Timeframe: <strong>{activeWorkflow.timeframe}</strong></span>
                </div>
                <div className="stage-meta-badge">
                  <Users2 size={13} className="text-blue-400" />
                  <span>Client Role: <strong>{activeWorkflow.clientRole}</strong></span>
                </div>
              </div>
            </div>

            <div className="active-stage-body">
              <div className="active-stage-deliverables">
                <span className="stage-deliverables-title">Stage Deliverables & Checkpoints:</span>
                <div className="stage-deliverables-grid">
                  {activeWorkflow.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="stage-deliverable-item">
                      <div className="stage-check-box">
                        <Check size={14} className="text-emerald-400" />
                      </div>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="active-stage-highlight-box">
                <Sparkles size={16} className="text-amber-400 flex-shrink-0" />
                <p>
                  <strong>Why it matters:</strong> {activeWorkflow.highlight}
                </p>
              </div>
            </div>

            {/* Stage Navigation Arrows */}
            <div className="workflow-nav-controls">
              <button
                type="button"
                onClick={() => setActiveWorkflowIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeWorkflowIndex === 0}
                className="btn-workflow-nav"
              >
                <ArrowLeft size={14} />
                <span>Previous Stage</span>
              </button>

              <div className="workflow-dots-indicator">
                {workflowSteps.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setActiveWorkflowIndex(i)}
                    className={`workflow-indicator-dot ${i === activeWorkflowIndex ? 'dot-active' : ''}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveWorkflowIndex((prev) => Math.min(workflowSteps.length - 1, prev + 1))}
                disabled={activeWorkflowIndex === workflowSteps.length - 1}
                className="btn-workflow-nav"
              >
                <span>Next Stage</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. WHY WORK WITH ME (5 CLIENT PILLARS) */}
        {/* ========================================================================= */}
        <div className="why-work-section">
          <div className="section-header-compact">
            <span className="workflow-eyebrow">THE FREELANCE ADVANTAGE</span>
            <h3 className="workflow-title">
              Why Work With Me <span className="gradient-text-purple">Over Agencies or Marketplaces</span>
            </h3>
            <p className="workflow-sub">
              Enjoy the speed and flexibility of an independent engineer combined with the reliability and standards of enterprise software development.
            </p>
          </div>

          <div className="why-work-grid">
            {whyWorkWithMe.map((pillar) => (
              <div key={pillar.id} className="why-work-card glass-card">
                <div className="why-icon-box" style={{ color: pillar.color, background: `${pillar.color}15`, borderColor: `${pillar.color}40` }}>
                  {getPillarIcon(pillar.icon)}
                </div>
                <h4 className="why-card-title">{pillar.title}</h4>
                <span className="why-card-subtitle">{pillar.subtitle}</span>
                <p className="why-card-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. HAVE A PROJECT IN MIND? / ENQUIRY FORM CTA */}
        {/* ========================================================================= */}
        <div id="project-enquiry-form" className="enquiry-section-wrapper">
          <div className="enquiry-card glass-card">
            
            {/* Ambient Background Gradient */}
            <div className="enquiry-card-glow" />

            <div className="enquiry-layout-grid">
              
              {/* Left Column: Context & Contact Shortcuts */}
              <div className="enquiry-info-pane">
                <div className="enquiry-lead-badge">
                  <Sparkles size={13} className="text-purple-400" />
                  <span>Start a Project</span>
                </div>

                <h3 className="enquiry-heading">
                  Have a Project in Mind? <br />
                  <span className="gradient-text-purple">Let's Discuss Solutions.</span>
                </h3>

                <p className="enquiry-intro-text">
                  Share a brief outline of the problem you're looking to solve, your desired timeline,
                  or the software system you need engineered. I typically review and reply with actionable feedback
                  within <strong>4–12 hours</strong>.
                </p>

                {/* Direct Contact Shortcuts */}
                <div className="direct-channels-list">
                  <div className="direct-channel-item" onClick={copyEmailToClipboard} title="Click to copy email">
                    <div className="channel-icon-circle">
                      <Mail size={16} />
                    </div>
                    <div className="channel-info">
                      <span className="channel-label">Email Amit Directly</span>
                      <span className="channel-value">{personal.email}</span>
                    </div>
                    <button type="button" className="btn-copy-chip">
                      {copiedEmail ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  {personal.phone && (
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="direct-channel-item"
                    >
                      <div className="channel-icon-circle">
                        <Phone size={16} />
                      </div>
                      <div className="channel-info">
                        <span className="channel-label">Direct Phone / WhatsApp</span>
                        <span className="channel-value">{personal.phone}</span>
                      </div>
                      <ExternalLink size={14} className="channel-arrow" />
                    </a>
                  )}

                  <div className="guarantee-box">
                    <ShieldCheck size={18} className="text-emerald-400 flex-shrink-0" />
                    <p className="guarantee-text">
                      <strong>NDA Friendly & Zero Pressure:</strong> Your intellectual property, ideas, and business logic are kept strictly confidential.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Enquiry Form */}
              <div className="enquiry-form-pane">
                {formSubmitted ? (
                  /* Success Confirmation State */
                  <div className="enquiry-success-card">
                    <div className="success-icon-badge">
                      <CheckCircle2 size={36} className="text-emerald-400" />
                    </div>
                    <h4 className="success-title">Thank You, {formData.name || 'Friend'}!</h4>
                    <p className="success-message">
                      Your project brief has been structured. To ensure instant delivery to Amit's inbox, you can
                      launch your email client directly or copy your brief below.
                    </p>

                    <div className="enquiry-summary-box">
                      <div className="summary-row">
                        <span className="summary-label">Selected Service:</span>
                        <span className="summary-val">{services.find(s => s.id === formData.serviceId)?.title || formData.serviceId}</span>
                      </div>
                      <div className="summary-row">
                        <span className="summary-label">Target Timeline:</span>
                        <span className="summary-val">{formData.timeline}</span>
                      </div>
                      <div className="summary-row">
                        <span className="summary-label">Budget Range:</span>
                        <span className="summary-val">{formData.budget}</span>
                      </div>
                    </div>

                    <div className="success-actions-row">
                      <a
                        href={generateMailtoUrl()}
                        className="btn-primary"
                        style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <Send size={15} />
                        <span>Send Pre-filled Email</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          const brief = `Project: ${services.find(s => s.id === formData.serviceId)?.title}\nScope: ${formData.projectScope}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\nClient: ${formData.name} (${formData.email})\n\nBrief:\n${formData.message}`;
                          navigator.clipboard.writeText(brief);
                          onShowToast?.('Brief copied to clipboard!');
                        }}
                        className="btn-secondary"
                      >
                        <Copy size={14} />
                        <span>Copy Brief</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData((prev) => ({ ...prev, message: '' }));
                        }}
                        className="btn-workflow-nav"
                        style={{ border: 'none', background: 'transparent', textDecoration: 'underline' }}
                      >
                        Send another note
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Active Enquiry Form */
                  <form onSubmit={handleFormSubmit} className="enquiry-form">
                    
                    {/* 1. Service Needed Chips */}
                    <div className="form-group">
                      <label className="form-label">
                        1. What solution are you looking to build?
                      </label>
                      <div className="form-service-chips">
                        {services.map((s) => {
                          const isPicked = formData.serviceId === s.id;
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, serviceId: s.id }));
                                setSelectedServiceId(s.id);
                              }}
                              className={`service-chip-btn ${isPicked ? 'chip-picked' : ''}`}
                            >
                              <span>{s.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Client Details: Name & Email */}
                    <div className="form-row-two-col">
                      <div className="form-group">
                        <label className="form-label" htmlFor="client-name">
                          Your Name / Company <span className="text-purple-400">*</span>
                        </label>
                        <input
                          id="client-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, name: e.target.value }));
                            if (formErrors.name) setFormErrors((prev) => ({ ...prev, name: null }));
                          }}
                          placeholder="e.g. Alex Morgan (Acme Corp)"
                          className={`form-input ${formErrors.name ? 'input-error' : ''}`}
                        />
                        {formErrors.name && (
                          <span className="form-error-msg">
                            <AlertCircle size={12} /> {formErrors.name}
                          </span>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="client-email">
                          Work Email <span className="text-purple-400">*</span>
                        </label>
                        <input
                          id="client-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData((prev) => ({ ...prev, email: e.target.value }));
                            if (formErrors.email) setFormErrors((prev) => ({ ...prev, email: null }));
                          }}
                          placeholder="alex@acmecorp.com"
                          className={`form-input ${formErrors.email ? 'input-error' : ''}`}
                        />
                        {formErrors.email && (
                          <span className="form-error-msg">
                            <AlertCircle size={12} /> {formErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* 3. Timeline & Budget Selectors */}
                    <div className="form-row-two-col">
                      <div className="form-group">
                        <label className="form-label" htmlFor="client-timeline">
                          Estimated Timeline
                        </label>
                        <select
                          id="client-timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData((prev) => ({ ...prev, timeline: e.target.value }))}
                          className="form-input form-select"
                        >
                          <option value="Urgent (< 2 weeks)">Urgent (&lt; 2 weeks)</option>
                          <option value="Within 1 Month">Within 1 Month</option>
                          <option value="1 - 3 Months">1 – 3 Months</option>
                          <option value="Flexible / Long-term">Flexible / Long-term</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="client-budget">
                          Estimated Budget
                        </label>
                        <select
                          id="client-budget"
                          value={formData.budget}
                          onChange={(e) => setFormData((prev) => ({ ...prev, budget: e.target.value }))}
                          className="form-input form-select"
                        >
                          <option value="< $1,000">&lt; $1,000</option>
                          <option value="$1,000 - $3,000">$1,000 – $3,000</option>
                          <option value="$3,000 - $7,000">$3,000 – $7,000</option>
                          <option value="$7,000+">$7,000+</option>
                          <option value="Open / To Discuss">Open / To Discuss</option>
                        </select>
                      </div>
                    </div>

                    {/* 4. Project Brief */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="client-message">
                        Project Overview & Key Requirements <span className="text-purple-400">*</span>
                      </label>
                      <textarea
                        id="client-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, message: e.target.value }));
                          if (formErrors.message) setFormErrors((prev) => ({ ...prev, message: null }));
                        }}
                        placeholder="Briefly describe what you need built, any existing systems you have, or specific problems to solve..."
                        className={`form-input form-textarea ${formErrors.message ? 'input-error' : ''}`}
                      />
                      {formErrors.message && (
                        <span className="form-error-msg">
                          <AlertCircle size={12} /> {formErrors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit CTA Button */}
                    <button
                      type="submit"
                      className="btn-primary enquiry-submit-btn"
                      data-cursor-label="SUBMIT"
                    >
                      <Send size={16} />
                      <span>Submit Project Enquiry</span>
                      <ArrowRight size={16} />
                    </button>

                  </form>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>

      <style>{`
        .services-hire-section {
          padding: 6rem 0 5rem 0;
          position: relative;
        }

        .services-ambient-glow {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 65%);
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }

        .services-section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 3.5rem;
          position: relative;
          z-index: 1;
        }

        .freelance-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          color: #34d399;
          padding: 0.35rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .live-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: pulseBeacon 2s infinite;
        }

        .services-lead-text {
          max-width: 780px;
          margin: 0 auto 1.75rem auto;
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .services-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: var(--bg-pill);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.785rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        /* Services Grid */
        .services-grid-wrapper {
          position: relative;
          z-index: 1;
          margin-bottom: 5.5rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 1.75rem;
        }

        .service-tilt-card {
          height: 100%;
        }

        .service-card {
          padding: 2rem;
          border-radius: var(--radius-lg);
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          position: relative;
          box-shadow: var(--glass-shadow);
          cursor: pointer;
        }

        .service-card:hover {
          border-color: var(--border-focus);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(147, 51, 234, 0.25);
        }

        .service-card-selected {
          border-color: rgba(168, 85, 247, 0.7);
          box-shadow: 0 0 30px -5px rgba(147, 51, 234, 0.35);
        }

        .service-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .service-icon-box {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon-box {
          transform: scale(1.08) rotate(3deg);
        }

        .service-badge-tag {
          font-size: 0.725rem;
          font-weight: 700;
          font-family: var(--font-mono);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid;
          background: rgba(255, 255, 255, 0.03);
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
          line-height: 1.35;
        }

        .service-subtitle {
          font-size: 0.885rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }

        /* Problem & Solution block */
        .service-problem-solution-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .sps-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .sps-tag {
          font-size: 0.675rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          font-family: var(--font-mono);
          display: inline-block;
        }

        .sps-tag-problem {
          color: #f87171;
        }

        .sps-tag-solution {
          color: #34d399;
        }

        .sps-text {
          font-size: 0.825rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        /* Deliverables */
        .service-deliverables {
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }

        .deliverables-heading {
          display: block;
          font-size: 0.775rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          color: var(--text-muted);
          margin-bottom: 0.65rem;
        }

        .deliverables-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .deliverable-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.825rem;
          color: var(--text-primary);
          line-height: 1.45;
        }

        /* Tech Pills */
        .service-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .service-tech-pill {
          font-size: 0.725rem;
          font-family: var(--font-mono);
          padding: 0.2rem 0.55rem;
          background: var(--bg-pill);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          color: var(--text-secondary);
        }

        .service-action-wrap {
          margin-top: auto;
        }

        .service-select-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: rgba(147, 51, 234, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.35);
          color: #c084fc;
          padding: 0.65rem 1rem;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .service-select-btn:hover {
          background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);
          border-color: transparent;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4);
        }

        /* ========================================================================= */
        /* 3. WORKFLOW STAGES STYLES */
        /* ========================================================================= */
        .workflow-section-container {
          position: relative;
          z-index: 1;
          margin-bottom: 6rem;
        }

        .section-header-compact {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 2.5rem auto;
        }

        .workflow-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          font-family: var(--font-mono);
          color: var(--accent-purple-light);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .workflow-title {
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .workflow-sub {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .workflow-stepper-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          padding: 0.6rem;
          margin-bottom: 1.5rem;
          position: relative;
          box-shadow: var(--glass-shadow);
          overflow-x: auto;
        }

        .workflow-step-btn {
          flex: 1;
          min-width: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.65rem 0.85rem;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 12px;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .step-number-ring {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .workflow-step-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.03);
        }

        .step-active {
          background: rgba(147, 51, 234, 0.15) !important;
          border-color: rgba(168, 85, 247, 0.4) !important;
          color: #ffffff !important;
        }

        .step-active .step-number-ring {
          background: var(--accent-purple);
          border-color: var(--accent-purple-light);
          color: #ffffff;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
        }

        .step-passed .step-number-ring {
          background: rgba(16, 185, 129, 0.15);
          border-color: rgba(16, 185, 129, 0.4);
          color: #34d399;
        }

        .workflow-active-card {
          padding: 2.25rem;
          border-radius: 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--glass-shadow);
        }

        .active-stage-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 1.75rem;
          flex-wrap: wrap;
        }

        .active-stage-pill {
          display: inline-block;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          font-weight: 700;
          color: var(--accent-purple-light);
          background: rgba(168, 85, 247, 0.12);
          border: 1px solid rgba(168, 85, 247, 0.3);
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.5rem;
        }

        .active-stage-heading {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .active-stage-tagline {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.55;
        }

        .active-stage-meta-badges {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stage-meta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.4rem 0.85rem;
          border-radius: 10px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .stage-meta-badge strong {
          color: var(--text-primary);
        }

        .active-stage-body {
          margin-bottom: 1.75rem;
        }

        .stage-deliverables-title {
          display: block;
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          margin-bottom: 0.85rem;
        }

        .stage-deliverables-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .stage-deliverable-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        .stage-check-box {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background: rgba(16, 185, 129, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .active-stage-highlight-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: 12px;
          padding: 0.85rem 1.25rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .active-stage-highlight-box strong {
          color: #fbbf24;
        }

        .workflow-nav-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-subtle);
        }

        .btn-workflow-nav {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-primary);
          font-size: 0.825rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-workflow-nav:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--border-focus);
        }

        .btn-workflow-nav:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .workflow-dots-indicator {
          display: flex;
          gap: 0.5rem;
        }

        .workflow-indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .dot-active {
          width: 22px;
          border-radius: 4px;
          background: var(--accent-purple);
        }

        /* ========================================================================= */
        /* 4. WHY WORK WITH ME STYLES */
        /* ========================================================================= */
        .why-work-section {
          position: relative;
          z-index: 1;
          margin-bottom: 6rem;
        }

        .why-work-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }

        .why-work-card {
          padding: 1.85rem;
          border-radius: 18px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          box-shadow: var(--glass-shadow);
        }

        .why-work-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-focus);
          box-shadow: var(--glow-shadow);
        }

        .why-icon-box {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          margin-bottom: 1.25rem;
        }

        .why-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .why-card-subtitle {
          font-size: 0.775rem;
          font-weight: 700;
          font-family: var(--font-mono);
          color: var(--accent-purple-light);
          margin-bottom: 0.85rem;
        }

        .why-card-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* ========================================================================= */
        /* 5. ENQUIRY FORM CTA STYLES */
        /* ========================================================================= */
        .enquiry-section-wrapper {
          position: relative;
          z-index: 1;
        }

        .enquiry-card {
          position: relative;
          padding: 3rem;
          border-radius: 24px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--glass-shadow);
          overflow: hidden;
        }

        .enquiry-card-glow {
          position: absolute;
          top: -30%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%);
          filter: blur(70px);
          pointer-events: none;
        }

        .enquiry-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 3.5rem;
          position: relative;
          z-index: 1;
        }

        .enquiry-lead-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(168, 85, 247, 0.12);
          border: 1px solid rgba(168, 85, 247, 0.3);
          color: #c084fc;
          padding: 0.3rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          font-family: var(--font-mono);
          margin-bottom: 1rem;
        }

        .enquiry-heading {
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .enquiry-intro-text {
          font-size: 0.925rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .direct-channels-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .direct-channel-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          padding: 0.85rem 1.15rem;
          border-radius: 14px;
          text-decoration: none;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .direct-channel-item:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: var(--border-focus);
          transform: translateX(4px);
        }

        .channel-icon-circle {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(147, 51, 234, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-purple-light);
          flex-shrink: 0;
        }

        .channel-info {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .channel-label {
          font-size: 0.725rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }

        .channel-value {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text-primary);
          font-family: var(--font-mono);
        }

        .btn-copy-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          padding: 0.3rem 0.65rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-copy-chip:hover {
          color: #ffffff;
          border-color: rgba(168, 85, 247, 0.5);
        }

        .channel-arrow {
          color: var(--text-muted);
          transition: transform 0.2s ease;
        }

        .direct-channel-item:hover .channel-arrow {
          transform: translate(2px, -2px);
          color: var(--accent-purple-light);
        }

        .guarantee-box {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          padding: 0.85rem 1.1rem;
          border-radius: 12px;
          margin-top: 0.75rem;
        }

        .guarantee-text {
          font-size: 0.8rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .guarantee-text strong {
          color: #34d399;
        }

        /* Enquiry Form */
        .enquiry-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .form-label {
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .form-service-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.25rem;
        }

        .service-chip-btn {
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          font-size: 0.785rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .service-chip-btn:hover {
          background: rgba(255, 255, 255, 0.07);
          color: var(--text-primary);
          border-color: rgba(168, 85, 247, 0.4);
        }

        .chip-picked {
          background: rgba(147, 51, 234, 0.2) !important;
          border-color: rgba(168, 85, 247, 0.7) !important;
          color: #f8fafc !important;
          box-shadow: 0 0 12px rgba(147, 51, 234, 0.3);
        }

        .form-row-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-input {
          background: var(--input-bg);
          border: 1px solid var(--input-border);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-size: 0.875rem;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
        }

        .form-input:focus {
          border-color: var(--border-focus);
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.15);
        }

        .form-select {
          cursor: pointer;
        }

        .form-select option {
          background: var(--modal-bg);
          color: var(--text-primary);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .input-error {
          border-color: #ef4444 !important;
        }

        .form-error-msg {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: #f87171;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .enquiry-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 0.95rem 1.5rem;
          font-size: 0.95rem;
          font-weight: 700;
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        /* Success card state */
        .enquiry-success-card {
          padding: 1.5rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
        }

        .success-icon-badge {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(16, 185, 129, 0.3);
        }

        .success-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .success-message {
          font-size: 0.9rem;
          color: var(--text-secondary);
          max-width: 480px;
          line-height: 1.6;
        }

        .enquiry-summary-box {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          text-align: left;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
        }

        .summary-label {
          color: var(--text-muted);
          font-weight: 600;
        }

        .summary-val {
          color: var(--text-primary);
          font-weight: 700;
        }

        .success-actions-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          align-items: center;
          margin-top: 0.5rem;
        }

        @keyframes pulseBeacon {
          0% { transform: scale(0.95); opacity: 0.85; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); opacity: 0.85; box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* Responsive breakpoints */
        @media (max-width: 992px) {
          .enquiry-layout-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .enquiry-card {
            padding: 1.75rem;
          }
          .workflow-active-card {
            padding: 1.5rem;
          }
          .form-row-two-col {
            grid-template-columns: 1fr;
          }
          .active-stage-header {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};
