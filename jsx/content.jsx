const React = require('react')
const {Link} = require('react-router')

class Content extends React.Component {
  render() {     
    return (
      <div>
        <h1><Link to="/" activeClassName="active">김기용 리액트</Link></h1>        
        <div className="navbar navbar-default">
          <ul className="nav nav-pills navbar-nav ">
            {/* 
            <li>
              <Link to="/login" activeClassName="active">
                Log-in
              </Link>
            </li> */} 
            <li className={(this.context.router.isActive('/about'))? 'active': ''}>
              <Link to="/about" activeClassName="active">
                About
              </Link>
            </li>                        
            <li className={(this.context.router.isActive('/movieInfo'))? 'active': ''}>
              <Link to="/movieInfo" activeClassName="active">
                Movie Information
              </Link>
            </li>
            <li className={(this.context.router.isActive('/store'))? 'active': ''}>
              <Link to="/store" activeClassName="active">
                Shopping Mall
              </Link>
            </li>
            {/* <li className={(this.context.router.isActive('/musicplay'))? 'active': ''}>
              <Link to="/musicplay" activeClassName="active">
                Music
              </Link>
            </li> */}
            <li className={(this.context.router.isActive('/MB'))? 'active': ''}>
              <Link to="/MB" activeClassName="active">
                Message Board
              </Link>
            </li>
            
            {/* <li className={(this.context.router.isActive('/about'))? 'active': ''}>
              <Link to="/about" activeClassName="active">
                About Keres
              </Link>
            </li> */}
          </ul>
        </div>
        {this.props.children}
        
      </div>      
    )
  }
}
Content.contextTypes = {
  router: React.PropTypes.object.isRequired
}
module.exports = Content