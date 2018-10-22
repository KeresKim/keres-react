const React = require('react')
//const ReactDOM = require ('react-dom')

class Clock extends React.Component {
    constructor(props) {
        console.log("here clock -- constructor");  
      super(props)
      this.launchClock()
      this.state = {currentTime: (new Date()).toLocaleString()}
    }
    launchClock() {
      console.log(this);
      setInterval(function(){
        //console.log('updating...')
        this.setState({currentTime: (new Date()).toLocaleString()})
      }.bind(this), 1000)
    }
    render() {
//      console.log(this);
//      console.log('Rendering...')
      return <div>{this.state.currentTime}</div>
    }
  }

//ReactDOM.render(
//    <Clock />,
//    document.getElementById('clock-digital')
//)

module.exports = Clock