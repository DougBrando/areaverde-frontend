import AreaVerdeList from '../components/organisms/AreaVerdeList';
import { useEffect } from 'react';

function AreaListPage() {

  useEffect(() => {
    document.title = 'AreaVerde - Todas as Áreas';
  }, []);

  return (
    <div>
      <h2>Todas as Áreas Verdes Cadastradas</h2>
      <p>Explore todos os locais registrados no nosso sistema.</p>
      <AreaVerdeList />
    </div>
  );
}

export default AreaListPage;