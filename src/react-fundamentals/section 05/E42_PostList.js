import React, { Component } from 'react'
import Axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ""
        }
    }

    componentDidMount() {
        // Axios.get("https://jsonplaceholder.typicode.com/postsX") // to get an error
        Axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                console.log(response);
                this.setState({ posts: response.data })
            })
            .catch((error) => {
                console.log(error);
                this.setState({ errorMsg: "Error retrieving data !" })
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                <h3>List of Posts</h3>
                { posts.length ?
                        posts.map((post) => {
                            return <p key={post.id}>{post.title}</p>
                        }) :
                        null
                }
                { errorMsg ? <div>{errorMsg}</div> : null }
            </div>
        )
    }
}

export default PostList

/*
    We will be using the json placeholder API to fetch data : https://jsonplaceholder.typicode.com/
    We will be gtting the data from the endpoint -> https://jsonplaceholder.typicode.com/posts

    Steps to fetch the data
    1. import the axios library.
    2. Create a state property which will store a list of posts.
    3. Use axios to make a GET request to the json placeholder API.
        a. The code to make the GET request should be placed in the componentDidMount() lifecycle method. This method gets executed when the component mounts for the first time & is executed only once during component lifecycle.
        b. To make a GET request, we invoke the get() method on the axios library.
        c. This method accepts the API endpoint as its argument in string format.
        d. Now after making the GET request, we need to access the data that is returned,
            Since axios is a promise based library, we can add then and catch blocks.
            then() - accepts an arrow function as its argument which gives us access to the response.
            catch() - accepts an arrow function as its argument which gives us access to the error if something goes wrong.
        e. Now we can assign the data array that we got to the state property and render it in the JSX.
        f. In the render method, first we will destructure the state property, then render it using map method.

    Initially in the constructor, we have a state property called posts which is an empty array
    Then control flows to the render method and the text "List of Posts" gets displayed, but the actual list is not rendered because the array posts is empty at the moment.
    Then the control flows to component did mount, where we make our GET request to API endpoint
    Once the data is retrieved, we then update the state posts property. 
    And when we change the state, the component gets re-rendered, this time the array is not empty hence the list of titles is rendered in the browser.
*/
