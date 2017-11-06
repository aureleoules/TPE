import React from 'react';

class Composition extends React.Component {


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
                    <p className="title">Composition</p>
                </div>
                <div className={`modal ${this.state.modal ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content animated fadeIn">
                        <button className="close is-large" aria-label="close" onClick={() => this.setState({modal: false})}><span className="fa fa-close"></span></button>
                        <div className="content-modal has-text-centered">
                            <h1>Composition</h1>
                            <p>
                                La majorité des bonbons sont composés de:
                            </p>
                            <ul style={{listStyleType: "circle"}}>
                                <li>Saccharose</li>
                                <li>Sirop de glucose</li>
                                <li>Additifs</li>
                                <li>Acide citrique</li>
                                <li>Arômes</li>
                                <li>Gélifiants (Gélatine de porc / Amidon / Agar-Agar...)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Composition;