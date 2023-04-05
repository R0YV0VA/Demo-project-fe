import React from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux';

console.log('%cWelcome, hacker, glad you opened your console, you seem serious about your craft and will go a long way!\nP.S. All the bugs, feature requests are welcome to be sent to bibaIboba@mail.com', 'color: #0099ff;background: #1f2937;font-size: 20px;text-shadow: 2px 2px black')

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
