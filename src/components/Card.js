import React from 'react';

class Card extends React.Component {
    constructor() {
        super();
        this.state = {reveal: false};
    }

    render() {
        const {prompt, answer} = this.props.card;
        return (
            <div className="card-outer" onClick={()=>this.setState({reveal: !this.state.reveal})}>
                <div className="card-prompt">
                    <h4>{prompt}</h4>
                </div>
                <div className="card-answer">
                    <h4 className={this.state.reveal ? 'text-revealed' : 'text-hidden' }>
                        {answer}
                    </h4>
                </div>
            </div>
        );
    }
}

export default Card;