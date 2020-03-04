import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

function SignInForm(props) {
  return (
    <form className="[ mt-1-0 w-full  ]" onSubmit={props.onSubmit}>
      <TextField
        error={props.error}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        error={props.error}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <div className="[ mt-3-0 mb-2-0 ]">
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign In
        </Button>
      </div>
      <Link href="/" variant="body2">
        Forgot password?
      </Link>
    </form>
  )
}

export default SignInForm
