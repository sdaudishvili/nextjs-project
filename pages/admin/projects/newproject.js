import { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import Page from '../../../components/Page/Page';
import Input from '../../../components/molecules/Input';
import TwoButtons from '../../../components/molecules/TwoButtons';

function NewProject({ router }) {
    const [data, setData] = useState({});
    const head = <div>head</div>;

    function handleInput(event) {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    function onSubmit() {
        router.push('/admin');
    }

    function onCancel() {
        router.push('/admin');
    }
    const elems = [
        <Input type="text" label="Title" value={data.title || ''} handleInput={handleInput} name="title" />,
        <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
    ];
    return <Page pageTitle="New Project" head={head} body={elems} />;
}

export default withRouter(NewProject);
