import { useEffect, useState } from 'react';
import { personaService } from '../../services/personaService';

export const PersonaForm = ({ personaAEditar, onPersonaGuardada, onCancelar }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    Documento: 'Cedula',
    fecha_Nacimiento: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (personaAEditar) {
      setFormData({
        nombre: personaAEditar.nombre || '',
        Documento: personaAEditar.Documento || 'Cedula',
        fecha_Nacimiento: personaAEditar.fecha_Nacimiento || ''
      });
    }
  }, [personaAEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.nombre.trim() || !formData.fecha_Nacimiento) {
      setErrorMsg('Por favor completa todos los campos.');
      return;
    }

    try {
      setLoading(true);
      if (personaAEditar) {
        await personaService.actualizarPersona(personaAEditar.id_Persona, formData);
      } else {
        await personaService.crearPersona(formData);
      }
      onPersonaGuardada();
    } catch (err) {
      setErrorMsg(`Error: ${err.message || 'No se pudo guardar en Supabase.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-dark-card">
        <div className="modal-header-dark">
          <h3 style={{ fontSize: '18px', fontWeight: '800' }}>
            {personaAEditar ? 'Editar Registro' : 'Nueva Persona'}
          </h3>
          <button type="button" className="icon-btn-dark" onClick={onCancelar}>✕</button>
        </div>

        {errorMsg && (
          <div style={{ background: 'rgba(239,68,68,0.2)', color: '#ef4444', padding: '10px', borderRadius: '8px', marginBottom: '14px', fontSize: '12px' }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="field-group-dark">
            <label htmlFor="nombre">Nombre Completo *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ej. Martin Cruz"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field-group-dark">
            <label htmlFor="Documento">Tipo de Documento</label>
            <select
              id="Documento"
              name="Documento"
              value={formData.Documento}
              onChange={handleChange}
            >
              <option value="Cedula">Cédula</option>
              <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>

          <div className="field-group-dark">
            <label htmlFor="fecha_Nacimiento">Fecha de Nacimiento *</label>
            <input
              type="date"
              id="fecha_Nacimiento"
              name="fecha_Nacimiento"
              value={formData.fecha_Nacimiento}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-buttons-row">
            <button type="button" className="btn-cancel-dark" onClick={onCancelar} disabled={loading}>
              Cancelar
            </button>
            <button type="submit" className="btn-submit-dark" disabled={loading}>
              {loading ? 'Guardando...' : personaAEditar ? 'Actualizar' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};