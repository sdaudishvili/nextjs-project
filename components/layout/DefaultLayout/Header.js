import Navigation from '../../molecules/Navigation';

function DefaultLayoutHeader() {
    return (
        <div className="[ text-white bg-black h-10-0 z-2 px-base-x flex items-center ]">
            <div className="[ h-5-0 ]">
                <img className="[ h-full ]" src="/images/logo.png" alt="" />
            </div>
            <div>
                <Navigation />
            </div>
        </div>
    );
}

export default DefaultLayoutHeader;
