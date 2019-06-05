import React, {Component} from 'react'

class QuizQuestionButton extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <li>
               <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button> 
            </li>
        );
    }
    
    handleClick() {
        this.props.clickHandler(this.props.button_text);
    }
}

QuizQuestionButton.propTypes = {};

export default QuizQuestionButton;