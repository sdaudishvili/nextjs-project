import React from 'react'
import List from '@material-ui/core/List'
import NavItem from './NavItem'

function Navigation(props) {
  return (
    <List component="nav" aria-label="main">
      {props.routes.map((e) => e.title !== '' && <NavItem path={e.path} title={e.title} key={e.id} />)}
    </List>
  )
}
export default Navigation
