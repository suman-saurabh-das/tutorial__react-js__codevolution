import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comments: "",
            skill: "React",
            gender: "",
        }
    }

    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value })
    }
    handleCommentsChange = (event) => {
        this.setState({ comments: event.target.value })
    }
    handleSkillChange = (event) => {
        this.setState({ skill: event.target.value })
    }
    handleGenderChange = (event) => {
        this.setState({ gender: event.target.value })
    }
    handleSubmit = (event) => {
        alert(`Name: ${this.state.username} Comments: ${this.state.comments} Skill: ${this.state.skill} Gender: ${this.state.gender}`)
        event.preventDefault()
    }

    render() {
        const { username, comments, skill } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username : </label>
                    <input type="text" value={username} onChange={this.handleUsernameChange} />
                </div><br />
                <div>
                    <label htmlFor="comment">Comments : </label>
                    <textarea type="text" cols={20} rows={5} value={comments} onChange={this.handleCommentsChange} />
                </div><br />
                <div>
                    <label htmlFor="skill">Skill : </label>
                    <select name="skill" value={skill} onChange={this.handleSkillChange}>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                </div><br />
                <div>
                    <label htmlFor="gender">Gender : </label>
                    <input type="radio" name='genderSelect' value={"Male"} onChange={this.handleGenderChange} /> Male
                    <input type="radio" name='genderSelect' value={"Female"} onChange={this.handleGenderChange} /> Female
                    <input type="radio" name='genderSelect' value={"Other"} onChange={this.handleGenderChange} /> Others
                </div><br />
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

export default Form

/*
    Note - Initially form elements are not controlled elements as their state is handled by the HTML components.
    Steps to convert HTML form elements into controlled components -
    
        Step 1 - Create a component state that can control the value of the input element.
        Step 2 - Handling the onChange event.

    When we assign a handler to the onChange event, the event itself is passed as a parameter to the handler. We can extract the value of element using event.target.value

    Default behaviour of form button is to reload the page.
    We can have a JS method to handle form submission and this method will also have access to the form data.
    NOTE - for submit button onSubmit handler method is in form element and not in submit button.
    To prevent the page from refereshing when submitted, we can use event.preventDefault()
*/
