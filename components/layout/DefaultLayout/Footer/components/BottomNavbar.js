import Link from 'next/link';
import routes from '@/components/routerConfig';

function Navigation() {
  return (
    <nav className="[ text-1-4 font-m-md ]">
      <ul className="[ flex justify-between ]">
        {routes.map((e) => (
          <li key={e.id}>
            <Link href={e.path}>
              <div className="[ w-full h-full flex items-center mx-1-0 cursor-pointer hover:text-primary-hover duration-200 ]">
                {e.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
