import './App.css'
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
            <Header />
            <Main />
            <WorkPlatform />
            <About />
            <Help />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
