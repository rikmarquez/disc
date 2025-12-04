import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { empresaService } from '../../services/empresaService';
import { encuestadoService } from '../../services/encuestadoService';

const Dashboard = () => {
  const [stats, setStats] = useState({
    empresas: 0,
    encuestados: 0,
    completados: 0,
    pendientes: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [empresas, encuestados] = await Promise.all([
          empresaService.getAll(),
          encuestadoService.getAll(),
        ]);

        const completados = encuestados.filter(e => e.status === 'COMPLETADO').length;
        const pendientes = encuestados.filter(e => e.status === 'PENDIENTE').length;

        setStats({
          empresas: empresas.length,
          encuestados: encuestados.length,
          completados,
          pendientes,
        });
      } catch (error) {
        console.error('Error al cargar estadísticas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-xl text-gray-600">Cargando estadísticas...</div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Total Empresas
                        </dt>
                        <dd className="text-2xl font-semibold text-gray-900">
                          {stats.empresas}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Total Encuestados
                        </dt>
                        <dd className="text-2xl font-semibold text-gray-900">
                          {stats.encuestados}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Completados
                        </dt>
                        <dd className="text-2xl font-semibold text-gray-900">
                          {stats.completados}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Pendientes
                        </dt>
                        <dd className="text-2xl font-semibold text-gray-900">
                          {stats.pendientes}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Acciones Rápidas</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Link
                  to="/empresas"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <svg className="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Nueva Empresa</p>
                    <p className="text-xs text-gray-500">Registrar nueva empresa</p>
                  </div>
                </Link>

                <Link
                  to="/encuestados"
                  className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <svg className="h-8 w-8 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Nuevo Encuestado</p>
                    <p className="text-xs text-gray-500">Agregar encuestado</p>
                  </div>
                </Link>

                <Link
                  to="/preguntas"
                  className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <svg className="h-8 w-8 text-purple-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Editar Preguntas</p>
                    <p className="text-xs text-gray-500">Modificar cuestionario</p>
                  </div>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
