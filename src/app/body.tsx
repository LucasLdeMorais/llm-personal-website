"use client";

import { Inter } from 'next/font/google';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { useThemeContext } from './components/ThemedLayout';
import styled from 'styled-components';
  
  
const inter = Inter({ subsets: ["latin"] });

const Body = ({children}: Readonly<{children: React.ReactNode}>) => {
    const { currentTheme } = useThemeContext();

    const StyledBody = styled.body`
        background-color: ${currentTheme.colors.bg};
    `

    const StyledHtml = styled.html`
        background-color: ${currentTheme.colors.fg};
    `

    return  <StyledHtml lang="en">
        <StyledBody className={inter.className}>
            <Header/>
            <Navigation />
            {children}
            <Footer/>
        </StyledBody>
    </StyledHtml>
}

export default Body;
    