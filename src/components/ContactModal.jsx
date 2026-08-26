import React, { useState } from 'react';
import { X, Mail, Send, Copy, Check, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const ContactModal = ({ isOpen, onClose, onShowToast }) => {
  if (!isOpen) return null;

  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    onShowToast?.('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast?.('Message prepared! Opening email client...');
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=Project inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '580px', padding: '2rem' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-icon"
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.25rem 0.75rem', background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '9999px', color: 'var(--accent-purple)', fontSize: '0.785rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            <span className="pulse-dot" />
            <span>Available for Opportunities</span>
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Let's Start a Conversation
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginTop: '0.35rem' }}>
            Feel free to send a message directly, or reach out via email or LinkedIn.
          </p>
        </div>

        {/* Quick Contacts: Email & Phone */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
          {/* Email Box */}
          <div
            style={{
              background: 'var(--bg-pill)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              padding: '0.75rem 1.15rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
              <Mail size={18} style={{ color: 'var(--accent-purple)', flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600, textOverflow: 'ellipsis', overflow: 'hidden' }}>
                {personal.email}
              </span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="btn-secondary"
              style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', gap: '0.4rem', flexShrink: 0 }}
            >
              {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Phone Box */}
          {personal.phone && (
            <div
              style={{
                background: 'var(--bg-pill)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                padding: '0.75rem 1.15rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} style={{ color: '#10b981', flexShrink: 0 }} />
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'none' }}
                >
                  {personal.phone}
                </a>
              </div>
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="btn-secondary"
                style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', gap: '0.4rem', flexShrink: 0, textDecoration: 'none' }}
              >
                <span>Call</span>
              </a>
            </div>
          )}
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
              Your Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'var(--input-bg)',
                border: '1px solid var(--input-border)',
                borderRadius: '10px',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
              Your Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. rahul@example.com"
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'var(--input-bg)',
                border: '1px solid var(--input-border)',
                borderRadius: '10px',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
              Your Message
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your project, ideas, or questions..."
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                background: 'var(--input-bg)',
                border: '1px solid var(--input-border)',
                borderRadius: '10px',
                color: 'var(--text-primary)',
                fontSize: '0.9rem',
                outline: 'none',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.8rem' }}
          >
            <Send size={16} />
            <span>{submitted ? 'Opening Email...' : 'Send Message'}</span>
          </button>
        </form>

        {/* Social Links */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="btn-icon"
            title="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-icon"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <button
            onClick={handleCopyEmail}
            className="btn-icon"
            title="Copy Email"
          >
            <Mail size={18} />
          </button>
        </div>

      </div>
    </div>
  );
};
