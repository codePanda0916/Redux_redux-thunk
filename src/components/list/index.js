import React from 'react';
import { List } from 'antd';
import store from '../../store/index';
import 'antd/dist/antd.css';
import './index.css';
 
class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: store.getState().list
    };
    this.watchState = this.watchState.bind(this);
    store.subscribe(this.watchState);
  }

  watchState(){
    this.setState({
      list: store.getState().list
    })
  }

  render(){
    const { list } = this.state;
    return (
      <div className="list">
        <List
          bordered
          dataSource={list}
          renderItem={(item) => (<List.Item>{item.name}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList;