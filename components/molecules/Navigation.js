import Link from 'next/link';
import routes from '@/components/routerConfig';

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
      <style jsx>{`
        .nav-item {
          $self: &;
          &__action {
            @apply relative;
            &:after {
              content: '';
              @apply absolute h-0 bottom-0 left-0 right-0 duration-200 bg-primary-hover;
            }
          }

          &:hover {
            #{$self}__action {
              &:after {
                height: 3px;
              }
            }
          }
        }
      `}</style>
    </nav>
  );
}
export default Navigation;
