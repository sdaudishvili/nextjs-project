import React from 'react'
import '../../assets/App.scss'
import '../../assets/sass/style.scss'

function LoginForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      {props.items.map((item, index) => (
        <div key={index.toString()} className="[ p-2-0 border-border border-solid border-b ]">
          {item}
        </div>
      ))}
    </form>
  )
}

export default LoginForm
