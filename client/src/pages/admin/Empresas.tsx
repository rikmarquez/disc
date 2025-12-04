import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { empresaService } from '../../services/empresaService';
import type { Empresa } from '../../types/index.js';

const Empresas = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingEmpresa, setEditingEmpresa] = useState<Empresa | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    razonSocial: '',
    contacto: '',
    email: '',
    telefono: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEmpresas();
  }, []);

  const fetchEmpresas = async () => {
    try {
      const data = await empresaService.getAll();
      setEmpresas(data);
    } catch (error) {
      console.error('Error al cargar empresas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (empresa?: Empresa) => {
    if (empresa) {
      setEditingEmpresa(empresa);
      setFormData({
        nombre: empresa.nombre,
        razonSocial: empresa.razonSocial || '',
        contacto: empresa.contacto || '',
        email: empresa.email || '',
        telefono: empresa.telefono || '',
      });
    } else {
      setEditingEmpresa(null);
      setFormData({
        nombre: '',
        razonSocial: '',
        contacto: '',
        email: '',
        telefono: '',
      });
    }
    setShowModal(true);
    setError('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingEmpresa(null);
    setFormData({
      nombre: '',
      razonSocial: '',
      contacto: '',
      email: '',
      telefono: '',
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (editingEmpresa) {
        await empresaService.update(editingEmpresa.id, formData);
      } else {
        await empresaService.create(formData);
      }
      await fetchEmpresas();
      handleCloseModal();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al guardar empresa');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('¿Está seguro de eliminar esta empresa? Se eliminarán también todos sus encuestados.')) {
      try {
        await empresaService.delete(id);
        await fetchEmpresas();
      } catch (err: any) {
        alert(err.response?.data?.error || 'Error al eliminar empresa');
      }
    }
  };

  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Gestión de Empresas</h2>
          <button
            onClick={() => handleOpenModal()}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Nueva Empresa
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-xl text-gray-600">Cargando empresas...</div>
          </div>
        ) : empresas.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500">No hay empresas registradas.</p>
            <button
              onClick={() => handleOpenModal()}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Crear la primera empresa
            </button>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Razón Social
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contacto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Teléfono
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {empresas.map((empresa) => (
                  <tr key={empresa.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {empresa.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {empresa.razonSocial || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {empresa.contacto || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {empresa.email || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {empresa.telefono || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleOpenModal(empresa)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(empresa.id)}
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

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleCloseModal}></div>

            <div className="flex min-h-screen items-center justify-center p-4">
              <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full">
                <form onSubmit={handleSubmit}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      {editingEmpresa ? 'Editar Empresa' : 'Nueva Empresa'}
                    </h3>

                    {error && (
                      <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                        {error}
                      </div>
                    )}

                    <div className="space-y-4">
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
                          Razón Social
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.razonSocial}
                          onChange={(e) => setFormData({ ...formData, razonSocial: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Contacto
                        </label>
                        <input
                          type="text"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.contacto}
                          onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
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
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      {editingEmpresa ? 'Actualizar' : 'Crear'}
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
      </div>
    </Layout>
  );
};

export default Empresas;
