import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'next/router';
import { useEffect } from 'react';
import SignInAvatar from './SignInAvatar';
import SignInForm from './SignInForm';
import Copyright from './Copyright';

import { authenticateUser } from '../../redux/actions/userActions';

function SignIn({ router }) {
  // const error = useSelector((state) => state.userState.error)
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
      <div>{JSON.stringify(user)}</div>
      <SignInAvatar />
      <SignInForm onSubmit={Submit} error={false} />
      <Copyright />
    </Container>
  );
}
export default withRouter(SignIn);
