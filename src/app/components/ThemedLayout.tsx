"use client"

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import * as ThemeConfig from "../constants/ThemeConfig";
import type { Theme } from "../constants/ThemeConfig";

// Interface para o contexto do tema
interface ThemeContextInterface {
    currentTheme: Theme,
    setTheme: Dispatch<SetStateAction<Theme>>
}

// Criação do contexto do tema
const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);

// Hook personalizado para acessar o contexto do tema
export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext deve ser utilizado dentro de um ThemeProvider");
    }
    return context;
}

export default function ThemedLayout({ children }: Readonly<{children: React.ReactNode}>) {
    const [theme, setTheme] = useState(ThemeConfig.leafTheme);

    // Define o contexto do tema
    const themeContextValue: ThemeContextInterface = {
        currentTheme: theme,
        setTheme: setTheme
    };

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={themeContextValue}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
}
