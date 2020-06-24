import { useState } from 'react';
import { withRouter } from 'next/router';
import Page from '../../../components/Page/Page';
import Input from '../../../components/molecules/Input';
import TwoButtons from '../../../components/molecules/TwoButtons';
import Cropper from '../../../components/molecules/Cropper';
import TinyMCE from '../../../components/molecules/TinyMCE';

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
    <Input type="text" label="Title" value={data.title || ''} handleInput={handleInput} name="title" />,
    <Cropper name="mainImage" width={100} height={100} label="Main Image" getFilename={getFilename} />,
    <Cropper name="shareImage" width={600} height={315} label="Share Image" getFilename={getFilename} />,
    <Input
      type="text"
      label="Short Description"
      value={data.shortDescription || ''}
      handleInput={handleInput}
      name="shortDescription"
    />,
    <TinyMCE
      initialValue={data.description || ''}
      label="Description"
      handleInput={handleInput}
      name="description"
    />,
    <TwoButtons onSubmit={onSubmit} onCancel={onCancel} />
  ];
  return <Page pageTitle="New Project" body={elems} />;
}

export default withRouter(NewProject);
