import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { NavLink, withRouter } from 'react-router-dom'

function NavItem(props) {
  return (
    <ListItem selected={props.location.pathname === props.path} button>
      <NavLink className="[ block w-full text-nav-text ]" to={props.path}>
        <ListItemText primary={props.title} />
      </NavLink>
    </ListItem>
  )
}
export default withRouter(NavItem)
