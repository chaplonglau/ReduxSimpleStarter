//const= never going to change. never reassign app
//JSX is a dialect of Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBLPTzL-yYZqChQpdi6x_956bWD9yGK8AM';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'))
