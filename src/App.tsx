import React from 'react';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./@styled/GlobalStyle";
import {RootState} from './@redux/Store';
import {useSelector} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import {Body} from './components/Body';

function App() {

    const currentColorTheme = useSelector((state: RootState) => state.currentTheme.theme);

    return (
        <>
            <ThemeProvider theme={currentColorTheme}>
                <GlobalStyle/>
                <Router>
                    <Header/>
                    <Body/>
                    <Footer/>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
