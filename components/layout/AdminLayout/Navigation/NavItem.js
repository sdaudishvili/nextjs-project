import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    padding: '0 0'
  }
});
const NavItem = (props) => {
  const { path, title } = props;
  const router = useRouter();
  const classes = useStyles();
  return (
    <ListItem className={classes.root} selected={router.pathname === path} button>
      <Link href={path}>
        <div className="[ py-1-0 px-1-5 h-full w-full text-1-6 text-white ] ">{title}</div>
      </Link>
    </ListItem>
  );
};
NavItem.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string
};

NavItem.defaultProps = {
  path: '',
  title: ''
};

export default NavItem;
