import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";
import React from "react";

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,
}) => {
    const theme = useTheme();

    return(<Box 
        height={theme.spacing(5)} 
        margin={1} 
        padding={2} 
        display={"flex"} 
        gap={1} 
        alignItems={"center"} 
        component={Paper}
        >
            {mostrarBotaoSalvar && (<Button
                color="primary"
                disableElevation
                variant="contained"
                startIcon={<Icon>save</Icon>}
            >Salvar</Button>)}
            {mostrarBotaoSalvarEFechar && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>save</Icon>}
            >Salvar e voltar</Button>)}
            {mostrarBotaoApagar && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>delete</Icon>}
            >Apagar</Button>)}
            {mostrarBotaoNovo && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>add</Icon>}
            >{textoBotaoNovo}</Button>)}

            <Divider variant="middle" orientation="vertical"/>

            {mostrarBotaoVoltar && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>arrow_back</Icon>}
            >Voltar</Button>)}
        </Box>
    );
};