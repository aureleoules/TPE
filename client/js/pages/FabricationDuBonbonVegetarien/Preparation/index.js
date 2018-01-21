import React from 'react';

class Preparation extends React.Component {

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
                    <p className="title">Préparation</p>
                </div>
                <div className={`modal ${this.state.modal ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content animated fadeIn">
                        <button className="close is-large" aria-label="close" onClick={() => this.setState({modal: false})}><span className="fa fa-close"></span></button>
                        <div className="content-modal">
                            <h1 className="has-text-centered">Préparation</h1>
                            <div className="columns" style={{marginTop: 15}}>
                                <div className="column">
                                    <img src="/images/sugar.jpeg"/>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        Nous allons réaliser trois bonbons:
                                        <ul>
                                            <li>Au jus de raison</li>
                                            <li>A la banane</li>
                                            <li>A la betterave</li>
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

export default Preparation;