import React, { Component } from 'react'
import Axios from 'axios'

export class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: "",
            title: "",
            body: "",
        }
    }

    changeHandler = (event) => {
        this.setState(
            { [event.target.name]: event.target.value }
        )
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state);
        Axios.post("https://jsonplaceholder.typicode.com/posts",  this.state)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} >
                <div>
                    <label htmlFor="userid">User Id : </label>
                    <input
                        type="text" name='userId'
                        value={this.state.userId}
                        onChange={this.changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="title">Title : </label>
                    <input
                        type="text" name='title'
                        value={this.state.title}
                        onChange={this.changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="body">Body : </label>
                    <input
                        type="text" name='body'
                        value={this.state.body}
                        onChange={this.changeHandler}
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default PostForm


/*
    We have created a form to collect the data and post it in the server using axios
    We will be posting data to the endpoint -> https://jsonplaceholder.typicode.com/posts
    
    Steps to Send the data
    1. import the axios library.
    2. In the submitHandler(), we will make the post request using axios.post() method.
    3. The post method takes a 2nd argument which is the data that has to be sent.
    4. Once the request is complete, we either get a response or an error.
        then() - accepts an arrow function as its argument which gives us access to the response.
        catch() - accepts an arrow function as its argument which gives us access to the error if something goes wrong.
*/
