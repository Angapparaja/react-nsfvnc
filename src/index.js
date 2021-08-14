import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
function Menubar(props) {
  const myValue = props.myValue;
  const rl = myValue.map(listValue => {
    return <li>{listValue}</li>;
  });

  return <ul>{rl}</ul>;
}
const myValue = [1, 2, 3, 5];

ReactDOM.render(<Menubar myValue={myValue} />, document.getElementById('root'));
