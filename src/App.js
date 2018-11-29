import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';

class App extends Component {
  state = {
    isLoggedIn: false,
    user: null,
  }

  toggleLogIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  }

  setUser = (userData) => {
    this.setState({
      user: userData,
      isLoggedIn: true,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="MainLayout__root">
        <Header isLoggedIn={this.state.isLoggedIn} toggleLogIn={this.toggleLogIn} />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" render={props => <SignUp {...props} setUser={this.setUser} />} />
          <Route path="/home/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;




