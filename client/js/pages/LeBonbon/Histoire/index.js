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
                        <div className="content-modal has-text-centered">
                            <h1>L'histoire du bonbon</h1>
                            <p>
                                Les premières friandises ont été réalisés à l’antiquité. Il s’agissait de petits mets au miel. Vers l’époque romaine, la population consommait des des dragées et des pâtes de fruits. Dès le 12eme siècle la canne à sucre est découverte, elle est rare et coûte très chère. Elle était importée de Moyen-Orient puis d’amérique au 16ème siècle. Finalement, le sucre de la betterave a réussi à être extrait de celle-ci en 1747 par un chimiste allemand. Ce qui a permis par la suite l’extraction industrielle par un français. La France est d’ailleurs le plus gros producteur de betterave sucrière dans le monde devant la russie et l’allemagne. C’est donc la betterave sucrière qui est aujourd'hui utilisée pour la fabrication de bonbons.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Histoire;