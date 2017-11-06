import React from 'react';
import Histoire from './Histoire';
import Composition from './Composition';
import EffetsSurLaSante from './EffetsSurLaSante';
import Fabrication from './Fabrication';

class LeBonbon extends React.Component {
    
    scroll = () => {
        document.querySelector('#alternative').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    render() {
        return (
            <section id="bonbon" className="page center lebonbon">
                <div className="container">
                    <h1 className="text-center title is-1">Le bonbon</h1>
                    <div className="parties parties-4">
                        <Histoire/>
                        <Composition/>
                        <EffetsSurLaSante/>
                        <Fabrication/>
                    </div>
                </div>
                <a onClick={this.scroll} ><span></span>Une Alternative Végétarienne</a>
            </section>
        )
    }
}

export default LeBonbon;