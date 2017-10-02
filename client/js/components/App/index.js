import React from 'react';
import navRoutes from './navRoutes';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Main from '../../pages/Main';
class App extends React.Component {

    render() {
        return(
            <div>
                {/*<Navbar items={navRoutes}/>*/}
                <Main/>
                <Footer/>
            </div>
        )
    }
}

export default App;