import React from 'react';

class Fabrication extends React.Component {

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
                    <p className="title">Fabrication</p>
                </div>
                <div className={`modal ${this.state.modal ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content animated fadeIn">
                        <button className="close is-large" aria-label="close" onClick={() => this.setState({modal: false})}><span className="fa fa-close"></span></button>
                        <div className="content-modal has-text-centered">
                            <h1>Fabrication</h1>
                            <div style={{flex: 1, alignContent: "center", textAlign: "center"}}>
                                <iframe src="https://player.vimeo.com/video/180163754" width="640" height="360" frameBorder={0} allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fabrication;