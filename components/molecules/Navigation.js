import Link from 'next/link';
import './style.scss';

const routes = [
    { id: 0, path: '/', title: 'Home' },
    { id: 1, path: '/blog', title: 'Blog' },
    { id: 2, path: '/projects', title: 'Projects' },
    { id: 3, path: '/about', title: 'About' },
    { id: 4, path: '/contact', title: 'Contact' }
];

function Navigation() {
    const listItems = routes.map((e) => (
        <li key={e.id}>
            <Link href={e.path}>
                <div className="nav-item [ px-2-5 h-full w-full text-1-6 text-white flex items-center cursor-pointer ] ">
                    {e.title}
                </div>
            </Link>
        </li>
    ));
    return (
        <nav className="[ h-full ]">
            <ul className="[ flex h-full flex ]">{listItems}</ul>
        </nav>
    );
}
export default Navigation;
