import React from 'react';

class App extends React.Component{
  render() {
    return (
      <div>
        <h2>Database App</h2>
        <form>
          <div class="form-input">
            <input type="Number" name="id" value="" onChange={id}/>
          </div>
          <div class="form-input">
            <input type="text" name="firstName" value="" onChange={firstName}/>
          </div>
          <div class="form-input">
            <input type="text" name="lastName" value="" onChange={lastName}/>
          </div>
          <div class="form-input">
            <input type="text" name="email" value="" onChange={email}/>
          </div>
          <div class="form-input">
            <input type="Number" name="age" value="" onChange={age}/>
          </div>
          <button>Submit Form</button>
        </form>
      </div>
    );
  }
}

export default App;