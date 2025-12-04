import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { resultadoService } from '../../services/resultadoService';

interface ResultadoData {
  id: string;
  encuestado: {
    id: string;
    nombre: string;
    email: string;
    codigo: string;
    empresa: string;
    fechaCompletado: string;
  };
  puntosD: number;
  puntosI: number;
  puntosS: number;
  puntosC: number;
  perfilPrimario: string;
  perfilSecundario: string;
  arquetipo: string;
  createdAt: string;
}

const Resultados = () => {
  const [resultados, setResultados] = useState<ResultadoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filtroEmpresa, setFiltroEmpresa] = useState('');

  useEffect(() => {
    fetchResultados();
  }, []);

  const fetchResultados = async () => {
    try {
      const data = await resultadoService.obtenerResultados();
      setResultados(data.resultados);
    } catch (err) {
      setError('Error al cargar resultados');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resultadosFiltrados = filtroEmpresa
    ? resultados.filter((r) =>
        r.encuestado.empresa.toLowerCase().includes(filtroEmpresa.toLowerCase())
      )
    : resultados;

  const obtenerColorPerfil = (perfil: string) => {
    const colores: { [key: string]: string } = {
      D: 'bg-red-100 text-red-800 border-red-300',
      I: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      S: 'bg-green-100 text-green-800 border-green-300',
      C: 'bg-blue-100 text-blue-800 border-blue-300',
    };
    return colores[perfil] || 'bg-gray-100 text-gray-800 border-gray-300';
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600">Cargando resultados...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resultados DISC</h1>
          <p className="mt-2 text-gray-600">
            Visualiza los perfiles y arquetipos de todos los encuestados completados
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="filtroEmpresa" className="block text-sm font-medium text-gray-700 mb-1">
                Filtrar por empresa
              </label>
              <input
                id="filtroEmpresa"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Buscar empresa..."
                value={filtroEmpresa}
                onChange={(e) => setFiltroEmpresa(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">{resultadosFiltrados.length}</span> resultados
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Tabla de resultados */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Encuestado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Empresa
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Puntos DISC
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Perfil
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Arquetipo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {resultadosFiltrados.map((resultado) => (
                  <tr key={resultado.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {resultado.encuestado.nombre}
                        </div>
                        <div className="text-sm text-gray-500">{resultado.encuestado.email}</div>
                        <div className="text-xs text-gray-400">{resultado.encuestado.codigo}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{resultado.encuestado.empresa}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2 text-xs">
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-red-50 text-red-700 border border-red-200">
                          D: {resultado.puntosD}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200">
                          I: {resultado.puntosI}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200">
                          S: {resultado.puntosS}
                        </span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                          C: {resultado.puntosC}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-1">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${obtenerColorPerfil(
                            resultado.perfilPrimario
                          )}`}
                        >
                          {resultado.perfilPrimario}
                        </span>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${obtenerColorPerfil(
                            resultado.perfilSecundario
                          )}`}
                        >
                          {resultado.perfilSecundario}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">{resultado.arquetipo}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(resultado.encuestado.fechaCompletado).toLocaleDateString('es-ES')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        className="text-blue-600 hover:text-blue-900 font-medium"
                        onClick={() => alert('Generación de PDF en desarrollo')}
                      >
                        Generar PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {resultadosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No hay resultados disponibles</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Resultados;
