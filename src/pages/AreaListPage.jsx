import React from 'react';
import AreaVerdeList from '../components/organisms/AreaVerdeList';

function AreaListPage() {
  return (
    <div>
      <h2>Todas as Áreas Verdes Cadastradas</h2>
      <p>Explore todos os locais registrados no nosso sistema.</p>
      <AreaVerdeList />
    </div>
  );
}

export default AreaListPage;