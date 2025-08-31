import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

function AreaVerdeForm() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [vegetacao, setVegetacao] = useState('');
  const [horarios, setHorarios] = useState('');
  const [atividades, setAtividades] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    const novaArea = {
      nome: nome,
      localizacao: {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
      tipoVegetacao: vegetacao,
      horariosFuncionamento: horarios,
      atividadesDisponiveis: atividades.split(',').map(item => item.trim()),
    };

    fetch('http://localhost:8080/areasverdes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaArea),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Falha ao cadastrar. Verifique os dados.');
      }
      return response.json();
    })
    .then(data => {
      setSuccess(true);
      setTimeout(() => navigate('/areas'), 1500);
    })
    .catch(err => {
      setError(err.message);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="form-area">
      <h3>Cadastrar Nova Área Verde</h3>
      {success && <p className="success-message">Área cadastrada! Redirecionando...</p>}
      {error && <p className="error-message">{error}</p>}
      
      <Input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome da Área" required />
      <Input type="number" value={latitude} onChange={e => setLatitude(e.target.value)} placeholder="Latitude" required />
      <Input type="number" value={longitude} onChange={e => setLongitude(e.target.value)} placeholder="Longitude" required />
      <Input type="text" value={vegetacao} onChange={e => setVegetacao(e.target.value)} placeholder="Tipo de Vegetação" required />
      <Input type="text" value={horarios} onChange={e => setHorarios(e.target.value)} placeholder="Horário (ex: 08:00-18:00)" required />
      <Input type="text" value={atividades} onChange={e => setAtividades(e.target.value)} placeholder="Atividades (separadas por vírgula)" required />
      
      <Button type="submit">Cadastrar</Button>
    </form>
  );
}

export default AreaVerdeForm;