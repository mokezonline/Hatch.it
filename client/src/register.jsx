import React from 'react';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = { event };
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    //save user to db
    event.preventDefault();
  }

  render() {
    const { username, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" value={ email } onChange={this.handleChange} />
        </label>
        <label>
          Username:
          <input type="text" name="username" value={ username } onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={this.handleChange} />
        </label>
        <button type="submit" value="Submit" />
      </form>
    );
  }
}

export default Register;