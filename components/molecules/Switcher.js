import React from 'react';
import Switch from '@material-ui/core/Switch';

function Switcher(props) {
    return (
        <div className="[ grid grid-cols-12 ]">
            <label className="[ col-span-2 text-right self-center mr-3-0 ]">{props.label}</label>
            <div className="[ col-span-7 ]">
                <Switch
                    checked={props.isChecked}
                    onChange={props.handleChange}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    name={props.name}
                />
            </div>
        </div>
    );
}

export default Switcher;
