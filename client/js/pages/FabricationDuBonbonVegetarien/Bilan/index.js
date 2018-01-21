import React from 'react';

class Bilan extends React.Component {

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
                    <p className="title">Bilan</p>
                </div>
                <div className={`modal ${this.state.modal ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content fade-in">
                    <button className="close is-large" aria-label="close" onClick={() => this.setState({modal: false})}>
                        <img src="/images/close.png"/>
                    </button>                        <div className="content-modal">
                            <h1 className="has-text-centered">Bilan</h1>
                            <div className="columns" style={{marginTop: 15}}>
                                <div className="column">
                                    <img src="/images/result.jpg"/>
                                </div>
                                <div className="column">
                                    <div className="content">
                                        <p style={{margin: 0}}>
                                        Nous avons obtenu des bonbons mangeables, d'arôme de jus de raisin. La texture de ces bonbons étaient trop simple, et peu agréable en bouche. De plus, les bonbons étaient trop sucrés.
                                        </p>
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

export default Bilan;