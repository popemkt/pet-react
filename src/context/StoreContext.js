import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { reducers, initialState } from './reducers';
import { useActions } from './actions';

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const actions = useActions(state, dispatch);

  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { StoreProvider, StoreContext };
