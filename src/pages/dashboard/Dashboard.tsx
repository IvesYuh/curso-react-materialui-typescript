import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

   
   
   export const DashBoard = () => {
        return(
            <LayoutBaseDePagina
             titulo='Página Inicial' 
             barraDeFerramentas={(
                <FerramentasDeDetalhe 
                mostrarBotaoNovo 
                mostrarBotaoSalvarEFechar 
                mostrarBotaoSalvarEFecharCarregando
                mostrarBotaoVoltar={false}
                />
             )}
             >
                Testando
            </LayoutBaseDePagina>
        );
    };