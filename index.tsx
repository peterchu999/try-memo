import React, { Component } from 'react';
import { render } from 'react-dom';
import LearnMemo from './Components/LearnMemo';
import LearnRef from './Components/LearnRef';

import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <LearnRef name="Learn Ref" />
        <LearnMemo name="Learn Memo" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
