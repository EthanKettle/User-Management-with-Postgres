import React from 'react';

class App extends React.Component{
  state = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    age: 0,

  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });

  };

  submit = (event) => {
    event.preventDefault
  }

  render() {
    return (
      <div>
        <h2>Database App</h2>
        <form onSubmit={this.submit}>
          <div class="form-input">
            <input type="Number" name="id" placeholder="id" value={this.state.id} onChange={this.handleChange}/>
          </div>
          <div class="form-input">
            <input type="text" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/>
          </div>
          <div class="form-input">
            <input type="text" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/>
          </div>
          <div class="form-input">
            <input type="text" name="email" placeholder="Email@example" value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div class="form-input">
            <input type="Number" name="age" placeholder="0" value={this.state.age} onChange={this.handleChange}/>
          </div>
          <button>Submit Form</button>
        </form>
      </div>
    );
  }
}

export default App;