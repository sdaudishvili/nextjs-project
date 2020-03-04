import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

function TwoButtons(props) {
  return (
    <ButtonGroup aria-label="text primary button group">
      <Button
        fontSize={16}
        className="[ text-2-0 ]"
        variant="contained"
        color="primary"
        onClick={props.onSubmit}
      >
        <span className="[ text-1-3 ]">Save</span>
      </Button>
      <Button variant="contained" color="secondary" onClick={props.onCancel}>
        <span className="[ text-1-3 ]">Cancel</span>
      </Button>
    </ButtonGroup>
  )
}

export default TwoButtons
