const React = require('react')
const ReactDOM = require ('react-dom')
const ReactRouter = require('react-router')
const History = require('history')
// keres redux
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const reducers = require('./movieInfo.jsx')

const About = require('./about.jsx')
const MessageBoard = require('./message-board.jsx')
//const Login = require('./login.jsx')
const Post = require('./post.jsx')
const Posts = require('./posts.jsx')
const movieInfo = require('./movieInfo.jsx')
const {withRouter} = require('react-router')
const Content = require('./content.jsx')
// added digital clock 
const DigitalClock = require('./clock.jsx')

// added Tool-tip utility. 
const Utiltip = require('./tooltip.jsx')

const posts = require('../posts.js')

const movieApp = require('./components/app/app.js')
const movieList = require('./components/movies/movies.js')
const movieFocus = require('./components/movie/movie.js')

// shopping mall components
const storeApp = require('./store/app.jsx')
const storeList = require('./store/index.jsx')
const Cart = require('./store/cart.jsx')
const Checkout = require('./store/checkout.jsx')
const Product = require('./store/product.jsx')

const PRODUCTS = require('./store/product.json')


let messages = {}
let cartItems = {}
const addToCart = (id) => {
  if (cartItems[id])
    cartItems[id] += 1
  else
    cartItems[id] = 1
}

let IsModalOn = {}
const setStoreModal = (isOn) => {
    console.log("modalOn setting == "+isOn);
    IsModalOn[0] = isOn;
}
const setReturnPath = (rPath) => {
  console.log("Return path setting == "+rPath);
  IsModalOn[1] = rPath;
}
let { Router,
  Route,
  IndexRoute,
  Link
} = ReactRouter

let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
  queryKey: false
})


ReactDOM.render((
  <span>
    <div>
        <Provider store={createStore(reducers)}>
          <Router history={hashHistory}>
              <Route path="/" component={Content} >
                  <Route path="/about" component={About} />
                  {/*<Route path="/musicplay" component={MusicPlay}/> */}
              
                  <Route path="/store" component={storeApp} setStoreModal={setStoreModal}
                          IsModalOn={IsModalOn} cartItems={cartItems} > 
                      <IndexRoute component={storeList} products={PRODUCTS} 
                          setStoreModal={setStoreModal} setReturnPath={setReturnPath}/>
                  
                      <Route path="/store/products/:id" component={Product}
                          addToCart={addToCart}
                          products={PRODUCTS} />
                      <Route path="/store/cart" component={Cart}
                          cartItems={cartItems} products={PRODUCTS}/>                  
                  </Route>

                  <Route path="/store/checkout" component={Checkout}
                      cartItems={cartItems} products={PRODUCTS}/>
              
                  <Route path="/movieInfo" component={movieApp} >
                      <IndexRoute component={movieList} />
                      <Route path="/movieInfo/list" component={movieList} />
                      <Route path="/movieInfo/list/:id" component={movieFocus} />
                  </Route>

                  <Route path="/MB" component={MessageBoard} messages={messages} />
            </Route>            
            {/* <Route path="/login" component={Login}/> */}
          </Router>
        </Provider>
    </div>
    <h4>Digital clock:<DigitalClock></DigitalClock></h4>
  </span>
), document.getElementById('content'))
