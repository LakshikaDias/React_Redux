import React, { Component } from 'react';
import { fetchPosts } from '../action/postAction';
import { bindActionCreaters } from 'redux';
import { connect } from 'react-redux';

class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.fetchPosts()}>Click Me</button>
            </div>
        )
    }
}

// second parameter of connect function 
function matchDispatchToProps(dispatch) {
    return bindActionCreaters({ fetchPosts: fetchPosts }, dispatch)
}

// connect function (this function has two parameters)
export default connect(null, matchDispatchToProps)(Button)