import api from './api';

export const resultadoService = {
  obtenerResultados: async () => {
    const response = await api.get('/resultados');
    return response.data;
  },

  obtenerResultadoPorEncuestado: async (encuestadoId: string) => {
    const response = await api.get(`/resultados/encuestado/${encuestadoId}`);
    return response.data;
  },
};
