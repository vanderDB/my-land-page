import React from 'react';
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Footer} from "./components/Footer";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./@styled/GlobalStyle";
import {RootState} from './@redux/Store';
import {useSelector} from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home} from "./components/pages/Home";
import {Contact} from "./components/pages/Contact";
import {Team} from "./components/pages/Team";
import {Works} from "./components/pages/Works";
import {Services} from "./components/pages/Services";

function App() {

    const currentColorTheme = useSelector((state: RootState) => state.currentTheme.theme);

    return (
        <>
            <ThemeProvider theme={currentColorTheme}>
                <GlobalStyle/>
                <Router>
                    <Header/>
                    <Route path='/' exact component={Home}/>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/services' exact component={Services}/>
                    <Route path='/works' exact component={Works}/>
                    <Route path='/team' exact component={Team}/>
                    <Route path='/contact' exact component={Contact}/>
                </Router>
                <Body/>
                <Footer/>
            </ThemeProvider>
        </>
    );
}

export default App;
