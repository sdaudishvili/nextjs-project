import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useSelector } from 'react-redux'
// import { signOut } from '../redux/actions/userActions'

export default function MaterialUiHeader() {
  // const dispatch = useDispatch()
  // const user = useSelector((state) => state.userState.user)

  function handleSignOutButton() {
    // dispatch(signOut())
  }
  return (
    <div className="[ fixed top-0 left-0 right-0 text-white bg-header h-7-0 z-2 ]">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <div className="[ flex-grow ]" />
        <IconButton edge="end" aria-label="email of current user" color="inherit" />
        <IconButton onClick={handleSignOutButton} edge="end" aria-label="logout" color="inherit">
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </div>
  )
}
