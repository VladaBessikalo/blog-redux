import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import { store } from '../src/store/store'
import { fetchPosts } from './features/postSlice.js'
import { fetchUsers } from './features/users/usersSlice.js'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

store.dispatch(fetchPosts())
store.dispatch(fetchUsers())

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />}/>
        </Routes>
      </Router>
    </Provider>
)

console.log(store.getState())