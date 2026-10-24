import { PersonaList } from './components/personas/PersonaList';
import './App.css';

export function App() {
  return (
    <div className="dashboard-layout">
      {/* 1. Left Dock */}
      <aside className="left-dock-dark">
        <div className="dock-group">
          <button className="dock-icon-btn active">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          </button>
          <button className="dock-icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><line x1="16" y1="21" x2="16" y2="25"/><line x1="8" y1="21" x2="8" y2="25"/><line x1="3" y1="11" x2="21" y2="11"/></svg>
          </button>
          <button className="dock-icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          </button>
        </div>

        <div className="dock-group">
          <button className="dock-icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          </button>
        </div>
      </aside>

      {/* 2. Main Area + Right Sidebar Grid */}
      <div className="main-content-grid">
        <div className="central-panel">
          <PersonaList />
        </div>

        {/* 3. Panel Lateral Derecho */}
        <aside className="right-sidebar-panel">
          <div className="profile-card-widget">
            <div className="user-avatar-large">MC</div>
            <h3>Martin Cruz</h3>
            <p>ADSO • Ficha 3315796</p>
          </div>

          <div className="quick-stats-widget">
            <div className="quick-stat-item">
              <span>Sistema</span>
              <strong>Atlas v2.0</strong>
            </div>
            <div className="quick-stat-item">
              <span>Base de Datos</span>
              <strong style={{ color: '#00e699' }}>Supabase DB</strong>
            </div>
          </div>

          <div>
            <h4 className="recent-activity-title">Actividad Reciente</h4>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">⚡</div>
                <div>
                  <div style={{ fontWeight: '600' }}>Sincronización</div>
                  <div style={{ color: '#9ca3af', fontSize: '11px' }}>Hace un momento</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">🟢</div>
                <div>
                  <div style={{ fontWeight: '600' }}>Conexión Exitosa</div>
                  <div style={{ color: '#9ca3af', fontSize: '11px' }}>Realtime Activo</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;