import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login = (                             //implenting JSX for login
      <form action='#' onSubmit = {this.authorize}>
        <input 
          type = 'password'
          placeholder = 'Password'/>
        <input type = 'submit'/>
      </form>
      );
    const contactInfo = (               //implementing JSX for contactInfo
      <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
      </ul>
    );
    let cond1 = 'Contact'          //variable for the h1 tag
    if(this.state.authorized){             //condition for checking the state
      cond1 = 'Contact'
    }
    else{
      cond1 = 'Enter the Password' //if not verified h1 tag should be this
    }
    return (
      <div id="authorization">
        <h1>{cond1}</h1>
        {this.state.authorized ? contactInfo : login}
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);
