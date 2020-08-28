import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { authenticateUser } from '@/redux/actions/userActions';
import { Copyright, SignInForm, SignInAvatar } from './components';
import NoSSR from '../../atoms/NoSSR';

const Login = () => {
  const router = useRouter();
  const user = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user.user !== '') router.push('/admin');
  }, [user]);

  async function Submit(e) {
    e.preventDefault();
    const arr = [...e.target.elements];
    const data = { email: '', password: '' };
    arr.map((elem) => {
      if (elem.name === 'email' || elem.name === 'password') {
        data[elem.name] = elem.value;
      }
      return '';
    });
    await dispatch(authenticateUser(data));
  }
  return (
    <Container className="[ pt-8-0 flex flex-col items-center ]" component="main" maxWidth="xs">
      <SignInAvatar />
      <NoSSR>
        <SignInForm onSubmit={Submit} error={user.error !== ''} />
      </NoSSR>
      <Copyright />
    </Container>
  );
};
export default Login;
