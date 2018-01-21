import React from 'react';

class Histoire extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    render() {
        return (
            <div>
                <div onClick={() => this.setState({modal: true})} className="tile is-child box partie">
                    <p className="title">Histoire</p>
                </div>
                <div className={`modal ${this.state.modal ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content animated fadeIn">
                        <button className="close is-large" aria-label="close" onClick={() => this.setState({modal: false})}><span className="fa fa-close"></span></button>
                        <div className="content-modal">
                            <h1 className="has-text-centered">L'histoire du bonbon</h1>
                            <div className="columns" style={{marginTop: 15}}>
                                <div className="column">
                                    <img src="/images/intro.jpeg"/>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        <ul>
                                            <li>Plus de 67 000 tonnes de bonbons gélifiés vendus par an</li>
                                            <li>Deux types: origine <b>végétale</b> ou <b>animale</b></li>
                                            <li>Premières friandises ont été réalisées sous l’Antiquité</li>
                                            <li>Canne à sucre découverte au XIIème siècle</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Histoire;