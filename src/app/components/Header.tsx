"use client";

import { type MouseEvent, ChangeEvent, useRef } from "react";
import * as ThemeConfig from "../constants/ThemeConfig";
import type { Theme } from "../constants/ThemeConfig";
import ThemedLayout, { useThemeContext } from "./ThemedLayout";
import styled from "styled-components";

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
        width: 99%;
        min-height: 100px;
        border: 5px ridge ${currentTheme.colors.secondary};
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        background-color: ${currentTheme.colors.primary};
    `

    return <StyledHeader>
        <h2>LLM</h2>
        <button onClick={(e) => handleToggleDarkMode(e)}>dark mode</button>
        <label>Themes</label>
        <select onChange={(e) => handleChangeTheme(e)} name="Themes" value={currentTheme.themeName}>
            { ThemeConfig.Themes.map( (theme, index) => {
                return (index == 0? <option key={theme.themeName} value={theme.themeName}>
                    {theme.themeName}
                </option> : <option key={theme.themeName} value={theme.themeName}>
                    {theme.themeName}
                </option>)
            })}
        </select>
    </StyledHeader>
}