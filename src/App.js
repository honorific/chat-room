import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom'
import Login from './pages/login/Login'
import './app.css'
import Chat from './pages/chat/Chat'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from './utils/globalStyles'
import {lightTheme, darkTheme} from './utils/theme'
import {useSelector} from 'react-redux'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={<Navigate to='/login' />} />,
      <Route path='/login' element={<Login />} />,
      <Route path='/chat' element={<Chat />} />,
    ]),
  )
  const theme = useSelector((state) => state.rootReducer.theme.theme)
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <RouterProvider router={router} />
      </>
    </ThemeProvider>
  )
}

export default App
