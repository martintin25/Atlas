export const PersonaCard = ({ persona }) => {
  if (!persona) return null;

  const inicial = persona.nombre ? persona.nombre.charAt(0).toUpperCase() : '?';

  // Formatear la fecha a un formato legible
  const fechaFormateada = persona.fecha_Nacimiento
    ? new Date(persona.fecha_Nacimiento).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'No registrada';

  return (
    <div className="persona-card">
      <div className="card-badge">ID #{persona.id_Persona}</div>
      
      <div className="card-header">
        <div className="card-avatar">{inicial}</div>
        <div className="card-title-group">
          <h3 className="card-title">{persona.nombre}</h3>
          <span className="card-doc-type">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <line x1="7" y1="8" x2="17" y2="8" />
              <line x1="7" y1="12" x2="13" y2="12" />
            </svg>
            {persona.Documento || 'Documento'}
          </span>
        </div>
      </div>

      <div className="card-divider"></div>

      <div className="card-body">
        <div className="card-info-item">
          <span className="info-label">Fecha de Nacimiento</span>
          <span className="info-value">{fechaFormateada}</span>
        </div>
      </div>
    </div>
  );
};