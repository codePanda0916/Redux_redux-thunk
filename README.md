# redux + redux-thunk
执行以下可进行查看浏览页面
```javascript
cnpm install
npm start
```
### 中间件的作用
对store.dispatch(action)的功能增强，同时可以在reducer中进行一些异步操作；

### redux-thunk的引用用法
```javascript
import {applyMiddleware, createStore} from 'redux';
import thunk from 'react-thunk';
import reducers from './store/reducers';
const store = createStore(reducers, applyMiddleware(thunk));
```
applyMiddleware是redux的一个原生方法，可以将所有中间件组成一个数组，依次执行，例如如下：
```javascript
const store = createStore(reducers, applyMiddleware(middle1,middle2,...,middle9));
```
### redux-thunk的功能
接受一个返回函数的action creator,如果action creator返回一个函数，就执行；若非函数，就按照原来的next(action)执行。那么异步操作就可以放在函数中执行。

### redux-thunk的源码
```javascript
```