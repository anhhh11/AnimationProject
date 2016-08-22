import {createStore, compose, applyMiddleware} from 'redux'
import routes from './reducer'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const logger = createLogger({
  stateTransformer: (state) => state.toJS(),
  duration: true,
});
import {combineReducers} from 'redux-immutable';
const middleware = [thunk, logger];
const reducers = combineReducers({
  routes: routes
});
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);
export default store;