import React, { useState, useEffect } from 'react';
import AreaVerdeCard from './AreaVerdeCard';

function AreaVerdeList() {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/areasverdes')
      .then(response => {
        if (!response.ok) throw new Error('Falha ao buscar dados da API');
        return response.json();
      })
      .then(data => {
        setAreas(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
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