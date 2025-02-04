import './App.css'
import styled from "styled-components";
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { WorkPlatform } from './layout/sections/workPlatform/WorkPlatform';
import { About } from './layout/sections/about/About';
import { Help } from './layout/sections/help/Help';
import { Reviews } from './layout/sections/reviews/Reviews';
import { Contact } from './layout/sections/contact/Contact';
import { Footer } from './layout/footer/Footer';

function App() {
    
    return (
        <div className="App">
            <AppWrapper>
                <Header />
                <Main />
                <WorkPlatform />
                <About />
                <Help />
                <Reviews />
                <Contact />
                <Footer />
            </AppWrapper>
        </div>
    )
}

export default App

const AppWrapper = styled.div`
    max-width: 1150px;
    margin: 0 auto;
    width: 100%;
`;
