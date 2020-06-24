import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

export default function SignInAvatar() {
  return (
    <>
      <div className="[ text-white w-5-0 h-5-0 m-1-0 bg-sign-in-avatar rounded-full flex items-center justify-center ]">
        <LockOutlinedIcon />
      </div>
      <h1 className="[ text-2-2 ]">Sign in</h1>
    </>
  );
}
