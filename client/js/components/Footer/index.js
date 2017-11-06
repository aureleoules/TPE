import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <span className="footer-title">TPE 2017-2018</span>
                            <br/>
                            Réalisé par <strong>Aurélien</strong>, <strong>Kristijan</strong> et <strong><a style={{color: "#363636", cursor: "default"}} href="https://github.com/aureleoules" target="_blank">Aurèle</a></strong>.
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;