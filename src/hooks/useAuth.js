import { useSelector } from 'react-redux';
import { USER_SELECTORS } from '../store/selectors/user';

const useAuth = () => {
  const { isAuthenticated } = useSelector(USER_SELECTORS.getUserData);
  return { isAuthenticated };
};

export default useAuth;