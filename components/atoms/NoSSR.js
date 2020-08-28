import ReactNoSSR from 'react-no-ssr';
import PropTypes from 'prop-types';
import Loader from '../molecules/Loader';

function NoSSR(props) {
  const { children } = props;
  return <ReactNoSSR onSSR={<Loader loading />}>{children}</ReactNoSSR>;
}

NoSSR.propTypes = {
  children: PropTypes.any
};

NoSSR.defaultProps = {
  children: null
};

export default NoSSR;
