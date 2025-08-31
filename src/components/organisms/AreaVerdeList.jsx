import { useState, useEffect } from 'react';
import AreaVerdeCard from './AreaVerdeCard';
import api from '../../services/api'; 
function AreaVerdeList() {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAreas() {
      try {
        const response = await api.get('/areasverdes'); 
        setAreas(response.data); 
      } catch (err) {
        setError('Falha ao buscar dados da API');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAreas();
  }, []);

  if (loading) return <p>Carregando áreas verdes...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="lista-areas">
      {areas.length === 0 ? (
        <p>Nenhuma área verde cadastrada ainda.</p>
      ) : (
        areas.map(area => <AreaVerdeCard key={area.id} area={area} />)
      )}
    </div>
  );
}

export default AreaVerdeList;