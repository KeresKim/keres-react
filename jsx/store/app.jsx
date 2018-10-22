const React = require('react')
//const ReactDOM = require('react-dom')
const Modal = require('./modal.jsx')


const Heading = () => {
  return <h1>쇼핑몰</h1>
}

class storeApp extends React.Component {
  constructor(props) {
      //console.log("here clock -- constructor");  
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.route.IsModalOn[0] =="true"){ 
        console.log("component will receive Props=== "+ this.props.route.IsModalOn[0] );
        this.previousChildren = this.props.children
    }
  }
  render() {  
    //console.log('location path == > : '+ Object.keys(this.props.location.pathname).slice(0,4));
    if(Object.keys(this.props.location.pathname).length < 14) {
      // In case of the "/store/products" NOT matched.
      this.props.route.setStoreModal("false");
    }

    return (
      <div className="well">
        <Heading/>
        <div>        
          {(this.props.route.IsModalOn[0] =="true")?this.previousChildren:this.props.children }          
          {/* {this.props.children} */}
          {(this.props.route.IsModalOn[0]=="true")?
            <Modal isOpen={true} 
            returnTo={this.props.route.IsModalOn[1] }>
              {this.props.children}
            </Modal> : ''
          }                          
        </div>
                                      
      </div>
    )
  }
}
module.exports = storeApp