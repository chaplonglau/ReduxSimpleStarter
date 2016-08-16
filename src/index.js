//const= never going to change. never reassign app
//JSX is a dialect of Javascript
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div> HIiii! </div>;
}

ReactDOM.render(<App />, document.getElementById('container'))
