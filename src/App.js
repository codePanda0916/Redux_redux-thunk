import React, { Fragment } from 'react';
import SetInput from './components/setInput/index';
import TodoList from './components/list/index';
import store from './store/index';
import { getData } from './store/actionCreator';

class App extends React.Component {
  componentDidMount(){
    const action = getData();
    store.dispatch(action);
  }

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
