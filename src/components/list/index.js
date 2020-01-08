import React from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
 
class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [
        {name: '测试一'},
        {name: '测试二'},
        {name: '测试三'}
      ]
    };
  }

  render(){
    return (
      <div className="list">
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item) => (<List.Item>{item.name}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList;