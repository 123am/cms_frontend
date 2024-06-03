import { Provider, useSelector } from 'react-redux'
import { store } from './redux/store'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ContentForm from './pages/ContentForm'
import Checkout from './pages/Checkout'
import HistoryCmp from './pages/HistoryCmp'
import Cart from './pages/Cart'

const App = () => {
  let userDetails = useSelector((state) => {
    console.log(state, "statestatestate")
    return state.auth
  })


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<NotFound />} />
          {
            userDetails.userLogin && <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/listMyContent" element={<Dashboard />} />
              <Route path="/contentForm" element={<ContentForm />} />
              <Route path="/history" element={<HistoryCmp />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
            </>
          }
        </Routes>
        <Layout />
      </BrowserRouter>
    </>
  )
}

export default App
