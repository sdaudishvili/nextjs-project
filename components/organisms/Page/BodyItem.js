import React from 'react';

function BodyItem(props) {
  return (
    <div className="[ p-2-0 border-solid border-b border-border-secondary ] col-md-10">{props.children}</div>
  );
}

export default BodyItem;
