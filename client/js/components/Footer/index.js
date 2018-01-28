import React from 'react';

class Footer extends React.Component {
    render() {
        const link = {
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
                        <p>
                            Site developpé par Aurèle
                            <br/>
                            <a href="https://github.com/aureleoules/TPE" target="_blank">
                                <img src="images/github.png" width="64"/>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;