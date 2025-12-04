import api from './api';

export const encuestaService = {
  validarCodigo: async (codigo: string) => {
    const response = await api.post('/encuesta/validar-codigo', { codigo });
    return response.data;
  },

  obtenerPreguntas: async () => {
    const response = await api.get('/encuesta/preguntas');
    return response.data;
  },

  guardarRespuesta: async (codigo: string, numeroPregunta: number, opcionSeleccionada: string) => {
    const response = await api.post('/encuesta/respuesta', {
      codigo,
      numeroPregunta,
      opcionSeleccionada,
    });
    return response.data;
  },

  finalizarEncuesta: async (codigo: string) => {
    const response = await api.post('/encuesta/finalizar', { codigo });
    return response.data;
  },
};
