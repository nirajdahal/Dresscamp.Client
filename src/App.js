import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header, Loader } from './components/index';
import { Home, NotFound, Login, Register, ResetPassword } from './pages/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux'
import { selectIsLoading } from '../src/redux/slice/loadingSlice'
import Admin from './pages/admin/Admin';
import { AdminOnlyRoute } from './components/adminOnlyRoute/AdminOnlyRoute';
function App() {
  const isLoading = useSelector(selectIsLoading)
  return (
    <>
      {isLoading && <Loader />}
      <ToastContainer />
      <Router>
        {/* <Loader /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/admin/*' element={<AdminOnlyRoute><Admin /></AdminOnlyRoute>} />
          <Route path='/notFound' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;
