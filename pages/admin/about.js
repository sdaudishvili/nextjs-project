import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Input, TwoButtons, TinyMCE } from '@/components/molecules';
import { Page } from '@/components/organisms';
import { fetchAbout, updateAbout } from '@/redux/actions/aboutActions';

function About() {
  const router = useRouter();
  const about = useSelector((state) => state.about);
  const dispatch = useDispatch();
  const [data, setData] = React.useState({ ...about.data });

  React.useEffect(() => {
    setData({ ...data, ...about.data });
  }, [about]);

  function handleInput(e) {
    setData({ ...data, [e.name]: e.value });
  }

  function onSubmit() {
    dispatch(updateAbout(data));
    router.push('/admin');
  }

  function onCancel() {
    router.push('/admin');
  }

  const elems = [
    <Input type="text" label="Title" value={data.title || ''} handleInput={handleInput} name="title" />,
    <TinyMCE initialValue={data.content || ''} label="Content" handleInput={handleInput} name="content" />,
    <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
  ];

  return <Page pageTitle="About" bodyElems={elems} />;
}

About.getInitialProps = async ({ ctx }) => {
  await ctx.store.dispatch(fetchAbout());
};

export default About;
