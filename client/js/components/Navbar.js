import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    getItems = () => {
        return this.props.items.map((item, i) => {
            const icon = `icon-r fa fa-${item.icon}`;
            return (
                <a key={item.title} className="navbar-item">
                    <span className="icon">
                        <i className={icon}></i>
                    </span>
                    {item.title}
                </a>
            );
        });
    }

    render() {
        return(
            <nav className="nav has-shadow">
                <div className="container">
                    <div className="nav-left">
                        <a className="nav-item">
                            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo"/>
                        </a>
                        <a className="nav-item is-tab is-hidden-mobile is-active">Accueil</a>
                        <a className="nav-item is-tab is-hidden-mobile">Composition d'un bonbon</a>
                        <a className="nav-item is-tab is-hidden-mobile">Gélatine de porc</a>
                    </div>
                    <span className="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div className="nav-right nav-menu">
                        <a className="nav-item is-tab is-hidden-tablet is-active">Accueil</a>
                        <a className="nav-item is-tab is-hidden-tablet">Composition d'un bonbon</a>
                        <a className="nav-item is-tab is-hidden-tablet">Gélatine de porc</a>
                    </div>
                </div>
            </nav>
        )
    }
}


export default Navbar;
