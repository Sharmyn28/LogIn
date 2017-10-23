import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col, FormGroup, InputGroup, FormControl, Form, Button } from 'react-bootstrap';

class Log extends Component {
  render() {
    return (
      <Form>
        <h1>Login</h1>
        <p>Sign In to your account</p>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon><i className="fa fa-user-o" aria-hidden="true"></i></InputGroup.Addon>
            <FormControl type="text" placeholder="Username" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon><i className="fa fa-lock" aria-hidden="true"></i></InputGroup.Addon>
            <FormControl type="text" placeholder="Password" />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Row>
            <Col md={6} sm={6}>
              <Button type="submit" className="btn-primary">
                Log in
          </Button>
            </Col>
            <Col md={6} sm={6}>
              <a>Forget password?</a>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    )
  }
}

class Register extends Component {
  render() {
    return (
      <Form>
        <h1> Sign up </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do eiusmod tempor acedcindunt ut labore et dolore magna aligua. </p>
        <FormGroup>
          <Button type="submit" className='btn-primary'>
            Register Now!
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

class LogIn extends Component {
  render() {
    return (
      <Grid className='card-group'>
        <Row >
          <Col md={6} sm={12} className='card'>
            <Col className="form-card">
              <Log />
            </Col>
          </Col>
          <Col className='card bg-primary' smHidden xsHidden>
            <Col className="card-register">
              <Register />
            </Col>
          </Col>
        </Row>
      </Grid>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <LogIn />
      </div>
    );
  }
}

export default App;
