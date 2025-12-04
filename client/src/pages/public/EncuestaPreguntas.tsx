import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encuestaService } from '../../services/encuestaService';

interface Opcion {
  letra: string;
  texto: string;
}

interface Pregunta {
  numero: number;
  texto: string;
  opciones: Opcion[];
}

const EncuestaPreguntas = () => {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const codigo = sessionStorage.getItem('encuesta_codigo');
  const encuestaData = sessionStorage.getItem('encuesta_data');

  useEffect(() => {
    if (!codigo || !encuestaData) {
      navigate('/encuesta');
      return;
    }

    fetchPreguntas();
  }, []);

  const fetchPreguntas = async () => {
    try {
      const response = await encuestaService.obtenerPreguntas();

      // Transformar las preguntas del backend al formato que espera el frontend
      const preguntasTransformadas = response.preguntas.map((p: any) => ({
        numero: p.numero,
        texto: p.texto,
        opciones: [
          { letra: 'A', texto: p.opcionA },
          { letra: 'B', texto: p.opcionB },
          { letra: 'C', texto: p.opcionC },
          { letra: 'D', texto: p.opcionD },
        ],
      }));

      setPreguntas(preguntasTransformadas);
    } catch (error) {
      console.error('Error al cargar preguntas:', error);
      setError('Error al cargar las preguntas');
    } finally {
      setLoading(false);
    }
  };

  const handleSiguiente = async () => {
    if (!opcionSeleccionada || !codigo) return;

    setGuardando(true);
    setError('');

    try {
      const pregunta = preguntas[preguntaActual];
      await encuestaService.guardarRespuesta(codigo, pregunta.numero, opcionSeleccionada);

      // Si es la última pregunta, finalizar encuesta
      if (preguntaActual === preguntas.length - 1) {
        await encuestaService.finalizarEncuesta(codigo);
        sessionStorage.clear();
        navigate('/encuesta/gracias');
      } else {
        // Pasar a la siguiente pregunta
        setPreguntaActual(preguntaActual + 1);
        setOpcionSeleccionada(null);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al guardar respuesta');
    } finally {
      setGuardando(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Cargando preguntas...</div>
      </div>
    );
  }

  if (error && preguntas.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md">
          <div className="text-red-600 text-center">
            <p className="text-lg font-semibold mb-2">Error</p>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  const pregunta = preguntas[preguntaActual];
  const progreso = ((preguntaActual + 1) / preguntas.length) * 100;
  const data = encuestaData ? JSON.parse(encuestaData) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-xl shadow-lg p-4">
          <div className="flex items-center justify-center mb-3">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          </div>
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                {data?.encuestado?.nombre || 'Encuestado'}
              </h2>
              <p className="text-xs text-gray-500">
                {data?.encuestado?.empresa?.nombre || ''}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-blue-600">
                {preguntaActual + 1} / {preguntas.length}
              </p>
              <p className="text-xs text-gray-500">Preguntas</p>
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progreso}%` }}
            ></div>
          </div>
        </div>

        {/* Pregunta */}
        <div className="bg-white shadow-lg p-4 mt-1">
          <h1 className="text-lg font-bold text-gray-900 mb-4 text-center">
            {pregunta?.texto}
          </h1>

          {/* Opciones como tarjetas */}
          <div className="grid gap-2 mb-4">
            {pregunta?.opciones.map((opcion) => (
              <button
                key={opcion.letra}
                onClick={() => setOpcionSeleccionada(opcion.letra)}
                className={`p-3 rounded-lg border-2 text-left transition-all duration-200 ${
                  opcionSeleccionada === opcion.letra
                    ? 'border-blue-600 bg-blue-50 shadow-lg transform scale-105'
                    : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-start">
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold mr-3 text-sm ${
                      opcionSeleccionada === opcion.letra
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {opcion.letra}
                  </div>
                  <p className={`text-sm flex-1 ${
                    opcionSeleccionada === opcion.letra
                      ? 'text-blue-900 font-medium'
                      : 'text-gray-700'
                  }`}>
                    {opcion.texto}
                  </p>
                  {opcionSeleccionada === opcion.letra && (
                    <svg
                      className="w-5 h-5 text-blue-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>

          {error && (
            <div className="mb-3 bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-lg text-xs">
              {error}
            </div>
          )}

          {/* Botón siguiente */}
          <button
            onClick={handleSiguiente}
            disabled={!opcionSeleccionada || guardando}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg"
          >
            {guardando
              ? 'Guardando...'
              : preguntaActual === preguntas.length - 1
              ? 'Finalizar Encuesta'
              : 'Siguiente Pregunta'}
          </button>
        </div>

        {/* Indicador de pregunta actual */}
        <div className="bg-white rounded-b-xl shadow-lg p-3 mt-1">
          <p className="text-center text-xs text-gray-500">
            {opcionSeleccionada
              ? 'Opción seleccionada. Haz clic en "Siguiente" para continuar.'
              : 'Selecciona una opción para continuar.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EncuestaPreguntas;
