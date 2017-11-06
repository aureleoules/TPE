import React from 'react';
import Raisons from './Raisons';
import Composants from './Composants';

class UneAlternativeVegetarienne extends React.Component {

    scroll = () => {
        document.querySelector('#fabrication').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    render() {
        return (
            <section id="alternative" className="page is-primary center alternative">
                <div className="container">
                    <h1 className="text-center title is-1">Une Alternative Végétarienne</h1>
                    <div className="parties parties-2">
                        <Raisons/>
                        <Composants/>
                    </div>
                </div>
                <a className="white" onClick={this.scroll}><span></span>Fabrication du bonbon végétarien</a>
            </section>
        )
    }
}

export default UneAlternativeVegetarienne;