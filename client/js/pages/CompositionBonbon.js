import React from 'react';

class CompositionBonbon extends React.Component {
    render() {
        return (
            <section className="center page composition">
                <div className="container text-container">
                    <h1 className="text-center title is-1">Composition d'un bonbon</h1>
                    <p> 
                        Le bonbon est aujourd’hui connu sous différentes formes et couleurs en fonction de <strong>l’arôme</strong> du bonbon.
                        <br/>
                        En premier lieu il est composé de <strong>saccharose</strong>:
                        <br/>
                        Le saccharose est le nom de la molécule de sucre. Sa formule est <strong>C12H22O11</strong> , c’est un isomère (Plusieurs molécules ont la même formule mais ils ont des propriétés chimique / physique différentes). 
                        <br/>
                        La masse molaire du saccharose est 342 g/mol et il est <strong>soluble dans l’eau</strong>. 
                    </p>
                </div>
            </section>
        )
    }
}

export default CompositionBonbon;