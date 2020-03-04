import React, { useEffect } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

function Notifications(props) {
  useEffect(() => {
    if (props.error) {
      NotificationManager.error('Error message', 'Error', 2000)
    }
    if (props.success) {
      NotificationManager.success('Success message', 'Success', 2000)
    }
  }, [props.error, props.success])
  return (
    <div className="[ text-1-7 ]">
      <NotificationContainer />
    </div>
  )
}

export default Notifications
