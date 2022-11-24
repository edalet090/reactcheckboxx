import React, { Component } from "react";
import './Wovqu.css'

class Oglan extends Component {
    state = {
        name: "Adalat",
        email: "edaletmollayev090@gmail.com",
        password: "wowqo12345",
        check:false
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    deleteInput1 = () => {
        this.setState({ name: "" })
    }
    deleteInput2 = () => {
        this.setState({ email: "" })
    }
    deleteInput3 = () => {
        this.setState({ password: "" })
    }
    isActive = () => {
        this.setState({check:!this.state.check})
    }
    render() {

        return (

            <div className="App">
                <label htmlFor="name">Name :
                    <input type="text" value={this.state.name} id="name" name="name" onChange={this.handleInput} />
                </label> <button onClick={this.deleteInput1}>x</button>
                <br></br>
                <label htmlFor="email">Email :
                    <input type="text" value={this.state.email} id="email" name="email" onChange={this.handleInput} />
                </label><button onClick={this.deleteInput2}>x</button>
                <br></br>
                <label htmlFor="password">Pswrd :
                    <input type={this.state.check?"text":"password"} value={this.state.password} id="password" name="password"
                     onChange={this.handleInput} />
                </label><button onClick={this.deleteInput3}>x</button>
                <br></br>
                <label> show password
         <input
           type="checkbox"
           checked={this.state.isActive}
           onClick={this.isActive}
         />
       </label>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}
 export default Oglan