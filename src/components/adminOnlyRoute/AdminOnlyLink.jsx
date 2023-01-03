import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectEmail } from '../../redux/slice/authSlice'
export function AdminOnlyLink({ children }) {
    const userEmail = useSelector(selectEmail)
    const navigate = useNavigate()
    if (userEmail === 'nirajdahal09@gmail.com') {
        return children
    }
    else {
        return null
    }
}
