import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import comments from './comments.js';
import users from './users.js';

const reducer = combineReducers({
	comments,
	users
});

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));