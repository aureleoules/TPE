import React from 'react';

class Footer extends React.Component {
    render() {
        const link = {
            color: "#363636",
            cursor: "text"
        }
        return(
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <span className="footer-title">TPE 2017-2018</span>
                            <br/>
                            Réalisé par 
                            <strong><a style={link} href="https://github.com/Aurelienpt" target="_blank"> Aurélien</a></strong>
                            , <strong><a style={link} href="https://www.instagram.com/____kristijan____/" target="_blank">Kristijan </a></strong>
                            et <strong><a style={link} href="https://github.com/aureleoules" target="_blank">Aurèle</a></strong>.
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;