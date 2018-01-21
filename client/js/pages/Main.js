import React from 'react';
import LeBonbon from '../pages/LeBonbon';
import UneAlternativeVegetarienne from '../pages/UneAlternativeVegetarienne';
import FabricationDuBonbonVegetarien from '../pages/FabricationDuBonbonVegetarien';
import ScrollReveal from 'scrollreveal';
window.sr = ScrollReveal({ reset: true });

class Main extends React.Component {

    componentDidMount() {
        sr.reveal('.title');
        sr.reveal('.partie');
        sr.reveal('.home-hero-credits');
        sr.reveal('h2');
    }

    scroll = () => {
        document.querySelector('#bonbon').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    render() {
        return(
            <div style={{minHeight: "100vh"}}>
                <section className="page hero is-fullheight is-primary" id="hero">
                    <div style={{justifyContent: "center"}} className="hero-body">
                        <div className="container has-text-centered tracking-in-expand not-selectable">
                        <h1 className="title home-hero-title">
                            Sujet de TPE:
                        </h1>
                        <h2 className="subtitle home-hero-subtitle">
                        Comment remplacer la gélatine de porc afin de faire un bonbon végétarien?
                        </h2>
                         <p className="home-hero-credits">
                            Réalisé par <b>Aurélien</b>, <b>Kristijan</b> et <b>Aurèle</b>.
                        </p>
                        </div>
                    <a className="white" onClick={this.scroll}><span></span>Commencer</a>
                    </div>
                </section>
                <LeBonbon/>
                <UneAlternativeVegetarienne/>
                <FabricationDuBonbonVegetarien/>

            </div>
        )
    }
}

export default Main;