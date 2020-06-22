import Link from 'next/link';

const routes = [
    { id: 0, path: '/', title: 'Home' },
    { id: 1, path: '/blog', title: 'Blog' },
    { id: 2, path: '/about', title: 'About' },
    { id: 3, path: '/contact', title: 'Contact' }
];

function Navigation() {
    const listItems = routes.map((e) => (
        <li key={e.id}>
            <Link href={e.path}>
                <div className="[ py-1-0 px-1-5 h-full w-full text-1-6 text-white ] ">{e.title}</div>
            </Link>
        </li>
    ));
    return (
        <nav>
            <ul className="[ flex ]">{listItems}</ul>
        </nav>
    );
}
export default Navigation;
