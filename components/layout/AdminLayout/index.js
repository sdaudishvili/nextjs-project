import React from 'react';
import Body from './Body';
import SideBar from './SideBar';
import Header from './Header';

function AdminLayout(props) {
    return (
        <>
            <Header />
            <div className="[ flex min-h-full ]">
                <SideBar />
                <Body>{props.children}</Body>
            </div>
        </>
    );
}

export default AdminLayout;
