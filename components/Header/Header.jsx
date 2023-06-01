'use client';
import styles from './Header.module.scss';

import { useRouter } from 'next/navigation';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from '../Button/Button';
 

export default function Header({ children, className }) {
  const router = useRouter();
  const handleLogout = () => {
    // handle logut in the future
  };
  return (
    <div className={`${styles.site__header} ${className}`}>
      <div className={styles.site__header_inner}>
        <div className={styles.site__header_buttons}>
          <button
            onClick={() => router.back()}
            className={styles.site__header_button}
          >
            <RxCaretLeft
              className={styles.site__header_button_color}
              size={36}
            />
          </button>

          <button className={styles.site__header_button}>
            <RxCaretRight
              onclick={() => router.forward()}
              className={styles.site__header_button_color}
              size={36}
            />
          </button>
        </div>
        {/* Home and Search */}
        <div className={styles.header__home_search_buttons}>
          <button className={styles.header__home_search_button}>
            <HiHome className={styles.header__home_search_icon} size={24} />
          </button>
          <button className={styles.header__home_search_button}>
            <BiSearch className={styles.header__home_search_icon} size={24} />
          </button>
        </div>
        <div className={styles.header__signup_login_buttons}>
            <>
              <div>
                <Button>
                  Sign Up
                </Button>
              </div>
            </>
        </div>
        
      </div>
    </div>
  );

 
}
