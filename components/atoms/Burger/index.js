import './style.scss';

function Burger(props) {
    return (
        <div
            onClick={props.onClick}
            className={`[ relative w-3-2 h-1-8 pointer-events-auto cursor-pointer ] burger-menu-icon ${
                props.isOpened ? 'burger-menu-icon--is-opened' : ''
            }`}
        >
            <span className="burger-menu-icon__line [ block absolute left-0 h-0-2 bg-white ]" />
            <span className="burger-menu-icon__line [ block absolute left-0 h-0-2 bg-white ]" />
            <span className="burger-menu-icon__line [ block absolute left-0 h-0-2 bg-white ]" />
            <span className="burger-menu-icon__line [ block absolute left-0 h-0-2 bg-white ]" />
        </div>
    );
}

export default Burger;
