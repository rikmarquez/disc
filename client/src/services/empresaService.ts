import api from './api';
import type { Empresa } from '../types/index.js';

export const empresaService = {
  getAll: async (): Promise<Empresa[]> => {
    const response = await api.get<{ empresas: Empresa[] }>('/empresas');
    return response.data.empresas;
  },

  getById: async (id: string): Promise<Empresa> => {
    const response = await api.get<{ empresa: Empresa }>(`/empresas/${id}`);
    return response.data.empresa;
  },

  create: async (data: Partial<Empresa>): Promise<Empresa> => {
    const response = await api.post<{ empresa: Empresa }>('/empresas', data);
    return response.data.empresa;
  },

  update: async (id: string, data: Partial<Empresa>): Promise<Empresa> => {
    const response = await api.put<{ empresa: Empresa }>(`/empresas/${id}`, data);
    return response.data.empresa;
  },

  delete: async (id: string): Promise<void> => {
    await api.delete(`/empresas/${id}`);
  },
};
