import React from 'react';
import { FaMapMarkerAlt, FaTree, FaClock, FaClipboardList } from 'react-icons/fa';
import parkImage from '../../assets/park-placeholder.jpg';

function AreaVerdeCard({ area }) {
  return (
    <div className="card-v2">
      <img src={parkImage} alt={`Foto ilustrativa de ${area.nome}`} className="card-v2-image" />
      
      <div className="card-v2-content">
        <h3 className="card-v2-title">{area.nome}</h3>
        
        <div className="card-v2-info">
          <p className="info-item">
            <FaMapMarkerAlt className="info-icon" /> 
            Lat: {area.localizacao?.latitude}, Lon: {area.localizacao?.longitude}
          </p>
          <p className="info-item">
            <FaTree className="info-icon" />
            {area.tipoVegetacao}
          </p>
          <p className="info-item">
            <FaClock className="info-icon" />
            {area.horariosFuncionamento}
          </p>
        </div>
        
        <div className="card-v2-tags-container">
          <h4 className="tags-title"><FaClipboardList /> Atividades</h4>
          <div className="tags-list">
            {area.atividadesDisponiveis.map((atividade, index) => (
              <span key={index} className="tag">{atividade}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaVerdeCard;