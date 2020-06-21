import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'next/router';
import Input from '../../components/molecules/Input';
import TwoButtons from '../../components/molecules/TwoButtons';
import TinyMCE from '../../components/molecules/TinyMCE';
import Page from '../../components/Page/Page';

import { fetchAbout, updateAbout } from '../../redux/actions/aboutActions';

function About({ router }) {
    const about = useSelector((state) => state.about);
    const dispatch = useDispatch();
    const [data, setData] = useState({ ...about.data });

    useEffect(() => {
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
        <TinyMCE
            initialValue={data.content || ''}
            label="Content"
            handleInput={handleInput}
            name="content"
        />,
        <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
    ];

    return <Page pageTitle="About" body={elems} />;
}

About.getInitialProps = async ({ ctx }) => {
    await ctx.store.dispatch(fetchAbout());
};

export default withRouter(About);
