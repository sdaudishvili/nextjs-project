import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Input, TwoButtons } from '@/components/molecules';
import { Page } from '@/components/organisms';

import { fetchContacts, updateContacts } from '@/redux/actions/contactsActions';

function Contacts() {
  const router = useRouter();
  const contacts = useSelector((state) => state.contacts);
  const [data, setData] = React.useState({ ...contacts.data });
  const dispatch = useDispatch();

  React.useEffect(() => {
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

  return <Page pageTitle="Contacts" bodyElems={elems} />;
}

Contacts.getInitialProps = async ({ ctx }) => {
  await ctx.store.dispatch(fetchContacts());
};
export default Contacts;
