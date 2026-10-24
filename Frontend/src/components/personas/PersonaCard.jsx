export const PersonaCard = ({ persona, onEditar, onEliminar }) => {
  if (!persona) return null;

  const inicial = persona.nombre ? persona.nombre.charAt(0).toUpperCase() : '?';

  const fechaFormateada = persona.fecha_Nacimiento
    ? new Date(persona.fecha_Nacimiento).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : 'No registrada';

  return (
    <div className="persona-dark-card">
      <div>
        <div className="card-top-head">
          <div className="avatar-dark">{inicial}</div>
          <div className="card-actions-dark">
            <button className="icon-btn-dark" title="Editar" onClick={() => onEditar(persona)}>
              ✏️
            </button>
            <button className="icon-btn-dark delete" title="Eliminar" onClick={() => onEliminar(persona.id_Persona)}>
              🗑️
            </button>
          </div>
        </div>

        <h3>{persona.nombre}</h3>
        <span className="badge-doc-dark">{persona.Documento || 'Cédula'}</span>
      </div>

      <div className="card-bottom-info">
        <span>Nacimiento</span>
        <strong style={{ color: '#f3f4f6' }}>{fechaFormateada}</strong>
      </div>
    </div>
  );
};