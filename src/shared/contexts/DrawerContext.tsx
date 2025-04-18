import React, { createContext, ReactNode, useCallback, useContext, useState } from "react";

interface IDrawerOption {
  icon: string;
  path: string;
  label: string;
}

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOption[];
  setDrawerOption: (newDrawerOptions: IDrawerOption[]) => void;
}

interface AppThemeProviderProps {
  children: ReactNode; 
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => (!oldDrawerOpen));
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);
  
  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOption: handleSetDrawerOptions }}>
          {children}
    </DrawerContext.Provider>
  );
};