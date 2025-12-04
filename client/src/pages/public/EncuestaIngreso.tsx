import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encuestaService } from '../../services/encuestaService';

const EncuestaIngreso = () => {
  const [codigo, setCodigo] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await encuestaService.validarCodigo(codigo.trim().toUpperCase());

      // El backend responde con "message" cuando es válido
      if (response.message === 'Código válido' || response.encuestado) {
        // Guardar datos en sessionStorage
        sessionStorage.setItem('encuesta_codigo', codigo.trim().toUpperCase());
        sessionStorage.setItem('encuesta_data', JSON.stringify(response));

        // Redirigir a la encuesta
        navigate('/encuesta/preguntas');
      } else {
        setError('Código no válido');
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Código no válido o encuesta ya completada');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Encuesta DISC
            </h1>
            <p className="text-gray-600">
              Ingresa tu código para comenzar
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="codigo" className="block text-sm font-medium text-gray-700 mb-2">
                Código de acceso
              </label>
              <input
                id="codigo"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg font-mono uppercase"
                placeholder="DISC-XXXXXX"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value.toUpperCase())}
                maxLength={20}
              />
              <p className="mt-2 text-sm text-gray-500">
                Formato esperado: DISC-XXXXXX
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !codigo.trim()}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? 'Validando...' : 'Comenzar Encuesta'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Este código te fue proporcionado por tu empresa. Si no lo tienes, contacta a tu supervisor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncuestaIngreso;
