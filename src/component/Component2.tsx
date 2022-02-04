import React from 'react';
import Component3 from './Component3';

interface IState {
    counter: any;
}

class Component2 extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    handleEventClick: any = () => { //autobinding ini, daripada pake bind di constructor
        console.log("button clicked...")
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        console.log("render component 2 called...")
        return (
            <div>
                <h1>
                    {this.state.counter}
                </h1>
                <button type="button" onClick={this.handleEventClick}>
                    click me
                </button>
                <div>
                    {this.state.counter % 3 == 0 && this.state.counter !== 0 ? (
                        <Component3/>
                    ) : (
                        null
                    )}
                </div>
            </div>
        )
    }
}

export default Component2