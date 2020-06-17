import React from 'react';
import './SortingVisualizer.css'

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: []
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomInt(10,1000));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return (
            <>
            {array.map((val, idx) => (
                <div className="array-bar" key={idx}>
                    {val}
                </div>
            ))}
            </>
        );
    }
    
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}