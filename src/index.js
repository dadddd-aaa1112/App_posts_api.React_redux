import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			{' '}
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
