import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'bg-blue-700 text-white'
      : 'text-blue-100 hover:bg-blue-700';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <nav className="bg-blue-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-white text-xl font-bold">Sistema DISC</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/dashboard"
                  className={`${isActive('/dashboard')} inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/empresas"
                  className={`${isActive('/empresas')} inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  Empresas
                </Link>
                <Link
                  to="/encuestados"
                  className={`${isActive('/encuestados')} inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  Encuestados
                </Link>
                <Link
                  to="/preguntas"
                  className={`${isActive('/preguntas')} inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  Preguntas
                </Link>
                <Link
                  to="/resultados"
                  className={`${isActive('/resultados')} inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  Resultados
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-white mr-4">
                {user?.nombre}
              </span>
              <button
                onClick={handleLogout}
                className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
