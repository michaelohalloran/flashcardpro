import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class StackForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            cards: []
        }
        this.addCard = this.addCard.bind(this);
    }

    addCard() {
        const {cards} = this.state;
        cards.push({id: cards.length, prompt: '', answer: ''});
        this.setState({cards});
    }

    render() {
        console.log('StackForm state', this.state);
        return (
            <div>
                <Link className="link-home" to='/'>
                    <h4>Home</h4>
                </Link>
                <h4>Create New Stack</h4>
                <br/>

                <Form inline>
                    <FormGroup>
                        <ControlLabel>Title: </ControlLabel>
                        {' '}
                        <FormControl onChange={event=>this.setState({title: event.target.value})}/>
                    </FormGroup>
                    {
                        this.state.cards.map((card, index)=> {
                            return (
                                <div key={card.id}>
                                    <br/>
                                    <FormGroup>
                                        <ControlLabel>Prompt:</ControlLabel>
                                        {' '}
                                        <FormControl 
                                            onChange={event=>{
                                                const {cards} = this.state;
                                                cards[index].prompt = event.target.value;
                                            }
                                        }
                                        />
                                        {' '}
                                        <ControlLabel>Answer:</ControlLabel>
                                        {' '}
                                        <FormControl 
                                            onChange={event=>{
                                                const {cards} = this.state;
                                                cards[index].prompt = event.target.value
                                            }
                                        }
                                        />
                                    </FormGroup>
                                </div>
                            )
                        })
                    }
                </Form>
                <br/>
                <Button onClick={this.addCard}>Add Card</Button>
            </div>
        );
    }
}
export default StackForm;