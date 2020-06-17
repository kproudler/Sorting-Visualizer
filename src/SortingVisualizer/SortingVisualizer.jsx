import React from 'react';
import './SortingVisualizer.css'
import * as SortingAlgorithms from '../SortingAlgorithms/sortingAlgorithms'

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
        for (let i = 0; i < 400; i++) {
            array.push(randomInt(10,600));
        }
        this.setState({array});
    }

    bubbleSort() {
        const sortedArray = SortingAlgorithms.bubbleSort(this.state.array);
        console.log(sortedArray);
        this.forceUpdate();

    }

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
            {array.map((val, idx) => (
                <div className="array-bar"
                key={idx}
                style={{height: `${val}px`}}>
                </div>
            ))}
            <br/>
            <button onClick={() => this.resetArray()}>Reset the Array!</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort!</button>
            </div>
        );      
    }
    
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}