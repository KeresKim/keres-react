const React = require('react')
const {
    Link
} = require('react-router')

const storeApp = require('./app.jsx')

class storeList extends React.Component {
    constructor(props) {
        //console.log("here clock -- constructor");  
      super(props)
      this.state = {returnTo : '/store' }
      this.handleModalnPath= this.handleModalnPath.bind(this);
    }

    handleModalnPath(){
      this.props.route.setStoreModal("true");
      this.props.route.setReturnPath(this.props.location.pathname);
    }

    render() {      
      console.log("rendering store list ");
      //console.log(storeApp.PRODUCTS);
      return (
        <div>
          <p><Link to="/store/cart" className="btn btn-danger">장바구니</Link></p>
          <div>
            {(this.props.route.products).map(picture => (
              <li key={picture.id}>
                <Link 
                to={{pathname: `/store/products/${picture.id}` }
                } onClick={this.handleModalnPath} >
                  <table><tbody>
                    <tr>
                      <td><img style={{ margin: 10 }} src={picture.src} height="100" /></td>
                      <td>
                        <ul>{picture.title}</ul>
                        <ul>가격: {picture.cost}만원</ul>
                      </td>
                    </tr>
                  </tbody></table>
                </Link>
              </li>
            ))}
          </div>
                    
        </div>
      )
    }
}

module.exports = storeList  
