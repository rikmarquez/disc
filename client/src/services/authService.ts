import api from './api';
import type { AuthResponse, LoginData, RegisterData, Usuario } from '../types/index.js';

export const authService = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/login', data);
    return response.data;
  },

  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/auth/register', data);
    return response.data;
  },

  me: async (): Promise<Usuario> => {
    const response = await api.get<Usuario>('/auth/me');
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};
