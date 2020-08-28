import React from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import SideBar from './SideBar';
import Header from './Header';

function AdminLayout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="[ flex min-h-full ]">
        <SideBar />
        <Body>{children}</Body>
      </div>
    </>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.any
};

AdminLayout.defaultProps = {
  children: null
};

export default AdminLayout;
