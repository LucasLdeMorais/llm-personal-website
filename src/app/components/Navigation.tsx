"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import pages from "../constants/pages";
import { useThemeContext } from "./ThemedLayout";

export default function Navigation () {
    const pathname = usePathname();
    const { currentTheme } = useThemeContext();

    const StyledList = styled.ul`
        padding: 0;
        margin: 0 0 10px 0;
        
        & li {
            display: inline-block;
            padding: 5px;
        }
    `

    const StyledNav = styled.nav`
        width: 100%;
        bottom: 0;
        position: relative;
    `

    return (<>
        <StyledNav>
            <StyledList>
                {pages.map(page => {
                    return <li key={page.pageName}>
                        <Link href={page.path} className={`link ${pathname === '/' ? 'active' : ''}`}>{page.pageName}</Link>
                    </li>
                })}
            </StyledList>
        </StyledNav>
    </>)
}