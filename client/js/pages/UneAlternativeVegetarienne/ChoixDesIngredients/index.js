import React from 'react';

class ChoixDesIngredients extends React.Component {
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
                    <p className="title">Choix des ingrédients</p>
                </div>
                <div className={`modal ${this.state.modal ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content fade-in">
                        <button className="close is-large" aria-label="close" onClick={() => this.setState({modal: false})}>
                            <img src="images/close.png"/>
                        </button>                        <div className="content-modal is-default">
                            <h1 className="has-text-centered" style={{color: "#4a4a4a"}}>Choix des ingrédients</h1>
                            <div className="columns" style={{marginTop: 15}}>
                                <div className="column">
                                    <img src="images/agar-agar.jpg"/>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        Choix des ingrédients:
                                        <ul>
                                            <li>Agar-agar (utilisé pour ce TPE)</li>
                                            <li>Alginate de sodium</li>
                                            <li>Pectine</li>
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

export default ChoixDesIngredients;