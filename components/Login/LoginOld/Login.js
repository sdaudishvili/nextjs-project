import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import Input from '../../molecules/Input'
import LoginForm from './LoginForm'
import { authenticateUser } from '../../../redux/actions/userActions'

function Login() {
  const dispatch = useDispatch()
  const error = useSelector((state) => state.userState.error)
  const [data, setData] = useState('')

  function handleInput(event) {
    const { value } = event.target
    setData({ ...data, [event.target.name]: value })
  }

  function Submit(e) {
    e.preventDefault()
    dispatch(authenticateUser(data))
  }
  const items = [
    <Input type="text" label="Email" value={data.email || ''} handleInput={handleInput} name="email" />,
    <Input
      type="password"
      label="Password"
      value={data.password || ''}
      handleInput={handleInput}
      name="password"
    />,
    <button type="submit" className="btn btn-primary [ font--size--main ]">
      Log in
    </button>
  ]
  return (
    <main id="main" role="main">
      <section className="box-shadow [ bg-white w-50-percent mx-auto text-1-5 ]">
        <div className="[ px-3-0 ]">
          <h3 className="[ py-2-0 text-center border-border border-solid border-b ]">Authorization form</h3>
          {error !== '' && <div>{error}</div>}
          <LoginForm items={items} onSubmit={Submit} />
        </div>
      </section>
    </main>
  )
}

export default Login
