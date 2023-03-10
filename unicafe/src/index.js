import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import Reducer from './reducer';

const store = createStore(Reducer);

const Button = ({ action, text }) => {
  return (
    <button onClick={action}>{text}</button>
  );
};

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const App = () => {

  const good = () => {
    store.dispatch({
      type: 'GOOD'
    });
  };

  const ok = () => {
    store.dispatch({
      type: 'OK'
    });
  };

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    });
  };

  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    });
  };

  return (
  <div>
    <h2>Give Feedback</h2>
      <Button action={good} text='good' />
      <Button action={ok} text='ok' />
      <Button action={bad} text='bad' />
      <Button action={zero} text='reset stats' />

    <h2>Feedback</h2>
    <table>
      <tbody>
        <StatisticsLine text='good' value={store.getState().good} />
        <StatisticsLine text='ok' value={store.getState().ok} />
        <StatisticsLine text='bad' value={store.getState().bad} />
      </tbody>
    </table>
  </div>

)};

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = () => {
	root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
