import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

ReactDOM.render(
  <h1>Hello, React!</h1>,
  document.getElementById('root')

import React from 'react';
import { PodcastApp } from './PodcastApp';

const App = () => {
  return (
    <div>
      <PodcastApp />
      <p>This is a simple podcast app that allows you to listen to podcasts, add new podcasts, delete podcasts, search for podcasts, share podcasts, rate podcasts, and review podcasts.</p>
    </div>
  );
};

export default App;