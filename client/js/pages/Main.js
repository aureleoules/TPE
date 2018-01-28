import React from 'react';
import LeBonbon from '../pages/LeBonbon';
import UneAlternativeVegetarienne from '../pages/UneAlternativeVegetarienne';
import FabricationDuBonbonVegetarien from '../pages/FabricationDuBonbonVegetarien';
import ScrollReveal from 'scrollreveal';
window.sr = ScrollReveal({ reset: true });

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

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

    onSubjectClick = () => {
        this.setState({count: this.state.count + 1});
        if(this.state.count === 10) {
            this.props.snow();
        }

    }

    render() {
        return(
            <div style={{minHeight: "100vh"}}>
                <section className="page hero is-fullheight is-primary parallax main" id="hero" style={{backgroundImage: "url(images/main.jpg)"}}>
                    <div style={{justifyContent: "center"}} className="hero-body">
                        <div className="container has-text-centered tracking-in-expand not-selectable">
                        <h1 className="title home-hero-title" onClick={() => this.onSubjectClick()}>
                            Sujet de TPE:
                        </h1>
                        <h2 className="subtitle home-hero-subtitle">
                        Comment remplacer la gélatine de porc dans un bonbon?
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