const React = require('react')
const {
  Link
} = require('react-router')


class Checkout extends React.Component {
  render() {
    let count = 0
    return <div>
      <h1>구매내역</h1>
    <table className="table table-bordered">
      <tbody>
        <tr><th>물품명</th><th>수량</th></tr>
        {Object.keys(this.props.route.cartItems).map((item, index, list)=>{
          count += this.props.route.cartItems[item]
          return <tr key={item}>
            <td>{this.props.route.products[item].title}</td>
            <td>{this.props.route.cartItems[item]}</td>
          </tr>
        })}
      </tbody>
    </table>
    <p>Total: {count}</p>
    <Link to="/store" className="btn btn-info">계속 쇼핑</Link>
    </div>
  }
}

module.exports = Checkout