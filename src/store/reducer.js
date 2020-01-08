import * as Action from './actions';
import { fromJS } from 'immutable';
const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === Action.CHANGE_INPUT) {
    let newState = fromJS(state).toJS();
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === Action.ADD_ITEM) {
    let newState = fromJS(state).toJS();
    newState.list.push({id: action.id, name: action.name});
    newState.inputValue = "";
    return newState;
  }

  if (action.type === Action.DELETE_ITEM){
    let newState = fromJS(state).toJS();
    newState.list.splice(action.index, 1);
    return newState;
  }

  if (action.type === Action.GET_DATA){
    let newState = fromJS(state).toJS();
    newState = action.data;
    return newState;
  }
  return state;
}