import React from 'react';
import Preparation from './Preparation';
import Protocole from './Protocole';
import Bilan from './Bilan';

class FabricationDuBonbonVegetarien extends React.Component {
    render() {
        return (
            <section id="fabrication" className="page center parallax fabrication-vegetarien" style={{backgroundImage: "url(images/fabrication.jpeg)"}}>
                <div className="container">
                    <h1 className="text-center title is-1">Fabrication du bonbon végétarien</h1>
                    <div className="parties parties-3">
                        <Preparation/>
                        <Protocole/>
                        <Bilan/>
                    </div>
                </div>
            </section>
        )
    }
}

export default FabricationDuBonbonVegetarien;