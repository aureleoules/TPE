import React from 'react';

class Home extends React.Component {

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
            </div>
        )
    }
}

export default Home;