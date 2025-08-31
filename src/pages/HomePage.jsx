import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AreaVerdeCard from '../components/organisms/AreaVerdeCard';

function HomePage() {
  const [recentAreas, setRecentAreas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/areasverdes')
      .then(res => res.json())
      .then(data => {
        const latestThree = data.reverse().slice(0, 3);
        setRecentAreas(latestThree);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar áreas recentes:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="hero-section">
        <h2>Bem-vindo ao AreaVerde!</h2>
        <p>
          Uma iniciativa para mapear, avaliar e promover os espaços verdes da nossa cidade.
          Cadastre um parque, praça ou reserva e ajude a construir um ambiente mais sustentável.
        </p>
        <Link to="/cadastrar" className="cta-button">
          Cadastrar uma Área Agora
        </Link>
      </div>

      <div className="preview-section">
        <h3>Áreas Adicionadas Recentemente</h3>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <div className="lista-areas">
            {recentAreas.length > 0 ? (
              recentAreas.map(area => <AreaVerdeCard key={area.id} area={area} />)
            ) : (
              <p>Nenhuma área cadastrada ainda. Seja o primeiro!</p>
            )}
          </div>
        )}
        <div className="see-all-link">
          <Link to="/areas">Ver todas as áreas cadastradas →</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;