# redux + redux-thunk
执行以下可进行查看浏览页面
```javascript
cnpm install
npm start
```
### 1，中间件的作用
对store.dispatch(action)的功能增强，同时可以在reducer中进行一些异步操作；

### 2，redux-thunk的引用用法
```javascript
import {applyMiddleware, createStore} from 'redux';
import thunk from 'react-thunk';
import reducer from './reducer';
const store = createStore(reducer, applyMiddleware(thunk));
```
applyMiddleware是redux的一个原生方法，可以将所有中间件组成一个数组，依次执行，例如如下：
```javascript
const store = createStore(reducer, applyMiddleware(middle1,middle2,...,middle9));
```
### 3，redux-thunk的功能
接受一个返回函数的action creator,如果action creator返回一个函数，就执行；若非函数，就按照原来的next(action)执行。那么异步操作就可以放在函数中执行。

### 4，redux-thunk的源码
```javascript
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```