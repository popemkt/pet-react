import React, { useContext, useState, useEffect } from 'react';
import './styles.css';
import { StoreContext } from './context/StoreContext';
import { types } from './context/reducers';

function App() {
  const { state, dispatch, actions } = useContext(StoreContext);
  const [techInput, setTechInput] = useState('');

  return (
    <div className='App'>
      <h1>Hooks - The Redux Killer</h1>
      <p>
        Try to add duplicate items with both Direct dispatch and Action logic
      </p>
      <div className='form'>
        <input
          name='tech'
          value={techInput}
          onChange={e => setTechInput(e.target.value)}
        />
        <button
          type='button'
          onClick={() => actions.addTechIfNotInList(techInput)}
        >
          actions.addTechIfNotInList
        </button>
        <button
          type='button'
          onClick={() =>
            dispatch({ type: types.ADD_TO_TECH_LIST, payload: techInput })
          }
        >
          dispatch(ADD_TO_TECH_LIST)
        </button>
      </div>

      <h3>state.techList</h3>
      <ul>
        {state.techList.map(tech => (
          <li key={tech}>
            {tech}
            <button
              onClick={() =>
                dispatch({ type: types.REMOVE_FROM_TECH_LIST, payload: tech })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
