'use client';
import styles from './Sidebar.module.scss';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Box from '../Box/Box';
import SidebarItem from '../SidebarItem/SidebarItem';
import Library from '../Library/Library';

export default function Sidebar({ children, className }) {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: BiSearch,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname]
  );
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_inner}>
        <Box>
          <div className={styles.sidebar__item_grid}>
            {routes.map((route) => (
              <SidebarItem key={route.href} {...route} />
            ))}
          </div>
        </Box>
        <Box className={styles.sidebar_item}>
          <Library />
         
        </Box>
      </div>
      <main className={styles.site__main}>
        {children}
      </main>
    </div>
  );
}


 