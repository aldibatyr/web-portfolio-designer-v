import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      error: null,
      usernameValid: false,
      animateUsernameInput: false,
      password: '',
      passwordValid: false,
      animatePasswordInput: false,
      buttonDisabled: true,
      validLoginUsername: 'Alice',
      validLoginPassword: 'Wonderland!2',
      loginSuccess: null
    }
  }

  setUsername = (e) => {
    this.setState({
      animateUsernameInput: false
    })
    if (e.target.value.toLowerCase() === 'alice') {
      this.setState({
        username: e.target.value,
        usernameValid: true
      })
    } else {
      this.setState({
        username: e.target.value,
        usernameValid: false,
      })
    }
  }

  setPassword = (e) => {
    this.setState({
      animatePasswordInput: false
    })
    if (e.target.value === 'Wonderland!2') {
      this.setState({
        password: e.target.value,
        passwordValid: true
      })
    } else {
      this.setState({
        password: e.target.value,
        passwordValid: false,
      })
    }

  }

  validateLoginCredentials = () => {
    if (this.state.usernameValid && !this.state.passwordValid) {
      this.setState({
        error: 'Password is not valid',
        loginSuccess: false,
        animatePasswordInput: true,
      })
    } else if (!this.state.usernameValid && this.state.passwordValid) {
      this.setState({
        error: 'Username is not valid',
        loginSuccess: false,
        animateUsernameInput: true,
      })
    } else if (!this.state.usernameValid && !this.state.passwordValid) {
      this.setState({
        error: 'Username and Password are not valid',
        loginSuccess: false,
        animateUsernameInput: true,
        animatePasswordInput: true,
      })
    } else {
      this.setState({
        error: null,
        loginSuccess: true
      })
    }
  }

  goBackClick = () => {
    this.setState({
      loginSuccess: false
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateLoginCredentials()
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    const isEnabled = this.state.password.length > 0 && this.state.username.length > 0
    return (
      <TransitionGroup component={null}>
        {(this.state.loginSuccess) ?
          <CSSTransition
            timeout={800}
            classNames='my-node'
          >
            <div className='successLogin'>
              <h1>You made it!</h1>
              <span role='img' aria-label='accessible-emoji'>🥳🎉🎉</span>
              <br/>
              <button onClick={this.goBackClick} className='goBackButton' type='submit'>Go back</button>
            </div>
          </CSSTransition>
          :
          // <CSSTransition
          //   timeout={800}
          //   classNames='back'
          // >
          <div className='formContainer'>
            <form onSubmit={(e) => this.handleSubmit(e)} className='formExample'>
              <div className='formSection'>
                <label className='label' htmlFor='username'>
                  Type `Alice` to login
                </label>
                <input onChange={(e) => this.setUsername(e)} className={(this.state.animateUsernameInput) ? 'input shake' : 'input'} type='text' id='username' name='username' placeholder='Username' value={this.state.username} required />
              </div>
              <div className='formSection'>
                <label className='label' htmlFor='password'>
                  Type `Wonderland!2` to login
                </label>
                <input onChange={(e) => this.setPassword(e)} className={(this.state.animatePasswordInput) ? 'input shake' : 'input'} type='password' id='password' name='password' placeholder='Password' value={this.state.password} required />
              </div>
              <div className='formActions'>
                <button className={(!isEnabled) ? 'buttonDisabled' : 'button'} type='submit' disabled={!isEnabled}>Submit</button>
              </div>
              <div className='error'>
                {(this.state.error) ? <p>{this.state.error}</p> : <></>}
              </div>
            </form>
          </div>
          // </CSSTransition>
        }
      </TransitionGroup>
    )
  }
}