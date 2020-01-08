import React, { Fragment } from 'react';
import SetInput from './components/setInput/index';
import TodoList from './components/list/index';
import axios from 'axios';
import store from './store/index';
import * as Action from './store/actions';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    axios.get('https://www.fastmock.site/mock/3f94e62cde64a86aada771f535ea28b5/getList/api').then(res => {
      const data = res.data;
      const action = {
        type: Action.GET_DATA,
        data
      }
      store.dispatch(action);
    }).catch(err => {
      console.log(err);
    })
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
