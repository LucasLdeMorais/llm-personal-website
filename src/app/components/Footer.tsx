"use client";

import styled from "styled-components";

const StyledFooter = styled.footer`
    position: relative;
    top: auto;
    right: 0;
    bottom: 0;
    width: 100%;
    min-height: 100px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-left: 1px solid black;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    

    & h2 {
        width: min-content;
        position: relative;
        left: 10px;
    }
`

const Footer = () => {
    return <>
        <StyledFooter>
            <h2>Footer</h2>
        </StyledFooter>
    </> 
}

export default Footer;