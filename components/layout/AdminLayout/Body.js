import PropTypes from 'prop-types';

const AdminLayoutBody = (props) => {
  const { children } = props;
  return <div className="[ mb-7-0 flex-1 ml-27-5 mt-7-0 ]">{children}</div>;
};

AdminLayoutBody.propTypes = {
  children: PropTypes.any
};

AdminLayoutBody.defaultProps = {
  children: null
};
export default AdminLayoutBody;
