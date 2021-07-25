import React from 'react';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./@styled/GlobalStyle";
import {RootState} from './@redux/Store';

import ThemeSelector from "./components/ThemeSelector";
import {useSelector} from "react-redux";

function App() {

    const currentColorTheme = useSelector((state: RootState) => state.currentTheme.theme);

    return (
        <>
            <ThemeProvider theme={currentColorTheme}>
                <GlobalStyle/>
                <ThemeSelector/>
                <Header/>
                <Body/>
                <Footer/>
            </ThemeProvider>
        </>
    );
}

export default App;
