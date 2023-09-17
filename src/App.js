import React, {Component} from "react";
import './style.scss';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    newCount(directions) {
        const num = this.state.counter;
        if (directions === 'inc') {
            if (num < 5) this.setState({counter: this.state.counter + 1});
        } else {
            if (num > 0) this.setState({counter: this.state.counter - 1});
        }
    }

    render() {
        return (
            <div>
                <p style={{color: "red"}}>Test Component</p>
                <p>Count: {this.state.counter}</p>
                <button
                    onClick={() => this.newCount('inc')}
                >Increment
                </button>
                <button
                    onClick={() => this.newCount('dec')}
                >Decrement
                </button>
            </div>
        );
    }
}