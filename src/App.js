import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header, Loader } from './components/index';
import { Home, NotFound, Login, Register, ResetPassword } from './pages/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        {/* <Loader /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/notFound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;
