import React from 'react';
import { List } from 'antd';
import store from '../../store/index';
import * as Actiom from '../../store/actions';
import 'antd/dist/antd.css';
import './index.css';
 
class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: store.getState().list
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.watchState = this.watchState.bind(this);
    store.subscribe(this.watchState);
  }

  watchState(){
    this.setState({
      list: store.getState().list
    })
  }

  deleteItem(index){
    const action = {
      type: Actiom.DELETE_ITEM,
      index
    }
    store.dispatch(action);
  }

  render(){
    const { list } = this.state;
    return (
      <div className="list">
        <List
          bordered
          dataSource={list}
          renderItem={(item, index) => (<List.Item onClick={() => this.deleteItem(index)}>{item.name}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList;