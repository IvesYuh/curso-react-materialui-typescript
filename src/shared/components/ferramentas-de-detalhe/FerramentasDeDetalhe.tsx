import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;

    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvarEFecharCarregando?: boolean;

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

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarEFecharCarregando = false,
    
    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,
}) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (<Button
                color="primary"
                disableElevation
                variant="contained"
                startIcon={<Icon>save</Icon>}
            >
                    <Typography variant="button" whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
                        Salvar
                    </Typography>
                </Button>)}

                {mostrarBotaoSalvarCarregando && (
                    <Skeleton width={110} height={60}/>
                    )}

            {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>save</Icon>}
            >
                    <Typography variant="button" whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
                        Salvar e voltar 
                    </Typography>
                </Button>)}
            
            {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
                <Skeleton width={180} height={60}/>
                )}

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>delete</Icon>}
            >
                    <Typography variant="button" whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
                        Apagar
                    </Typography>
                </Button>)}

                {mostrarBotaoApagarCarregando && (
                    <Skeleton width={110} height={60}/>
            )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>add</Icon>}
            >
                    <Typography variant="button" whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
                        {textoBotaoNovo}
                    </Typography>
                </Button>)}

                {(mostrarBotaoNovoCarregando && !smDown) && (
                    <Skeleton width={110} height={60}/>
            )}

           {
            (
                mostrarBotaoVoltar && 
                (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)
            ) && (
                <Divider variant="middle" orientation="vertical"/>
            )
           } 

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (<Button
                color="primary"
                disableElevation
                variant="outlined"
                startIcon={<Icon>arrow_back</Icon>}
            >
                    <Typography variant="button" whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
                        Voltar
                    </Typography>
                </Button>)}
            
                {mostrarBotaoVoltarCarregando && (
                    <Skeleton width={180} height={60}/>
            )}

        </Box>
    );
};