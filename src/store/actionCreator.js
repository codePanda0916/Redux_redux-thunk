import axios from 'axios';
import * as Action from './actions';

export const getData = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/3f94e62cde64a86aada771f535ea28b5/getList/api').then(res => {
      const data = res.data;
      const action = {
        type: Action.GET_DATA,
        data
      }
      dispatch(action);
    })
  }
}