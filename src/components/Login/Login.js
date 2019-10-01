import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Form from '../Form/Form';
import Button from '../Button/Button';
import Input from '../Input/Input';

import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      processing: false,
      background: (props.backgroundImage)
        ? `url(${props.backgroundImage}) no-repeat center center`
        : '#717681',
    }
  }

  login = () => {
    this.setState({ processing: true });

    alert(JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    }));
  }

  handleChange = prop => {
    return ({ target }) => this.setState({
      [prop]: target.value
    });
  }

  reset = () => {
    this.setState({
      username: '',
      password: '',
    });
  }

  render() {
    return (
      <div
        class="login"
        style={{
          background: this.state.background,
          backgroundSize: 'cover',
        }}
      >
        <Container fluid>
          <Row nogutter>
            <Col lg={4} md={6} offset={{ lg: 8, md: 6 }}>
              <Row
                justify="center"
                align="center"
                className="login__container"
              >
                <Col>
                  <Form onSubmit={this.login}>
                    <Input
                      label="Username"
                      icon="fa-user"
                      disabled={this.state.processing}
                      value={this.state.username}
                      onChange={this.handleChange('username')}
                    />

                    <Input
                      label="Password"
                      type="password"
                      icon="fa-lock"
                      disabled={this.state.processing}
                      style={{ marginTop: 15 }}
                      value={this.state.password}
                      onChange={this.handleChange('password')}
                    />

                    <div style={{ display: 'flex', marginTop: 15 }}>
                      <Button
                        type="submit"
                        primary
                        label="Login"
                        disabled={this.state.processing}
                        loading={this.state.processing}
                      />

                      <Button
                        label="Reset"
                        type="reset"
                        disabled={this.state.processing}
                        style={{ marginLeft: 4 }}
                        onClick={this.reset}
                      />
                    </div>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;