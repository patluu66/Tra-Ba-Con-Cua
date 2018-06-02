import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from './components/contact.js';
import About from './components/about.js';
import MainPage from './components/mainPage.js';
import Login from './components/login.js';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
import Background from './images/teaBackground.png';


var sectionStyle = {
  height: "100px",
  backgroundImage: `url(${Background})`
};



class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Router>
         <div>
          <Navbar color="light" light expand="md" style={ sectionStyle }>
            <NavbarBrand href="/"><h1>TBCC Tea Factory</h1></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
               <NavItem>
                 <Link className="menu" to={'/'}>Shop</Link>
               </NavItem>
               <NavItem>
                 <Link className="menu" to={'/About'}>About</Link>
               </NavItem>
               <NavItem>
                <Link className="menu" to={'/Contact'}>Contact</Link>
               </NavItem>
               <NavItem>
                <Link className="menu" to={'/Login'}>Login</Link>
               </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

            <Switch>
               <Route exact path='/' component={MainPage} />
               <Route exact path='/About' component={About} />
               <Route exact path='/Login' component={Login} />
               <Route exact path='/Contact' component={Contact} />
            </Switch>

         </div>

      </Router>
    );
  }
}

export default App;
