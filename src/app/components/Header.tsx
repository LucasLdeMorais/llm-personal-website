"use client";

import { type MouseEvent, ChangeEvent, useRef } from "react";
import * as ThemeConfig from "../constants/ThemeConfig";
import type { Theme } from "../constants/ThemeConfig";
import ThemedLayout, { useThemeContext } from "./ThemedLayout";
import styled from "styled-components";
import Navigation from "./Navigation";

export default function Header() {
    const { setTheme, currentTheme } = useThemeContext();

    function handleToggleDarkMode(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const newTheme: Theme = ThemeConfig.invertTheme(currentTheme);
        console.log(newTheme.colors)
        setTheme(ThemeConfig.invertTheme(currentTheme));
    }

    function handleChangeTheme(e: ChangeEvent<HTMLSelectElement>) {
        e.preventDefault();
        setTheme(ThemeConfig.Themes.find(
            el => el.themeName === e.currentTarget.value
        ) || ThemeConfig.leafTheme);
    }

    const StyledHeader = styled.header`
        position: relative;
        color: ${currentTheme.colors.secondary};
        top: 0;
        right: 0;
        min-height: max-content;
        background-color: ${currentTheme.colors.primary};
        border-bottom: 5px ridge ${currentTheme.colors.secondary};
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    `

    const StyledHeading = styled.h2`
        margin: 0;
        padding: 10px;
    `

    const ThemeManagementWrapper = styled.div`
        padding: 10px;

        & button {
            margin-left: 5px;
        }

        & select {
            margin-right: 10px;
        }
    `

    return <StyledHeader>
        <StyledHeading>LLM</StyledHeading>
        <ThemeManagementWrapper>
            <label>Themes:</label><br/>
            <select onChange={(e) => handleChangeTheme(e)} name="Themes" value={currentTheme.themeName}>
                { ThemeConfig.Themes.map( (theme, index) => {
                    return (index == 0? <option key={theme.themeName} value={theme.themeName}>
                        {theme.themeName}
                    </option> : <option key={theme.themeName} value={theme.themeName}>
                        {theme.themeName}
                    </option>)
                })}
            </select>
            <button onClick={(e) => handleToggleDarkMode(e)}>dark mode</button>
        </ThemeManagementWrapper>
    </StyledHeader>
}