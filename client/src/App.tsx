import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import Empresas from './pages/admin/Empresas';
import Encuestados from './pages/admin/Encuestados';
import Preguntas from './pages/admin/Preguntas';
import Resultados from './pages/admin/Resultados';
import EncuestaIngreso from './pages/public/EncuestaIngreso';
import EncuestaPreguntas from './pages/public/EncuestaPreguntas';
import EncuestaGracias from './pages/public/EncuestaGracias';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas públicas de encuesta */}
          <Route path="/encuesta" element={<EncuestaIngreso />} />
          <Route path="/encuesta/preguntas" element={<EncuestaPreguntas />} />
          <Route path="/encuesta/gracias" element={<EncuestaGracias />} />

          {/* Rutas de autenticación */}
          <Route path="/login" element={<Login />} />

          {/* Rutas administrativas protegidas */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/empresas"
            element={
              <ProtectedRoute>
                <Empresas />
              </ProtectedRoute>
            }
          />
          <Route
            path="/encuestados"
            element={
              <ProtectedRoute>
                <Encuestados />
              </ProtectedRoute>
            }
          />
          <Route
            path="/preguntas"
            element={
              <ProtectedRoute>
                <Preguntas />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resultados"
            element={
              <ProtectedRoute>
                <Resultados />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
