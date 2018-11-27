import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  toggleLogIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  }

  render() {
    return (
      <div className="MainLayout__root">
        <Header isLoggedIn={this.state.isLoggedIn} toggleLogIn={this.toggleLogIn} />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/home/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;




