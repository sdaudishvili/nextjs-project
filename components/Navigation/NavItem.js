import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Link from 'next/link';
import { withRouter } from 'next/router';

function NavItem(props) {
  return (
    <ListItem selected={props.router.pathname === props.path} button>
      <Link href={props.path}>
        <div className="[ h-full w-full text-1-6 text-white ] ">{props.title}</div>
      </Link>
    </ListItem>
  );
}
export default withRouter(NavItem);
