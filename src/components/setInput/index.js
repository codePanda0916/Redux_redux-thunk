import React from 'react';
import { Input, Button, message } from 'antd';
import store from '../../store/index';
import * as Action from '../../store/actions';
import 'antd/dist/antd.css';
import './index.css';

class SetInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: store.getState().inputValue,
      list: store.getState().list
    };
    this.changeInput = this.changeInput.bind(this);
    this.watchState = this.watchState.bind(this);
    store.subscribe(this.watchState);
  }

  watchState(){
    this.setState({
      value: store.getState().inputValue
    });
  }

  changeInput(e){
    const action = {
      type: Action.CHANGE_INPUT,
      value: (e.target.value).trim()
    }
    store.dispatch(action);
  }

  addItem(id, name){
    if (name !== "") {
      const action = {
        type: Action.ADD_ITEM,
        id,
        name
      }
      store.dispatch(action);
    } else {
      message.error('请输入内容');
    }
  }

  render(){
    const { value, list } = this.state;
    return(
      <div className="setInput">
        <Input placeholder="请输入内容" className="input_content" value={value} onChange={this.changeInput}/>
        <Button className="addBtn" type="primary" onClick={() => this.addItem(list.length, value)}>增加</Button>
      </div>
    )
  }
}

export default SetInput;