import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

   
   
   export const DashBoard = () => {
        return(
            <LayoutBaseDePagina
             titulo='Página Inicial' 
             barraDeFerramentas={(
                <FerramentasDaListagem 
                    mostrarInputBusca
                    textoBotaoNovo="New"
                />
             )}>
                Testando
            </LayoutBaseDePagina>
        );
    };