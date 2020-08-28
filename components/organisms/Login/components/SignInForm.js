import React from 'react';
import { TextField, Button, Link } from '@material-ui/core';
import PropTypes from 'prop-types';

const SignInForm = (props) => {
  const { onSubmit, error } = props;
  return (
    <form className="[ mt-1-0 w-full  ]" onSubmit={onSubmit}>
      <TextField
        error={error}
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
        error={error}
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
  );
};

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.bool
};
SignInForm.defaultProps = {
  onSubmit: () => {},
  error: false
};

export default SignInForm;
