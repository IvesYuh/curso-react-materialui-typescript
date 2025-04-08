import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext, useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOption } = useDrawerContext();

    useEffect(() => {
        setDrawerOption([
            {
                icon: "home",
                label: "Página Inicial",
                path: "/pagina-inicial"
            },
        ]);
    }, []);

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>toggle drawer</Button>} />

            <Route path="*" element={<Navigate to="/pagina-inicial" />}/>
        </Routes>
    );
}