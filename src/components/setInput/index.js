import React from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

class SetInput extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(e){
    this.setState({
      value: e.target.value
    })
  }

  render(){
    const value = this.state.value;
    return(
      <div className="setInput">
        <Input placeholder="请输入内容" className="input_content" value={value} onChange={this.changeInput}/>
        <Button className="addBtn" type="primary">增加</Button>
      </div>
    )
  }
}

export default SetInput;