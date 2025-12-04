import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { encuestadoService } from '../../services/encuestadoService';
import { empresaService } from '../../services/empresaService';
import type { Encuestado, Empresa } from '../../types/index.js';

const Encuestados = () => {
  const [encuestados, setEncuestados] = useState<Encuestado[]>([]);
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingEncuestado, setEditingEncuestado] = useState<Encuestado | null>(null);
  const [selectedEmpresa, setSelectedEmpresa] = useState<string>('');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    puesto: '',
    departamento: '',
    empresaId: '',
  });
  const [error, setError] = useState('');
  const [codigoModal, setCodigoModal] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [selectedEmpresa]);

  const fetchData = async () => {
    try {
      const [empresasData, encuestadosData] = await Promise.all([
        empresaService.getAll(),
        encuestadoService.getAll(selectedEmpresa || undefined),
      ]);
      setEmpresas(empresasData);
      setEncuestados(encuestadosData);
    } catch (error) {
      console.error('Error al cargar datos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (encuestado?: Encuestado) => {
    if (encuestado) {
      setEditingEncuestado(encuestado);
      setFormData({
        nombre: encuestado.nombre,
        email: encuestado.email || '',
        puesto: encuestado.puesto || '',
        departamento: encuestado.departamento || '',
        empresaId: encuestado.empresaId,
      });
    } else {
      setEditingEncuestado(null);
      setFormData({
        nombre: '',
        email: '',
        puesto: '',
        departamento: '',
        empresaId: '',
      });
    }
    setShowModal(true);
    setError('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingEncuestado(null);
    setFormData({
      nombre: '',
      email: '',
      puesto: '',
      departamento: '',
      empresaId: '',
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.empresaId) {
      setError('Debe seleccionar una empresa');
      return;
    }

    try {
      if (editingEncuestado) {
        await encuestadoService.update(editingEncuestado.id, formData);
        await fetchData();
        handleCloseModal();
      } else {
        const nuevoEncuestado = await encuestadoService.create(formData);
        await fetchData();
        handleCloseModal();
        setCodigoModal(nuevoEncuestado.codigo);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al guardar encuestado');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Está seguro de eliminar este encuestado?')) {
      try {
        await encuestadoService.delete(id);
        await fetchData();
      } catch (err: any) {
        alert(err.response?.data?.error || 'Error al eliminar encuestado');
      }
    }
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      PENDIENTE: 'bg-yellow-100 text-yellow-800',
      EN_PROCESO: 'bg-blue-100 text-blue-800',
      COMPLETADO: 'bg-green-100 text-green-800',
    };
    return statusMap[status as keyof typeof statusMap] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status: string) => {
    const statusMap = {
      PENDIENTE: 'Pendiente',
      EN_PROCESO: 'En Proceso',
      COMPLETADO: 'Completado',
    };
    return statusMap[status as keyof typeof statusMap] || status;
  };

  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Gestión de Encuestados</h2>
          <button
            onClick={() => handleOpenModal()}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nuevo Encuestado
          </button>
        </div>

        {/* Filtro por Empresa */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filtrar por Empresa
          </label>
          <select
            className="block w-full md:w-64 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={selectedEmpresa}
            onChange={(e) => setSelectedEmpresa(e.target.value)}
          >
            <option value="">Todas las empresas</option>
            {empresas.map((empresa) => (
              <option key={empresa.id} value={empresa.id}>
                {empresa.nombre}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-xl text-gray-600">Cargando encuestados...</div>
          </div>
        ) : encuestados.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500">No hay encuestados registrados.</p>
            <button
              onClick={() => handleOpenModal()}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Crear el primer encuestado
            </button>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Código
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Empresa
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Puesto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {encuestados.map((encuestado) => (
                  <tr key={encuestado.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                      {encuestado.codigo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {encuestado.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {encuestado.empresa?.nombre || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {encuestado.puesto || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {encuestado.email || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(encuestado.status)}`}>
                        {getStatusText(encuestado.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => setCodigoModal(encuestado.codigo)}
                        className="text-green-600 hover:text-green-900 mr-4"
                      >
                        Ver Código
                      </button>
                      <button
                        onClick={() => handleOpenModal(encuestado)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(encuestado.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal de Formulario */}
        {showModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleCloseModal}></div>

            <div className="flex min-h-screen items-center justify-center p-4">
              <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full">
                <form onSubmit={handleSubmit}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      {editingEncuestado ? 'Editar Encuestado' : 'Nuevo Encuestado'}
                    </h3>

                    {error && (
                      <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                        {error}
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Empresa *
                        </label>
                        <select
                          required
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.empresaId}
                          onChange={(e) => setFormData({ ...formData, empresaId: e.target.value })}
                        >
                          <option value="">Seleccione una empresa</option>
                          {empresas.map((empresa) => (
                            <option key={empresa.id} value={empresa.id}>
                              {empresa.nombre}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          required
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Puesto
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.puesto}
                          onChange={(e) => setFormData({ ...formData, puesto: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Departamento
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.departamento}
                          onChange={(e) => setFormData({ ...formData, departamento: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      {editingEncuestado ? 'Actualizar' : 'Crear'}
                    </button>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Código Generado */}
        {codigoModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setCodigoModal(null)}></div>

            <div className="flex min-h-screen items-center justify-center p-4">
              <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Código de Encuesta Generado
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-6 mb-4">
                      <p className="text-3xl font-bold font-mono text-blue-600">
                        {codigoModal}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      Comparte este código con el encuestado para que pueda realizar la encuesta.
                    </p>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(codigoModal);
                        alert('Código copiado al portapapeles');
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Copiar código
                    </button>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    onClick={() => setCodigoModal(null)}
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Encuestados;
