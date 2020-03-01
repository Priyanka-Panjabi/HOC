import React, { Component } from 'react' ;
import withCounter from './hoc/withCounter' ;

class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick= {this.props.incrementCount}>On {this.props.count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter) ;
