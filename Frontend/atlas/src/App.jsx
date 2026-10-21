import { PersonaList } from './components/personas/PersonaList.jsx';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>Sistema de Gestión - Taller React & Supabase</h1>
      </header>
      <main className="app-main">
        <PersonaList />
      </main>
    </div>
  );
}

export default App;