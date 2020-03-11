import React from 'react';
import DefaultLayoutBody from './DefaultLayoutBody';
import DefaultLayoutSideBar from './DefaultLayoutSideBar';
import DefaultLayoutHeader from './DefaultLayoutHeader';

function DefaultLayout(props) {
    return (
        <>
            <DefaultLayoutHeader />
            <div className="[ flex min-h-full ]">
                <DefaultLayoutSideBar />
                <DefaultLayoutBody>{props.children}</DefaultLayoutBody>
            </div>
        </>
    );
}

export default DefaultLayout;
