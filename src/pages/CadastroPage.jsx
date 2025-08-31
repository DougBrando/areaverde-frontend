import { useEffect } from 'react';
import AreaVerdeForm from '../components/organisms/AreaVerdeForm';

function CadastroPage() {

    useEffect(() => {
    document.title = 'AreaVerde - Cadastrar Nova Área';
  }, []);

  return (
    <div>
      <AreaVerdeForm />
    </div>
  );
}

export default CadastroPage;