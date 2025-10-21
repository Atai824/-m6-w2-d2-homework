import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  reset = ()=> {
    this.props.dispatch({
        type: 'RESET' 
    });
  };

    render() {
        return (
            <div className="counter box">
                <div className="counter-header">Counter</div>
                <div className="counter-body">
                    <span className="counter-badge me-2">{this.props.count}</span>
                    <button className="btn btn-light btn-sm me-2" onClick={this.decrement}>−</button>
                    <button className="btn btn-light btn-sm me-2" onClick={this.increment}>+</button>
                    <button className="btn btn-outline-secondary btn-sm" onClick={this.reset}>reset</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}


export default connect(mapStateToProps)(Counter);