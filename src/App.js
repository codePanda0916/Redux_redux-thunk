import React, { Fragment } from 'react';
import SetInput from './components/setInput/index';
import TodoList from './components/list/index';

class App extends React.Component {
  render(){
    return (
      <Fragment>
          <SetInput/>
          <TodoList/>
      </Fragment>
    );
  }
}

export default App;
