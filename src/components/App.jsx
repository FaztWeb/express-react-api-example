import React, { Component } from 'react';
import request from 'superagent';

class App extends Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentWillMount() {
      request
        .get('http://localhost:3000/api/users')
        .end((err, res) => {
          const users = JSON.parse(res.text).users;
          this.setState({
            users: users
          });
        });
  }

  render() {
    var users = this.state.users.map((user, i) => {
      return <li key={i}>{user.nombre}</li>
    });
    return(
      <div>
        <h1>Mi Aplicación Modificada</h1>
        <ul>
          {users}
        </ul>
      </div>

    )
  }
}

export default App;
