import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'next/router';
import Input from '../../components/molecules/Input';
import TwoButtons from '../../components/molecules/TwoButtons';
import Page from '../../components/organisms/Page/Page';

import { fetchContacts, updateContacts } from '../../redux/actions/contactsActions';

function Contacts({ router }) {
  const contacts = useSelector((state) => state.contacts);
  const [data, setData] = useState({ ...contacts.data });
  const dispatch = useDispatch();

  useEffect(() => {
    setData({ ...data, ...contacts.data });
  }, [contacts]);

  function handleInput(e) {
    setData({ ...data, [e.name]: e.value });
  }

  function onSubmit() {
    dispatch(updateContacts(data));
    router.push('/admin');
  }

  function onCancel() {
    router.push('/admin');
  }

  const elems = [
    <Input type="text" label="Mobile" value={data.phone || ''} handleInput={handleInput} name="phone" />,
    <Input type="text" label="Email" value={data.email || ''} handleInput={handleInput} name="email" />,
    <Input type="text" label="Address" value={data.address || ''} handleInput={handleInput} name="address" />,
    <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
  ];

  return <Page pageTitle="Contacts" body={elems} />;
}

Contacts.getInitialProps = async ({ ctx }) => {
  await ctx.store.dispatch(fetchContacts());
};
export default withRouter(Contacts);
