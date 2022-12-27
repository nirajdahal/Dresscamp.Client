import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/index';
import { Home, NotFound, Login, Register, ResetPassword } from './pages/index'
function App() {
  return (
    <>
      <Router>
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
