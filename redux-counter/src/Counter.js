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
            <div className="card m-3" style={{ maxWidth: 360 }}>
                <div className="card-header fw-bold">Counter</div>
                <div className="card-body bg-info p-3">
                    <span className="badge bg-light text-dark me-2">{this.props.count}</span>
                    <button className="btn btn-sm btn-light me-2" onClick={this.decrement}>−</button>
                    <button className="btn btn-sm btn-light me-2" onClick={this.increment}>+</button>
                    <button className="btn btn-sm btn-outline-secondary" onClick={this.reset}>reset</button>
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