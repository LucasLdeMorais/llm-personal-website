"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import pages from "../constants/pages";

export default function Navigation () {
    const pathname = usePathname();

    const StyledListItem = styled.li`
        display: inline-block;
        margin: 5px;
    `

    return (<>
        <nav>
            <ul>
                <ul>
                    {pages.map(page => {
                        return <StyledListItem key={page.pageName}>
                            <Link href={page.path} className={`link ${pathname === '/' ? 'active' : ''}`}>{page.pageName}</Link>
                        </StyledListItem>
                    })}
                </ul>
            </ul>
        </nav>
        
    </>)
}