import React from 'react';
import List from '@material-ui/core/List';
import NoSSR from '@/components/atoms/NoSSR';
import { NavItem } from './components';

const routes = [
  { id: 0, path: '/admin', title: 'Home' },
  { id: 1, path: '/admin/contact', title: 'Contact' },
  { id: 2, path: '/admin/about', title: 'About' }
];

function Navigation() {
  return (
    <NoSSR>
      <List component="nav" aria-label="main">
        {routes.map((e) => (
          <NavItem path={e.path} title={e.title} key={e.id} />
        ))}
      </List>
    </NoSSR>
  );
}
export default Navigation;
