const { combineReducers } = require('redux')
const {
  reducer: movies
} = require('./movieModule.jsx')
// keres redux
module.exports = combineReducers({
  movies
})
