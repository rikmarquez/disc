import api from './api';
import type { Encuestado } from '../types/index.js';

export const encuestadoService = {
  getAll: async (empresaId?: string): Promise<Encuestado[]> => {
    const url = empresaId ? `/encuestados?empresaId=${empresaId}` : '/encuestados';
    const response = await api.get<{ encuestados: Encuestado[] }>(url);
    return response.data.encuestados;
  },

  getById: async (id: string): Promise<Encuestado> => {
    const response = await api.get<{ encuestado: Encuestado }>(`/encuestados/${id}`);
    return response.data.encuestado;
  },

  create: async (data: Partial<Encuestado>): Promise<Encuestado> => {
    const response = await api.post<{ encuestado: Encuestado }>('/encuestados', data);
    return response.data.encuestado;
  },

  update: async (id: string, data: Partial<Encuestado>): Promise<Encuestado> => {
    const response = await api.put<{ encuestado: Encuestado }>(`/encuestados/${id}`, data);
    return response.data.encuestado;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/encuestados/${id}`);
  },
};
