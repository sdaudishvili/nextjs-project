import Link from 'next/link';
import routes from '@/components/routerConfig';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const Navigation = () => {
  const router = useRouter();
  return (
    <nav className="[ h-full ]">
      <ul className="[ flex h-full text-1-4 text-white uppercase font-ms-bd ]">
        {routes.map((e) => (
          <li key={e.id}>
            <Link href={e.path}>
              <div
                className={clsx(
                  { 'nav-item--active': router.pathname === e.path },
                  'nav-item [ px-3-2 duration-200 h-full cursor-pointer ]'
                )}
              >
                <div className="nav-item__action [ w-full h-full flex items-center relative ]">{e.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .nav-item {
          $self: &;
          &__action {
            &:after {
              content: '';
              @apply absolute h-0 bottom-0 left-0 right-0 duration-200 bg-primary-hover;
            }
          }
          &--active,
          &:hover {
            @apply bg-primary;
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
};
export default Navigation;
