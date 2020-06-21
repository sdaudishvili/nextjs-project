import React from 'react';
import Body from './Body';
import Header from './Header';

function DefaultLayout(props) {
    return (
        <>
            <Header />
            <div className="[ flex min-h-full ]">
                <Body>{props.children}</Body>
            </div>
        </>
    );
}

export default DefaultLayout;
