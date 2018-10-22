const React = require('react')
const {
  Link
} = require('react-router')

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.handleBuy = this.handleBuy.bind(this)
  }
  /* to={{
            pathname: `/store/cart`,
            state: { productId: this.props.params.id}
          }} */
  handleBuy (event) {
    this.props.route.addToCart(this.props.params.id)
  }
  render() {
    return (
      <div>
        <img src={this.props.route.products[this.props.params.id].src} style={{ height:300 }} />
        <p>{this.props.route.products[this.props.params.id].title}</p>
        <p>{this.props.route.products[this.props.params.id].description}</p>
        <Link
          
          to="/store/cart"  onClick={this.handleBuy}
          className="btn btn-primary">
          Buy
        </Link>
      </div>
    )
  }
}

module.exports = Product