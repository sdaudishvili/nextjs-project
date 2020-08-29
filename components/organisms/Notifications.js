import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactNotification, { store } from 'react-notifications-component';

function Notifications() {
  const notifs = useSelector((state) => state.notifs);
  useEffect(() => {
    if (notifs.success) {
      store.addNotification({
        title: 'Success!',
        message: 'success',
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 3000,
          onScreen: false
        }
      });
    }
    if (notifs.error) {
      store.addNotification({
        title: 'Error!',
        message: 'error',
        type: 'error',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 3000,
          onScreen: false
        }
      });
    }
  }, [notifs.error, notifs.success]);
  return (
    <div className="[ text-1-7 ]">
      <ReactNotification />
    </div>
  );
}

export default Notifications;
