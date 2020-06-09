import { useState } from 'react';
import { withRouter } from 'next/router';
import Page from '../../../components/Page/Page';
import Input from '../../../components/molecules/Input';
import TwoButtons from '../../../components/molecules/TwoButtons';
import Cropper from '../../../components/molecules/Cropper';

function NewProject({ router }) {
    const [data, setData] = useState({});

    function handleInput(event) {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    function onSubmit() {
        router.push('/admin');
    }

    function onCancel() {
        router.push('/admin');
    }
    function getFilename(filename) {
        console.log(filename);
    }
    const elems = [
        <Cropper name="mainImage" x={100} y={100} label="Main Image" getFilename={getFilename} />,
        <Input type="text" label="Title" value={data.title || ''} handleInput={handleInput} name="title" />,
        <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
    ];
    return <Page pageTitle="New Project" body={elems} />;
}

export default withRouter(NewProject);
