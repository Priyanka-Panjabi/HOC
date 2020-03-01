import React, { Component } from 'react' ;
import withCounter from './hoc/withCounter' ;

class HoverCounter extends Component {
    render() {
        return (
            <div>
                <button onMouseOver ={this.props.incrementCount}>Click {this.props.count} times</button>
            </div>
        )
    }
}

export default withCounter(HoverCounter) ;
