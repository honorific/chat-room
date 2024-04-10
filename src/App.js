import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom'
import Login from './pages/login/Login'
import './app.css'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={<Navigate to='/login' />} />,
      <Route path='/login' element={<Login />} />,
    ]),
  )
  return <RouterProvider router={router} />
}

export default App
