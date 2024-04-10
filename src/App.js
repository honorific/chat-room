import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Login from './pages/login/Login'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements([<Route path='/login' element={<Login />} />]),
  )
  return <RouterProvider router={router} />
}

export default App
