
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { DashBoard } from "../pages";

export const AppRoutes = () => {
    const { setDrawerOption } = useDrawerContext();

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
            <Route path="/pagina-inicial" element={<DashBoard />} />

            <Route path="*" element={<Navigate to="/pagina-inicial" />}/>
        </Routes>
    );
}