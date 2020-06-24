import NoSSR from 'react-no-ssr';
import Loader from '../components/molecules/Loader';

export default (props) => {
  return <NoSSR onSSR={<Loader loading />}>{props.children}</NoSSR>;
};
