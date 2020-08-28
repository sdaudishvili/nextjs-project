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
  return (
    <nav className="[ h-full ]">
      <ul className="[ flex h-full text-1-4 text-white uppercase font-ms-bd ]">
        {routes.map((e) => (
          <li key={e.id}>
            <Link href={e.path}>
              <div className="nav-item [ px-3-2 hover:bg-primary duration-200 h-full cursor-pointer ]">
                <div className="nav-item__action [ w-full h-full flex items-center ]">{e.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
