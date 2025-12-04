import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { preguntaService } from '../../services/preguntaService';
import type { Pregunta } from '../../types/index.js';

const Preguntas = () => {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPregunta, setEditingPregunta] = useState<Pregunta | null>(null);
  const [formData, setFormData] = useState({
    texto: '',
    opcionA: '',
    opcionB: '',
    opcionC: '',
    opcionD: '',
    claveA: '',
    claveB: '',
    claveC: '',
    claveD: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPreguntas();
  }, []);

  const fetchPreguntas = async () => {
    try {
      const data = await preguntaService.getAll();
      setPreguntas(data);
    } catch (error) {
      console.error('Error al cargar preguntas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (pregunta: Pregunta) => {
    setEditingPregunta(pregunta);
    setFormData({
      texto: pregunta.texto,
      opcionA: pregunta.opcionA,
      opcionB: pregunta.opcionB,
      opcionC: pregunta.opcionC,
      opcionD: pregunta.opcionD,
      claveA: pregunta.claveA,
      claveB: pregunta.claveB,
      claveC: pregunta.claveC,
      claveD: pregunta.claveD,
    });
    setShowModal(true);
    setError('');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingPregunta(null);
    setFormData({
      texto: '',
      opcionA: '',
      opcionB: '',
      opcionC: '',
      opcionD: '',
      claveA: '',
      claveB: '',
      claveC: '',
      claveD: '',
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validar que las claves sean D, I, S, o C
    const validKeys = ['D', 'I', 'S', 'C'];
    if (!validKeys.includes(formData.claveA) || !validKeys.includes(formData.claveB) ||
        !validKeys.includes(formData.claveC) || !validKeys.includes(formData.claveD)) {
      setError('Las claves deben ser D, I, S, o C');
      return;
    }

    if (!editingPregunta) return;

    try {
      await preguntaService.update(editingPregunta.id, formData);
      await fetchPreguntas();
      handleCloseModal();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al actualizar pregunta');
    }
  };

  return (
    <Layout>
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Gestión de Preguntas</h2>
          <div className="text-sm text-gray-600">
            Total de preguntas: {preguntas.length}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-xl text-gray-600">Cargando preguntas...</div>
          </div>
        ) : (
          <div className="space-y-4">
            {preguntas.map((pregunta) => (
              <div key={pregunta.id} className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                        Pregunta {pregunta.numero}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                        Bloque {pregunta.bloque}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {pregunta.texto}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleOpenModal(pregunta)}
                    className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    Editar
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mr-2 mt-0.5">
                      A → {pregunta.claveA}
                    </span>
                    <span className="text-sm text-gray-700">{pregunta.opcionA}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mr-2 mt-0.5">
                      B → {pregunta.claveB}
                    </span>
                    <span className="text-sm text-gray-700">{pregunta.opcionB}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mr-2 mt-0.5">
                      C → {pregunta.claveC}
                    </span>
                    <span className="text-sm text-gray-700">{pregunta.opcionC}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded mr-2 mt-0.5">
                      D → {pregunta.claveD}
                    </span>
                    <span className="text-sm text-gray-700">{pregunta.opcionD}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal de Edición */}
        {showModal && editingPregunta && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleCloseModal}></div>

            <div className="flex min-h-screen items-center justify-center p-4">
              <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full">
                <form onSubmit={handleSubmit}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Editar Pregunta {editingPregunta.numero}
                    </h3>

                    {error && (
                      <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                        {error}
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Texto de la Pregunta *
                        </label>
                        <textarea
                          required
                          rows={3}
                          className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={formData.texto}
                          onChange={(e) => setFormData({ ...formData, texto: e.target.value })}
                        />
                      </div>

                      <div className="border-t pt-4">
                        <h4 className="text-sm font-medium text-gray-900 mb-3">Opciones de Respuesta</h4>
                        <p className="text-xs text-gray-500 mb-4">
                          Claves válidas: D (Dominancia), I (Influencia), S (Estabilidad), C (Cumplimiento)
                        </p>

                        <div className="space-y-3">
                          <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-2">
                              <label className="block text-xs font-medium text-gray-700 mb-1">
                                Clave A
                              </label>
                              <select
                                required
                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={formData.claveA}
                                onChange={(e) => setFormData({ ...formData, claveA: e.target.value })}
                              >
                                <option value="">-</option>
                                <option value="D">D</option>
                                <option value="I">I</option>
                                <option value="S">S</option>
                                <option value="C">C</option>
                              </select>
                            </div>
                            <div className="col-span-10">
                              <label className="block text-xs font-medium text-gray-700 mb-1">
                                Opción A *
                              </label>
                              <input
                                type="text"
                                required
                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={formData.opcionA}
                                onChange={(e) => setFormData({ ...formData, opcionA: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-2">
                              <label className="block text-xs font-medium text-gray-700 mb-1">
                                Clave B
                              </label>
                              <select
                                required
                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={formData.claveB}
                                onChange={(e) => setFormData({ ...formData, claveB: e.target.value })}
                              >
                                <option value="">-</option>
                                <option value="D">D</option>
                                <option value="I">I</option>
                                <option value="S">S</option>
                                <option value="C">C</option>
                              </select>
                            </div>
                            <div className="col-span-10">
                              <label className="block text-xs font-medium text-gray-700 mb-1">
                                Opción B *
                              </label>
                              <input
                                type="text"
                                required
                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={formData.opcionB}
                                onChange={(e) => setFormData({ ...formData, opcionB: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-2">
                              <label className="block text-xs font-medium text-gray-700 mb-1">
                                Clave C
                              </label>
                              <select
                                required
                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={formData.claveC}
                                onChange={(e) => setFormData({ ...formData, claveC: e.target.value })}
                              >
                                <option value="">-</option>
                                <option value="D">D</option>
                                <option value="I">I</option>
                                <option value="S">S</option>
                                <option value="C">C</option>
                              </select>
                            </div>
                            <div className="col-span-10">
                              <label className="block text-xs font-medium text-gray-700 mb-1">
                                Opción C *
                              </label>
                              <input
                                type="text"
                                required
                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={formData.opcionC}
                                onChange={(e) => setFormData({ ...formData, opcionC: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-2">
                              <label className="block text-xs font-medium text-gray-700 mb-1">
                                Clave D
                              </label>
                              <select
                                required
                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={formData.claveD}
                                onChange={(e) => setFormData({ ...formData, claveD: e.target.value })}
                              >
                                <option value="">-</option>
                                <option value="D">D</option>
                                <option value="I">I</option>
                                <option value="S">S</option>
                                <option value="C">C</option>
                              </select>
                            </div>
                            <div className="col-span-10">
                              <label className="block text-xs font-medium text-gray-700 mb-1">
                                Opción D *
                              </label>
                              <input
                                type="text"
                                required
                                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                value={formData.opcionD}
                                onChange={(e) => setFormData({ ...formData, opcionD: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Actualizar Pregunta
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

export default Preguntas;
