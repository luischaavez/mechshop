import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';

const theme = {
    mainColor: '#25292d',
    secondaryColor: '#ffffff',
    color: '#8096a4',
    maxWidth: '1000px',
};

const StyledPage = styled.div`
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.secondaryColor};
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        font-family: 'radnika_next';
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.mainColor};
    }
`;

const Page = (props) => (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <GlobalStyle />
            <StyledPage>
                <Header />
                <Inner>
                    {props.children}
                </Inner>
            </StyledPage>         
        </React.Fragment>
    </ThemeProvider>
)


export default Page;