const React = require('react')
const {
  Link
} = require('react-router')

class Cart extends React.Component {
  
  render() {
    return <div>
      {(Object.keys(this.props.route.cartItems).length == 0) ? <p>Your cart is empty</p> : '' }
        <ul>
          {Object.keys(this.props.route.cartItems).map((item, index, list)=>{
            return <li key={item}>{this.props.route.products[item].title} - {this.props.route.cartItems[item]}</li>
          })}
        </ul>
      <Link to="/store/checkout" className="btn btn-primary">결제하기</Link>
      <Link to="/store" className="btn btn-info">계속 쇼핑</Link>
    </div>
  }
}

module.exports = Cart