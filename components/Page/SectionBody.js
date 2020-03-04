import React from 'react'
import BodyItem from './BodyItem'

const generateElement = (e, i) => <BodyItem key={i.toString()}>{e}</BodyItem>

const Body = (props) => <div className="[ px-3-0 ]">{props.elems.map(generateElement)}</div>

export default Body
