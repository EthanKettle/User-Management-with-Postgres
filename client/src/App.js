import React, {useState} from 'react';
import axios from 'axios';

const idRan = Math.floor(Math.random()*100000)

class App extends React.Component{
  state = {
    id: idRan,
    fName: '',
    lName: '',
    email: '',
    age: 0,
    users: []
  }

  componentDidMount = () => {
    this.getUseData();
  }

  getUseData = () => {
    axios.get('http://localhost:8080/api')
    .then((response) => {
      const data = response.data;
      console.log(data)
      console.log('Successfully read data')
      this.setState({users: data})
      console.log({users: data})

    })
    .catch((error) => {
      console.log('Data not found')
    })
  }

  handleChange = ({ target }) => {
    const {name, value} = target;
    this.setState({[name]: value});
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      id: this.state.id,
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      age: this.state.age
    };

    axios({
      url: 'http://localhost:8080/api/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to server');
      this.resetInput();
      this.displayUserData();
    })
    .catch((error) => {
      console.log('ERROR');
    });;
  }

  resetInput = () => {
    this.setState({
      id: idRan,
      fName: '',
      lName: '',
      email: '',
      age: 0,
    })
  };

  displayUserData = (users) => {
    console.log("user data sent here");
    console.log(users);
    if (!users.length) return null;
    return users.map((user, index) => {
      return <tr key={index}>
        <td>{user.id}</td>
        <td>{user.fName}</td>
        <td>{user.lName}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
        <td><button>Edit</button></td>
        <td><button>Delete</button></td>
      </tr>
    });

    // EditUser = () => {
    //   console.log("Edit Works");
    // };

    // DeleteUser = () => {
    //   console.log("Delete Works");
    // }
  }

  render() {
    return (
      <div>
        <h2>Database App</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input type="Number" name="id" placeholder="id" value={this.state.id} onChange={this.handleChange}/>
          </div>
          <div className="form-input">
            <input type="text" name="fName" placeholder="First Name" value={this.state.fName} onChange={this.handleChange}/>
          </div>
          <div className="form-input">
            <input type="text" name="lName" placeholder="Last Name" value={this.state.lName} onChange={this.handleChange}/>
          </div>
          <div className="form-input">
            <input type="text" name="email" placeholder="Email@example" value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div className="form-input">
            <input type="Number" name="age" placeholder="0" value={this.state.age} onChange={this.handleChange}/>
          </div>
          <button>Submit Form</button>
        </form>
        <table className='userData'>
          {this.displayUserData(this.state.users)}
        </table>
      </div>
    );
  }
}

export default App;