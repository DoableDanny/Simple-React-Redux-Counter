import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Count {counter}</h1>
      <div className='btn-wrapper'>
        <button onClick={() => dispatch(increment(3))}>+ 3</button>
        <button onClick={() => dispatch(decrement())}>- 1</button>
      </div>
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
