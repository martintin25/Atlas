import { useEffect, useState } from 'react';
import { personaService } from '../../services/personaService';
import { PersonaCard } from './PersonaCard';
import { PersonaForm } from './PersonaForm';

export const PersonaList = () => {
  const [personas, setPersonas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [personaAEditar, setPersonaAEditar] = useState(null);

  const cargarDatos = async () => {
    try {
      setLoading(true);
      const data = await personaService.obtenerPersonas();
      setPersonas(data);
    } catch (err) {
      setError('No se pudo conectar con Supabase.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const handleEditar = (persona) => {
    setPersonaAEditar(persona);
    setMostrarForm(true);
  };

  const handleEliminar = async (id) => {
    if (window.confirm('¿Deseas eliminar este registro de Supabase?')) {
      try {
        await personaService.eliminarPersona(id);
        cargarDatos();
      } catch (err) {
        alert('Error al eliminar el registro.');
      }
    }
  };

  const handleCerrarForm = () => {
    setMostrarForm(false);
    setPersonaAEditar(null);
  };

  const personasFiltradas = personas.filter((p) =>
    p.nombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.Documento?.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <div className="top-header-bar">
        <div className="dashboard-title">
          <h1>Atlas <span>Dashboard</span></h1>
        </div>
        <div className="top-pills-row">
          <div className="header-pill">
            Registros: <strong>{personas.length}</strong>
          </div>
        </div>
      </div>

      {/* Tarjetas estilo FinTech al inicio */}
      <div className="featured-cards-row">
        <div className="fintech-card card-orange">
          <div className="card-brand"><span>ATLAS CARD</span> <span>MASTERCARD</span></div>
          <div className="card-val">{personas.length} Personas</div>
          <div className="card-sub">Base de datos sincronizada</div>
        </div>

        <div className="fintech-card card-teal">
          <div className="card-brand"><span>SECURITY</span> <span>VISA</span></div>
          <div className="card-val">RLS Activo</div>
          <div className="card-sub">Permisos lectura/escritura</div>
        </div>

        <div className="fintech-card card-purple">
          <div className="card-brand"><span>SYSTEM</span> <span>INSTANT</span></div>
          <div className="card-val">100% CRUD</div>
          <div className="card-sub">Supabase + React</div>
        </div>
      </div>

      {/* Barra de herramientas de búsqueda y botón */}
      <div className="toolbar-dark">
        <div className="search-dark-input">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Buscar persona o documento..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        <button
          className="btn-add-dark"
          onClick={() => {
            setPersonaAEditar(null);
            setMostrarForm(true);
          }}
        >
          + Registrar Persona
        </button>
      </div>

      {/* Modal Formulario */}
      {mostrarForm && (
        <PersonaForm
          personaAEditar={personaAEditar}
          onPersonaGuardada={() => {
            handleCerrarForm();
            cargarDatos();
          }}
          onCancelar={handleCerrarForm}
        />
      )}

      {/* Grilla de Tarjetas */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#9ca3af' }}>Cargando datos desde Supabase...</div>
      ) : error ? (
        <div style={{ color: '#ef4444', textAlign: 'center' }}>{error}</div>
      ) : personasFiltradas.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#9ca3af' }}>No hay registros para mostrar.</div>
      ) : (
        <div className="cards-dark-grid">
          {personasFiltradas.map((p) => (
            <PersonaCard
              key={p.id_Persona}
              persona={p}
              onEditar={handleEditar}
              onEliminar={handleEliminar}
            />
          ))}
        </div>
      )}
    </>
  );
};