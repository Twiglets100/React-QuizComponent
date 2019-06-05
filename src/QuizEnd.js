import React, {Component} from "react";

class QuizEnd extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a href=''>Reset Quiz</a>
            </div>
        );
    }
}

QuizEnd.propTypes = {};

export default QuizEnd;