'use client';
import styles from './Library.module.scss';
import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';

export default function Library() {
  const onClick = () => {
    console.log('clicked');
  };
  return (
    <div className={styles.library__container}>
      <div className={styles.library__grid}>
        <div className={styles.library__icon_container}>
          <TbPlaylist
            className={styles.library__icon_container_icon}
            size={26}
          />
          <p className={styles.library__icon_container_label}>Your Library</p>
        </div>
        <AiOutlinePlus
          onclick={onClick}
          size={20}
          className={styles.add_button}
        />
      </div>
      <div className={styles.library__lists_of_songs}>List of Songs!</div>
    </div>
  );
}
