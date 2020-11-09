import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { throttle } from 'lodash/fp';

import { save, load } from '../services/localStorage';
import reducers from '../reducers';

const ENV = process.env.NODE_ENV;

let composeEnhancers = compose;

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const devToolsCondition = typeof window === 'object' && reduxDevTools;

if (ENV !== 'production' && devToolsCondition) {
  composeEnhancers = reduxDevTools({});
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const persistedState = load();

const store = createStore(reducers, persistedState, enhancer);

store.subscribe(
  throttle(500, () => save(store.getState())),
);

const Root = ({ children }) => <Provider store={store}>{children}</Provider>;

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Root, store };
