import api from './api';
import type { Pregunta } from '../types/index.js';

export const preguntaService = {
  getAll: async (): Promise<Pregunta[]> => {
    const response = await api.get<{ preguntas: Pregunta[] }>('/preguntas');
    return response.data.preguntas;
  },

  update: async (id: string, data: Partial<Pregunta>): Promise<Pregunta> => {
    const response = await api.put<{ pregunta: Pregunta }>(`/preguntas/${id}`, data);
    return response.data.pregunta;
  },
};
