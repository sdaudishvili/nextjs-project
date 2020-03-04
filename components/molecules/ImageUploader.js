import React from 'react'

function ImageUploader(props) {
  return (
    <>
      <div className="[ grid grid-cols-12 ]">
        <label className="[ col-span-3 text-right self-center mr-3-0 ]">{props.label}</label>
        <div className="[ col-span-9 ]">
          <input type="file" onChange={props.handleInput} name={props.name} />
        </div>
      </div>
      {props.image && (
        <img className="[ mt-2-0 w-30-percent ml-30-percent ]" src={STATICURL + props.image} alt="" />
      )}
    </>
  )
}

export default ImageUploader
