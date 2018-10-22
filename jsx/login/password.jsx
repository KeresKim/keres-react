const React = require('react')
const ReactDOM = require('react-dom')
//const generatePassword = require('../js/generate-password.js')

const rules = require('./rules.js')

//const PasswordGenerate = require('./password-generate.jsx')
//const PasswordInfo = require('./password-info.jsx')
const PasswordInput = require('./password-input.jsx')
const PasswordVisibility = require('./password-visibility.jsx')

class Password extends React.Component {
  constructor(props) {
    super(props)
    this.state = {strength: {}, password: '', visible: false, validityOK: false, warnMsg:''}
    //this.generate = this.generate.bind(this)
    this.checkStrength = this.checkStrength.bind(this)
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.checkValidity = this.checkValidity.bind(this)
  }
  checkStrength(event) {
    let password = event.target.value
    this.setState({password: password})
    let strength = {}
    Object.keys(this.props).forEach((key, index, list)=>{
      if (this.props[key] && rules[key].pattern.test(password)) {
        strength[key] = true
      }
    })
    this.setState({strength: strength}, ()=>{
      if (Object.keys(this.state.strength).length == Object.keys(this.props).length) {
        this.setState({validityOK: true,warnMsg :'' })
      } else {
        this.setState({validityOK: false})
      }
    })
  }
  checkValidity(event) {        
    if(this.state.validityOK == "true"){
      <div>{/* Go ahead, sending to server and check 
      If the member is on the list */}</div>     
    }else{
      console.log("check validity of password before sending to server !!!");
      Object.keys(this.props).map((key)=>{            
        if (this.props[key] && (this.state.strength[key] != true)) {
          console.log("check validity: key= "+key+" Not true")
          this.setState({warnMsg: rules[key].message});
          return
        }
      })
    }    
  }

  toggleVisibility() {
    this.setState({visible: !this.state.visible}, ()=>{
    })
  }
  //generate() {
  //   this.setState({visible: true, password: generatePassword()}, ()=>{
  //     this.checkStrength({target: {value: this.state.password}})
  //   })
  //}
  render() {
    var processedRules = Object.keys(this.props).map((key)=>{            
      if (this.props[key]) {
        return {
          key: key,
          rule: rules[key],
          isCompleted: this.state.strength[key] || false
        }
      }
    })
    console.log(processedRules);
    return (
      <div className="well form-group col-md-6">
        <label>Password</label>
        <PasswordInput
          name="password"
          onChange={this.checkStrength}
          value={this.state.password}
          visible={this.state.visible}/>
        <PasswordVisibility
          checked={this.state.visible}
          onChange={this.toggleVisibility}/>
          <h5> {(this.state.validityOK)? "=== Valid Password ===":""} </h5>
          <h5> {this.state.warnMsg} </h5>
        <div>{/*<PasswordInfo rules={processedRules}/>
        <PasswordGenerate onClick={this.generate}>
          Generate
        </PasswordGenerate>*/}</div>        
        <button className={'btn btn-primary'} onClick={this.checkValidity}>
          Save
        </button>
      </div>
    )
}}

module.exports = Password