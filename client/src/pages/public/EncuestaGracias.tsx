const EncuestaGracias = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Icono de éxito */}
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Mensaje */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            ¡Encuesta Completada!
          </h1>
          <p className="text-gray-600 mb-8">
            Gracias por completar la encuesta DISC. Tus respuestas han sido guardadas exitosamente.
          </p>

          {/* Información adicional */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-blue-900 font-medium mb-2">
              ¿Qué sigue?
            </p>
            <p className="text-sm text-blue-800">
              Tu perfil DISC será procesado y los resultados estarán disponibles pronto.
              Tu empresa se pondrá en contacto contigo para compartir tu reporte personalizado.
            </p>
          </div>

          {/* Indicador de completado */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>30 preguntas respondidas</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Ya puedes cerrar esta ventana
          </p>
        </div>
      </div>
    </div>
  );
};

export default EncuestaGracias;
