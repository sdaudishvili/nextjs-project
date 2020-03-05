import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Input from '../components/molecules/Input'
import TwoButtons from '../components/molecules/TwoButtons'
import SectionHeader from '../components/atoms/SectionHeader'
import Page from '../components/Page/Page'

import { fetchContacts } from '../redux/actions/contactsActions'

function Contacts() {
  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch()
  const [data, setData] = useState('')

  function handleInput(event) {
    const { value } = event.target
    setData({ ...data, [event.target.name]: value })
  }

  function onSubmit() {
    // dispatch(updateContacts(data))
  }

  function onCancel() {
    console.log('/cancel')
  }

  const elems = [
    <Input type="text" label="Mobile" value={data.phone || ''} handleInput={handleInput} name="phone" />,
    <Input type="text" label="Email" value={data.email || ''} handleInput={handleInput} name="email" />,
    <Input type="text" label="Address" value={data.address || ''} handleInput={handleInput} name="address" />,
    <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
  ]
  const head = <SectionHeader title="Information" />

  return <div>{JSON.stringify(contacts.data)}</div>
  // <Page pageTitle="Contacts" head={head} body={elems} />
}

Contacts.getInitialProps = async ({ ctx }) => {
  await ctx.store.dispatch(fetchContacts())
  return {}
}
export default Contacts