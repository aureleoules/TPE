import React from 'react';
import navRoutes from './navRoutes';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Home from '../../pages/Home';
class App extends React.Component {

    render() {
        return(
            <div>
                {/*<Navbar items={navRoutes}/>*/}
                <Home/>
                <Footer/>
            </div>
        )
    }
}

export default App;