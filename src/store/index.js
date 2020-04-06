import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);

const configureStore = () => {
  const store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      /* eslint-disable-next-line */
      store.replaceReducer(rootReducer),
    );
  }

  return store;
};

export default configureStore();
