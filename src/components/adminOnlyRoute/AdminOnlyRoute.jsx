import { useSelector } from 'react-redux'
import { selectEmail } from '../../redux/slice/authSlice'
export function AdminOnlyRoute({ children }) {
    const userEmail = useSelector(selectEmail)
    if (userEmail === 'nirajdahal09@gmail.com') {
        return children
    }
    else {
        return null
    }
}
