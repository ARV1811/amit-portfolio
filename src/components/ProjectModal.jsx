import React, { useState, useEffect } from 'react';
import {
  X, ExternalLink, CheckCircle2, Cpu, Sparkles, Image as ImageIcon,
  Database, Server, Code2, Layers, ShieldCheck
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'architecture' | 'api-db'
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const currentDisplayImage = project.gallery && project.gallery[activeImageIndex]
    ? project.gallery[activeImageIndex].image
    : project.image;

  // Project-specific API & Database blueprint details
  const getProjectBlueprint = (id) => {
    switch (id) {
      case '01': // Ameet Opticals
        return {
          endpoints: [
            { method: 'POST', path: '/api/v1/prescriptions/patient-record', desc: 'Saves digital eye exam parameters (OD/OS/Sph/Cyl/Ax)' },
            { method: 'GET', path: '/api/v1/inventory/stock-matrix?lowStock=true', desc: 'Real-time lens & frame barcode stock audit' },
            { method: 'POST', path: '/api/v1/billing/pos-checkout', desc: 'Generates GST-compliant invoice & updates stock ledger' }
          ],
          dbTables: [
            { name: 'PatientPrescriptions', keys: 'PK: PrescriptionId | FK: PatientId', notes: 'Clustered index on ExamDate, filtered index for active lenses' },
            { name: 'InventorySKUVariants', keys: 'PK: VariantId | UQ: BarcodeHash', notes: 'Stores frame colors, sizes, spherical base curves' },
            { name: 'BillingInvoices', keys: 'PK: InvoiceId | FK: StoreStaffId', notes: 'Partitioned by fiscal month, triggers auto lab routing' }
          ]
        };
      case '02': // Tikawoo Web Portal
        return {
          endpoints: [
            { method: 'POST', path: '/api/v1/credit/risk-scoring', desc: 'Evaluates automated credit line allocation with live rating model' },
            { method: 'GET', path: '/api/v1/delinquency/pipeline-metrics', desc: 'Aggregates multi-tier collection tracking across enterprise accounts' },
            { method: 'POST', path: '/api/v1/partner/export-ledger', desc: 'Streams paginated 50k+ rows to Excel/PDF via background worker' }
          ],
          dbTables: [
            { name: 'CreditAllocationLedger', keys: 'PK: LedgerId | FK: PartnerId', notes: 'Indexed by CreditScore & BalanceDue; Redis cache layer' },
            { name: 'DelinquencyAuditTrail', keys: 'PK: LogId | FK: AccountManagerId', notes: 'Immutable audit log with JWT-verified author timestamps' },
            { name: 'PartnerTransactions', keys: 'PK: TxnId | UQ: PaymentRefNo', notes: 'Optimized stored procedures for sub-50ms execution' }
          ]
        };
      case '03': // Big Box Footwear
        return {
          endpoints: [
            { method: 'POST', path: '/api/v1/transfers/warehouse-to-store', desc: 'Dispatches batch inventory movement with multi-branch approvals' },
            { method: 'GET', path: '/api/v1/sales/commission-calculator', desc: 'Computes tiered employee sales rewards from daily register data' },
            { method: 'POST', path: '/api/v1/pos/scan-checkout', desc: 'Processes barcode cart entry with instant matrix stock reduction' }
          ],
          dbTables: [
            { name: 'FootwearSizeMatrix', keys: 'PK: MatrixId | FK: ShoeStyleId', notes: 'Matrix sizing schema (sizes 6-12) with lot batch tracking' },
            { name: 'StoreInventoryStocks', keys: 'PK: StockId | FK: BranchStoreId', notes: 'Real-time branch inventory with row-version concurrency checks' },
            { name: 'SalesStaffCommissions', keys: 'PK: CommissionId | FK: StaffId', notes: 'Historical seasonal trend reporting indexed on SaleDate' }
          ]
        };
      default: // Passenger Transport
        return {
          endpoints: [
            { method: 'GET', path: '/api/v1/fleet/seat-allocation-grid', desc: 'Fetches live interactive bus layout with real-time lock state' },
            { method: 'POST', path: '/api/v1/booking/reserve-seat-lock', desc: 'Acquires temporary seat lock with atomic concurrency guard' },
            { method: 'GET', path: '/api/v1/dispatch/driver-roster', desc: 'DevExpress multi-column duty roster with GPS telematics link' }
          ],
          dbTables: [
            { name: 'BusRouteTrips', keys: 'PK: TripId | FK: VehicleFleetId', notes: 'Live schedule and waypoint sequence with mileage indices' },
            { name: 'SeatReservationLocks', keys: 'PK: LockId | UQ: TripSeatComposite', notes: 'High-speed row-level locking for concurrent booking requests' },
            { name: 'DriverDutyLogs', keys: 'PK: DutyLogId | FK: DriverStaffId', notes: 'Regulatory compliance records & passenger manifest archival' }
          ]
        };
    }
  };

  const blueprint = getProjectBlueprint(project.id);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content project-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-icon"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 10,
            background: 'rgba(0, 0, 0, 0.65)'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Project Hero / Active Gallery Image */}
        <div style={{ position: 'relative', width: '100%', height: '310px', overflow: 'hidden', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)', background: '#0a0a0e' }}>
          <img
            src={currentDisplayImage}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#0d0d14' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(17, 17, 23, 0.1) 0%, rgba(17, 17, 23, 0.88) 100%)',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.5rem',
              right: '1.5rem',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  background: '#7c3aed',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                  marginBottom: '0.4rem'
                }}
              >
                PROJECT #{project.number}
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                {project.title}
              </h2>
              <p style={{ color: '#c084fc', fontSize: '0.9rem', fontWeight: 500 }}>
                {project.subtitle}
              </p>
            </div>

            {/* Quick Action Links */}
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.8rem', padding: '0.4rem 0.85rem' }}
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Screenshot Gallery Switcher */}
        {project.gallery && project.gallery.length > 1 && (
          <div
            style={{
              padding: '0.85rem 2rem 0.5rem 2rem',
              background: 'rgba(255, 255, 255, 0.02)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <ImageIcon size={13} style={{ color: '#a855f7' }} />
              <span>Project Screenshots & Views</span>
            </div>
            
            <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '0.4rem' }}>
              {project.gallery.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.35rem 0.75rem',
                    background: activeImageIndex === idx ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${activeImageIndex === idx ? 'rgba(168, 85, 247, 0.6)' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '8px',
                    color: activeImageIndex === idx ? '#ffffff' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: activeImageIndex === idx ? '#c084fc' : 'transparent', border: activeImageIndex === idx ? 'none' : '1px solid var(--text-muted)' }} />
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Developer Mode Navigation Tabs */}
        <div className="dev-inspection-tabs-bar">
          <button
            onClick={() => setActiveTab('overview')}
            className={`dev-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          >
            <Sparkles size={14} />
            <span>Overview & Features</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`dev-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
          >
            <Cpu size={14} />
            <span>Architecture & Tech Spec</span>
          </button>

          <button
            onClick={() => setActiveTab('api-db')}
            className={`dev-tab-btn ${activeTab === 'api-db' ? 'active' : ''}`}
          >
            <Database size={14} />
            <span>API & Database Blueprint</span>
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.75rem 2rem' }}>
          
          {/* Tech Stack Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: 'var(--bg-pill)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '9999px',
                  fontSize: '0.785rem',
                  fontWeight: 600
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="tab-pane-content">
              {/* Overview Description */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={17} className="text-purple-400" />
                  Project Overview
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.65 }}>
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={17} style={{ color: '#10b981' }} />
                    Key Highlights & Features
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.55rem' }}>
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          background: 'var(--bg-pill)',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.7rem 0.95rem',
                          borderRadius: '10px'
                        }}
                      >
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-purple)', marginTop: '0.5rem', flexShrink: 0 }} />
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.885rem' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & TECH SPEC */}
          {activeTab === 'architecture' && (
            <div className="tab-pane-content">
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Cpu size={17} style={{ color: '#38bdf8' }} />
                  Architectural Blueprint & Design Patterns
                </h3>
                <div style={{ background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', padding: '1.15rem', borderRadius: '12px', marginBottom: '1.25rem' }}>
                  <p style={{ color: 'var(--text-primary)', fontSize: '0.925rem', lineHeight: 1.65, margin: 0 }}>
                    {project.architecture}
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <div className="spec-card">
                    <span className="spec-badge">Pattern</span>
                    <h5 className="spec-title">CQRS & Repository Layer</h5>
                    <p className="spec-desc">Decoupled command and query paths allowing optimized reads with Dapper / raw SQL and safe writes via EF Core.</p>
                  </div>
                  <div className="spec-card">
                    <span className="spec-badge">Optimization</span>
                    <h5 className="spec-title">Indexed Queries & Caching</h5>
                    <p className="spec-desc">Sub-second execution achieved using SQL Server non-clustered composite indexes and in-memory caches.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: API & DATABASE BLUEPRINT */}
          {activeTab === 'api-db' && (
            <div className="tab-pane-content">
              {/* REST API Endpoints */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Server size={17} style={{ color: '#10b981' }} />
                  Key RESTful Web API Endpoints
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {blueprint.endpoints.map((ep, idx) => (
                    <div key={idx} className="endpoint-row">
                      <div className="endpoint-top">
                        <span className={`method-badge method-${ep.method.toLowerCase()}`}>{ep.method}</span>
                        <code className="endpoint-path">{ep.path}</code>
                      </div>
                      <p className="endpoint-desc">{ep.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database Schema & Tables */}
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Database size={17} style={{ color: '#ec4899' }} />
                  Microsoft SQL Server Schema Highlights
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {blueprint.dbTables.map((tbl, idx) => (
                    <div key={idx} className="dbtable-row">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span className="dbtable-name">dbo.{tbl.name}</span>
                        <span className="dbtable-keys">{tbl.keys}</span>
                      </div>
                      <p className="dbtable-notes">{tbl.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      <style>{`
        .project-modal-content {
          max-width: 820px !important;
          max-height: 90vh;
          overflow-y: auto;
          background: rgba(14, 14, 22, 0.98) !important;
          border: 1px solid rgba(168, 85, 247, 0.35) !important;
          box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.85), 0 0 40px rgba(168, 85, 247, 0.25) !important;
        }

        .dev-inspection-tabs-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 2rem;
          background: rgba(10, 10, 16, 0.6);
          border-bottom: 1px solid var(--border-subtle);
          overflow-x: auto;
        }

        .dev-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.95rem;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 0.825rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .dev-tab-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.04);
        }

        .dev-tab-btn.active {
          background: rgba(168, 85, 247, 0.18);
          border-color: rgba(168, 85, 247, 0.45);
          color: #c084fc;
        }

        .spec-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          padding: 0.9rem 1rem;
        }

        .spec-badge {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          font-family: var(--font-mono);
        }

        .spec-title {
          font-size: 0.885rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0.25rem 0;
        }

        .spec-desc {
          font-size: 0.785rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .endpoint-row {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          padding: 0.75rem 1rem;
        }

        .endpoint-top {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.35rem;
        }

        .method-badge {
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.1rem 0.45rem;
          border-radius: 4px;
          font-family: var(--font-mono);
        }

        .method-get { background: rgba(56, 189, 248, 0.2); color: #38bdf8; }
        .method-post { background: rgba(16, 185, 129, 0.2); color: #34d399; }
        .method-put { background: rgba(245, 158, 11, 0.2); color: #fbbf24; }

        .endpoint-path {
          font-family: var(--font-mono);
          font-size: 0.825rem;
          color: #f8fafc;
        }

        .endpoint-desc {
          font-size: 0.785rem;
          color: var(--text-muted);
          margin: 0;
        }

        .dbtable-row {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          padding: 0.75rem 1rem;
        }

        .dbtable-name {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: #f472b6;
        }

        .dbtable-keys {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .dbtable-notes {
          font-size: 0.785rem;
          color: var(--text-secondary);
          margin: 0;
        }

        @media (max-width: 640px) {
          .spec-card {
            grid-column: span 2;
          }
        }
      `}</style>
    </div>
  );
};
