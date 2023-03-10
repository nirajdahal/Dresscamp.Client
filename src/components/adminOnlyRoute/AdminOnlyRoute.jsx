import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectEmail } from '../../redux/slice/authSlice'
import { redirect } from 'react-router-dom'
import { NotFound } from '../../pages'
export function AdminOnlyRoute({ children }) {
    const userEmail = useSelector(selectEmail)
    if (userEmail === 'nirajdahal09@gmail.com') {
        return children
    }
    else {
        return <NotFound />
    }
}
