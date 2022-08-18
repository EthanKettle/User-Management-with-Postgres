import React from 'react';

class App extends React.Component{
  state = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    age: 0,

  }
  render() {
    return (
      <div>
        <h2>Database App</h2>
        <form>
          {/* <div class="form-input">
            <input type="Number" name="id" placeholder="id" value="" onChange={id}/>
          </div> */}
          <div class="form-input">
            <input type="text" name="firstName" placeholder="First Name" value="" onChange={firstName}/>
          </div>
          <div class="form-input">
            <input type="text" name="lastName" placeholder="Last Name" value="" onChange={lastName}/>
          </div>
          <div class="form-input">
            <input type="text" name="email" placeholder="Email@example" value="" onChange={email}/>
          </div>
          <div class="form-input">
            <input type="Number" name="age" placeholder="0" value="" onChange={age}/>
          </div>
          <button>Submit Form</button>
        </form>
      </div>
    );
  }
}

export default App;