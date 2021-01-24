import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostList extends Component {

    // implement the "createListItems" fuction
    createListItems() {
        // map the property(Allposts array)
        return this.props.AllPosts.map((post) => {
            return (
                <li key={post.id}>Title: {post.title} <br></br> Body:{post.body}</li>
            )
        })
    }

    render() {
        if (!this.props.AllPosts) {
            return (<h1>Click the button</h1>)
        }
        return (
            // call to the "createListItems" function
            <ul>
                {this.createListItems()}
            </ul>
        )
    }
}
// take the data from store which related to the "PostList" component
function mapStateToProps(state) {
    return {
        // create the "Allposts" property in component(it take from state)
        AllPosts: state.allposts
    }

}

export default connect(mapStateToProps)(PostList)