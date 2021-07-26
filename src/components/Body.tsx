import {Home} from "./pages/Home";
import {Services} from "./pages/Services";
import {Works} from "./pages/Works";
import {Team} from "./pages/Team";
import {Contact} from "./pages/Contact";
import React from "react";
import {Route} from 'react-router-dom';
import styled from "styled-components";

export function Body() {
    return (
        <StyledBody>
            <Route path='/' exact component={Home}/>
            <Route path='/home' exact component={Home}/>
            <Route path='/services' exact component={Services}/>
            <Route path='/works' exact component={Works}/>
            <Route path='/team' exact component={Team}/>
            <Route path='/contact' exact component={Contact}/>
        </StyledBody>
    );
}

const StyledBody = styled.div`
  min-height: 650px;
`;

