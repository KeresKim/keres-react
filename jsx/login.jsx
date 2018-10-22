const React = require('react')
const Password = require('./login/password.jsx')

module.exports = function Login() {
  return <div>
    <h3>Login ==>>>  Under construction</h3>
    <h5> Password: More than 6 letters with mixed alphabet and number</h5>
    <Password
        //upperCase={true}
        lowerCase={true}
        //special={true}
        number={true}
        over6={true}
    />
    <div>{
    /*<input type="text" placeholder="email" className="form-control"></input>
    <input type="text" placeholder="password" className="form-control"></input>
    <button className="btn btn-primary">login</button>
    */}</div>
  </div>
}