"use client";

import styled from "styled-components";
import { useThemeContext } from "./ThemedLayout";
import Link from 'next/link';

const Footer = () => {
    const { currentTheme } = useThemeContext();

    const StyledFooter = styled.footer`
        position: relative;
        color: ${currentTheme.colors.secondary};
        top: auto;
        right: 0;
        bottom: 0;
        width: 99%;
        min-height: 100px;
        border: 5px ridge ${currentTheme.colors.secondary};
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        background-color: ${currentTheme.colors.primary};

        & h4 {
            margin: 10px auto;
            width: max-content;
            position: relative;
            left: 10px;
        };

        & ul {
            padding: 0;
            margin: 10px auto;
            width: max-content;

        }
    `

    const StyledListItem = styled.li`
        display: inline-block;
        margin: 5px;

        & a {
            text-decoration: none;
            color: ${currentTheme.colors.secondary};
        }

        & a:hover {
            text-decoration: underline;
        }

        & a:first-of-type {

        }
    `

    const links = [
        {
            link: "",
            linkName: "instagram"
        },
        {
            link: "",
            linkName:"linkedin"
        },
        {
            link: "/contato",
            linkName:"contato"
        }
    ]

    return <>
        <StyledFooter>
            <h4>Lucas L. M.</h4>
            <ul>
                {
                    links.map( (link, index, arr) => {
                        return <>
                            { (index == 0 || index == arr.length)? 
                             <></> : 
                             <span className="separator">|</span>
                            }
                            <StyledListItem>    
                                <Link className="footer-link" href={link.link}>{link.linkName}</Link>
                            </StyledListItem>
                        </>
                    })
                }
            </ul>
        </StyledFooter>
    </> 
}

export default Footer;