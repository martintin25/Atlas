import { useEffect, useState } from 'react';
import { personaService } from '../../services/personaService';
import { PersonaCard } from './PersonaCard';

export const PersonaList = () => {
  const [personas, setPersonas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);
        const data = await personaService.obtenerPersonas();
        setPersonas(data);
      } catch (err) {
        setError('No se pudo conectar con la base de datos.');
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, []);

  // Filtrado por nombre o tipo de documento
  const personasFiltradas = personas.filter((p) =>
    p.nombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.Documento?.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (loading) {
    return (
      <div className="status-container">
        <div className="spinner"></div>
        <p>Cargando registros desde Supabase...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-container error">
        <div className="error-icon">⚠️</div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      <div className="toolbar">
        <div className="stats-pill">
          Total personas: <strong>{personas.length}</strong>
        </div>
        <div className="search-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Buscar por nombre o tipo de documento..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      {personasFiltradas.length === 0 ? (
        <div className="empty-state">
          <p>No se encontraron registros que coincidan con la búsqueda.</p>
        </div>
      ) : (
        <div className="cards-grid">
          {personasFiltradas.map((p) => (
            <PersonaCard key={p.id_Persona} persona={p} />
          ))}
        </div>
      )}
    </div>
  );
};