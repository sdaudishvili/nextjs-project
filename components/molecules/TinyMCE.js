import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

const apiKey = '2xmvsr71p1sbv3i9ut4ya36qcvc90s9zzv7k0zgcwnu6mzv1'
const plugins = [
  'advlist autolink lists link image charmap print preview anchor',
  'searchreplace visualblocks code fullscreen',
  'insertdatetime media table paste code help wordcount'
]
const toolbar = `code | undo redo | formatselect | bold italic backcolor | 
alignleft aligncenter alignright alignjustify | 
bullist numlist outdent indent | removeformat | help`

function TinyMCE(props) {
  const TinyInit = {
    height: 500,
    menubar: true,
    plugins,
    toolbar,
    branding: false
  }

  return (
    <div className="[ grid grid-cols-12 ]">
      <label className="[ col-span-3 text-right mr-3-0 ]">{props.label}</label>
      <div className="[ col-span-9 ]">
        <Editor apiKey={apiKey} initialValue={props.content} init={TinyInit} onChange={props.handleInput} />
      </div>
    </div>
  )
}
export default TinyMCE
