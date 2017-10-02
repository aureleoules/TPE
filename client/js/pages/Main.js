import React from 'react';
import CompositionBonbon from './CompositionBonbon';
import DifferentesGelatines from './DifferentesGelatines';

class Main extends React.Component {

    render() {
        return(
            <div style={{minHeight: "100vh"}}>
                <section className="hero is-fullheight is-primary" id="hero">
                    <div className="hero-body">
                        <div className="container has-text-centered tracking-in-expand not-selectable">
                        <h1 className="title home-hero-title">
                            Sujet de TPE:
                        </h1>
                        <h2 className="subtitle home-hero-subtitle">
                            Comment faire un bonbon végétarien?
                        </h2>
                         <p className="home-hero-credits">
                            Réalisé par <b>Aurélien</b>, <b>Kristijan</b> et <b>Aurèle</b>.
                        </p>
                        </div>
                    </div>
                </section>
                <CompositionBonbon/>
                <DifferentesGelatines/>
            </div>
        )
    }
}

export default Main;