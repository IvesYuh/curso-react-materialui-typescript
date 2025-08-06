import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';
import { FerramentasDeDetalhe } from '../../shared/components';
import { useNavigate, useParams } from 'react-router-dom';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { VTextField } from '../../shared/forms';
import { useState, useEffect } from 'react';
import { Form } from '@unform/web';


export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState('');

  useEffect(() => {
    if (id !== 'nova') {
      setIsLoading(true);

      PessoasService.getById(Number(id))
        .then((result) => {
          setIsLoading(false);

          if (result instanceof Error) {
            alert(result.message);
            navigate('/pessoas');
          } else {
            setNome(result.nomeCompleto);
            console.log(result);
          }
        });
    }
  }, [id]);

  const handleSave = () => {
    console.log('Save');
  };
  
  const handleDelete = (id: number) => {
    if (confirm('Realmente deseja apagar?')) {
      PessoasService.deleteById(id)
        .then(result => {
          if (result instanceof Error) {
            alert(result.message);
          } else {
            alert('Registro apagado com sucesso!');
            navigate('/pessoas');
          }
        });
    }
  };

  return (
    <LayoutBaseDePagina
      titulo={id === 'nova' ? 'Nova Pessoa' : nome}
      barraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo='Nova'
          mostrarBotaoSalvarEFechar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}

          aoClicarEmSalvar={handleSave}
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmSalvarEFechar={handleSave}
          aoClicarEmVoltar={() => navigate('/pessoas')}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
        />
      }
    >

<Form onSubmit={(dados) => console.log(dados)}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
  >

  <VTextField name="nomeCompleto"/>
  <button type="submit">Submit</button>
</Form>

    </LayoutBaseDePagina>
  );
};