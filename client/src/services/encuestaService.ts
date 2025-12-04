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

  obtenerPreguntasE9: async () => {
    const response = await api.get('/encuesta/e9/preguntas');
    return response.data;
  },

  guardarRespuestaE9: async (codigo: string, grupo: number, opcion: string) => {
    const response = await api.post('/encuesta/e9/respuesta', {
      codigo,
      grupo,
      opcion,
    });
    return response.data;
  },

  finalizarEncuesta: async (codigo: string) => {
    const response = await api.post('/encuesta/finalizar', { codigo });
    return response.data;
  },
};
