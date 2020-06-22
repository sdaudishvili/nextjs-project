// import Navigation from '../../molecules/Navigation';
import React, { useState } from 'react';
import Burger from '../../atoms/Burger';

function DefaultLayoutSidebar() {
    const [burgerMenuIsOpened, setStatus] = useState(false);
    return (
        <div className="[ text-white z-2 w-10-0 flex justify-center pt-3-0 border-r border-border border-solid ]">
            <div className="[ h-5-0 flex items-center ]">
                <Burger isOpened={burgerMenuIsOpened} onClick={() => setStatus(!burgerMenuIsOpened)} />
            </div>
            {/* <div>
                <Navigation />
            </div> */}
        </div>
    );
}

export default DefaultLayoutSidebar;
