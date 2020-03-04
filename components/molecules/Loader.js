import ClipLoader from 'react-spinners/ClipLoader'
import React from 'react'

function Loader(props) {
  return (
    <div className="loader">
      <ClipLoader loading={props.loading} />
    </div>
  )
}

export default Loader
